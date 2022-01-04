

export default function About(){
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-frow md:w-1/2 lg:pr-24 ms:pr-16 flex flex-col ms:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Sagarika! 
                    </h1> 
<<<<<<< HEAD
                    <p className="flex justify-center text-white">
=======
                    <p>
>>>>>>> parent of 08ce1ecb (centered about text and linked resume properly)
                        I am a Computer Engineering student at the University of Toronto and an aspiring software engineer. 
                    </p>
                    <div className="flex justify-center" style="margin-top: 50px;">
                        <a     
                            href='#contact'
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                            </a>
                        <a
<<<<<<< HEAD
                            href="./resume.pdf"
                            className="ml-4 inline-flex text-gray-400 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg">
=======
                            href="#./resume.pdf"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
>>>>>>> parent of 08ce1ecb (centered about text and linked resume properly)
                            Resume
                        </a>                  
                    </div>
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