
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-white">
      <Link to="/" className="flex items-center">
        <span className="text-vet-primary text-2xl font-bold">PawsomeVet</span>
      </Link>
      <div className="flex items-center space-x-4">
        <Button variant="link" className="text-gray-600">
          Login
        </Button>
        <Button className="bg-vet-primary hover:bg-vet-accent text-white">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
