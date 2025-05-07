
import image from '../assets/Image (1) (1).png'
export default function Steps() {
  const steps = [
    {
      number: "01",
      title: "Choose Destination",
      description: "Select the destination you want to explore.",
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    },
    {
      number: "02",
      title: "Make Payment",
      description: "Securely pay for your trip in one step.",
      icon: "https://cdn-icons-png.flaticon.com/512/3039/3039401.png",
    },
    {
      number: "03",
      title: "Reach Airport on Selected Date",
      description: "Get ready and start your journey with us.",
      icon: "https://gimgs2.nohat.cc/thumb/f/640/travel-icon-transparent-background--m2i8i8b1m2G6N4Z5.jpg",
    },
  ];

  return (
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Steps */}
        <div className="flex-1">
          <p className="text-blue-400 text-sm font-semibold mb-2">
            Easy and Fast
          </p>
          <h2 className="text-3xl font-bold mb-8">
            Book your next trip in 3 easy steps
          </h2>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-10 items-start">
                <img src={step.icon} alt="" className="h-8 w-8 mt-1" />
                <div>
                  <h3 className="font-bold text-md">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img src={image} alt="image" />
        </div>
      </div>
    </section>
  );
}   