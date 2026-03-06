import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CreatorHighlight from "@/components/CreatorHighlight";
import Hero from "@/components/home/Hero";
import WhySection from "@/components/home/WhySection";
import HowItWorks from "@/components/home/HowItWorks";
import CitiesSection from "@/components/home/CitiesSection";
import MoreCitiesSection from "@/components/home/MoreCitiesSection";
import CommuteTable from "@/components/home/CommuteTable";
import StoriesSection from "@/components/home/StoriesSection";
import SafetySection from "@/components/home/SafetySection";
import AudienceSection from "@/components/home/AudienceSection";
import FinalCTA from "@/components/home/FinalCTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhySection />
        <HowItWorks />
        <CitiesSection />
        <MoreCitiesSection />
        <CommuteTable />
        <StoriesSection />
        <SafetySection />
        <AudienceSection />
        <FinalCTA />
      </main>
      <CreatorHighlight />
      <Footer />
    </div>
  );
};

export default Home;
