
export default function Testimonials() {
  const testimonials = [
    {
      text: "On the Windows talking painted pasture yet its express parties use.",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Emily Smith",
      location: "London, UK",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Smith",
      location: "London, UK",
      photo:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Jully",
      location: "London, UK",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu-k_hZT0lFOLgdNDAFXCMcRJjhp8vBZqsw&s",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Rose",
      location: "London, UK",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwPyM8xSw2xXRHuUd2G406NsLMU27JTK7E8oQ4A-mQDy3cFAgmRd8fzFSHO46GnmEz7c&usqp=CAU",
    },
  ];

  return (
    <section className=" md:px-52  bg-white text-center">
      <h2 className="text-2xl font-bold mb-10">What People Say About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border p-6 rounded-md shadow-sm text-left"
          >
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full mb-4"
            />
            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
            <div className="text-base font-semibold">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.location}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 py-10">
        <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
} 
  