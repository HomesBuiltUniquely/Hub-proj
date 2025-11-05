
"use client";


import { useRouter } from "next/navigation";



const articles = [
  {
    image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog8img1.jpg",
    title: "Choose the right colour palette, comfortable bedding and furniture",
    date: "Oct 21, 2025",
    path: "/Blog/Blog8",
  },
  {
    image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog11img3.jpg",
    title: "Which Kitchen suits you best L-Shaped, U-Shaped or Island kitchen",
    date: "Sep 25, 2025",
    path: "/Blog/Blog11",
  },
  {
    image: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/blog12img1.png",
    title: "Creative kids bedroom perfect blend of style and fun",
    date: "Oct 21, 2025",
    path: "/Blog/Blog12",
  },
];



const Estimateblog: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-[#f1f2f6] py-12">
      <style jsx>{`
        /* Hide custom mobile variants by default */
        .mobile-360plus,
        .mobile-300 {
          display: none;
        }

        /* Show mobile layout for widths >= 360px (up to md breakpoint) */
        @media (min-width: 360px) and (max-width: 767px) {
          .mobile-360plus {
            display: block;
          }
        }

        /* Show compact mobile for widths between 300px and 359px */
        @media (min-width: 300px) and (max-width: 359px) {
          .mobile-300 {
            display: block;
          }
        }
      `}</style>



      <style jsx>{`

  .desktop-1440,
        .desktop-1280{
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        /* Show 1440px section for screens 1440px and above */
        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block;
          }
        }
`}</style>


      <div className="desktop-1440 hidden md:block">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 ml-5 mb-10 mt-10">
          <h1 className="text-3xl md:text-5xl wulkan-display-bold mb-2 text-gray-800">Let’s talk about home</h1>
          <p className="text-gray-500 manrope-medium mb-7">
            Read our blog to discover how design meets utility in every home.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="max-w-[full] mx-auto px-8 mb-8 flex flex-col md:flex-row gap-6">
          {articles.map((article) => {
            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick}
                className="bg-white rounded-3xl shadow-md overflow-hidden w-full md:w-1/3 flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <img src={article.image} alt={article.title} className="w-full h-70 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base manrope-medium text-gray-900 mt-2 mb-1">
                    {article.title}
                  </h3>
                  <span className="text-xs manrope text-gray-400 mt-4">{article.date}</span>
                </div>
              </div>
            );
          })}
        </div>


        {/* View All Button */}
        <div className="text-center mb-10 mt-10">
          <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition manrope hover:bg-gray-200 manrope">
            View All
          </button>
        </div>
      </div>




      {/* Desktop Version 1280 */}
      <div className="desktop-1280 hidden md:block">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 ml-5 mb-10 mt-5">
          <h1 className="text-3xl md:text-5xl wulkan-display-bold mb-2 text-gray-800">Let’s talk about home</h1>
          <p className="text-gray-500 manrope-medium mb-7">
            Read our blog to discover how design meets utility in every home.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="max-w-[full] mx-auto px-8 mb-8 flex flex-col md:flex-row gap-6">
          {articles.map((article) => {
            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick}
                className="bg-white rounded-3xl  shadow-md overflow-hidden w-full md:w-1/3 flex flex-col"
              >
                <img src={article.image} alt={article.title} className="w-full h-70 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base manrope-medium text-gray-900 mt-2 mb-1">
                    {article.title}
                  </h3>
                  <span className="text-xs manrope text-gray-400 mt-4">{article.date}</span>
                </div>
              </div>
            )

          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-15">
          <button className="px-6 py-2 border border-gray-500 rounded-full text-gray-800 transition manrope hover:bg-gray-200 manrope">
            View All
          </button>
        </div>
      </div>



      {/* Mobile Version (>= 360px) */}
      <div className="md:hidden px-3 mobile-360plus">
        {/* Heading */}
        <div className="mx-auto -mt-8 mb-5">
          <div className="flex mr-1 items-start">
            <div className="w-[2px] h-[40px] bg-amber-300  ml-2"></div>
            <h1 className="text-3xl wulkan-display-bold mb-5 ml-3 text-gray-800 w-[200px] mt-1">Let’s talk about home</h1>
          </div>
          <p className="text-gray-500 text-sm mb-4 ml-2 manrope-medium -mt-3">
            Read our blog to discover how design meets utility in every kitchen.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="mx-auto mb-5 space-y-5">
          {articles.map((article) => {

            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick} className=" overflow-hidden w-full ">
                <img src={article.image} alt={article.title} className=" rounded-2xl w-full h-[200px] object-cover" />
                <div className="ml-1 mt-1">
                  <span className="block text-[10px] text-gray-400 mt-2 manrope">{article.date}</span>
                  <h3 className="text-base text-gray-900 mt-1 manrope">{article.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>



      {/* Compact Mobile Version (< 360px) */}
      <div className="md:hidden px-2 mobile-300">
        {/* Heading */}
        <div className="mx-auto -mt-8 mb-2">
          <div className="flex mr-1 items-start">
            <div className="w-[2px] h-[35px] bg-amber-300  ml-2"></div>
            <h1 className="text-3xl wulkan-display-bold mb-5 ml-3 text-gray-800 w-[200px] ">Let’s talk about home</h1>
          </div>
          <p className="text-gray-500 text-sm mb-4 ml-2 manrope-medium -mt-3">
            Read our blog to discover how design meets utility in every kitchen.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="mx-auto mb-5 space-y-5">
          {articles.map((article) => {
            function handleCardClick() {
              if (article.path) {
                router.push(article.path);
              }
            }

            return (
              <div
                key={article.title}
                onClick={handleCardClick} className=" overflow-hidden w-full ">
                <img src={article.image} alt={article.title} className=" rounded-2xl w-full h-[200px] object-cover" />
                <div className="ml-1 mt-1">
                  <span className="block text-[10px] text-gray-400 mt-2 manrope">{article.date}</span>
                  <h3 className="text-base text-gray-900 mt-1 manrope">{article.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Estimateblog;
