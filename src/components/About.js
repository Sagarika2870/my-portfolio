

export default function About(){

    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-frow md:w-1/2 lg:pr-24 ms:pr-16 flex flex-col ms:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-900">
                        Hi, I'm Sagarika! 
                    </h1> 
                    <p className="flex text-justify space-y-2 text-indigo-700">
                            I am in my final year of Computer Engineering student at the University of Toronto and seeking new grad positions for Spring 2025.
                    </p>
                    <p className="flext text-justify text-indigo-700">
                            My long-term goal is to leverage my technical skills to contribute to the growing technology industry and improve lives.
                            Since I am still early on in my learning journey, I am participating in various opportunites to gain exposure in the programming world. 
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