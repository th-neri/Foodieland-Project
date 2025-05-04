import { FaInstagram } from "react-icons/fa";

function IGPosts() {
    return (
        <div className="">
            <div className="flex justify-center">
                <div className="bg-a w-full h-[964px]">
                    <div className="pt-20">
                        <h1 className="flex justify-center font-inter font-semibold text-5xl pb-6">Check out @foodieland on Instagram</h1>
                        <span className="flex justify-center font-inter font-semibold text-base text-black/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum possimus ratione vitae. Commodi</span>
                        <span className="flex justify-center font-inter font-semibold text-base text-black/60">pariatur, nisi enim explicabo libero voluptatibus.</span>
                    </div>
                    <div className="pt-20 flex justify-center items-center gap-10">
                        <div className="">
                            <img src="./src/assets/instagram-image-1.png" alt="" />
                        </div>
                        <div className="">
                            <img src="./src/assets/instagram-image-2.png" alt="" />
                        </div>
                        <div className="">
                            <img src="./src/assets/instagram-image-3.png" alt="" />
                        </div>
                        <div className="">
                            <img src="./src/assets/instagram-image-4.png" alt="" />
                        </div>
                    </div>
                    <div className="pt-20 flex justify-center">
                        <a href="#">
                            <button className="bg-black w-56 h-14 flex items-center justify-center gap-4 rounded-2xl">
                            <h1 className="font-inter font-semibold text-sm text-white">Visit Our Instagram</h1>
                            <FaInstagram size={22} className="text-white"/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IGPosts