

export default function Services() {
  const services = [
    {
      title: "Calculated Weather",
      description: "Plan your trip with accurate weather predictions.",
      src: "https://cdn.creazilla.com/icons/7911203/weather-icon-md.png",
    },
    {
      title: "Best Flights",
      description: "Find the best deals on flights for your journey.",
      src: "https://cdn-icons-png.flaticon.com/512/7893/7893979.png",
    },
    {
      title: "Local Events",
      description: "Discover events happening at your destination.",
      src: "https://cdn-icons-png.freepik.com/512/4787/4787623.png",
    },
    {
      title: "Customization",
      description: "Personalize your trip to match your preferences.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SoZnNRXwFfdIQtrkeO6ZKsqlIbjveywvEXEoCAhzR62hiStADiyoiwdLhLUpA2-e-2g&usqp=CAU",
    },
  ];

  return (
    <section className="px-10 md:px-52 py-16 bg-white text-center">
      <h5 className="font-bold text-orange-500 mb-2">CATEGORY</h5>
      <h2 className="text-2xl font-bold mb-10">We Offer Best Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-sm flex flex-col items-center"
          >
            <img
              src={service.src}
              alt={service.title}
              className="w-16 h-16 mb-4 "
            />
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
