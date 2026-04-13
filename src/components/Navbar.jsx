export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full bg-black/50 backdrop-blur-md text-white z-50'>
      <div className='max-w-6xl mx-auto flex justify-between items-center p-4'>
        {/* LOGO */}
        <h1 className='font-bold text-xl'>Aderaldo</h1>

        {/* LINKS */}
        <div className='flex gap-6'>
          <a href='#home' className='hover:text-purple-400 transition'>
            Home
          </a>

          <a href='#about' className='hover:text-purple-400 transition'>
            Sobre
          </a>

          <a href='#projects' className='hover:text-purple-400 transition'>
            Projetos
          </a>

          <a href='#contact' className='hover:text-purple-400 transition'>
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
