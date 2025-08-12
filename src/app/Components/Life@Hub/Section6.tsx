"use client"


const articles = [
  {
    image: "/bn.jpg", // Replace with your image path
    title: "Designing the Heart of Your Home: Kitchen Ideas That Inspire",
    date: "July 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/bn.jpg",
    title: "Designing the Heart of Your Home: Kitchen Ideas That Inspire",
    date: "July 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/bn.jpg",
    title: "Designing the Heart of Your Home: Kitchen Ideas That Inspire",
    date: "July 05, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];


const Section6: React.FC = () => {

  return (
    <div className="w-screen min-h-screen bg-[#f1f2f6] py-12">
      {/* Heading */}
      <div className="w-screen mx-auto px-4 mb-10">
        <h1 className="text-4xl md:text-3xl manrope mb-2 text-gray-800">The HUB Jounal</h1>
        <p className="text-gray-500 text-lg mb-7">
        Ideas, innovations, and inspiration straight from our team.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="w-screen h-[500px] mx-auto px-4 mb-8 mt-12 flex flex-col md:flex-row gap-6">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-md overflow-hidden w-full md:w-1/3 flex flex-col"
          >
            <img src={article.image} alt={article.title} className="w-full h-[400px] object-cover" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-gray-900 mt-2 mb-1">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm flex-1">{article.text}</p>
              <span className="text-xs text-gray-400 mt-4">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <div className="text-center mb-10">
        <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition hover:bg-gray-200 font-medium">
          View All
        </button>
      </div>
     
    </div>
  );
};

export default Section6;
