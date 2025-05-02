
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-vet-light py-10 px-6 md:px-12 lg:py-20">
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-vet-dark mb-4">
          Expert Veterinary Care{" "}
          <span className="text-vet-primary">At Your Fingertips</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Book appointments, track your pet's health, and chat with veterinarians - all from the comfort of your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button className="bg-vet-primary hover:bg-vet-accent text-white py-6 px-8 rounded-md text-lg w-full sm:w-auto">
            Book Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        <img
          src="/lovable-uploads/be0e2d2c-3a03-4497-8ee0-ee8e6024e0a9.png"
          alt="Person and dog high-fiving"
          className="rounded-lg max-h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
