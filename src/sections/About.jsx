import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button.jsx'
import { useState } from 'react';


const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('adamchenaza@gmail.com');
        // try to make seperate button for LinkedIn
        // but it is not working, so I just use the same function
        // for both email and LinkedIn
        // if you want to use different function, you can just copy this function and change the
        // text to the LinkedIn URL
        // but I think it is not necessary, so I just use the same function
        // for both email and LinkedIn
        //
        navigator.clipboard.writeText('https://www.linkedin.com/in/adamchenaza/');

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

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
                            <Globe  
                                height={326}
                                width={326}
                                backgroundColor= "rgba(0, 0, 0, 0)"
                                backgroundImageOpacity = {0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                
                                    lat :  41.0233, lng :  -77.1945,
                                    text : "I'm Here!",
                                    color: 'red',
                                    size: 50
                                }]}
                            />
                        </div>
                        <div>
                            <h3 className = "grid-headtext"> Location </h3>
                            <p className = "grid-subtext"> I'm based in Pennsylvania currently finishing my senior year undergraduate program for 
                                Computer Science with Data Science focus at the Pennsylvania State University. </p>
                            <Button name = "Contact Me" isBeam containerClass = " w-full mt-10 " />
                        </div>
                    </div>      
                </div>

                <div className = "xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[236px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext"> My Passion for coding and Machine Learning </p>
                            <p className = "grid-subtext"> I love solving real-world problems and building intelligent solutions with code and Machine Learning.
                                Not just for the sake of it, but to make a real impact in people's lives. My passion lies in exploring how technology can be used to create meaningful change and improve lives.
                                I am always eager to learn new tools and frameworks, and I enjoy collaborating with others to turn ideas into significant products.
                            </p>
                        </div>
                    </div>
                </div>

                <div className = "xl:col-span1 xl:row-span-3">
                    <div className="grid-container"> 
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className = " space-y-2">
                            <p className = "grid-subtext text-center"> Contact me  </p>
                            <div className = "copy-container" onClick={handleCopy} > 
                                <img src = {hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt = "copy" />
                                <p className ="lg:text-xl md:text-xl font-medium text-gray_gradient text-white"> Gmail</p>
                            </div>
                            <div className = "copy-container" onClick={handleCopy} > 
                                <img src = {hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt = "copy" />
                                <p className ="lg:text-xl md:text-xl font-medium text-gray_gradient text-white"> linkedIn</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className = "xl:col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <h3 className="grid-headtext"> My Journey </h3>
                        <p className="grid-subtext"> From a curious student to a passionate developer </p>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
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
