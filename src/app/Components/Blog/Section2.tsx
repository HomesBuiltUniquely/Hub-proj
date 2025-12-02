"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Post = {
  id: number;
  title: string;
  date: string;
  readTime: string;
  img: string;
  path?: string;
};

type TrendingItem = {
  id: number;
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
};

type Section2Props = {
  posts?: Post[];
  onReadMore?: (path?: string) => void;
};

export default function Section2({ posts = [], onReadMore }: Section2Props) {
  const router = useRouter();
  const [trendingData, setTrendingData] = useState<TrendingItem[]>([]);

  // Get the latest 5 posts for Section2
  const latestPosts = posts.slice(0, 5);

  const handleReadMore = (post: Post) => {
    if (onReadMore) {
      onReadMore(post.path);
    } else if (post.path && post.path.startsWith("/")) {
      router.push(post.path);
    } else {
      router.push(`/Blog/${post.id}`);
    }
  };

  // Load trending data from localStorage
  useEffect(() => {
    const savedTrending = localStorage.getItem("trendingData");
    if (savedTrending) {
      setTrendingData(JSON.parse(savedTrending));
    } else {
      setTrendingData([
        {
          id: 1,
          title: "How Mr. Akhil's House Became Bhoo Aabharana (And Why We're Still Obsessed)?",
          subtitle: "",
          date: "Sep 2025",
          readTime: "10 mins read",
        },
        {
          id: 2,
          title: "Inside Mr. & Mrs. Rijul Azizam's Home, Designed by Hub Interior",
          subtitle: "",
          date: "Aug 2025",
          readTime: "8 mins read",
        },
        {
          id: 3,
          title: "Before You Remodel, Check Out These 7 Kitchen Trends to Watch in 2026",
          subtitle: "",
          date: "Sep 2025",
          readTime: "6 mins read",
        },
        {
          id: 4,
          title: "Luxury Villa Interior Design – The Royal Tulip Project in Bengaluru by HUB Interior",
          subtitle: "",
          date: "August 1, 2025",
          readTime: "8 mins read",
        },
        {
          id: 5,
          title: "Interior Design Bangalore: How HUB Interior Crafted Serenity Heights Apartment into a Living Masterpiece",
          subtitle: "",
          date: "August 3, 2025",
          readTime: "15 mins read",
        },
        {
          id: 6,
          title: "How to Design a Functional Kitchen Interior in Bengaluru Without Compromising Style",
          subtitle: "",
          date: "August 5, 2025",
          readTime: "12 mins read",
        },
        {
          id: 7,
          title: "Sustainable Interior Design Practices",
          subtitle: "",
          date: "August 7, 2025",
          readTime: "14 mins read",
        },
      ]);
    }
  }, []);

  return (
    <>



      <style jsx>{`
        /* Hide both by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }
         /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

         /* Show 2560px layout for large desktops (>1920px) */
        @media (min-width: 1921px)  {
          .desktop-2560 {
            display: block !important;
          }
        }

      `}</style>


      {/* DESKTOP 2560 LAYOUT */}
      <div className="desktop-2560">
        <div className="w-full h-[900px] mx-auto">
          <div className="bg-gray-100 py-16 ">
            <div className="w-full h-[900px]">
              <div className=" mt-5">
                <div className="flex">
                  {/* Left Section - 2nd and 3rd Latest Blogs */}
                  <div className="w-[300px] h-auto ml-8">
                    {/* Second Latest */}
                    {latestPosts.length > 1 ? (
                      <>
                        <div className="relative">
                          <img
                            src={latestPosts[1].img}
                            alt="image"
                            className="w-[360px] h-[250px] object-cover rounded-3xl"
                          />
                        </div>
                        <div className="flex justify-evenly mt-3 w-[320px] ml-2 text-sm">
                          <p>Blog • {latestPosts[1].readTime}</p>
                          <p>{latestPosts[1].date}</p>
                        </div>
                        <p className="pt-4 text-center px-3 manrope-medium text-sm mb-4">
                          {latestPosts[1].title}
                        </p>
                        <button
                          onClick={() => handleReadMore(latestPosts[1])}
                          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
                        >
                          Read More
                        </button>
                      </>
                    ) : (
                      <>
                      </>
                    )}

                    {/* Third Latest */}
                    {latestPosts.length > 2 ? (
                      <>
                        <div className="relative mt-8">
                          <img
                            src={latestPosts[2].img}
                            alt="image"
                            className="w-[360px] h-[240px] object-cover rounded-3xl"
                          />
                        </div>
                        <div className="flex justify-evenly mt-3 w-[320px] ml-2 text-sm">
                          <p>Blog • {latestPosts[2].readTime}</p>
                          <p>{latestPosts[2].date}</p>
                        </div>
                        <p className="pt-4 text-center px-3 manrope-medium text-sm mb-4">
                          {latestPosts[2].title}
                        </p>
                        <button
                          onClick={() => handleReadMore(latestPosts[2])}
                          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
                        >
                          Read More
                        </button>
                      </>
                    ) : (
                      <>

                      </>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] bg-amber-950 h-[750px] ml-10 mt-4"></div>

                  {/* Middle Section - Latest Blog */}
                  <div className="w-[500px] ">
                    <div className="w-[400px] h-[300px] mx-auto  mt-12 rounded-3xl">
                      {latestPosts.length > 0 ? (
                        <>
                          <div className="relative">
                            <img
                              src={latestPosts[0].img}
                              alt="image"
                              className="w-[400px] h-[450px] object-cover rounded-3xl"
                            />
                          </div>
                          <div className="flex justify-between mt-4 w-full ml-2 text-sm">
                            <p>Blog • {latestPosts[0].readTime}</p>
                            <p>{latestPosts[0].date}</p>
                          </div>
                          <div className="w-[400px] mx-auto pt-8 text-2xl manrope-medium text-center mb-6">
                            <div>{latestPosts[0].title}</div>
                          </div>
                          <div className="w-[400px] mx-auto">
                            <button
                              onClick={() => handleReadMore(latestPosts[0])}
                              className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors font-medium text-lg"
                            >
                              Read More
                            </button>
                          </div>

                        </>
                      ) : (
                        <>

                        </>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] bg-amber-950 h-[750px]  mt-4"></div>

                  {/* Right Section - Most Trending */}
                  <div className="w-[380px] h-[600px] mt-12 ml-2 mx-auto">
                    <h3 className="text-2xl manrope mb-4 text-gray-900 text-center">Most Trending</h3>

                    <div className="w-[320px] h-[1px] bg-amber-900 mx-auto mt-4 mb-4"></div>
                    <div className="h-[580px] overflow-y-auto pr-2">
                      {trendingData.map((item) => (
                        <div key={item.id} className="mb-6">
                          <div className="flex justify-between text-[14px] w-[320px] mx-auto manrope-medium">
                            <p>Blog • {item.readTime}</p>
                            <p>{item.date}</p>
                          </div>
                          <div className="mt-2">
                            <p className="pt-4 w-[300px] text-center manrope text-[16px] mx-auto">{item.title}</p>
                            <p className="text-center manrope text-[16px]">{item.subtitle}</p>
                          </div>
                          <div className="w-[320px] h-[1px] bg-amber-900 mx-auto mt-4 mb-4"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Desktop-1920 Version */}

      <div className="desktop-1920">
        <div className="w-full h-[900px] mx-auto w-full h-[900px] bg-gray-100 mt-20 px-20">
          <div className=" mt-5">
            <div className="flex">
              {/* Left Section - 2nd and 3rd Latest Blogs */}
              <div className="w-[450px] h-auto ">
                {/* Second Latest */}
                {latestPosts.length > 1 ? (
                  <>
                    <div className="relative">
                      <img
                        src={latestPosts[1].img}
                        alt="image"
                        className="w-[460px] h-[250px] object-cover rounded-3xl"
                      />
                    </div>
                    <div className="flex justify-evenly mt-3 w-[460px] ml-2 text-sm">
                      <p>Blog • {latestPosts[1].readTime}</p>
                      <p>{latestPosts[1].date}</p>
                    </div>
                    <p className="pt-4 text-center px-3 manrope-medium text-sm mb-4">
                      {latestPosts[1].title}
                    </p>
                    <button
                      onClick={() => handleReadMore(latestPosts[1])}
                      className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
                    >
                      Read More
                    </button>
                  </>
                ) : (
                  <>
                  </>
                )}

                {/* Third Latest */}
                {latestPosts.length > 2 ? (
                  <>
                    <div className="relative mt-8">
                      <img
                        src={latestPosts[2].img}
                        alt="image"
                        className="w-[460px] h-[240px] object-cover rounded-3xl"
                      />
                    </div>
                    <div className="flex justify-evenly mt-3 w-[460px] ml-2 text-sm">
                      <p>Blog • {latestPosts[2].readTime}</p>
                      <p>{latestPosts[2].date}</p>
                    </div>
                    <p className="pt-4 text-center px-3 manrope-medium text-sm mb-4">
                      {latestPosts[2].title}
                    </p>
                    <button
                      onClick={() => handleReadMore(latestPosts[2])}
                      className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
                    >
                      Read More
                    </button>
                  </>
                ) : (
                  <>

                  </>
                )}
              </div>

              {/* Divider */}
              <div className="w-[1px] bg-amber-950 h-[750px] ml-10 mt-4"></div>

              {/* Middle Section - Latest Blog */}
              <div className="w-full ">
                <div className="w-[460px] h-[300px] mx-auto  mt-12 rounded-3xl">
                  {latestPosts.length > 0 ? (
                    <>
                      <div className="relative">
                        <img
                          src={latestPosts[0].img}
                          alt="image"
                          className="w-[460px] h-[450px] object-cover rounded-3xl"
                        />
                      </div>
                      <div className="flex justify-between mt-4 w-full ml-2 text-sm">
                        <p>Blog • {latestPosts[0].readTime}</p>
                        <p>{latestPosts[0].date}</p>
                      </div>
                      <div className="w-[450px] mx-auto pt-8 text-2xl manrope-medium text-center mb-6">
                        <div>{latestPosts[0].title}</div>
                      </div>
                      <div className="w-[450px] mx-auto">
                        <button
                          onClick={() => handleReadMore(latestPosts[0])}
                          className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors font-medium text-lg"
                        >
                          Read More
                        </button>
                      </div>

                    </>
                  ) : (
                    <>

                    </>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="w-[1px] bg-amber-950 h-[750px]  mt-4"></div>

              {/* Right Section - Most Trending */}
              <div className="w-[380px] h-[600px] mt-12 ml-2 mx-auto">
                <h3 className="text-2xl manrope mb-4 text-gray-900 text-center">Most Trending</h3>

                <div className="w-[320px] h-[1px] bg-amber-900 mx-auto mt-4 mb-4"></div>
                <div className="h-[580px] overflow-y-auto pr-2">
                  {trendingData.map((item) => (
                    <div key={item.id} className="mb-6">
                      <div className="flex justify-between text-[14px] w-[320px] mx-auto manrope-medium">
                        <p>Blog • {item.readTime}</p>
                        <p>{item.date}</p>
                      </div>
                      <div className="mt-2">
                        <p className="pt-4 w-[300px] text-center manrope text-[16px] mx-auto">{item.title}</p>
                        <p className="text-center manrope text-[16px]">{item.subtitle}</p>
                      </div>
                      <div className="w-[320px] h-[1px] bg-amber-900 mx-auto mt-4 mb-4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* DESKTOP 1280px LAYOUT */}
      <div className="desktop-1280">
        <div className="w-full h-[900px] bg-gray-100 py-16  w-[1280px] h-[900px] mx-auto px-15">
          <div className=" mt-5">
            <div className="flex">
              {/* Left Section - 2nd and 3rd Latest Blogs */}
              <div className="w-[300px] h-auto">
                {/* Second Latest */}
                {latestPosts.length > 1 ? (
                  <>
                    <div className="relative">
                      <img
                        src={latestPosts[1].img}
                        alt="image"
                        className="w-[360px] h-[250px] object-cover rounded-3xl"
                      />
                    </div>
                    <div className="flex justify-evenly mt-3 w-[320px] ml-2 text-sm">
                      <p>Blog • {latestPosts[1].readTime}</p>
                      <p>{latestPosts[1].date}</p>
                    </div>
                    <p className="pt-4 text-center px-3 manrope-medium text-sm mb-4">
                      {latestPosts[1].title}
                    </p>
                    <button
                      onClick={() => handleReadMore(latestPosts[1])}
                      className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
                    >
                      Read More
                    </button>
                  </>
                ) : (
                  <>
                  </>
                )}

                {/* Third Latest */}
                {latestPosts.length > 2 ? (
                  <>
                    <div className="relative mt-8">
                      <img
                        src={latestPosts[2].img}
                        alt="image"
                        className="w-[360px] h-[240px] object-cover rounded-3xl"
                      />
                    </div>
                    <div className="flex justify-evenly mt-3 w-[320px] ml-2 text-sm">
                      <p>Blog • {latestPosts[2].readTime}</p>
                      <p>{latestPosts[2].date}</p>
                    </div>
                    <p className="pt-4 text-center px-3 manrope-medium text-sm mb-4">
                      {latestPosts[2].title}
                    </p>
                    <button
                      onClick={() => handleReadMore(latestPosts[2])}
                      className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
                    >
                      Read More
                    </button>
                  </>
                ) : (
                  <>

                  </>
                )}
              </div>

              {/* Divider */}
              <div className="w-[1px] bg-amber-950 h-[750px] ml-10 mt-4"></div>

              {/* Middle Section - Latest Blog */}
              <div className="w-[500px] ">
                <div className="w-[400px] h-[300px] mx-auto  mt-12 rounded-3xl">
                  {latestPosts.length > 0 ? (
                    <>
                      <div className="relative">
                        <img
                          src={latestPosts[0].img}
                          alt="image"
                          className="w-[400px] h-[450px] object-cover rounded-3xl"
                        />
                      </div>
                      <div className="flex justify-between mt-4 w-full ml-2 text-sm">
                        <p>Blog • {latestPosts[0].readTime}</p>
                        <p>{latestPosts[0].date}</p>
                      </div>
                      <div className="w-[400px] mx-auto pt-8 text-2xl manrope-medium text-center mb-6">
                        <div>{latestPosts[0].title}</div>
                      </div>
                      <div className="w-[400px] mx-auto">
                        <button
                          onClick={() => handleReadMore(latestPosts[0])}
                          className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors font-medium text-lg"
                        >
                          Read More
                        </button>
                      </div>

                    </>
                  ) : (
                    <>

                    </>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="w-[1px] bg-amber-950 h-[750px]  mt-4"></div>

              {/* Right Section - Most Trending */}
              <div className="w-[380px] h-[600px] mt-12 ml-2 mx-auto">
                <h3 className="text-2xl manrope mb-4 text-gray-900 text-center">Most Trending</h3>

                <div className="w-[320px] h-[1px] bg-amber-900 mx-auto mt-4 mb-4"></div>
                <div className="h-[580px] overflow-y-auto pr-2">
                  {trendingData.map((item) => (
                    <div key={item.id} className="mb-6">
                      <div className="flex justify-between text-[14px] w-[320px] mx-auto manrope-medium">
                        <p>Blog • {item.readTime}</p>
                        <p>{item.date}</p>
                      </div>
                      <div className="mt-2">
                        <p className="pt-4 w-[300px] text-center manrope text-[16px] mx-auto">{item.title}</p>
                        <p className="text-center manrope text-[16px]">{item.subtitle}</p>
                      </div>
                      <div className="w-[320px] h-[1px] bg-amber-900 mx-auto mt-4 mb-4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Version */}
      <div className="block md:hidden px-4 py-6 w-[full] max-w-[425px] mx-auto">
        {/* Latest Blog Post */}
        {latestPosts.length > 0 && (
          <div className="mb-8">
            <img
              src={latestPosts[0].img}
              alt="Latest blog image"
              className="w-full h-52 object-cover rounded-xl"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2 manrope-medium">
              <span>Blog • {latestPosts[0].readTime}</span>
              <span>{latestPosts[0].date}</span>
            </div>
            <h2 className="text-lg font-semibold mt-2 text-center manrope">
              {latestPosts[0].title}
            </h2>
            <button
              onClick={() => handleReadMore(latestPosts[0])}
              className="mt-3 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors manrope-medium"
            >
              Read More
            </button>
          </div>
        )}

        {/* 2nd and 3rd Latest Posts */}
        {[1, 2].map((index) =>
          latestPosts.length > index ? (
            <div key={latestPosts[index].id} className="mb-8">
              <img
                src={latestPosts[index].img}
                alt={`Blog ${index + 1}`}
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2 manrope-medium">
                <span>Blog • {latestPosts[index].readTime}</span>
                <span>{latestPosts[index].date}</span>
              </div>
              <h2 className="text-lg font-semibold mt-2 text-center manrope">
                {latestPosts[index].title}
              </h2>
              <button
                onClick={() => handleReadMore(latestPosts[index])}
                className="mt-3 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors manrope-medium"
              >
                Read More
              </button>
            </div>
          ) : (
            <div key={index} className="mb-8">
              <img
                src="bn.jpg"
                alt="Placeholder"
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2 manrope-medium">
                <span>Blog • 18 mins read</span>
                <span>July 28, 2025</span>
              </div>
              <h2 className="text-lg font-semibold mt-2 text-center manrope">
                Designing the Heart of Your Home: Bedroom Ideas That Inspire
              </h2>
            </div>
          )
        )}
      </div>

    </>
  );
}