

const Banner = () => {
    return (
        <div className=" w-11/12 h-[60vh] md:h-[80vh] lg;h-[90vh] mx-auto bg-blue-50 mt-10">
            <div className=" mx-20 flex-row lg:flex justify-center gap-16 items-center pt-6">
            <div className="pt-4">
                <h2 className=" text-3xl md:text-3xl lg:text-5xl font-bold text-center ">Health And Wellness Events <br/> Management</h2>
            </div>
            <div className="">
            <img className=" w-[1500px] h-3/4" src="https://i.ibb.co/84RYRVR/banner-img.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;