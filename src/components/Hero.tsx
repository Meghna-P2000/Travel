
export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-orange-50">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Travel, <span className="text-orange-500">enjoy</span> and live a new
          and full life
        </h1>
        <p className="text-gray-700 mb-6">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listen
          
        </p>
      </div>
      <img
        src="https://travelbzar.com/wp-content/uploads/2024/08/hero-1024x1024.png"
        alt="Traveler"
        className="w-100" 
      />
    </section>
  );
}
