import Image from "next/image"
import {ReactElement} from "react"

import Page from "~/components/common/page"
import Title from "~/components/common/title"
import Layout from "~/components/layout"

const stuffAboutMe = Object.freeze([
  {id: 1, title: "Based in Goteborg Sweden 🇸🇪"},
  {id: 2, title: "Like movies 🎬"},
  {id: 3, title: "Endurance freak 🏃"},
  {id: 4, title: "Loves to create things through programming 🧑‍💻"},
  {id: 5, title: "Loves asian food 🍜"},
  {id: 6, title: "Football fan ⚽"},
])

type Props = {
  text: string
}
function Span({text}: Props) {
  return <span className="border-b-2 border-blue-500 ">{text}</span>
}

export default function AboutPage() {
  return (
    <Page metaData={{title: "About Marcell Ciszek Druzynski"}}>
      <Title>
        <h1 className="border-b-2 border-blue-500 inline-block pl-5 md:pl-0 ">
          About me
        </h1>
      </Title>
      <section className="grid grid-cols-1  gap-2 p-2 md:p-1 dark:prose-invert prose prose-stone">
        <Image
          className="border-2 border-blue-500 rounded-md"
          src="/images/jp.jpg"
          alt="me"
          width="900"
          height="100"
        />
        <div className="px-3 py-1 md:px-0 md:py-0">
          <strong className="text-xl">
            Hello 👋 I am <Span text="Marcell" /> Ciszek Druzynski! <br />I am a
            software developer born and raised in Goteborg Sweden. I love to
            learn and discover all things related to <Span text="front-end" />{" "}
            and <Span text="back-end" /> development.
          </strong>
          <br />
          <br />
          <p>
            Describing myself I would say I am simple person, nothing fancy
            about me.
          </p>
          <p>
            Watching Movies, being active in sports like running and swimming
            are some of my hobbies.
          </p>
          <p>
            Programming/developing is what I love to do, to create new software
            that helps others is my passion.
          </p>
          <p>
            I love learning new things and sharing my knowledge with my friends
            and with the community, <br />
            that is one reason why I write here at my blog.
          </p>
          <p> To share my knowledge with you!</p>

          <p className="border-b-2 border-blue-500 font-black inline-block">
            Summery about me{" "}
          </p>
          <ul className="list-disc">
            {stuffAboutMe.map((item) => (
              <li className="pb-1" key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Page>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
