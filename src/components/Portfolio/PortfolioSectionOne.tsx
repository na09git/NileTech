import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const ImageBlock = ({ src, alt, darkSrc, title }) => (
  <div className="mb-12 w-full px-4 text-center lg:w-1/2">
    <div
      className="relative mx-auto aspect-[25/24] max-w-[500px] lg:m-0"
      data-wow-delay=".15s"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="drop-shadow-three dark:hidden dark:drop-shadow-none"
      />
      <Image
        src={darkSrc}
        alt={alt}
        fill
        className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
      />
    </div>
    <p className="mt-4 text-lg font-medium text-body-color">{title}</p>
  </div>
);

const PortfolioSectionOne = () => (
  <section className="py-16 md:py-20 lg:py-28">
    <div className="container">
      <div className="-mx-4 flex flex-wrap items-center">
        <ImageBlock
          src="/images/portfolio/melka.jpg"
          alt="about image"
          darkSrc="/images/portfolio/melka.jpg"
          title="Melka Rafu City "
        />
        <ImageBlock
          src="/images/portfolio/ararso.jpg"
          alt="about image"
          darkSrc="/images/portfolio/ararso.jpg"
          title="Ararso Food Export Company"
        />
        <ImageBlock
          src="/images/portfolio/bilal.jpg"
          alt="about image"
          darkSrc="/images/portfolio/bilal.jpg"
          title="Bilal Madrasa"
        />
        <ImageBlock
          src="/images/portfolio/melkawalini.jpg"
          alt="about image"
          darkSrc="/images/portfolio/melkawalini.jpg"
          title="Melka Walini School"
        />
        <ImageBlock
          src="/images/portfolio/nile.jpg"
          alt="about image"
          darkSrc="/images/portfolio/nile.jpg"
          title="Nile Website"
        />
        <ImageBlock
          src="/images/portfolio/majmua.jpg"
          alt="about image"
          darkSrc="/images/portfolio/majmua.jpg"
          title="Mejmua Zilul Yatimi Walmiskin Website And Registration System"
        />
      </div>
    </div>
  </section>
);

export default PortfolioSectionOne;
