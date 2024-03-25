import React from 'react'

function Banner() {
  return (
<section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('images/banner.jpg')" }}>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-12">
            <h1 className="max-w-2xl mb-2 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Discover an exceptional cooking className tailored for you!</h1>
            <p className="py-2 max-w-2xl text-sm mb-2  lg:my-8 md:text-lg lg:text-xl text-white font-semibold">Cooking: an art form blending flavors, textures, and techniques to create delectable dishes that nourish the body and soul.</p>
            <a href="#our-recipies" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-white rounded-lg">
                Our Recipies
            </a> 
        </div>
    </div>
</section>

  )
}

export default Banner