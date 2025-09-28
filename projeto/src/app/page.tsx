import Link from "next/link";
import Image from "next/image";
import { getHomeData, getHomeImage, urlFor } from "@/sanity/lib/client";

export default async function Home() {
  const homeImageData = await getHomeImage();
  let imagemSrc: string | null = null;
  let isLocalFallback = false;

  if (homeImageData?.imagem) {
    try {
      const sanityUrl = urlFor(homeImageData.imagem).url();
      if (sanityUrl && typeof sanityUrl === 'string') {
        imagemSrc = sanityUrl;
      }
    } catch (error) {
      console.error('Erro ao gerar URL do Sanity:', error);
    }
  }

  if (!imagemSrc) {
    imagemSrc = "/images/nucleo.jpeg";
    isLocalFallback = true;
  }

  const homeData = await getHomeData();
  const titulo = homeData?.titulo || "Núcleo de Leitura em Psicanálise";

  const telefone = "(11) 99999-9999";
  const email = "contato@nucleopsicanalise.com";

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {titulo}
        </h1>

        <div className="mx-auto mb-8 max-w-md">
          {imagemSrc ? (
            <Image
              src={imagemSrc}
              alt="Núcleo de Leitura em Psicanálise"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full h-auto"
              priority
              unoptimized={isLocalFallback}
            />
          ) : (
            <div className="w-full h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-500">
              <p>Imagem não disponível – Adicione no Sanity para ativar</p>
            </div>
          )}
        </div>
      </div>

      <section className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700">
          As Leituras
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
          *As leituras de estudo do Núcleo de Leitura em Psicanálise acontecem
          nas modalidades presencial, online ou híbrido, de acordo com a
          atividade proposta.
        </p>
      </section>

      <section className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          Para maiores informações utilize o contato telefônico abaixo ou
          envie-nos uma mensagem.
        </p>
        <p className="text-lg text-gray-600 italic mb-8">
          Retornaremos assim que for possível.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Contato</h3>
          <p className="text-base text-gray-700 mb-2">
            <strong>Telefone:</strong> {telefone}
          </p>
          <p className="text-base text-gray-700">
            <strong>Email:</strong> {email}
          </p>
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/a-leitura"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Confira aqui a programação
        </Link>
      </div>
    </div>
  );
}
