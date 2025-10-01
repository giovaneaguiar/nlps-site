import { PortableText } from '@portabletext/react';
import { urlFor } from '../sanity/lib/image';
import React from 'react';

// Tipos para os componentes
interface ImageValue {
  alt?: string;
  caption?: string;
}

interface LinkValue {
  href: string;
}

interface BlockValue {
  children: React.ReactNode;
}

const components = {
  types: {
    image: ({ value }: { value: ImageValue }) => (
      <figure className="my-4">
        <img 
          src={urlFor(value).url()}
          alt={value.alt || 'Imagem no conteúdo'} 
          className="max-w-full h-auto rounded" 
          loading="lazy"
        />
        {value.caption && (
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
   
  },
  marks: {
    strong: ({ children }: BlockValue) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: BlockValue) => <em className="italic">{children}</em>,
    link: ({ value, children }: { value: LinkValue, children: React.ReactNode }) => (
      <a 
        href={value.href} 
        className="text-blue-600 underline hover:text-blue-800" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: BlockValue) => <ul className="list-disc ml-6 my-2">{children}</ul>,
    number: ({ children }: BlockValue) => <ol className="list-decimal ml-6 my-2">{children}</ol>,
  },
  block: {
    h1: ({ children }: BlockValue) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }: BlockValue) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PortableTextContent({ content }: { content: any[] }) {
  return <PortableText value={content || []} components={components} />;
}