import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';
import { TypedObject } from '@portabletext/types';

// Define o objeto de componentes com o tipo correto
const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }
      return (
        <figure className="my-4">
          <Image 
            src={urlFor(value).url()}
            alt={value.alt || 'Imagem no conteúdo'} 
            width={800}
            height={600}
            className="max-w-full h-auto rounded" 
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const { href } = value || {};
      return (
        <a 
          href={href} 
          className="text-blue-600 underline hover:text-blue-800" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 my-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 my-2">{children}</ol>,
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
  },
};

export function PortableTextContent({ content }: { content: TypedObject | TypedObject[] }) {
  return <PortableText value={content || []} components={components} />;
}