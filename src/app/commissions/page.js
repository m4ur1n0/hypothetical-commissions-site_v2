import React from 'react'
import CommissionsForm from '../components/CommissionsForm';

export async function generateMetadata({ params }) {
  return {
    title: "Commission Form: Theo Maurino"
  };
}

const page = () => {



  return (
      <main id="commissions-page">
          
          {/* <!-- title and info followed by a card with an input form --> */}
          <section id="commissions-title">
              <h1>Commissions</h1>
              <p>Are you liking my work? You should probably pay me to build something for you...</p>
          </section>

          <section id="commissions-intake-form-section">

              <CommissionsForm />

          </section>

      </main>
  )
}

export default page
