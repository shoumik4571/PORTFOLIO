'use client';

import { useEffect, useRef, useState } from 'react';

const GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW_1 = GIFS.slice(0, 11);
const ROW_2 = GIFS.slice(11);

function MarqueeRow({ images, direction }: { images: string[]; direction: 1 | -1 }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    let raf = 0;
    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) raf = requestAnimationFrame(update);
      },
      { rootMargin: '200px' }
    );
    const update = () => {
      if (!visible) return;
      const section = wrapRef.current?.closest('section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setX(direction === 1 ? offset - 200 : -(offset - 200));
      }
      raf = requestAnimationFrame(update);
    };
    const el = wrapRef.current;
    if (el) observer.observe(el);
    raf = requestAnimationFrame(update);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [direction]);

  const tripled = [...images, ...images, ...images];

  return (
    <div ref={wrapRef} className="overflow-hidden">
      <div className="flex gap-3 w-max" style={{ transform: `translateX(${x}px)`, willChange: 'transform' }}>
        {tripled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={420}
            height={270}
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10" aria-hidden="true">
      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW_1} direction={1} />
        <MarqueeRow images={ROW_2} direction={-1} />
      </div>
    </section>
  );
}
