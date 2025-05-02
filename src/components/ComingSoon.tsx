import { HeartIcon, Calendar, Clock } from "lucide-react";
const AppFeature = ({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return <div className="flex items-start">
      <div className="p-2 bg-vet-primary bg-opacity-10 rounded-full mr-4">
        <Icon className="h-5 w-5 text-vet-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>;
};
const ComingSoon = () => {
  return <div className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-vet-primary bg-opacity-10 text-vet-primary px-4 py-2 rounded-full text-sm font-medium">
            Próximamente
          </span>
          <h2 className="text-3xl font-bold text-vet-dark mt-4 mb-4">
            ¡La App de PawsomeVet!
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nuestra aplicación móvil está casi lista, llevando el cuidado veterinario a tu bolsillo con funciones poderosas para mantener a tus mascotas saludables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="flex flex-col space-y-8">
            <AppFeature title="Control de la Salud de tu Mascota" description="Supervisa las métricas de salud de tu mascota, programa de medicamentos y próximas citas, todo en un solo lugar." icon={HeartIcon} />
            <AppFeature title="Reserva Citas con Veterinarios" description="Programa visitas a tu clínica veterinaria favorita con solo unos toques en tu teléfono." icon={Calendar} />
            <AppFeature title="Soporte 24/7 con Veterinarios" description="Obtén asistencia inmediata para los problemas de salud de tu mascota a través de nuestro chat en la aplicación con veterinarios cualificados." icon={Clock} />
          </div>
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <div className="bg-gray-50 p-8 rounded-xl w-full max-w-sm">
              <img alt="Aplicación móvil con animales" className="rounded-lg w-full h-64 object-cover" src="/lovable-uploads/9f33e08f-06df-4891-9068-9efe3bb06fb1.jpg" />
              <div className="flex justify-center mt-4">
                <div className="h-12 w-12 rounded-full border-4 border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ComingSoon;