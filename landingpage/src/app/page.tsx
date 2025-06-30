import HeroSection from '../../components/Herosection/index'
 import ClientSection from '../../components/Clientsection'
 import EverythingSection from '../../components/Everythingsection'
 import SugestionsSection from '../../components/Suggestionssection'
 import ReviewsSection from '../../components/Reviewssection'
 import PricingSection from '../../components/Pricingsection'
 import ForeverSection from '../../components/Foreversection'

export default function Home() {
  return (
    <div className="">
     <HeroSection />
     <ClientSection />
     <EverythingSection />
     <SugestionsSection />
     <ReviewsSection />
     <PricingSection />
     <ForeverSection />

    </div>
  );
}
