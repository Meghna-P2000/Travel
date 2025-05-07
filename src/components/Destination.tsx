
export default function Destinations() {
  const destinations = [
    {
      title: "Rome, Italy",
      description: "A beautiful historic city with stunning architecture.",
      img: "https://assets.vogue.com/photos/65f04d926294babad5413eb1/16:9/w_1280,c_limit/GettyImages-1380534040.jpg",
    },
    {
      title: "Paris, France",
      description: "Explore the Eiffel Tower and charming cafes.",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    },
    {
      title: "London, UK",
      description: "Experience culture, history, and modern city life.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zyKAaN2Jg-zU6BTDBwGWq7nm8acKO2s7Dg&s",
    },
  ];

  return (
    <section className="px-10 md:px-52 py-16 bg-gray-50 text-center">
      <h5 className="font-bold text-orange-500 mb-2">TOP DESTINATIONS</h5>
      <h2 className="text-2xl font-bold mb-10">Explore Our Popular Places</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="p-4  rounded-md drop-shadow-sm shadow-2xl hover:scale-95 active:scale-100 transition-all duration-50 active:bg-blue-200"
          >
            <img
              src={dest.img}
              alt={dest.title}
              className="w-full h-100 object-cover rounded-md mb-4 "
            />
            <h3 className="text-lg font-semibold mb-2">{dest.title}</h3>
            <p className="text-sm text-gray-600">{dest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
