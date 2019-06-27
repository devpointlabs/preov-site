// stack all Home layout components here 
import React from "react"
import HomeHero from "./HomeHero"
import UnderHero from "./UnderHero"
import OurStory from "./OurStory"
import OurTech from "./OurTech"
import GetInTouch from "./GetInTouch"

const Home = () => (
  <>
    <HomeHero />
    <UnderHero />
    <OurStory />
    <OurTech />
    <GetInTouch />
  </>
)

export default Home;