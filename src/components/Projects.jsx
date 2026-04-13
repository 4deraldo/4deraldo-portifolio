import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Projects() {
  const swiperRef = useRef();

  const projects = [
    {
      name: 'Portfólio Profissional',
      desc: 'Aplicação moderna com foco em design e experiência.',
      tech: ['React', 'Tailwind'],
      github: 'https://github.com/4deraldo/4deraldo-portifolio',
      demo: 'https://projeto-portfolio-sigma.vercel.app',
    },
    {
      name: 'Simulador de Investimentos',
      desc: 'Simulação de rendimentos com aportes mensais.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/4deraldo/projetoCalculadoraInvestimento',
    },
    {
      name: 'Sistema Veterinário',
      desc: 'Gerenciamento de atendimentos.',
      tech: ['JavaScript'],
      github: 'https://github.com/4deraldo/vetMariana',
    },
    {
      name: 'Automação de Tarefas',
      desc: 'Automação de processos repetitivos.',
      tech: ['Python'],
      github: 'https://github.com/4deraldo/AutomacaoDeTarefa',
    },
  ];

  return (
    <section
      id='projects'
      className='py-24 bg-black text-white overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-12'>Projetos</h2>

        <div className='relative'>
          {/* SETA ESQUERDA */}
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className='hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 z-10
  w-14 h-14 flex items-center justify-center
  bg-white/10 backdrop-blur-xl
  border border-white/20
  text-white rounded-full
  hover:bg-purple-600 hover:scale-110
  active:scale-95
  transition-all duration-300 shadow-xl'
          >
            <ChevronLeft size={28} />
          </button>

          {/* SETA DIREITA */}
          <button
            onClick={() => swiperRef.current.slideNext()}
            className='hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10
  w-14 h-14 flex items-center justify-center
  bg-white/10 backdrop-blur-xl
  border border-white/20
  text-white rounded-full
  hover:bg-purple-600 hover:scale-110
  active:scale-95
  transition-all duration-300 shadow-xl'
          >
            <ChevronRight size={28} />
          </button>
          <Swiper
            modules={[Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='pb-16 w-full'
          >
            {projects.map((proj, index) => (
              <SwiperSlide key={index}>
                <div className='bg-gray-900 p-6 rounded-2xl h-full flex flex-col justify-between min-h-[300px]'>
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>{proj.name}</h3>

                    <p className='text-gray-400 text-sm mb-4'>{proj.desc}</p>
                  </div>

                  <div>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {proj.tech.map((tech, i) => (
                        <span
                          key={i}
                          className='bg-purple-600 px-3 py-1 rounded-full text-xs'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className='flex gap-3'>
                      <a
                        href={proj.github}
                        target='_blank'
                        className='border px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition'
                      >
                        GitHub
                      </a>

                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target='_blank'
                          className='bg-purple-600 px-4 py-2 rounded-lg text-sm hover:bg-purple-500 transition'
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
