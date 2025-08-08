import React from 'react'

export async function generateMetadata({ params }) {
  return {
    title: "Demos: Theo Maurino"
  };
}

const page = () => {
  return (
    <>
    {/* <!-- ACTUAL MAIN CONTENT OF THE PAGE --> */}
        <main>

            <section id="demos-title">
                <header>
                    <h1>Previous Projects and Commissions</h1>
                    <p>Something catch your eye? Feel free to visit any of the sites below!</p>
                </header>
            </section>
            
            {/* <!-- THIS IS GOING TO BE A BROAD LIST OF CARDS WITH IMAGES AND DESCRIPTIONS OF SOME OF MY PROJECTS --> */}
            <section id="list-of-demos">

                {/* <!--https://algorithm-visualizers-three.vercel.app/--> */}
                <a href="https://algorithm-visualizers-three.vercel.app/" target="_blank" className="demo-card-link">
                    <div className="demo-card">
                        <img src="assets/images/algorithm-visualizer.png" alt="Algorithm visualizer by Theo Maurino." />
                        <h3>Algorithm Visualizer</h3>
                        <p>Visualize how different pathfinding, sorting, and graph algorithms work in real time.</p>
                    </div>
                </a>

                {/* <!--https://gymbuddies-20bbf.web.app/--> */}
                <a href="https://gymbuddies-20bbf.web.app/" target="_blank" className="demo-card-link">
                    <div className="demo-card">
                        <img src="assets/images/gym-buddies.png" alt="Social media app GymBuddies by Theo Maurino et al." />
                        <h3>GymBuddies</h3>
                        <p>Get some exercise while getting social! Inspire your friends and flex your #gains.</p>
                    </div>
                </a>

                {/* <!--https://www.locketcyber.com/--> */}
                <a href="https://www.locketcyber.com/" target="_blank" className="demo-card-link">
                    <div className="demo-card">
                        <img src="assets/images/locket.png" alt="Website for Evanston-based startup Locket Cybersecurity." />
                        <h3>Locket Cybersecurity Website</h3>
                        <p>Website for the cybersecurity consulting and education startup, Locket Cybersecurity.</p>
                    </div>
                </a>

                {/* <!--https://m4ur1n0.github.io/catan_board_generator/--> */}
                <a href="https://m4ur1n0.github.io/catan_board_generator/" target="_blank" className="demo-card-link">
                    <div className="demo-card">
                        <img src="assets/images/catan.png" alt="Web app to generate balanced setups for the game Catan." />
                        <h3>Catan Board Generator</h3>
                        <p>A simple web app to generate balanced playing boards for the popular board game Catan.</p>
                    </div>
                </a>

                {/* <!--https://www.theomaurino.com--> */}
                <a href="https://www.theomaurino.com" target="_blank" className="demo-card-link">
                    <div className="demo-card">
                        <img src="assets/images/portfolio.png" alt="Theo Maurino's personal portfolio site." />
                        <h3>Theo Maurino&apos;s Personal Portfolio</h3>
                        <p>A web page to display my past personal projects, work history, and course history.</p>
                    </div>
                </a>

            </section>

        </main>
        {/* <script src="scripts/customizer.js" defer></script> */}
    </>
  )
}

export default page
