import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import About from "@/components/site/About";
import Talks from "@/components/site/Talks";
import WhyHire from "@/components/site/WhyHire";
import Gallery from "@/components/site/Gallery";
import Book from "@/components/site/Book";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Valdireni Alves · Palestrante e Especialista em Comunicação Estratégica";
    const desc = "Palestrante no Brasil e em Portugal, especialista em comunicação estratégica e oratória para líderes. Autora de 'Você é do Tamanho da Sua Comunicação'.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    // JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Valdireni Alves",
      jobTitle: "Palestrante e Especialista em Comunicação Estratégica",
      url: "https://valdirenialves.com.br",
      sameAs: ["https://instagram.com/valdirenialvesjornalista"],
      description: desc,
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const credentials = [
    "30+ anos de experiência",
    "Brasil & Portugal",
    "Palcos com 2.500 pessoas",
    "Autora de 3 livros",
    "Treinamentos in company",
    "Liderança & Oratória",
  ];

  const clients = [
    "SEBRAE", "Governo do Paraná", "Great Place To Work", "Bourbon",
    "Gazeta do Povo", "S.Clara Comunicação", "Losango", "Congresso Cidades Digitais",
  ];

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee items={credentials} variant="ink" />
      <About />
      <Talks />
      <WhyHire />
      <Gallery />
      <Marquee items={clients} variant="cream" reverse />
      <Book />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
