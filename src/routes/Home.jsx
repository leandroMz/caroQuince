import { Celebration } from "../components/Celebration"
import { ConfimAsist } from "../components/ConfimAsist"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { MainImage } from "../components/MainImage"
import { SecondaryImages } from "../components/SecondaryImages"
import { Time } from "../components/Time"

export const Home = () => {
  return (
    <div>
        <MainImage/>
        <Header/>
        <Time/>
        <Celebration/>
        <SecondaryImages/>
        <ConfimAsist/>
        <Footer/>
    </div>
  )
}