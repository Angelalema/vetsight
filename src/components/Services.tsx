
import { Calendar, HeartIcon, Clock } from "lucide-react";

const ServiceItem = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm bg-white">
      <div className="p-3 bg-vet-light rounded-full mb-4">
        <Icon className="h-6 w-6 text-vet-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-vet-dark mb-4">Our Services</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Everything you need to keep your furry friends healthy and happy, all in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ServiceItem
          title="Easy Scheduling"
          description="Book appointments with just a few taps, whether it's for a checkup or an emergency."
          icon={Calendar}
        />
        <ServiceItem
          title="Health Tracking"
          description="Keep track of vaccinations, medications, and health records for all your pets."
          icon={HeartIcon}
        />
        <ServiceItem
          title="24/7 Support"
          description="Chat with veterinarians anytime you have questions or concerns about your pet."
          icon={Clock}
        />
      </div>
    </div>
  );
};

export default Services;
