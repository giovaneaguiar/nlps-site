export default {
  name: 'grupoEstudo',
  title: 'Grupo de Estudo',
  type: 'document',
  fields: [
    {
      name: 'diaSemana',
      title: 'Dia da Semana',
      type: 'string',
      options: {
        list: [
          { title: 'Segunda-feira', value: 'segunda' },
          { title: 'Terça-feira', value: 'terca' },
          { title: 'Quarta-feira', value: 'quarta' },
          { title: 'Quinta-feira', value: 'quinta' },
          { title: 'Sexta-feira', value: 'sexta' },
          { title: 'Sábado', value: 'sabado' },
          { title: 'Domingo', value: 'domingo' },
        ],
      },
    },
    {
      name: 'horario',
      title: 'Horário',
      type: 'string',
      description: 'Ex: 12h30 às 13h',
    },
    {
      name: 'frequencia',
      title: 'Frequência',
      type: 'string',
      description: 'Ex: semanalmente, quinzenalmente',
    },
    {
      name: 'nomeGrupo',
      title: 'Nome do Grupo',
      type: 'string',
    },
    {
      name: 'coordenadores',
      title: 'Coordenadores',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'texto',
      title: 'Texto',
      type: 'string',
      description: 'Texto ou referência bibliográfica',
    },
    {
      name: 'formato',
      title: 'Formato',
      type: 'string',
      description: 'Ex: virtual, presencial, híbrido',
    },
    {
      name: 'descricaoAdicional',
      title: 'Descrição Adicional',
      type: 'text',
      description: 'Informações extras (opcional)',
    },
    {
      name: 'ordem',
      title: 'Ordem de Exibição',
      type: 'number',
      description: 'Para ordenar os grupos na página',
    },
  ],
  orderings: [
    {
      title: 'Ordem por dia e ordem',
      name: 'diaOrdem',
      by: [
        { field: 'diaSemana', direction: 'asc' },
        { field: 'ordem', direction: 'asc' },
      ],
    },
  ],
};