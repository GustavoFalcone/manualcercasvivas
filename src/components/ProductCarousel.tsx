import { carouselSlides } from '../config/assets';

type Slide = (typeof carouselSlides)[number];

function CarouselRow({ items, className }: { items: readonly Slide[]; className: string }) {
  return (
    <div className="carouselRow" aria-hidden="true">
      <div className={`deliverableTrack ${className}`}>
        {[0, 1, 2].map((loop) => (
          <div className="deliverableLoopGroup" key={`${className}-group-${loop}`}>
            {items.map((slide, index) => (
              <figure className="deliverablePreview" key={`${className}-${loop}-${slide.src}`}>
                <img
                  src={slide.src}
                  alt=""
                  width="910"
                  height="1287"
                  loading={loop === 0 && index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={loop === 0 && index === 0 ? 'high' : 'low'}
                />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductCarousel() {
  const splitAt = Math.ceil(carouselSlides.length / 2);

  return (
    <div className="deliverableCarousel" role="group" aria-label="Prévia de páginas internas do Manual Completo de Cercas-Vivas Profissionais">
      <div className="carouselGlow" aria-hidden="true" />
      <div className="deliverableViewport">
        <CarouselRow items={carouselSlides.slice(0, splitAt)} className="trackForward" />
        <CarouselRow items={carouselSlides.slice(splitAt)} className="trackReverse" />
      </div>
    </div>
  );
}
