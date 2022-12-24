import {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"

const stuffAboutMe = Object.freeze([
  {id: 1, title: "Based in Goteborg Sweden"},
  {id: 2, title: "Like movies"},
  {id: 3, title: "Endurance freak"},
  {id: 4, title: "Loves to create things (programming) "},
  {id: 5, title: "Loves asian food"},
  {id: 6, title: "Football fan"},
])

export default function AboutPage() {
  return (
    <Page metaData={{title: "About Marcell Ciszek Druzynski"}}>
      <section>
        <h1>About</h1>
        <strong>Software developer that loves to build/create stuff</strong>
        <p>
          I am a software developer born and raised in Goteborg Sweden.
          Describing myself I would say I am simple person, nothing fancy about
          me. I love learning new things and sharing them with my friends and
          community, that is one reason why I writing here at my blog.
          Programming is what I love to do and want to become better for each
          day, to add another dimension into my toolbox writing about what I
          know and currently learning is another reason why I write here at m
          blog..
        </p>
        <ul>
          {stuffAboutMe.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </section>
    </Page>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout styles="flex">{page}</Layout>
}
