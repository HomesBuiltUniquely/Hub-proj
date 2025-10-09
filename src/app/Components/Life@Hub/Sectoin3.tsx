export default function Section3() {
    return (
        <div>
            <div className="h-auto hidden md:block">
                <div className="flex">
                    <div className="ml-12">
                        <div className="w-[380px] h-[240px] bg-red-300 rounded-2xl">
                            <img src="bn.jpg" className="w-[380px] h-[240px] rounded-2xl"></img>
                        </div>
                        <div className="w-[380px] h-[240px] mt-8 rounded-2xl bg-red-300">
                            <img src="bn.jpg" className="w-[380px] h-[240px] rounded-2xl"></img>
                        </div>
                    </div>
                    {/* second2 */}
                    <div className="ml-12 bg-red-300 w-[400px] h-[520px] rounded-2xl">
                        <img src="bn.jpg" className="w-[400px] h-[520px] rounded-2xl"></img>
                    </div>
                    {/* second3 */}
                    <div className="ml-12">
                        <div className="w-[520px] h-[240px] bg-red-300 rounded-2xl">
                            <img src="bn.jpg" className="w-[520px] h-[240px] rounded-2xl"></img>
                        </div>
                        <div className="flex mt-8">
                            <div className="w-[240px] h-[240px] bg-red-300 rounded-2xl">
                                <img src="bn.jpg" className="w-[240px] h-[240px] rounded-2xl"></img>
                            </div>
                            <div className="w-[240px] h-[240px] bg-red-300 ml-10 rounded-2xl">
                                <img src="bn.jpg" className="w-[240px] h-[240px] rounded-2xl"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* mobile version  */}

            <div className="block md:hidden w-full max-w-[425px] h-[full] mx-auto mt-4 rounded-2xl overflow-hidden shadow-md bg-cover bg-center ">

                <div className="w-full overflow-x-auto">
                    <div
                        className="flex space-x-4 px-4 snap-x snap-mandatory overflow-x-auto scroll-smooth"
                    >
                        {/* <!-- Slide --> */}
                        <div className="flex-shrink-0 w-[85vw] max-w-[400px] h-[400px] bg-red-300 rounded-2xl snap-start overflow-hidden">
                            <img src="bn.jpg" alt="Image 1" className="w-full h-full object-cover" />
                        </div>
{/* 
                        <!-- Slide --> */}
                        <div className="flex-shrink-0 w-[85vw] max-w-[400px] h-[400px] bg-red-300 rounded-2xl snap-start overflow-hidden">
                            <img src="bn.jpg" alt="Image 2" className="w-full h-full object-cover" />
                        </div>
{/* 
                        <!-- Slide --> */}
                        <div className="flex-shrink-0 w-[85vw] max-w-[400px] h-[400px] bg-red-300 rounded-2xl snap-start overflow-hidden">
                            <img src="bn.jpg" alt="Image 3" className="w-full h-full object-cover" />
                        </div>

                        {/* <!-- Slide --> */}
                        <div className="flex-shrink-0 w-[85vw] max-w-[400px] h-[400px] bg-red-300 rounded-2xl snap-start overflow-hidden">
                            <img src="bn.jpg" alt="Image 4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>




            </div>


        </div>
    )
}