import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

// Adicione o tipo correto ao parâmetro 'source'
export function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).fit('max');
}

export async function getHomeImage() {
  return client.fetch('*[_type == "imageHomePage"][0] { imagem }');
}

export async function getHomeData() {
  return client.fetch(
    '*[_type == "homePage"][0] { titulo, conteudo, imagemRef-> { imagem }, telefone, email }'
  );
}

export async function getSobreData() {
  return client.fetch('*[_type == "sobrePage"][0] { titulo, conteudo, imagem }');
}

export async function getEventos() {
  return client.fetch(
    '*[_type == "evento"] | order(data asc) { titulo, data, descricao, local, ministrante, imagem }')
}

// Novos helpers para as páginas do menu
export async function getALetraData() {
  return client.fetch('*[_type == "aLetra"][0] { titulo, conteudo, imagem }');
}

export async function getInstituicaoData() {
  return client.fetch('*[_type == "aInstituicao"][0] { titulo, conteudo, imagem }');
}

export async function getLeituraData() {
  return client.fetch('*[_type == "aLeitura"][0] { titulo, conteudo, imagem }');
}

export async function getTextoData() {
  return client.fetch('*[_type == "oTexto"][0] { titulo, conteudo, imagem }');
}

export async function getProgramacao() {
  const query = `*[_type == "grupoEstudo"][0]{
    grupos[]{
      _key,
      _id,
      diaSemana,
      horario,
      frequencia,
      nomeGrupo,
      coordenadores,
      texto,
      formato,
      descricaoAdicional,
      ordem
    },
    imagemGrande{
      asset->{
        url
      }
    }
  }`;

  const data = await client.fetch(query);
  return data;
}