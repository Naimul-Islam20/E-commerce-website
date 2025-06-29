import React from 'react'

const CollectionGrid = () => {
  return (
    <section
      className="w-full h-screen  bg-center bg-cover flex pt-20 justify-center text-white"
      style={{ backgroundImage: "url('/home2.jpg')" }}
    >
      <div className=" bg-opacity-50 text-black  p-8 rounded-lg  text-center">
        <h1 className=" text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg md:text-xl">Your gateway to premium content.</p>
      </div>
    </section>
  )
}

export default CollectionGrid
