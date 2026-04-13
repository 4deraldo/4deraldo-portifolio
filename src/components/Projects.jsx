import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';

export default function Projects() {
  const swiperRef = useRef(null);

  const projects = [
    {
      name: 'Portfólio Profissional',
      desc: 'Aplicação moderna com foco em design e experiência.',
      tech: ['React', 'Tailwind'],
      github: 'https://github.com/4deraldo/4deraldo-portifolio',
      demo: 'https://4deraldo-portifolio.vercel.app',
    },
    {
      name: 'Simulador de Investimentos',
      desc: 'Simulação de rendimentos com aportes mensais.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/4deraldo/projetoCalculadoraInvestimento',
      demo: 'https://4deraldo.github.io/projetoCalculadoraInvestimento/',
    },
    {
      name: 'Sistema Veterinário',
      desc: 'Gerenciamento de atendimentos.',
      tech: ['JavaScript'],
      github: 'https://github.com/4deraldo/vetMariana',
      demo: 'https://vet-mariana.vercel.app',
    },
    {
      name: 'Automação de Tarefas',
      desc: 'Automação de processos repetitivos.',
      tech: ['Python'],
      github: 'https://github.com/4deraldo/AutomacaoDeTarefa',
    },
  ];

  return (
    <section id='projects' className='py-20 sm:py-24 bg-black text-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12'>
          Projetos
        </h2>

        <div className='relative'>
          {/* SETAS */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className='hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 items-center justify-center rounded-full
            bg-white/10 backdrop-blur border border-white/20
            hover:bg-purple-600 transition'
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className='hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 items-center justify-center rounded-full
            bg-white/10 backdrop-blur border border-white/20
            hover:bg-purple-600 transition'
          >
            <ChevronRight size={24} />
          </button>

          {/* SWIPER */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((proj, index) => (
              <SwiperSlide key={index}>
                <div className='min-h-[230px] sm:min-h-[250px] bg-gray-900/80 border border-gray-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between'>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-lg sm:text-xl font-semibold'>
                      {proj.name}
                    </h3>

                    <p className='text-gray-400 text-sm leading-relaxed line-clamp-3'>
                      {proj.desc}
                    </p>
                  </div>

                  <div className='flex flex-wrap gap-2 mt-3'>
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className='text-xs bg-purple-600/80 px-3 py-1 rounded-full'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-3 mt-4'>
                    <a
                      href={proj.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 text-center border border-gray-700 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition'
                    >
                      GitHub
                    </a>

                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 text-center bg-purple-600 py-2 rounded-lg text-sm hover:bg-purple-500 transition'
                      >
                        Demo
                      </a>
                    )}
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
