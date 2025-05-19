function Informations() {
    return (
        <div className="flex justify-center">
            <div className="bg-a w-[1280px] h-[442px]">
                <div className="flex-col justify-center py-20 px-80">
                     <h1 className="font-inter font-semibold text-5xl">Deliciousness in your inbox</h1>
                     <span className="font-inter font-normal text-base text-black/60 flex justify-center pt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa quis sed </span>
                     <span className="font-inter font-normal text-base text-black/60 flex justify-center">incidunt at officiis, voluptatum consectetur maxime rem harum.</span>
                </div>
                <div className="bg-white w-[480px] h-[80px] flex justify-between mx-[400px] rounded-3xl">
                    <input type="email" className="font-inter font-medium text-sm text-black/40 pl-8 outline-none" placeholder="Your email address..." />
                    <a href="#" className="flex items-center">
                        <button className="bg-black w-[160px] h-[60px] font-inter font-semibold text-sm text-white rounded-2xl mr-2.5">Subscribe</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Informations