import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'HTML', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Tailwind', color: 'from-teal-400 to-cyan-500' },
    { name: 'SQL', color: 'from-purple-500 to-indigo-500' },
  ];

  return (
    <section id='skills' className='py-20 bg-black text-white'>
      <div className='max-w-5xl mx-auto px-6 text-center'>
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-bold mb-10'
        >
          Minhas Skills
        </motion.h2>

        {/* GRID */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-[2px] rounded-2xl bg-gradient-to-r ${skill.color}`}
            >
              <div className='bg-gray-900 p-6 rounded-2xl hover:scale-105 transition duration-300'>
                <p className='text-lg font-semibold'>{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
