
const MentorsSection = () => {
  const mentors = [
    {
      name: "K V S Dileep",
      role: "Head of AI Initiatives, GrowthSchool",
      image: "/lovable-uploads/52bf79d8-885a-4d72-b998-716b54dc3986.png"
    },
    {
      name: "Priyanku Sarmah", 
      role: "Visual Art Director, Samur AI",
      image: "/lovable-uploads/52bf79d8-885a-4d72-b998-716b54dc3986.png"
    },
    {
      name: "Siddharth",
      role: "Head of Product, GrowthSchool", 
      image: "/lovable-uploads/52bf79d8-885a-4d72-b998-716b54dc3986.png"
    },
    {
      name: "Divij Bajaj",
      role: "Data Scientist, Microsoft",
      image: "/lovable-uploads/52bf79d8-885a-4d72-b998-716b54dc3986.png"
    },
    {
      name: "Manish",
      role: "Founder, GrowwStacks",
      image: "/lovable-uploads/52bf79d8-885a-4d72-b998-716b54dc3986.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Meet Your Mentors
        </h2>
        
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-gray-800 border border-gray-600 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-600">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{mentor.name}</h3>
              <p className="text-gray-300 text-sm leading-tight">{mentor.role}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-white text-xl mb-8">Want to know more about the mentors and the program?</p>
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg shadow-orange-500/25">
            Register now @ ₹499 ₹1999
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
