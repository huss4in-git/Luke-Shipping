export default function About() {
    const images = [
        "/plane.jpg",
        "/ship.jpg",
        "/cargo.jpg"
    ];

    return (
        <section className="px-1 md:px-2 py-20 md:py-30 ">

            <div className="w-full px-6 xl:px-10 2xl:px-24">

                {/* TOP SECTION */}
                <div className="grid md:grid-cols-2 md:gap-50 gap-12 items-start">

                    {/* LEFT TITLE */}
                    <div className="md:ml-7">
                        <h1
                            className="text-3xl md:text-5xl leading-tight md:whitespace-nowrap"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Your trusted partner across{" "}
                            <br className="hidden md:block" />
                            continents
                            
                        </h1>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div style={{ fontFamily: "nb-thin" }}>
                        <p className="text-[15px] text-black font-medium mb-3">
                            Fast, effective, and safe logistics solutions
                        </p>

                        <p className="text-[15px] text-black/50 leading-relaxed max-w-[520px]">
                            <span style={{color:'#FD9708'}}>Luke Shipping Co.</span> is a seasoned logistics provider with a rich history
                            spanning 11 years. Our unwavering commitment to excellence has positioned us as a
                            trusted partner for businesses seeking reliable and efficient supply chain solutions.
                            With a profound understanding of the intricate global supply chain, we offer tailored
                            logistics solutions that seamlessly integrate with your business operations. Our
                            expertise lies in providing cost-effective, time-sensitive, and secure transportation of
                            your goods from origin to destination.
                        </p>
                    </div>

                </div>

                {/* IMAGE GRID */}
                {/* <div className="grid md:grid-cols-3 gap-6">

                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden "
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-[400px] object-cover transition duration-500"
                            />
                        </div>
                    ))}

                </div> */}

            </div>

        </section>
    );
}