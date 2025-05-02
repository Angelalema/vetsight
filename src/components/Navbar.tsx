
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-white">
      <Link to="/" className="flex items-center">
        <span className="text-vet-primary text-2xl font-bold">PawsomeVet</span>
      </Link>
    </nav>
  );
};

export default Navbar;
