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
  _key: string;
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

type ProgramacaoData = {
  grupos: GrupoEstudo[];
  imagemGrande?: {
    asset: {
      url: string;
    };
  };
};

export default async function ALeitura() {
  const data: ProgramacaoData = await getProgramacao();

  const grupos = data?.grupos || [];
  const imagemUrl = data?.imagemGrande?.asset?.url || "https://cdn.sanity.io/images/d392wiv6/production/abc123-1200x400.jpg";

  if (grupos.length === 0) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">A Leitura</h1>
        <img src={imagemUrl} alt="Imagem A Leitura" className="w-full max-h-[400px] object-cover mb-8 rounded" />
        <p>Programação ainda não cadastrada. Por favor, adicione grupos no Sanity.</p>
      </div>
    );
  }

  // Agrupa os grupos por dia da semana
  const gruposPorDia = grupos.reduce<Record<string, GrupoEstudo[]>>((acc, grupo) => {
    if (!acc[grupo.diaSemana]) acc[grupo.diaSemana] = [];
    acc[grupo.diaSemana].push(grupo);
    return acc;
  }, {});

  const ordemDias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-center">A Leitura</h1>

      {/* Imagem grande abaixo do título */}
      <img src={imagemUrl} alt="Imagem A Leitura" className="w-full max-h-[400px] object-cover mb-8 rounded" />

      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">OS TRABALHOS</h2>

        {ordemDias.map((dia) => {
          const gruposDoDia = gruposPorDia[dia];
          if (!gruposDoDia) return null;

          return (
            <article key={dia} className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">{diasSemanaMap[dia]}</h3>
              {gruposDoDia.map((grupo) => (
                <div key={grupo._key} className="mb-6 border p-4 rounded shadow-sm bg-white text-gray-800">
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
    </div>
  );
}
