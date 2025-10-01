import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { urlFor } from '../sanity/lib/image';
import Image from 'next/image';
import { TypedObject } from '@portabletext/types';

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

};

export function PortableTextContent({ content }: { content: TypedObject | TypedObject[] }) {
  return <PortableText value={content || []} components={components} />;
}