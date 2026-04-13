export default function Footer() {
  return (
    <footer className='bg-black text-gray-400 border-t border-gray-800'>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-3 gap-10 text-center md:text-left'>
          {/* IDENTIDADE */}
          <div>
            <h3 className='text-white text-xl font-bold mb-2'>
              Aderaldo Honorato
            </h3>
            <p>
              Desenvolvedor Front-end focado em criar interfaces modernas e
              experiências digitais eficientes.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className='text-white font-semibold mb-3'>Navegação</h4>

            <ul className='space-y-2'>
              <li>
                <a href='#home' className='hover:text-purple-400 transition'>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className='hover:text-purple-400 transition'>
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='hover:text-purple-400 transition'
                >
                  Projetos
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:text-purple-400 transition'>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className='text-white font-semibold mb-3'>Contato</h4>

            <p>Email: seuemail@email.com</p>

            <div className='flex justify-center md:justify-start gap-4 mt-4'>
              <a
                href='https://github.com/4deraldo'
                target='_blank'
                className='hover:text-purple-400 transition'
              >
                GitHub
              </a>

              <a href='#' className='hover:text-purple-400 transition'>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* LINHA FINAL */}
        <div className='border-t border-gray-800 mt-10 pt-6 text-center text-sm'>
          © {new Date().getFullYear()} Aderaldo Honorato. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
