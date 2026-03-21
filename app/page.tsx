import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Ambient background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <Nav />
      <main>
        <Hero />
        <Stats />
        <hr className="border-none border-t border-[#e8e8e4] mx-5 md:mx-14" />
        <Services />
        <hr className="border-none border-t border-[#e8e8e4] mx-5 md:mx-14" />
        <Projects />
        <hr className="border-none border-t border-[#e8e8e4] mx-5 md:mx-14" />
        <Articles />
        <hr className="border-none border-t border-[#e8e8e4] mx-5 md:mx-14" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
