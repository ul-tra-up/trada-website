import { Hero } from "@/components/sections/Hero";
import { PlatformLogos } from "@/components/sections/PlatformLogos";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { Metrics } from "@/components/sections/Metrics";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformLogos />
      <ProblemSolution />
      <FeatureHighlights />
      <Metrics />
      <HowItWorks />
      <CTASection />
    </>
  );
}
