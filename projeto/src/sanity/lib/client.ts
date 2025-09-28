import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
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
  // Busca todos os grupos de estudo ordenados por dia e ordem
  return client.fetch(`
    *[_type == "grupoEstudo"] | order(diaSemana asc, ordem asc) {
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
    }
  `);
}

