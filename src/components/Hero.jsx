import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id='home'
      className='h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white'
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center px-6'
      >
        {/* NOME */}
        <h1 className='text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'>
          Aderaldo Honorato
        </h1>

        {/* CARGO */}
        <p className='text-xl text-gray-400 mt-4'>Desenvolvedor Front-End</p>

        {/* DESCRIÇÃO */}
        <p className='mt-2 text-gray-500 max-w-xl mx-auto'>
          Crio interfaces modernas, rápidas e focadas em experiência do usuário.
        </p>

        {/* BOTÕES */}
        <div className='flex gap-4 justify-center mt-8 flex-wrap'>
          <button className='bg-purple-600 px-6 py-3 rounded-xl hover:scale-105 hover:bg-purple-500 transition duration-300'>
            Ver Projetos
          </button>

          <button className='border px-6 py-3 rounded-xl hover:bg-white hover:text-black transition duration-300'>
            Contato
          </button>
        </div>
      </motion.div>
    </section>
  );
}
