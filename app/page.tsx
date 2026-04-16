import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SectionWhyMega } from "@/components/home/SectionWhyMega";
import { SectionHotPicks } from "@/components/home/SectionHotPicks";
import { SectionPromo } from "@/components/home/SectionPromo";
import { SectionVisit } from "@/components/home/SectionVisit";
import { SectionAvantages } from "@/components/home/SectionAvantages";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <SectionWhyMega />
      <SectionHotPicks />
      <SectionPromo />
      <SectionVisit />
      <SectionAvantages />
    </div>
  );
}
