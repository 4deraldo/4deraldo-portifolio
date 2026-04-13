import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id='about' className='py-20 bg-black text-white'>
      <div className='max-w-5xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* TÍTULO */}
          <h2 className='text-4xl font-bold mb-8 text-center'>Sobre Mim</h2>

          {/* CONTEÚDO */}
          <div className='grid md:grid-cols-2 gap-10 items-center'>
            {/* TEXTO */}
            <div>
              <p className='text-gray-400 leading-relaxed mb-4'>
                Sou formado em Análise e Desenvolvimento de Sistemas, com foco
                em desenvolvimento web e criação de interfaces modernas.
              </p>

              <p className='text-gray-400 leading-relaxed mb-4'>
                Tenho experiência no desenvolvimento de aplicações utilizando
                JavaScript, React e Tailwind CSS, criando interfaces
                responsivas, performáticas e com boa experiência do usuário.
              </p>

              <p className='text-gray-400 leading-relaxed'>
                Busco constantemente evoluir minhas habilidades através da
                prática, desenvolvendo projetos que simulam cenários reais e
                aplicando boas práticas de desenvolvimento.
              </p>
            </div>

            {/* CARD VISUAL */}
            <div className='bg-gradient-to-br from-purple-600 to-blue-500 p-[2px] rounded-2xl'>
              <div className='bg-gray-900 p-6 rounded-2xl h-full'>
                <h3 className='text-xl font-semibold mb-4'>🚀 Foco atual</h3>

                <ul className='text-gray-400 space-y-2'>
                  <li>✔ Front-end com React</li>
                  <li>✔ Interfaces modernas</li>
                  <li>✔ Projetos reais</li>
                  <li>✔ Evolução constante</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
