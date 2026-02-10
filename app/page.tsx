import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { AllInOne } from "@/components/AllInOne";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-[#ff7a2d] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AllInOne />
        <Benefits />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
