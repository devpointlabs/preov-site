// stack all Home layout components here 

import React from "react"
// import axios from "axios"
import HomeHero from "./HomeHero"
import UnderHero from "./UnderHero"
import OurStory from "./OurStory"
// import { Container, } from "semantic-ui-react"

const Home = () => (
  <>
    <HomeHero />
    <UnderHero />
    <OurStory />
  </>
)

export default Home;