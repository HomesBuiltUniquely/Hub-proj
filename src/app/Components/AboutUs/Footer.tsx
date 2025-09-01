export default function Footer(){
    return(
        <div>
            {/* Responsive Footer - Adaptable to all screen sizes */}
            <div className="w-full h-auto min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] 2xl:min-h-[580px] 3xl:min-h-[600px] px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 2xl:ml-120">
                
                <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-7xl 3xl:max-w-7xl ml-4">
                    
                    <div className="w-full h-auto min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] 2xl:min-h-[480px] 3xl:min-h-[500px] bg-amber-950 ml-0 md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-9 3xl:ml-9 mt-8 md:mt-12 lg:mt-16 xl:mt-18 2xl:mt-20 3xl:mt-20 rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-2xl p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-12 3xl:p-12">
                        
                        {/* Footer Content - Responsive grid layout */}
                        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row  2xl:flex-row 3xl:flex-row text-white gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-32 3xl:gap-40 ml-0 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-20 3xl:ml-20">
                            
                            {/* Company Section */}
                            <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-15 2xl:mt-15 3xl:mt-15">
                                <h1 className="text-sm md:text-base lg:text-[16px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[16px] manrope font-medium mb-4 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-6 3xl:mb-6">Company</h1>
                                <div className="space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-3 3xl:space-y-3">
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">About</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Bedroom</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Franchise</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Life at HUB</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Career</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact us</p>
                                </div>
                            </div>
                            
                            {/* Services Section */}
                            <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-15 2xl:mt-15 3xl:mt-15">
                                <h1 className="text-sm md:text-base lg:text-[16px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[16px] manrope font-medium mb-4 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-6 3xl:mb-6">Services</h1>
                                <div className="space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-3 3xl:space-y-3">
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">About</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Bedroom</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Franchise</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Life at HUB</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Career</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact us</p>
                                </div>
                            </div>
                            
                            {/* Other Section */}
                            <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-15 2xl:mt-15 3xl:mt-15">
                                <h1 className="text-sm md:text-base lg:text-[16px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[16px] manrope font-medium mb-4 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-6 3xl:mb-6">Other</h1>
                                <div className="space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-3 3xl:space-y-3">
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">About</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Bedroom</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Franchise</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Life at HUB</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Career</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact us</p>
                                </div>
                            </div>
                            
                            {/* Connect Us Section */}
                            <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-15 2xl:mt-15 3xl:mt-15">
                                <h1 className="text-sm md:text-base lg:text-[16px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[16px] manrope font-medium mb-4 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-6 3xl:mb-6">Connect Us</h1>
                                <div className="space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-3 3xl:space-y-3">
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">About</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Bedroom</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Franchise</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Life at HUB</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Career</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact us</p>
                                </div>
                            </div>
                            
                            {/* Company Section (Duplicate - can be customized) */}
                            <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-15 2xl:mt-15 3xl:mt-15">
                                <h1 className="text-sm md:text-base lg:text-[16px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[16px] manrope font-medium mb-4 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-6 3xl:mb-6">Company</h1>
                                <div className="space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-3 3xl:space-y-3">
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">About</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Modular Kitchen</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Bedroom</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Franchise</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Life at HUB</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Career</p>
                                    <p className="text-xs md:text-sm lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[14px] manrope-medium hover:text-teal-200 transition-colors duration-300 cursor-pointer">Contact us</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}