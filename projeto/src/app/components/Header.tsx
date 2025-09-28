export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Núcleo de Leitura em Psicanálise</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Início</a></li>
          <li><a href="/a-letra" className="hover:underline">A Letra</a></li>
          <li><a href="/a-instituicao" className="hover:underline">A Instituição</a></li>
          <li><a href="/a-leitura" className="hover:underline">A Leitura</a></li>
          <li><a href="/o-texto" className="hover:underline">O Texto</a></li>
        </ul>
      </nav>
    </header>
  );
}