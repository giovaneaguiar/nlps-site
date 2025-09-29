import Image from "next/image";
import { getInstituicaoData, urlFor } from "@/sanity/lib/client";
import { PortableTextContent } from "@/lib/portableText";

export default async function AInstituicao() {
  const data = await getInstituicaoData();

    const imagemUrl = data?.imagem?.asset?.url || "https://cdn.sanity.io/images/seuProjectId/production/abc123-1200x400.jpg";

  if (!data) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">A Instituição</h1>
        <p>Conteúdo em breve. Crie um documento 'aInstituicao' no Sanity para ativar!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{data.titulo}</h1>

      <img src={imagemUrl} alt="Imagem A Instituição" className="w-full max-h-[400px] object-cover mb-8 rounded" />

      <PortableTextContent content={data.conteudo || []} />
    </div>
  );
}