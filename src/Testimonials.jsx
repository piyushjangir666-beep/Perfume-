import React from "react";

const Testimonials = () => {

  const reviews = [
    {
      id: 1,
      name: "Aarav Sharma",
      text: "Amazing fragrance collection. The perfumes are long lasting and feel very premium."
    },
    {
      id: 2,
      name: "Priya Mehta",
      text: "I loved the fragrance quality and packaging. Definitely buying again."
    },
    {
      id: 3,
      name: "Rohan Verma",
      text: "Best luxury perfume store online. Great experience and fast delivery."
    } 
  ]     
           
  return (
    <section className="py-20 bg-white text-center">

      <h2 className="text-3xl tracking-widest font-semibold">
        TESTIMONIALS
      </h2>

      <p className="text-gray-500 mt-3">
        What our customers say about our fragrances
      </p>

      <div className="grid md:grid-cols-3 gap-10 mt-14 px-10">
       {reviews.map((item) => (
          <div key={item.id} className="bg-white p-8 shadow hover:shadow-lg transition">
            <p className="text-gray-600 italic mb-4">
              "{item.text}"
            </p>   
          
            <h4 className="font-semibold tracking-wider">
              {item.name}
            </h4>
          </div>   
        ))}
            
      </div>     

    </section>
  ) 
}         

export default Testimonials        