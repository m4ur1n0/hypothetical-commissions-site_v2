
import Carousel from "./components/Carousel";
import ImageWithZoom from "./components/ImageWithZoom";
import "./globals.css";


export async function generateMetadata({ params }) {
  return {
    title: "Home: Theo Maurino"
  };
}


export default function Home() {

    const imageUrls = [
        "/assets/images/algorithm-visualizer.png",
        "/assets/images/catan.png",
        "/assets/images/gym-buddies.png",
        "/assets/images/locket.png",
        "/assets/images/portfolio.png",
    ]

  return (
    <>
       {/* <!-- ACTUAL MAIN CONTENT OF THE PAGE --> */}
        <main>
            
            {/* <!-- THE HEADER SECTION -- IINTRODUCTION TO THE PAGE --> */}
            <section id="entrance">
                <header>

                    {/* <!-- EVENTUALLY WE'LL MAKE THIS A CAROUSEL -- RN JUST LOAD AN IMAGE --> */}
                    {/* <!-- <img src="https://placehold.co/600x400" alt="An example of a product or project built by me!"> --> */}
                    {/* <img src="assets/images/catan.png" alt="An example of a simple product or project built by Theo Maurino!" /> */}

                    <Carousel images={imageUrls} />


                    <a href="#bio-section">
                        <h1>Theo Maurino, demos and commissions</h1>
                    </a>
                    <p>Freelance fullstack engineer</p>

                </header>
            </section>

            {/* <!-- BIO SECTION, DESCRIBE ME AND MY SHIT --> */}
            <section id="bio-section">

                <div id="bio-section-content">
                    <div id="bio-section-left-half">
                        <h2 id="bio-name">Theo Maurino</h2>
                        <p>
                            <a id="bio-email" target="_blank" href="mailto:thjmaurino@gmail.com">thjmaurino (at) gmail (dot) com <img src="assets/vectors/click.svg" alt="clicking icon" id="clicking-icon" /></a>
                        </p>

                        {/* <!-- SOME GENERAL INFORMATION ABOUT ME --> */}
                        <p id="bio-info">
                            Hi! My name is Theo Maurino, and I want to build your next software product! I'm an experienced full-stack developer, you can tell because I'm currently enrolled in an introductory level web development course. Jokes aside, I've been coding for over a decade, and I'm more than confident I can take on your next project! Don't believe me? Check out some of my other projects on my <a href="demos.html">demos</a> page!
                        </p>

                        <div id="social-media-links">
                            <a target="_blank" href="https://www.twitter.com/theomaurino"><img src="/assets/vectors/twitter.svg" alt="Twitter Logo" className="social-media-logo" /></a>
                            <a target="_blank" href="https://github.com/m4ur1n0"><img src="/assets/vectors/github.svg" alt="GitHub Logo" className="social-media-logo" /></a>
                            <a target="_blank" href="https://linkedin.com/theo-maurino"><img src="/assets/vectors/linkedin.svg" alt="LinkedIn Logo" className="social-media-logo" /></a>
                        </div>
                    </div>

                    <div id="bio-section-right-half">
                        {/* <img src="/assets/images/theo-headshot.jpg" alt="A headshot of Theo Maurino" loading="lazy" /> */}
                        <ImageWithZoom src={"/assets/images/theo-headshot.jpg"} alt="A headshot of Theo Maurino" loading="lazy" />
                    </div>
                </div>

                <div id="bio-section-forward-links">
                    <a href="demos.html">
                        <button className="forward-link-button" type="button">Explore Demos</button>
                    </a>

                    <a href="commission.html">
                        <button className="forward-link-button" type="button">Commission Something</button>
                    </a>
                </div>

            </section>

        </main>
        
        {/* <script src="scripts/customizer.js" defer></script> */}
    </>
  );
}
