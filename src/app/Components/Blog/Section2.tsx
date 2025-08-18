import { useState, useEffect } from "react";

type Post = { 
    id: number; 
    title: string; 
    date: string; 
    readTime: string; 
    img: string 
};

type TrendingItem = {
    id: number;
    title: string;
    subtitle: string;
    readTime: string;
    date: string;
};

export default function Section2({ posts = [] }: { posts?: Post[] }) {
    const [trendingData, setTrendingData] = useState<TrendingItem[]>([]);
    
    // Get the latest 5 posts for Section2
    const latestPosts = posts.slice(0, 5);
    
    // Load trending data from localStorage
    useEffect(() => {
        const savedTrending = localStorage.getItem('trendingData');
        if (savedTrending) {
            setTrendingData(JSON.parse(savedTrending));
        } else {
            // Default trending data
            setTrendingData([
                { id: 1, title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire", readTime: "18 mins read", date: "July 28, 2025" },
                { id: 2, title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire", readTime: "18 mins read", date: "July 28, 2025" },
                { id: 3, title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire", readTime: "18 mins read", date: "July 28, 2025" },
                { id: 4, title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire", readTime: "18 mins read", date: "July 28, 2025" }
            ]);
        }
    }, []);
    
    return (
        <div>
            <div className="w-screen h-screen flex">
                <div className="flex ">
                    {/* Left Section - 2nd and 3rd Latest Blogs */}
                    <div className="w-[400px] h-[300px] mt-16 ml-8">
                        {latestPosts.length > 1 ? (
                            <>
                                <div className="relative">
                                    <img src={latestPosts[1].img} alt="image" className="w-[400px] h-[250px] rounded-4xl" />
                                </div>
                                <div className="flex justify-between mt-4 w-[340px] ml-6">
                                    <p>Blog • {latestPosts[1].readTime}</p>
                                    <p>{latestPosts[1].date}</p>
                                </div>
                                <p className="pt-4 pl-2 text-center pr-3 manrope">{latestPosts[1].title}</p>
                            </>
                        ) : (
                            <>
                                <div className="relative">
                                    <img src="bn.jpg" alt="image" className="w-[400px] h-[250px] rounded-4xl" />
                                </div>
                                <div className="flex justify-between mt-4 w-[340px] ml-6">
                                    <p>Blog - 18 mins read</p>
                                    <p>July 28, 2025</p>
                                </div>
                                <p className="pt-4 pl-2 text-center pr-3 manrope">Designing the Heart of Your </p>
                                <p className="pl-4 text-center manrope">Home: Bedroom Ideas That Inspire</p>
                            </>
                        )}
                        
                        {latestPosts.length > 2 ? (
                            <>
                                <div className="relative">
                                    <img src={latestPosts[2].img} alt="image" className="w-[400px] h-[250px] rounded-4xl mt-6" />
                                </div>
                                <div className="flex justify-between mt-4 w-[340px] ml-6">
                                    <p>Blog • {latestPosts[2].readTime}</p>
                                    <p>{latestPosts[2].date}</p>
                                </div>
                                <p className="pt-4 pl-2 text-center pr-3 manrope">{latestPosts[2].title}</p>
                            </>
                        ) : (
                            <>
                                <div className="relative">
                                    <img src="bn.jpg" alt="image" className="w-[400px] h-[250px] rounded-4xl mt-6" />
                                </div>
                                <div className="flex justify-between mt-4 w-[340px] ml-6">
                                    <p>Blog - 18 mins read</p>
                                    <p>July 28, 2025</p>
                                </div>
                                <p className="pt-4 pl-2 text-center pr-3 manrope">Designing the Heart of Your </p>
                                <p className="pl-4 text-center manrope">Home: Bedroom Ideas That Inspire</p>
                            </>
                        )}
                    </div>
                    
                    <div className="w-[1px] bg-amber-950 h-[600px] ml-10 mt-26 "></div>
                    
                    {/* Middle Section - Latest Blog */}
                    <div className="w-[500px] h-[350px] bg-red-400 ml-10 mt-20 rounded-4xl ">
                        {latestPosts.length > 0 ? (
                            <>
                                <div className="relative">
                                    <img src={latestPosts[0].img} className="w-[500px] h-[350px] rounded-4xl" />
                                </div>
                                <div className="flex justify-between mt-4 w-[340px] ml-20">
                                    <p>Blog • {latestPosts[0].readTime}</p>
                                    <p>{latestPosts[0].date}</p>
                                </div>
                                <div className="w-[400px] mx-auto pt-10 text-3xl manrope">
                                    <div>{latestPosts[0].title}</div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="relative">
                                    <img src="bn.jpg" className="w-[500px] h-[350px] rounded-4xl" />
                                </div>
                                <div className="flex justify-between mt-4 w-[340px] ml-20">
                                    <p>Blog - 18 mins read</p>
                                    <p>July 28, 2025</p>
                                </div>
                                <div className="w-[400px] mx-auto pt-10 text-3xl manrope">
                                    <div>Designing the Heart of Your </div>
                                    <div>Home: Bedroom Ideas That Inspire</div>
                                    <div>Your Mind</div>
                                </div>
                            </>
                        )}
                    </div>
                    
                    <div className="w-[1px] bg-amber-950 h-[600px] ml-10 mt-26 "></div>
                    
                    {/* Right Section - Most Trending Items Only */}
                    <div className="w-[400px] h-[600px] mt-16 ml-8">
                        {/* Most Trending Items - Scrollable */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Most Trending</h3>
                            <div className="h-[500px] overflow-y-auto pr-2">
                                {trendingData.map((item, idx) => (
                                    <div key={item.id} className="mb-6">
                                        <div className="flex justify-between text-[14px] w-[340px] manrope-medium">
                                            <p>Blog • {item.readTime}</p>
                                            <p>{item.date}</p>
                                        </div>
                                        <div className="mt-2 pr-20">
                                            <p className="pt-4 pr-14 text-center manrope text-[16px]">{item.title}</p>
                                            <p className="text-center manrope text-[16px]">{item.subtitle}</p>
                                        </div>
                                        <div className="w-[350px] h-[1px] bg-amber-900 center mt-4 mb-4 "></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}