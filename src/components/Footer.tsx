
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-10 md:px-32 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="md:col-span-1">
          <div className="text-2xl font-bold ">TravelCo</div>
          <p className="text-sm">
            Book your trip in minute, get full control for much longer.
          </p>
        </div>

        {/* Footer Links */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="text-sm space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">More</h3>
          <ul className="text-sm space-y-1">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>

        {/* App and Socials */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-2">Discover our app</h3>
          <div className="flex gap-2 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/Google_Play_Store_badge_NL_%28New%29_and_Apple_App_Store_badge.png"
              className="h-10"
              alt="App Stores"
            />
          </div>
          <div className="flex gap-4 text-gray-500 text-xl">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-xs text-center mt-10 text-gray-400">
        All rights reserved @TravelCo.co
      </div>
    </footer>
  );
}
