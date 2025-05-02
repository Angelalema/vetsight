
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
