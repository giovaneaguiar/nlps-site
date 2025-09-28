import Link from "next/link";
import { getProgramacao } from "@/sanity/lib/client";

const diasSemanaMap: Record<string, string> = {
  segunda: 'Segundas-feiras',
  terca: 'Terças-feiras',
  quarta: 'Quartas-feiras',
  quinta: 'Quintas-feiras',
  sexta: 'Sextas-feiras',
  sabado: 'Sábados',
  domingo: 'Domingos',
};

type GrupoEstudo = {
  _id: string;
  diaSemana: string;
  horario: string;
  frequencia: string;
  nomeGrupo: string;
  coordenadores: string[];
  texto?: string;
  formato: string;
  descricaoAdicional?: string;
  ordem: number;
};

export default async function ALeitura() {
  const grupos: GrupoEstudo[] = await getProgramacao();

  if (!grupos || grupos.length === 0) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">A Leitura</h1>
        <p>Programação ainda não cadastrada. Por favor, adicione grupos no Sanity.</p>
      </div>
    );
  }

  // Agrupar por dia da semana
  const gruposPorDia = grupos.reduce<Record<string, GrupoEstudo[]>>((acc, grupo) => {
    if (!acc[grupo.diaSemana]) acc[grupo.diaSemana] = [];
    acc[grupo.diaSemana].push(grupo);
    return acc;
  }, {});

  // Ordenar dias pela ordem natural da semana
  const ordemDias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">A Leitura</h1>
      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">OS TRABALHOS</h2>

        {ordemDias.map((dia) => {
          const gruposDoDia = gruposPorDia[dia];
          if (!gruposDoDia) return null;

          return (
            <article key={dia} className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">{diasSemanaMap[dia]}</h3>
              {gruposDoDia.map((grupo) => (
                <div key={grupo._id} className="mb-6 border p-4 rounded shadow-sm bg-white">
                  <p className="font-semibold mb-1">
                    {grupo.horario} - {grupo.frequencia}
                  </p>
                  <p className="mb-1 italic font-semibold">{grupo.nomeGrupo}</p>
                  <p className="mb-1 font-semibold">Coordenação:</p>
                  <ul className="list-disc list-inside mb-2 text-gray-700">
                    {grupo.coordenadores.map((coord, i) => (
                      <li key={i}>{coord}</li>
                    ))}
                  </ul>
                  {grupo.texto && (
                    <p className="mb-2">
                      <strong>Texto:</strong> {grupo.texto}
                    </p>
                  )}
                  <p className="italic text-gray-600 mb-2">
                    O grupo acontece no formato <strong>{grupo.formato}</strong>.
                  </p>
                  {grupo.descricaoAdicional && (
                    <p className="text-gray-600">{grupo.descricaoAdicional}</p>
                  )}
                </div>
              ))}
            </article>
          );
        })}

        <p className="italic text-gray-600 border-t pt-4">
          Os grupos acontecem em sequência, nas segundas, quartas e sextas-feiras de cada mês, exclusivamente no formato virtual.
        </p>
      </section>

      <div className="text-center mt-12">
        <Link
          href="/agenda"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Confira aqui a programação completa
        </Link>
      </div>
    </div>
  );
}