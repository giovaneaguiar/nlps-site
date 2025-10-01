import Image from "next/image";
import { getTextoData, urlFor } from "@/sanity/lib/client";
import { PortableTextContent } from "@/lib/portableText";

export default async function OTexto() {
  const data = await getTextoData();

  if (!data) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">O Texto</h1>
        <p>Conteúdo em breve. Crie um documento &apos;oTexto&apos; no Sanity para ativar!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{data.titulo}</h1>
      
      {data.imagem && (
        <div className="mx-auto mb-8 max-w-md">
          <Image
            src={urlFor(data.imagem).url() || "/images/placeholder.jpg"}
            alt={data.titulo}
            width={400}
            height={300}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      )}

      <PortableTextContent content={data.conteudo || []} />
    </div>
  );
}