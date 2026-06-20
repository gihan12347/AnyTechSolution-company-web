import Hero from "@/components/sections/Hero";
import VisionMission from "@/components/sections/VisionMission";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Support from "@/components/sections/Support";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VisionMission />
      <Services />
      <Projects />
      <Support />
      <Contact />
    </main>
  );
}
