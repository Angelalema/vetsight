import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <div className="w-full flex flex-col lg:flex-row bg-vet-light py-10 px-6 md:px-12 lg:py-20">
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-vet-dark mb-4">
          Cuidado Veterinario{" "}
          <span className="text-vet-primary">Al Alcance de tu Mano</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Reserva citas, haz seguimiento a la salud de tus mascotas y chatea con veterinarios - todo desde la comodidad de tu hogar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button className="bg-vet-primary hover:bg-vet-accent text-white py-6 px-8 rounded-md text-lg w-full sm:w-auto">
            Reservar Cita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        <img alt="Gato naranja y blanco descansando" src="/lovable-uploads/21b56694-12e7-4f1c-bfbd-74a44936199b.jpg" className="rounded-lg max-h-[400px] object-contain" />
      </div>
    </div>;
};
export default Hero;