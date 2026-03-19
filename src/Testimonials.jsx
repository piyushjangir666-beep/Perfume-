import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    text: "Amazing fragrance collection. The perfumes are long lasting and feel very premium.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    text: "I loved the fragrance quality and packaging. Definitely buying again.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    text: "Best luxury perfume store online. Great experience and fast delivery.",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    text: "The scent feels elegant and fresh all day. It easily became my new favorite.",
  },
  {
    id: 5,
    name: "Karan Malhotra",
    text: "Very classy fragrances with impressive staying power. Worth every rupee.",
  },
  {
    id: 6,
    name: "Neha Gupta",
    text: "The perfume arrived beautifully packed and smelled even better than I expected.",
  },
  {
    id: 7,
    name: "Aditya Singh",
    text: "I got so many compliments after wearing it. The fragrance profile is truly unique.",
  },
  {
    id: 8,
    name: "Ishita Jain",
    text: "Lovely blend of softness and luxury. The quality feels premium from the first spray.",
  },
  {
    id: 9,
    name: "Vikram Patel",
    text: "Fast delivery, authentic products, and a smooth shopping experience overall.",
  },
  {
    id: 10,
    name: "Ananya Rao",
    text: "Perfect for gifting. The bottle design and fragrance both look and feel luxurious.",
  },
  {
    id: 11,
    name: "Rahul Khanna",
    text: "The fragrance lasts from morning to evening and still feels rich without being overpowering.",
  },
  {
    id: 12,
    name: "Meera Nair",
    text: "Beautiful scent collection with a refined finish. I am already planning my next order.",
  },
] 

const cardsPerSlide = 3;

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(reviews.length / cardsPerSlide);

  const visibleReviews = reviews.slice(
    currentSlide * cardsPerSlide,
    currentSlide * cardsPerSlide + cardsPerSlide
  ) 

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  } 

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  } 

  return (
    <section className="bg-white px-8 py-20 text-center">
      <h2 className="text-3xl font-semibold tracking-widest">TESTIMONIALS</h2>
      <p className="mt-3 text-gray-500">
        What our customers say about our fragrances
      </p>

      <div className="mx-auto mt-10 flex max-w-7xl items-center gap-6">
        <button
          type="button"
          onClick={handlePrev}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8e1ef] bg-gradient-to-br from-white to-[#eef4fb] text-2xl font-semibold text-[#35527a] shadow-[0_10px_25px_rgba(53,82,122,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#35527a] hover:bg-[#35527a] hover:text-white"
          aria-label="Previous testimonials"
        >
          &#8592;
        </button>

        <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-3">
          {visibleReviews.map((item) => (
            <div
              key={item.id}
              className="flex min-h-[190px] flex-col items-center justify-center border border-gray-100 bg-white px-10 py-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <p className="max-w-[330px] text-[18px] italic leading-10 text-[#3f5f8c]">
                "{item.text}"
              </p>
              <h4 className="mt-6 text-[20px] font-semibold tracking-wide text-black">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8e1ef] bg-gradient-to-br from-white to-[#eef4fb] text-2xl font-semibold text-[#35527a] shadow-[0_10px_25px_rgba(53,82,122,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#35527a] hover:bg-[#35527a] hover:text-white"
          aria-label="Next testimonials"
        >
          &#8594;
        </button>
      </div>
    </section>
  ) 
} 

export default Testimonials;
