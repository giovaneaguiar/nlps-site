import { getSobreData, urlFor } from '@/sanity/lib/client';
import { PortableTextContent } from '@/lib/portableText';

export default async function Sobre() {
  const data = await getSobreData();  

  if (!data) {
    return (
      <div className="container mx-auto p-8">
        <p>Conteúdo carregando... Verifique se o documento 'sobrePage' existe no Sanity.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{data.titulo || 'Sobre o Núcleo de Leitura em Psicanálise'}</h1>
      {data.imagem && (
        <img 
          src={urlFor(data.imagem).url()} 
          alt="Imagem sobre o Núcleo" 
          className="w-full max-w-md mb-4 rounded" 
          loading="lazy"
        />
      )}
      <PortableTextContent content={data.conteudo || []} />
    </div>
  );
}