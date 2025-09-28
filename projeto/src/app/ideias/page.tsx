'use client';  // Necessário para useState e useForm (client-side)
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { client, getIdeiasAprovadas } from '@/sanity/lib/client';  // Import client para create, e helper para fetch
import { urlFor } from '@/sanity/lib/client'; 

interface FormData {
  nome: string;
  email: string;
  ideia: string;
}

export default function Ideias() {
  const [aprovadas, setAprovadas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIdeiasAprovadas();
      setAprovadas(data || []);
    };
    fetchData();
  }, []);

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await client.create({
        _type: 'ideia',
        nome: data.nome,
        email: data.email,
        conteudo: data.ideia,
        aprovada: false,  
      });
      alert('Ideia enviada com sucesso! Aguardando aprovação pela equipe.');
      reset();
    } catch (error) {
      console.error('Erro ao enviar ideia:', error);
      alert('Erro ao enviar. Verifique sua conexão e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Envie Suas Ideias</h1>
      
      {/* Formulário */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4 mb-8">
        <input 
          {...register('nome')} 
          placeholder="Seu Nome" 
          className="w-full p-2 border rounded" 
          required 
          disabled={loading}
        />
        <input 
          {...register('email')} 
          type="email" 
          placeholder="Seu Email" 
          className="w-full p-2 border rounded" 
          required 
          disabled={loading}
        />
        <textarea 
          {...register('ideia')} 
          placeholder="Descreva sua ideia..." 
          className="w-full p-2 border rounded h-32" 
          required 
          disabled={loading}
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50" 
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar Ideia'}
        </button>
      </form>

      {/* Lista de Ideias Aprovadas */}
      <h2 className="text-2xl font-bold mb-4">Ideias Aprovadas pela Equipe</h2>
      {aprovadas.length === 0 ? (
        <p className="text-gray-600">Nenhuma ideia aprovada ainda. Envie a sua!</p>
      ) : (
        <ul className="space-y-4">
          {aprovadas.map((item: any) => (
            <li key={item._id} className="border p-4 rounded shadow-md">
              <p className="font-semibold mb-1">{item.nome}:</p>
              <p className="italic">{item.conteudo}</p>
              {item.imagem && (
                <img 
                  src={urlFor(item.imagem).url()} 
                  alt={`Ideia de ${item.nome}`} 
                  className="w-24 h-24 object-cover rounded mt-2" 
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}