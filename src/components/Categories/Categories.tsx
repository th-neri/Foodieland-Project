function Categories() {
    return (
        <div className="">
             <div className="flex justify-between items-center">
                 <h1 className="font-inter font-semibold text-5xl">Categories</h1>
                 <a href="#">
                    <button className="bg-a w-48 h-14 font-inter font-semibold text-base hover:bg-black/15 rounded-2xl">View All Categories</button>
                 </a>
             </div>

             <div className="flex justify-center items-center pt-20 gap-10">
                <div className="w-44 h-52 flex flex-col items-center text-center">
                    <a href="#">
                        <img className="drop-shadow-3xl" src="./src/assets/tofu.png" alt="" />
                        <p className="pt-12 font-inter font-semibold text-lg">Breakfast</p>
                    </a>
                </div>
                
                <div className="w-44 h-52 flex flex-col items-center text-center">
                    <a href="#">
                        <img className="drop-shadow-3xl" src="./src/assets/lettuce.png" alt="" />
                        <p className="pt-12 font-inter font-semibold text-lg">Vegan</p>
                    </a>
                </div>

                <div className="w-44 h-52 flex flex-col items-center text-center">
                    <a href="#">
                        <img className="drop-shadow-3xl" src="./src/assets/meat.png" alt="" />
                        <p className="pt-12 font-inter font-semibold text-lg">Meat</p>
                    </a>
                </div>

                <div className="w-44 h-52 flex flex-col items-center text-center">
                    <a href="#">
                        <img className="drop-shadow-3xl" src="./src/assets/cake.png" alt="" />
                        <p className="pt-12 font-inter font-semibold text-lg">Dessert</p>
                    </a>
                </div>

                <div className="w-44 h-52 flex flex-col items-center text-center">
                    <a href="#">
                        <img className="drop-shadow-3xl" src="./src/assets/lunch.png" alt="" />
                        <p className="pt-12 font-inter font-semibold text-lg">Lunch</p>
                    </a>
                </div>

                <div className="w-44 h-52 flex flex-col items-center text-center">
                    <a href="#">
                        <img className="drop-shadow-3xl" src="./src/assets/chocolate.png" alt="" />
                        <p className="pt-12 font-inter font-semibold text-lg">Chocolate</p>
                    </a>
                </div>


             </div>
        </div>
    )
}

export default Categories