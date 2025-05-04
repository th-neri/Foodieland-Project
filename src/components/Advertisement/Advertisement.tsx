function Advertisement() {
    return (
        <div className="">
            <section className="flex justify-center">
                <div className="flex w-[1280px] h-[597px]">
                    <div className="">
                        <div className="flex-col justify-center pt-48">
                            <h1 className="font-inter font-semibold text-5xl pb-6">Everyone can be a <br /> chef in their own kitchen</h1>
                            <h2 className="font-inter font-normal text-base text-black/60 pb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                <br /> Ut explicabo temporibus, pariatur facere aut nesciunt. Ratione
                                <br /> nihil a quae est?</h2>
                            <a href="#">
                                <button className="bg-black w-44 h-14 items-center font-inter font-semibold text-sm text-white rounded-2xl">Learn more</button>
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <img src="./src/assets/chef-pic.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Advertisement