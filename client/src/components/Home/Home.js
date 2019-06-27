// stack all Home layout components here 
import React from "react"
import HomeHero from "./HomeHero"
import UnderHero from "./UnderHero"
import OurStory from "./OurStory"
import OurTech from "./OurTech"

const Home = () => (
  <>
    <HomeHero />
    <UnderHero />
    <OurStory />
    <OurTech />
  </>
)

export default Home;