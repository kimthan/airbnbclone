import { BiSearchAlt2 } from "react-icons/bi";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars4Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative w-12 flex items-center cursor-pointer my-auto">
        <img
          src={
            "https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg"
          }
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          type="text"
          placeholder="start your search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
        />

        <MagnifyingGlassIcon className=" hidden md:inline-flex h-8 w-8 bg-red-400  p-2 text-white rounded-full  cursor-pointer md:mx-2" />
      </div>
      {/* right */}

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="border-2 rounded-full flex space-x-2 items-center p-2">
          <Bars4Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
