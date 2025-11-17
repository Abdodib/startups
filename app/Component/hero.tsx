// Hero.tsx
type HeroProps = {
  yellow?: string;
  black: string;
  white: string;
  isSearch: boolean;
};

import SearchFormClient from "./searchForm";

const Hero = ({ yellow, black, white, isSearch }: HeroProps) => {
  return (
    <section className="pink_container" style={{ backgroundColor: yellow }}>
      <h1
        className="heading"
        dangerouslySetInnerHTML={{ __html: black }}
      />
      <p className="sub-heading">{white}</p>
      {isSearch && <SearchFormClient />}
    </section>
  );
};

export default Hero;
