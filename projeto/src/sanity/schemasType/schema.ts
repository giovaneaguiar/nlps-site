import { defineType, defineField } from 'sanity';

export const imageHomePage = defineType({
  name: 'imageHomePage',
  title: 'Imagem da Página Inicial',
  type: 'document',
  fields: [
    defineField({ name: 'imagem', title: 'Imagem', type: 'image' }),
  ],
});

export const homePage = defineType({
  name: 'homePage',
  title: 'Página Inicial',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    // Opcionais: Para tornar home dinâmica (comente se preferir só título)
    defineField({
      name: 'conteudo',
      title: 'Conteúdo (As Leituras)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text para o texto sobre as leituras e contato.',
    }),
    defineField({
      name: 'imagemRef',
      title: 'Referência à Imagem da Home',
      type: 'reference',
      to: [{ type: 'imageHomePage' }],
    }),
    defineField({ name: 'telefone', title: 'Telefone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
  ],
});

export const sobrePage = defineType({
  name: 'sobrePage',
  title: 'Página Sobre',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'conteudo', title: 'Conteúdo', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'imagem', title: 'Imagem', type: 'image' }),
  ],
});

export const aLetra = defineType({
  name: 'aLetra',
  title: 'A Letra',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título da Seção', type: 'string', initialValue: 'A Letra' }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text sobre "A Letra" na psicanálise (ex: importância da escrita freudiana).',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem da Seção',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});

export const aInstituicao = defineType({
  name: 'aInstituicao',
  title: 'A Instituição',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título da Seção', type: 'string', initialValue: 'A Instituição' }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text sobre a instituição (história, missão, equipe do Núcleo).',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem da Seção',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});

export const aLeitura = defineType({
  name: 'aLeitura',
  title: 'A Leitura',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título da Seção', type: 'string', initialValue: 'A Leitura' }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text sobre o ato de ler na psicanálise (ex: ênfase em Lacan e Freud).',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem da Seção',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});

export const oTexto = defineType({
  name: 'oTexto',
  title: 'O Texto',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título da Seção', type: 'string', initialValue: 'O Texto' }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text sobre análise textual na psicanálise (interpretação, significados ocultos).',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem da Seção',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});

export const evento = defineType({
  name: 'evento',
  title: 'Evento na Agenda',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'data', title: 'Data', type: 'datetime' }),
    defineField({ name: 'descricao', title: 'Descrição', type: 'text' }),
    defineField({ name: 'local', title: 'Local', type: 'string' }),
    // Opcionais: Para agenda mais rica (comente se não quiser)
    defineField({ name: 'ministrante', title: 'Ministrante', type: 'string' }),
    defineField({ name: 'imagem', title: 'Imagem', type: 'image' }),
  ],
});

export const ideia = defineType({
  name: 'ideia',
  title: 'Ideia Enviada',
  type: 'document',
  fields: [
    defineField({ name: 'nome', title: 'Nome', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'conteudo', title: 'Ideia', type: 'text' }),
    defineField({ name: 'aprovada', title: 'Aprovada?', type: 'boolean', initialValue: false }),
    defineField({ name: 'imagem', title: 'Imagem Opcional', type: 'image' }),
  ],
});
