import Header from "@/components/Header";
import HeroSection from "./home/hero";
import HowItWorks from "./home/how-it-works";
import AboutUs from "./home/about-us";
import CallToAction from "./home/CallToAction";
import Footer from "@/components/Footer";
import Testimonials from "./home/testimonials";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <div className="relative">
          <HeroSection />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <AboutUs />
        </div>
        <div><Testimonials/></div>
        <div>
          <CallToAction />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
