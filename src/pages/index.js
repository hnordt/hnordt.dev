import React from "react"
import Layout from "components/Layout"

export default function Home() {
  return (
    <Layout title="Home">
      <div className="text-center mx-auto max-w-screen-xl py-20 px-10">
        <h1 className="text-4xl tracking-tight leading-none font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Heliton Nordt
        </h1>
        <p className="text-xl text-gray-500 mx-auto max-w-2xl mt-5">
          Software engineer experienced in React, React Native, and Redux
        </p>
      </div>
      <div className="border-t border-b border-cool-gray-200 bg-cool-gray-100 py-20 px-10 flex justify-center">
        <article className="prose">
          <h2>About</h2>
          <p>Heliton Nordt is a software engineer.</p>
          <p>
            Strong in design and business problem-solving skills. Expert in
            React, React Native, Redux, Statecharts, Next.js, Firebase, complex
            product behavior, and data normalization.
          </p>
          <p>
            Skilled in developing requirements specifications, user
            documentation, architectural research and project management.
          </p>
          <h2>Skills</h2>
          <p>
            HTML5, CSS3, JavaScript, TypeScript, Node.js, SASS/SCSS, Angular,
            Vue.js, Gatsby, REST, GraphQL, Firestore, Electron, Chrome
            Extensions, UI/UX design, SEO, unit testing, integration testing,
            E2E testing, Git, Agile, Scrum.
          </p>
        </article>
      </div>
    </Layout>
  )
}
