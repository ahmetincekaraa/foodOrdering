import Carousel from "@/components/Carousel"
import Campaigns from "@/components/Campaigns"
import MenuWrapper from "@/components/product/MenuWrapper"
import About from "@/components/About"
import Rezervation from "@/components/Rezervation"

const page = () => {
  return (
    <div>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Rezervation/>
       </div>
  )
}

export default page