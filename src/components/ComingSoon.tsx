
import { HeartIcon, Calendar, Clock } from "lucide-react";

const AppFeature = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="flex items-start">
      <div className="p-2 bg-vet-primary bg-opacity-10 rounded-full mr-4">
        <Icon className="h-5 w-5 text-vet-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-vet-primary bg-opacity-10 text-vet-primary px-4 py-2 rounded-full text-sm font-medium">
            Coming Soon
          </span>
          <h2 className="text-3xl font-bold text-vet-dark mt-4 mb-4">
            The PawsomeVet App!
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our mobile app is almost here, bringing veterinary care to your pocket with powerful features to keep your pets healthy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="flex flex-col space-y-8">
            <AppFeature
              title="Track Your Pet's Health"
              description="Monitor your pet's health metrics, medication schedules, and upcoming appointments all in one place."
              icon={HeartIcon}
            />
            <AppFeature
              title="Book Appointments with Veterinarians"
              description="Schedule visits to your favorite vet clinic with just a few taps on your phone."
              icon={Calendar}
            />
            <AppFeature
              title="24/7 Support with Veterinarians"
              description="Get immediate assistance for your pet's health concerns through our in-app chat with qualified veterinarians."
              icon={Clock}
            />
          </div>
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <div className="bg-gray-50 p-8 rounded-xl w-full max-w-sm">
              <div className="bg-vet-primary rounded-lg h-64 flex items-center justify-center">
                <span className="text-white font-semibold text-xl">App Preview Coming Soon</span>
              </div>
              <div className="flex justify-center mt-4">
                <div className="h-12 w-12 rounded-full border-4 border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
