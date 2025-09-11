import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    const router = useRouter();
    const [trendingData, setTrendingData] = useState<TrendingItem[]>([]);
    
    // Get the latest 5 posts for Section2
    const latestPosts = posts.slice(0, 5);

    const handleReadMore = (postId: number) => {
        router.push(`/Blog/${postId}`);
    };
    
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
        <>
            <style jsx>{`
                /* Hide regular section on ultra-wide screens */
                @media (min-width: 2560px) {
                    .section2-regular {
                        display: none !important;
                    }
                }
                
                /* Ultra-wide layout for 2560px+ */
                .section2-ultrawide {
                    display: none !important;
                }
                
                @media (min-width: 2560px) {
                    .section2-ultrawide {
                        display: block !important;
                        width: 100%;
                        min-height: 100vh;
                        background: linear-gradient(135deg, #f1f2f6 0%, #f1f2f6 100%);
                        margin-left: 15rem;
                        margin-top: 2rem;
                    }
                    
                    .section2-ultrawide-container {
                        max-width: 2400px;
                        margin: 0 auto;
                        padding: 4rem 3rem;
                        display: flex;
                        gap: 3rem;
                        align-items: flex-start;
                        margin-right: 10rem;
                    }
                    
                    /* Left Section - 2nd and 3rd Latest Blogs */
                    .section2-ultrawide-left {
                        flex: 0 0 500px;
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                    }
                    
                    .section2-ultrawide-left-card {
                        background: white;
                        border-radius: 2rem;
                        overflow: hidden;
                        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                        transition: all 0.3s ease;
                    }
                    
                    .section2-ultrawide-left-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
                    }
                    
                    .section2-ultrawide-left-image {
                        width: 100%;
                        height: 320px;
                        object-fit: cover;
                    }
                    
                    .section2-ultrawide-left-content {
                        padding: 2rem;
                    }
                    
                    .section2-ultrawide-left-meta {
                        display: flex;
                        justify-content: space-between;
                        font-size: 1rem;
                        color: #6b7280;
                        margin-bottom: 1rem;
                    }
                    
                    .section2-ultrawide-left-title {
                        font-size: 1.5rem;
                        font-weight: 600;
                        line-height: 1.4;
                        margin-bottom: 1.5rem;
                        color: #111827;
                        text-align: center;
                    }
                    
                    .section2-ultrawide-left-button {
                        width: 100%;
                        background-color: #ef4444;
                        color: white;
                        padding: 1rem 1.5rem;
                        border-radius: 1rem;
                        border: none;
                        font-weight: 600;
                        font-size: 1.125rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    
                    .section2-ultrawide-left-button:hover {
                        background-color: #dc2626;
                        transform: translateY(-2px);
                    }
                    
                    /* Divider */
                    .section2-ultrawide-divider {
                        width: 2px;
                        background: linear-gradient(to bottom, #f59e0b, #d97706);
                        border-radius: 1px;
                        margin: 0 1rem;
                    }
                    
                    /* Middle Section - Latest Blog */
                    .section2-ultrawide-middle {
                        flex: 0 0 700px;
                        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                        border-radius: 2rem;
                        overflow: hidden;
                        box-shadow: 0 20px 40px -10px rgba(239, 68, 68, 0.3);
                        transition: all 0.3s ease;
                    }
                    
                    .section2-ultrawide-middle:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 30px 60px -15px rgba(239, 68, 68, 0.4);
                    }
                    
                    .section2-ultrawide-middle-image {
                        width: 100%;
                        height: 450px;
                        object-fit: cover;
                    }
                    
                    .section2-ultrawide-middle-content {
                        padding: 3rem;
                        color: white;
                    }
                    
                    .section2-ultrawide-middle-meta {
                        display: flex;
                        justify-content: space-between;
                        font-size: 1.125rem;
                        color: rgba(255, 255, 255, 0.8);
                        margin-bottom: 2rem;
                    }
                    
                    .section2-ultrawide-middle-title {
                        font-size: 2.5rem;
                        font-weight: 700;
                        line-height: 1.2;
                        margin-bottom: 2rem;
                        text-align: center;
                    }
                    
                    .section2-ultrawide-middle-button {
                        width: 100%;
                        background-color: white;
                        color: #ef4444;
                        padding: 1.25rem 2rem;
                        border-radius: 1.5rem;
                        border: none;
                        font-weight: 700;
                        font-size: 1.25rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    
                    .section2-ultrawide-middle-button:hover {
                        background-color: #f8fafc;
                        transform: translateY(-2px);
                    }
                    
                    /* Right Section - Most Trending */
                    .section2-ultrawide-right {
                        flex: 0 0 500px;
                        background: white;
                        border-radius: 2rem;
                        padding: 2.5rem;
                        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                        height: fit-content;
                    }
                    
                    .section2-ultrawide-right-title {
                        font-size: 2rem;
                        font-weight: 700;
                        margin-bottom: 2rem;
                        color: #111827;
                        text-align: center;
                    }
                    
                    .section2-ultrawide-right-list {
                        max-height: 600px;
                        overflow-y: auto;
                        padding-right: 1rem;
                    }
                    
                    .section2-ultrawide-right-item {
                        margin-bottom: 2rem;
                        padding-bottom: 1.5rem;
                        border-bottom: 1px solid #e5e7eb;
                    }
                    
                    .section2-ultrawide-right-item:last-child {
                        border-bottom: none;
                        margin-bottom: 0;
                    }
                    
                    .section2-ultrawide-right-meta {
                        display: flex;
                        justify-content: space-between;
                        font-size: 1rem;
                        color: #6b7280;
                        margin-bottom: 1rem;
                    }
                    
                    .section2-ultrawide-right-content {
                        text-align: center;
                    }
                    
                    .section2-ultrawide-right-item-title {
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #111827;
                        margin-bottom: 0.5rem;
                    }
                    
                    .section2-ultrawide-right-item-subtitle {
                        font-size: 1.125rem;
                        color: #374151;
                    }
                }
            `}</style>
            
            {/* Ultra-wide layout for 2560px+ */}
            <div className="section2-ultrawide">
                <div className="section2-ultrawide-container">
                    {/* Left Section - 2nd and 3rd Latest Blogs */}
                    <div className="section2-ultrawide-left">
                        {latestPosts.length > 1 ? (
                            <div className="section2-ultrawide-left-card">
                                <img src={latestPosts[1].img} alt="image" className="section2-ultrawide-left-image" />
                                <div className="section2-ultrawide-left-content">
                                    <div className="section2-ultrawide-left-meta">
                                        <span>Blog • {latestPosts[1].readTime}</span>
                                        <span>{latestPosts[1].date}</span>
                                    </div>
                                    <h3 className="section2-ultrawide-left-title">{latestPosts[1].title}</h3>
                                    <button 
                                        onClick={() => handleReadMore(latestPosts[1].id)}
                                        className="section2-ultrawide-left-button"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="section2-ultrawide-left-card">
                                <img src="bn.jpg" alt="image" className="section2-ultrawide-left-image" />
                                <div className="section2-ultrawide-left-content">
                                    <div className="section2-ultrawide-left-meta">
                                        <span>Blog • 18 mins read</span>
                                        <span>July 28, 2025</span>
                                    </div>
                                    <h3 className="section2-ultrawide-left-title">Designing the Heart of Your Home: Bedroom Ideas That Inspire</h3>
                                </div>
                            </div>
                        )}
                        
                        {latestPosts.length > 2 ? (
                            <div className="section2-ultrawide-left-card">
                                <img src={latestPosts[2].img} alt="image" className="section2-ultrawide-left-image" />
                                <div className="section2-ultrawide-left-content">
                                    <div className="section2-ultrawide-left-meta">
                                        <span>Blog • {latestPosts[2].readTime}</span>
                                        <span>{latestPosts[2].date}</span>
                                    </div>
                                    <h3 className="section2-ultrawide-left-title">{latestPosts[2].title}</h3>
                                    <button 
                                        onClick={() => handleReadMore(latestPosts[2].id)}
                                        className="section2-ultrawide-left-button"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="section2-ultrawide-left-card">
                                <img src="bn.jpg" alt="image" className="section2-ultrawide-left-image" />
                                <div className="section2-ultrawide-left-content">
                                    <div className="section2-ultrawide-left-meta">
                                        <span>Blog • 18 mins read</span>
                                        <span>July 28, 2025</span>
                                    </div>
                                    <h3 className="section2-ultrawide-left-title">Designing the Heart of Your Home: Bedroom Ideas That Inspire</h3>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Divider */}
                    <div className="section2-ultrawide-divider"></div>
                    
                    {/* Middle Section - Latest Blog */}
                    <div className="section2-ultrawide-middle">
                        {latestPosts.length > 0 ? (
                            <>
                                <img src={latestPosts[0].img} alt="image" className="section2-ultrawide-middle-image" />
                                <div className="section2-ultrawide-middle-content">
                                    <div className="section2-ultrawide-middle-meta">
                                        <span>Blog • {latestPosts[0].readTime}</span>
                                        <span>{latestPosts[0].date}</span>
                                    </div>
                                    <h2 className="section2-ultrawide-middle-title">{latestPosts[0].title}</h2>
                                    <button 
                                        onClick={() => handleReadMore(latestPosts[0].id)}
                                        className="section2-ultrawide-middle-button"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <img src="bn.jpg" alt="image" className="section2-ultrawide-middle-image" />
                                <div className="section2-ultrawide-middle-content">
                                    <div className="section2-ultrawide-middle-meta">
                                        <span>Blog • 18 mins read</span>
                                        <span>July 28, 2025</span>
                                    </div>
                                    <h2 className="section2-ultrawide-middle-title">Designing the Heart of Your Home: Bedroom Ideas That Inspire Your Mind</h2>
                                </div>
                            </>
                        )}
                    </div>
                    
                    {/* Divider */}
                    <div className="section2-ultrawide-divider"></div>
                    
                    {/* Right Section - Most Trending Items */}
                    <div className="section2-ultrawide-right">
                        <h3 className="section2-ultrawide-right-title">Most Trending</h3>
                        <div className="section2-ultrawide-right-list">
                            {trendingData.map((item) => (
                                <div key={item.id} className="section2-ultrawide-right-item">
                                    <div className="section2-ultrawide-right-meta">
                                        <span>Blog • {item.readTime}</span>
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="section2-ultrawide-right-content">
                                        <h4 className="section2-ultrawide-right-item-title">{item.title}</h4>
                                        <p className="section2-ultrawide-right-item-subtitle">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Regular layout for screens below 2560px */}
            <div className="section2-regular">
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
                                <p className="pt-4 pl-2 text-center pr-3 manrope mb-4">{latestPosts[1].title}</p>
                                <button 
                                    onClick={() => handleReadMore(latestPosts[1].id)}
                                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium mx-2"
                                >
                                    Read More
                                </button>
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
                                <p className="pt-4 pl-2 text-center pr-3 manrope mb-4">{latestPosts[2].title}</p>
                                <button 
                                    onClick={() => handleReadMore(latestPosts[2].id)}
                                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium mx-2"
                                >
                                    Read More
                                </button>
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
                                <div className="w-[400px] mx-auto pt-10 text-3xl manrope mb-6">
                                    <div>{latestPosts[0].title}</div>
                                </div>
                                <div className="w-[400px] mx-auto">
                                    <button 
                                        onClick={() => handleReadMore(latestPosts[0].id)}
                                        className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors font-medium text-lg"
                                    >
                                        Read More
                                    </button>
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
                                {trendingData.map((item) => (
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
        </>
    );
}