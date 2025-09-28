import { getEventos, urlFor } from '@/sanity/lib/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default async function Agenda() {
  const eventos = await getEventos(); 

  if (!eventos || eventos.length === 0) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Agenda de Reuniões</h1>
        <p>Nenhum evento cadastrado. Adicione documentos 'evento' no Sanity!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Agenda de Reuniões</h1>
      <ul className="space-y-4">
        {eventos.map((evento: any) => (
          <li key={evento._id} className="border p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">{evento.titulo}</h2>
            <p className="text-gray-600 mb-1">
              <strong>Data:</strong> {format(new Date(evento.data), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
            </p>
            {evento.local && (
              <p className="text-gray-600 mb-2">
                <strong>Local:</strong> {evento.local}
              </p>
            )}
            <p className="mb-2">{evento.descricao}</p>
            {evento.imagem && (
              <img 
                src={urlFor(evento.imagem).url()} 
                alt={evento.titulo} 
                className="w-32 h-32 object-cover rounded mb-2" 
                loading="lazy"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}