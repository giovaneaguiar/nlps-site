import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-center">
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Início</Link></li>
          <li><Link href="/a-letra" className="hover:underline">A Letra</Link></li>
          <li><Link href="/a-instituicao" className="hover:underline">A Instituição</Link></li>
          <li><Link href="/a-leitura" className="hover:underline">A Leitura</Link></li>
          <li><Link href="/o-texto" className="hover:underline">O Texto</Link></li>
        </ul>
      </nav>
    </header>
  );
}