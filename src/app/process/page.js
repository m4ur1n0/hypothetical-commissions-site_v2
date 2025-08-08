import React from 'react'

export async function generateMetadata({ params }) {
  return {
    title: "My Process: Theo Maurino"
  };
}

const page = () => {
  return (
    <>
    {/* <!-- ACTUAL MAIN CONTENT OF THE PAGE --> */}
        <main>
            {/* <!-- INTENTIONALLY GOING TO LEAVE THIS PAGE TEXT-LESS, IT IS MEANT TO JUST SHOW TECHNOLOGIES --> */}

            <div id="list-of-skills">
                {/* <!-- once we get into javascript, each of these will do something *special* but for now, i'm not even going to link to the external sites--> */}

                <img src="assets/vectors/python.svg" className="skills-logo" alt="Python logo" />
                <img src="assets/vectors/cpp.svg" className="skills-logo" alt="C++ logo" />
                <img src="assets/vectors/react.svg" className="skills-logo" alt="React logo" />
                <img src="assets/vectors/javascript.svg" className="skills-logo" alt="JavaScript logo" />
                <img src="assets/vectors/html.svg" className="skills-logo" alt="HTML logo" />
                <img src="assets/vectors/css.svg" className="skills-logo" alt="CSS logo" />
                <img src="assets/vectors/tailwind.svg" className="skills-logo" alt="Tailwind logo" />
                <img src="assets/vectors/nextjs.svg" className="skills-logo" alt="NextJS logo" />
                <img src="assets/vectors/vue.svg" className="skills-logo" alt="Vue logo" />
                <img src="assets/vectors/nodejs.svg" className="skills-logo" alt="NodeJS logo" />
                <img src="assets/vectors/c.svg" className="skills-logo" alt="C logo" />
                <img src="assets/vectors/java.svg" className="skills-logo" alt="Java logo" />
                <img src="assets/vectors/git.svg" className="skills-logo" alt="Git logo" />
                <img src="assets/vectors/aws.svg" className="skills-logo" alt="AWS logo" />
                <img src="assets/vectors/firebase.svg" className="skills-logo" alt="Firebase logo" />
                <img src="assets/vectors/typescript.svg" className="skills-logo" alt="TypeScript logo" />
                <img src="assets/vectors/sql.svg" className="skills-logo" alt="SQL logo" />
                <img src="assets/vectors/linux.svg" className="skills-logo" alt="Linux logo" />


            </div>
            

        </main>
        {/* <script src="scripts/customizer.js" defer></script> */}
    </>
  )
}

export default page
