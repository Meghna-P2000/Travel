export default function Header() 
{
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 shadow">
        <div className="text-2xl font-bold">TravelCo</div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-orange-500">
            Destinations
          </a>
          <a href="#" className="hover:text-orange-500">
            Hotels
          </a>
          <a href="#" className="hover:text-orange-500">
            Flights
          </a>
          <a href="#" className="hover:text-orange-500">
            Bookings
          </a>
          <a href="#" className="hover:text-orange-500">
            Login
          </a>
          {/* <a href="#" className="hover:text-orange-500">
            Sign up
                  </a> */}
            <button className="bg-orange-500 rounded-sm hover:scale-100 p-1 text-amber-50 font-bold active:scale-80 transition-all duration-300 ease-in-out hover:bg-orange-300">Sign Up</button>
        </nav>
      </header>
    </div>
  );
}