import React, { useState } from "react";
import data from "./data";
export default function About(){
    const [showMore, setShowMore] = useState(false);
    const {text} = data;
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-frow md:w-1/2 lg:pr-24 ms:pr-16 flex flex-col ms:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-900">
                        Hi, I'm Sagarika! 
                    </h1> 
                    <p className="flex text-justify">
                            I am a Computer Engineering student at the University of Toronto and seeking internships for Summer 2022.
                    </p>
                    <p>
                        {showMore ? text: `${text.substring(0,250)}`};
                        <button className="btn" onClick={() => setShowMore(!showMore)}>
                            {showMore ? "Read Less": "Read more"}
                        </button>                   
                    </p>

                </div>
                <div className="lg:max-w-lg lg:w-5/6 md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="My Picture"
                        src="./pic.jpg"
                    />
                </div>
            </div>
        </section>
    );
}