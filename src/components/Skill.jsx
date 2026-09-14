import { useMemo } from 'react';

const TECNOLOGIAS = [
  {
    nome: 'HTML5',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    textAlt: 'Ícone do HTML5',
  },
  {
    nome: 'CSS3',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    textAlt: 'Ícone do CSS3',
  },
  {
    nome: 'JavaScript',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
    textAlt: 'Ícone do JavaScript',
  },
  {
    nome: 'Sass',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    textAlt: 'Ícone do Sass',
  },
  {
    nome: 'Bootstrap',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    textAlt: 'Ícone do Bootstrap',
  },
  {
    nome: 'Tailwind CSS',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    textAlt: 'Ícone do Tailwind CSS',
  },
  {
    nome: 'React',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    textAlt: 'Ícone do React',
  },
  {
    nome: 'SQL Server',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg',
    textAlt: 'Ícone do SQL Server',
  },
  {
    nome: 'Git',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    textAlt: 'Ícone do Git',
  },
  {
    nome: 'GitHub',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    textAlt: 'Ícone do GitHub',
  },
  {
    nome: 'Node.js',
    icone:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    textAlt: 'Ícone do Node.js',
  },
];

export default function InfiniteTechCarousel({
  items = TECNOLOGIAS,
  durationSeconds = 26,
}) {
  const trilho = useMemo(() => [...items, ...items], [items]);

  return (
    <div className='w-full  bg-black p-10 text-white'>
      <h2 className='text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12'>
        Minhas Skills
      </h2>
      <style>{`
        @keyframes tech-carousel-scroll {
          to { transform: translateX(-50%); }
        }
        .tech-carousel-track {
          animation: tech-carousel-scroll ${durationSeconds}s linear infinite;
        }
        .tech-carousel-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-carousel-track {
            animation: none;
          }
        }
      `}</style>

      <div
        className='relative overflow-hidden'
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className='tech-carousel-track flex w-max gap-4 px-4'>
          {trilho.map((tech, index) => {
            const duplicado = index >= items.length;
            return (
              <div
                key={`${tech.nome}-${index}`}
                aria-hidden={duplicado || undefined}
                className='flex shrink-0 items-center gap-3 rounded-full border border-slate-800 bg-slate-900/80 px-6 py-3 shadow-sm shadow-black/20'
              >
                <img
                  src={tech.icone}
                  alt={tech.textAlt}
                  loading='lazy'
                  className='h-7 w-7 object-contain'
                />
                <span className='whitespace-nowrap font-mono text-sm text-slate-200'>
                  {tech.nome}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
