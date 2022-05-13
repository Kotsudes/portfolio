import type { NextPage } from 'next'
import Header from "../components/header"
import HomePage from "./HomePage"
import About from './About'



const Home: NextPage = () => {
  return (
    <div className="h-full">
      <Header/>

      <HomePage/>

      <About/>

      <div id="Experience" className="h-screen bg-blue-900">

      </div>

      <div id="Works" className="h-screen bg-white">

      </div>

    </div>
  )
}

export default Home
