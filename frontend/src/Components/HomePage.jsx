import React from 'react';
// import '../App.css';

function HomePage() {
    return (
        <>
            <div className="w-[100%] h-screen overflow-hidden   relative">
                <img
                    src="https://wallpapercave.com/wp/wp4323461.png"
                    className="absolute top-0 left-0 w-full  h-full object-cover object-right sm:object-cover lg:w-100 lg:h-100"
                    alt=""
                />
                <div className="relative md:bottom-7 md:left-mb-5 z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
                    <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
                        <span className="uppercase text-white text-xs font-bold mb-2 block">WE ARE HERE FOR YOU</span>
                        <h1 className="text-white font-extrabold text-5xl mb-8">Donate Blood, Save Lives</h1>
                        <p className="text-stone-100 text-base">
                            Your blood donation can help patients in need and make a significant impact on their lives. Join us today.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mb-8 mt-8">
              <iframe
                width="900"
                height="400"
                src={`https://www.youtube.com/embed/oXRVHusvcMU?autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
        </>
    );
}

export default HomePage;
