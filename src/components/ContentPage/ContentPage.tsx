import { PiTimerFill } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidRightArrowCircle } from "react-icons/bi";


function ContentPage() {
    return (
        <div className="flex justify-center">
            <section className="flex justify-center pt-20">
                <div className="bg-a w-[1280px] h-[640px] flex rounded-5xl">
                   <div className="flex-col justify-center">
                   <div className="mt-12 ml-12 bg-white w-40 h-11 flex items-center justify-center gap-3 rounded-4xl shadow-1">
                        <img src="./src/assets/image-1.png" alt="" />
                        <h1 className="font-inter font-semibold text-sm">Hot Recipes</h1>
                    </div>
                    <div className="pt-14 pl-12">
                        <h1 className="font-inter font-semibold text-6xl pb-2.5">Spicy delicious</h1>
                        <h1 className="font-inter font-semibold text-6xl pb-6">chicken wings</h1>
                        <span className="font-inter font-semibold text-base text-black/50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br> Facilis fugiat nam atque explicabo quaerat obcaecati.</span>
                    </div>
                    <div className="flex">
                        <div className="bg-black/10 w-32 h-10 mt-8 ml-12 rounded-3xl justify-center items-center flex gap-2.5 hover:bg-black/20">
                            <PiTimerFill size={24} />
                            <h1 className="font-inter font-medium text-sm text-black/80">30 Minutes</h1>
                        </div>
                        <div className="bg-black/10 w-32 h-10 mt-8 ml-12 rounded-3xl justify-center items-center flex gap-2.5 hover:bg-black/20">
                            <GiKnifeFork size={24} />
                            <h1 className="font-inter font-medium text-sm text-black/80">Chicken</h1>
                        </div>
                    </div>

                    <div className="flex mt-28 gap-28">
                        <div className="ml-12">
                            <h1 className="text-black font-inter font-bold text-base pb-2">John Smith</h1>
                            <span className="text-black/80 font-inter font-medium text-sm">15 March 2022</span>
                        </div>
                        <a href="#">
                            <button className="bg-black w-52 h-14 flex items-center justify-center gap-4 rounded-2xl">
                                <h1 className="text-white font-inter font-semibold text-sm">View Recipes</h1>
                                <BiSolidRightArrowCircle size={24} className="text-white" />
                            </button>
                        </a>
                    </div>
                   </div>
                    <div className="ml-32 bg-cover">
                        <img className="h-full" src="./src/assets/image-2.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContentPage