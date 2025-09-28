import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = createImageUrlBuilder(client);
  export function urlFor(source: any) {
    return builder.image(source);
  }
  export async function getSobreData() {
    return client.fetch('*[_type == "sobrePage"][0] { titulo, conteudo, imagem }');
  }
  export async function getEventos() {
    return client.fetch('*[_type == "evento"] | order(data asc) { titulo, data, descricao, local }');
  }
  export async function getIdeiasAprovadas() {
    return client.fetch('*[_type == "ideia" && aprovada == true] { nome, conteudo }');
  }