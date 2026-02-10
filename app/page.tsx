import { Hero } from '@/components/Hero';
import { AllInOne } from '@/components/AllInOne';
import { Benefits } from '@/components/Benefits';
import { Features } from '@/components/Features';
import { DeliveryEssentials } from '@/components/DeliveryEssentials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AllInOne />
      <Benefits />
      <Features />
      <DeliveryEssentials />
    </main>
  );
}
