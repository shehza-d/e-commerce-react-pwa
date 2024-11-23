
import ProductCard from "../components/ProductCard";

import React from 'react'
import Slider from "../components/Slider";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import NewArrivalGrid from "../components/NewArrivalGrid";
import Product from "./Product";
import Footer from "../components/Footer";
import Catogory from "../components/Catogory";

export default function Home() {
  return (
    <div>
          
          
          <SectionTitle text="Today's" />
          <h3 className="heading">Flash Sales</h3>
          
          <div class="flex gap-7 font-medium text-xs">
            
            <span>Days</span><span>Hours</span><span>Mintus</span><span>Secand</span></div>
          <div class="flex gap-7 font-bold text-2xl "><span>03 <span class="text-myTheme font-medium">:</span> </span><span>23 <span class="text-myTheme font-medium">:</span> </span><span>10 <span class="text-myTheme font-medium">:</span> </span><span>56</span></div>

          <Slider className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center my-8"> </Slider>

          <Button className="h-14 w-56 mx-auto my-16">View All Products </Button>


          <SectionTitle text="Categories" />
          <h3 className="heading">Browse By Category</h3>
<Catogory/>
  {/* todo */}
          <SectionTitle text="This Month" />

          <div className="flex justify-between my-10">
        <h3 className="heading">Best Selling Products</h3>
        <Button className="h-14 w-40">View All</Button>
      </div>
      <div className="">
      <Product />
</div>

          <SectionTitle text="Our Prudects" />
          s
          <SectionTitle text="Featured" />

          <h3 className="heading">new arrival</h3>
          <NewArrivalGrid />


        <Footer />
    </div>
  )
}
