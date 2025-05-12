import React from "react";
import containerImage from "./assets/container.png";
import carImage from "./assets/car.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
    return (
        <body className="px-60">
            <div className="wrapper bg-[#f5f5f5]">
                {/* slide */}
                <div className="slide">
                    <img src={containerImage} alt="container" className="w-full" />
                </div>

                {/* title */}
                <div class="title flex justify-between px-8 pt-8 pb-2 items-center">
                    <p class="font-bold">CEF.CONTAINERS.CONTAINER-TITLE</p>

                    <button type="button" class="border-2 border-gray-300 rounded-lg px-2 py-1 flex items-center">
                        <i class="fa-solid fa-clock text-blue-500 pr-2"></i>
                        <p>cef.containers.timer</p>
                    </button>
                </div>

                {/* price */}
                <div class="price flex justify-between px-8 pb-8">
                    <p class="text-gray-400">
                        cef.containers.bet-title <span class="text-black font-bold">$150 000</span>
                    </p>
                    <p class="text-gray-400">
                        cef.containers.begin-bet-title <span class="text-black font-bold">$1 400 000</span>
                    </p>
                </div>

                {/* car-grid */}
                <div class="car-grid border-t-2 border-gray-300 px-8 py-8 overflow-y-auto h-96">
                    <p class="pb-4 text-gray-400">cef.containers.container-content</p>

                    <div class="flex flex-wrap gap-4">
                        <div class="car-item relative w-[32%]">
                            <div class="indicator absolute h-1 bg-blue-400 left-4 top-4 w-6 rounded-lg"></div>
                            <img src={carImage} alt="car" class="border-gray-300 rounded-lg border-2 w-full" />
                            <p class="absolute bottom-2 left-28 text-gray-400 font-bold">amgone</p>
                        </div>

                        <div class="car-item relative w-[32%]">
                            <div class="indicator absolute h-1 bg-red-400 left-4 top-4 w-6 rounded-lg"></div>
                            <img src={carImage} alt="car" class="border-gray-300 rounded-lg border-2 w-full" />
                            <p class="absolute bottom-2 left-28 text-gray-400 font-bold">amgone</p>
                        </div>

                        <div class="car-item relative w-[32%]">
                            <div class="indicator absolute h-1 bg-yellow-400 left-4 top-4 w-6 rounded-lg"></div>
                            <img src={carImage} alt="car" class="border-gray-300 rounded-lg border-2 w-full" />
                            <p class="absolute bottom-2 left-28 text-gray-400 font-bold">amgone</p>
                        </div>

                        <div class="car-item relative w-[32%]">
                            <div class="indicator absolute h-1 bg-violet-400 left-4 top-4 w-6 rounded-lg"></div>
                            <img src={carImage} alt="car" class="border-gray-300 rounded-lg border-2 w-full" />
                            <p class="absolute bottom-2 left-28 text-gray-400 font-bold">amgone</p>
                        </div>

                        <div class="car-item relative w-[32%]">
                            <div class="indicator absolute h-1 bg-orange-400 left-4 top-4 w-6 rounded-lg"></div>
                            <img src={carImage} alt="car" class="border-gray-300 rounded-lg border-2 w-full" />
                            <p class="absolute bottom-2 left-28 text-gray-400 font-bold">amgone</p>
                        </div>

                        <div class="car-item relative w-[32%]">
                            <div class="indicator absolute h-1 bg-lime-400 left-4 top-4 w-6 rounded-lg"></div>
                            <img src={carImage} alt="car" class="border-gray-300 rounded-lg border-2 w-full" />
                            <p class="absolute bottom-2 left-28 text-gray-400 font-bold">amgone</p>
                        </div>

                        <div class="car-item relative w-[32%]">
                            <div class="indicator absolute h-1 bg-gray-400 left-4 top-4 w-6 rounded-lg"></div>
                            <img src={carImage} alt="car" class="border-gray-300 rounded-lg border-2 w-full" />
                            <p class="absolute bottom-2 left-28 text-gray-400 font-bold">amgone</p>
                        </div>

                        <div class="car-item relative w-[32%]">
                            <div class="indicator absolute h-1 bg-teal-400 left-4 top-4 w-6 rounded-lg"></div>
                            <img src={carImage} alt="car" class="border-gray-300 rounded-lg border-2 w-full" />
                            <p class="absolute bottom-2 left-28 text-gray-400 font-bold">amgone</p>
                        </div>

                        <div class="car-item relative w-[32%]">
                            <div class="indicator absolute h-1 bg-cyan-400 left-4 top-4 w-6 rounded-lg"></div>
                            <img src={carImage} alt="car" class="border-gray-300 rounded-lg border-2 w-full" />
                            <p class="absolute bottom-2 left-28 text-gray-400 font-bold">amgone</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default App;
