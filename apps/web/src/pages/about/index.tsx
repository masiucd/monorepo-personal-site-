import {AnimatePresence, motion} from "framer-motion"
import {useMediaQuery} from "lib"
import Image from "next/image"
import {ReactElement} from "react"
import {useInView} from "react-intersection-observer"

import Page from "~/components/common/page"
import Title from "~/components/common/title"
import Layout from "~/components/layout"

const AnimatedImage = motion(Image)

const stuffAboutMe = Object.freeze([
  {id: 1, title: "Based in Goteborg Sweden 🇸🇪"},
  {id: 2, title: "Movie lover 🎬"},
  {id: 3, title: "Endurance freak 🏃"},
  {id: 4, title: "Tech nerd 🧑‍💻"},
  {id: 5, title: "Loves asian food 🍜"},
  {id: 6, title: "Football supporter ⚽"},
])

type Props = {
  text: string
}
function Span({text}: Props) {
  return <span className="border-b-2 border-blue-500 ">{text}</span>
}

const sideVariants = {
  closed: {
    opacity: 0.7,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

const itemVariants = {
  closed: {
    opacity: 0,
    transition: {duration: 0.5},
  },
  open: {opacity: 1, transition: {duration: 0.5}},
}

export default function AboutPage() {
  const {ref, inView} = useInView({threshold: 0.5})
  const matches = useMediaQuery("(min-width: 768px)")

  return (
    <Page metaData={{title: "About Marcell Ciszek Druzynski"}}>
      <Title>
        <h1 className="border-b-2 border-blue-500 inline-block ml-5 md:ml-0 md:pl-0 ">
          {matches ? "Marcell Ciszek Druzynski" : "Marcell.CD"}
        </h1>
      </Title>
      <section className="grid grid-cols-1  gap-2 p-2 md:p-1 dark:prose-invert prose prose-stone">
        <AnimatedImage
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.2}}
          className="border-2 border-blue-500 rounded-md"
          src="/images/me-th.jpg"
          alt="me in the ring corner"
          width="900"
          height="100"
          priority
        />
        <div className="px-3 py-1 md:px-0 md:py-0">
          <motion.strong
            className="text-xl block"
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.2}}
          >
            Hello 👋 I am <Span text="Marcell" /> Ciszek Druzynski! <br />
            and I&apos;m a software developer born and raised in Goteborg Sweden
            with a passion for creating awesome things that other can enjoy. I
            love to learn and discover all things related to{" "}
            <Span text="front-end" /> and <Span text="back-end" /> development.
          </motion.strong>
          <br />
          <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.2}}
          >
            <h2>
              <Span text="Short about me" />
            </h2>
            <p>
              When I&apos;m not coding, you can usually find me running long
              runs 🏃🏻‍♂️ on the streets, cooking up a storm in the kitchen,
              <strong>(asian food is the best)</strong>, watching movies and
              eating some delicious thai papaya salad(som-tam)🇹🇭.
            </p>
            <p>
              I have a love for all things tech and a love for problem-solving
              where I&apos;m always looking for new and exciting ways to push
              the boundaries of what&apos;s possible. Whether I&apos;m working
              on a new app, website, or software project, I&apos;m always eager
              to learn and grow as a developer. Programming/developing is what I
              love to do, to create new software and to help others through
              software is my passion.
            </p>
            <p>
              I&apos;m a big believer in the power of teamwork, and I love
              collaborating with other talented individuals to bring great ideas
              to life.
            </p>
            <p>
              Hope you can learn something from my site and feel welcome to
              contribute if you like!
            </p>
            <h3 className="font-black inline-block" ref={ref}>
              <Span text="Stuff about me" />
            </h3>
          </motion.div>
          <AnimatePresence>
            {inView && (
              <motion.ul
                className="list-disc"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {stuffAboutMe.map((item) => (
                  <motion.li
                    className="pb-1"
                    key={item.id}
                    variants={itemVariants}
                  >
                    {item.title}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Page>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
