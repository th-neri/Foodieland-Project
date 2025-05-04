import { PiTimerFill } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";

function Recipes() {
    return (
        <div className="">
              <div className="pt-44 pb-24 flex-col items-center">
                  <h1 className="flex justify-center font-inter font-semibold text-5xl pb-6">Simple and tasty recipes</h1>
                  <span className="flex justify-center font-inter font-normal text-base text-black/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem commodi at alias. Laboriosam exercitationem</span>
                  <span className="flex justify-center font-inter font-normal text-base text-black/60">magni voluptates corporis, consequatur dolorum dignissimos.</span>
              </div>

              <div className="pb-10 flex items-center justify-center gap-10">
                <a href="#">
                <div className="bg-a w-[400px] h-[434px] pt-4 px-4 rounded-3xl">
                    <img src="./src/assets/recipe-1.png" alt="" />
                    <h1 className="pt-6 pl-4 font-inter font-semibold text-2xl">Big and Juicy Wagyu Beef Cheeseburger</h1>
                    <div className="pt-6 pl-4 flex gap-6">
                        <div className="flex items-center gap-2.5">
                           <PiTimerFill size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">30 Minutes</h1>
                        </div>
                        <div className="flex items-center gap-2.5">
                           <GiKnifeFork size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">Snack</h1>
                        </div>
                    </div>
                </div>
                </a>
                
                <a href="#">
                <div className="bg-a w-[400px] h-[434px] pt-4 px-4 rounded-3xl">
                    <img src="./src/assets/recipe-2.png" alt="" />
                    <h1 className="pt-6 pl-4 font-inter font-semibold text-2xl">Fresh Lime Roasted Salmon with Ginger Sauce</h1>
                    <div className="pt-6 pl-4 flex gap-6">
                        <div className="flex items-center gap-2.5">
                           <PiTimerFill size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">30 Minutes</h1>
                        </div>
                        <div className="flex items-center gap-2.5">
                           <GiKnifeFork size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">Fish</h1>
                        </div>
                    </div>
                </div>
                </a>
                
                <a href="#">
                <div className="bg-a w-[400px] h-[434px] pt-4 px-4 rounded-3xl">
                    <img src="./src/assets/recipe-3.png" alt="" />
                    <h1 className="pt-6 pl-4 font-inter font-semibold text-2xl">Strawberry Oatmeal Pancake with Honey Syrup</h1>
                    <div className="pt-6 pl-4 flex gap-6">
                        <div className="flex items-center gap-2.5">
                           <PiTimerFill size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">30 Minutes</h1>
                        </div>
                        <div className="flex items-center gap-2.5">
                           <GiKnifeFork size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">Breakfast</h1>
                        </div>
                    </div>
                </div>
                </a>

                
              </div>

              <div className="pb-10 flex items-center justify-center gap-10">
                <a href="#">
                <div className="bg-a w-[400px] h-[434px] pt-4 px-4 rounded-3xl">
                    <img src="./src/assets/recipe-4.png" alt="" />
                    <h1 className="pt-6 pl-4 font-inter font-semibold text-2xl">Fresh and Healthy Mixed Mayonnaise Salad</h1>
                    <div className="pt-6 pl-4 flex gap-6">
                        <div className="flex items-center gap-2.5">
                           <PiTimerFill size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">30 Minutes</h1>
                        </div>
                        <div className="flex items-center gap-2.5">
                           <GiKnifeFork size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">Healthy</h1>
                        </div>
                    </div>
                </div>
                </a>
                
                <a href="#">
                <div className="bg-a w-[400px] h-[434px] pt-4 px-4 rounded-3xl">
                    <img src="./src/assets/recipe-5.png" alt="" />
                    <h1 className="pt-6 pl-4 font-inter font-semibold text-2xl">Chicken Meatballs with Cream Cheese</h1>
                    <div className="pt-6 pl-4 flex gap-6">
                        <div className="flex items-center gap-2.5">
                           <PiTimerFill size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">30 Minutes</h1>
                        </div>
                        <div className="flex items-center gap-2.5">
                           <GiKnifeFork size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">Meat</h1>
                        </div>
                    </div>
                </div>
                </a>  
                <div className="">
                    <img className="flex min-w-[400px] min-h-[434px]" src="./src/assets/poster.png" alt="" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-10">
                <a href="#">
                <div className="bg-a w-[400px] h-[434px] pt-4 px-4 rounded-3xl">
                    <img src="./src/assets/recipe-6.png" alt="" />
                    <h1 className="pt-6 pl-4 font-inter font-semibold text-2xl">Fruity Pancake with Orange & Blueberry</h1>
                    <div className="pt-6 pl-4 flex gap-6">
                        <div className="flex items-center gap-2.5">
                           <PiTimerFill size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">30 Minutes</h1>
                        </div>
                        <div className="flex items-center gap-2.5">
                           <GiKnifeFork size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">Sweet</h1>
                        </div>
                    </div>
                </div>
                </a>
                
                <a href="#">
                <div className="bg-a w-[400px] h-[434px] pt-4 px-4 rounded-3xl">
                    <img src="./src/assets/recipe-7.png" alt="" />
                    <h1 className="pt-6 pl-4 font-inter font-semibold text-2xl">The Best Easy One Pot Chicken and Rice</h1>
                    <div className="pt-6 pl-4 flex gap-6">
                        <div className="flex items-center gap-2.5">
                           <PiTimerFill size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">30 Minutes</h1>
                        </div>
                        <div className="flex items-center gap-2.5">
                           <GiKnifeFork size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">Snack</h1>
                        </div>
                    </div>
                </div>
                </a>
                
                <a href="#">
                <div className="bg-a w-[400px] h-[434px] pt-4 px-4 rounded-3xl">
                    <img src="./src/assets/recipe-8.png" alt="" />
                    <h1 className="pt-6 pl-4 font-inter font-semibold text-2xl">The Creamiest Creamy Chicken and Bacon Pasta</h1>
                    <div className="pt-6 pl-4 flex gap-6">
                        <div className="flex items-center gap-2.5">
                           <PiTimerFill size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">30 Minutes</h1>
                        </div>
                        <div className="flex items-center gap-2.5">
                           <GiKnifeFork size={24}/>
                           <h1 className="font-inter font-medium text-sm text-black/60">Noodles</h1>
                        </div>
                    </div>
                </div>
                </a>

                
              </div>
        </div>
    )
}

export default Recipes