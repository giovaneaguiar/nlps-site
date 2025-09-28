import {defineType, defineField} from 'sanity'

// seus schemas
export const sobrePage = defineType({
  name: 'sobrePage',
  title: 'Página Sobre',
  type: 'document',
  fields: [
    defineField({name: 'titulo', title: 'Título', type: 'string'}),
    defineField({name: 'conteudo', title: 'Conteúdo', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'imagem', title: 'Imagem', type: 'image'}),
  ],
})

export const evento = defineType({
  name: 'evento',
  title: 'Evento na Agenda',
  type: 'document',
  fields: [
    defineField({name: 'titulo', title: 'Título', type: 'string'}),
    defineField({name: 'data', title: 'Data', type: 'datetime'}),
    defineField({name: 'descricao', title: 'Descrição', type: 'text'}),
    defineField({name: 'local', title: 'Local', type: 'string'}),
  ],
})

export const ideia = defineType({
  name: 'ideia',
  title: 'Ideia Enviada',
  type: 'document',
  fields: [
    defineField({name: 'nome', title: 'Nome', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'conteudo', title: 'Ideia', type: 'text'}),
    defineField({name: 'aprovada', title: 'Aprovada?', type: 'boolean', initialValue: false}),
  ],
})