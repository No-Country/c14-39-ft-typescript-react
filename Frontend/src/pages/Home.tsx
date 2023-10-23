import Hero from "../components/home/Hero";
import Beneficios from "../components/home/Beneficios";
import Patrocinadores from "../components/home/Patrocinadores";
import PromoSection from "../components/home/PromoSection";

const Home = () => {
  return (
    <section className="animate-fade-in">
      <Hero />
      <Beneficios />
      <Patrocinadores />
      <PromoSection />
    </section>
  );
};

export default Home;
