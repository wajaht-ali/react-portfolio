import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from 'react-icons/ai';
const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>TechStar</h1>
                    <p>Your problems need a digital Solution.</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase solving ability in children.
                    </p>
                </div>
            </div>


            <div className="home3" id='about'>
                <div>
                    <h1>Who I am?</h1>
                    <p>As a front-end web developer, I am passionate about creating attractive and visually appealing websites that offer an exceptional user experience. I am skillful in HTML, CSS, and JavaScript, with a good understanding of the principles of responsive web design. I have experience with modern front-facing frameworks like React and Angular. I also know how to work with various design tools like Sketch and Figma to create wireframes and prototypes. With my excellent communication skills and attention to detail, I am committed to high-quality work that exceeds client expectations.</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.3s",
                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: "0.5s",
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay: "0.7s",
                    }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay: "1s",
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
                </div>
            </div>
        </>
    )
}

export default Home