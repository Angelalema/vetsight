import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Footer = () => {
  return <div className="bg-vet-footer text-white">
      <div className="py-16 px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para darle a tus mascotas el cuidado que merecen?
          </h2>
          <p className="mb-8 text-gray-300">
            Únete a miles de dueños de mascotas que confían en PawsomeVet para sus necesidades veterinarias.
          </p>
          <Button className="bg-vet-primary hover:bg-vet-accent text-white py-6 px-8 rounded-md text-lg flex mx-auto items-center">
            Reservar Cita Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-white text-xl font-bold">vetsight</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PawsomeVet. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>;
};
export default Footer;