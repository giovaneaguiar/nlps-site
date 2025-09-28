export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Núcleo de Leitura em Psicanálise</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Início</a></li>
          <li><a href="/sobre" className="hover:underline">Sobre</a></li>
          <li><a href="/agenda" className="hover:underline">Agenda</a></li>
          <li><a href="/ideias" className="hover:underline">Envie Ideias</a></li>
        </ul>
      </nav>
    </header>
  );
}