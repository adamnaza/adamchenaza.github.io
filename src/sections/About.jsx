import React from 'react'

const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext" >
                                Hi, I'm Adam.
                            </p>
                            <p className="grid-subtext">
                                With over 5 years of experience, I have honed my skills in Data Analytics, Machine Learning and Software Engineering,
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain " />
                        <div>
                            <p className="grid-headtext"> Tech Stack </p>
                            <p className="grid-subtext"> I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems, Python and Tensorflow for ML and Ai. </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className=" rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">

                        </div>
                    </div>      

                </div>

                <div className = "col-span1 xl:row-span-3">
                    <div className="grid-container"> 
                        <h3 className="grid-headtext"> College Life</h3>
                        <p className='grid-subtext'> progress </p>
                    </div>
                </div>

                <div className = "col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <h3 className="grid-headtext"> My Journey </h3>
                        <p className="grid-subtext"> From a curious student to a passionate developer </p>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <h3 className= "grid-headtext"> Certifications </h3>
                        <p className = "grid-subtext"> </p>
                    </div>
                </div>

                <div>
                    
                </div>


            </div>
        </section>
    )
}
export default About
