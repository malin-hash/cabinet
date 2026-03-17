import React, { useRef, useState, useEffect } from "react";

export default function ExpertEquipe() {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Détection de la carte visible pour afficher le bon point
  useEffect(() => {
    const el = carouselRef.current;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const width = el.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      setIndex(newIndex);
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const equipes = [
    {
      id: 1,
      name: "Maitre PABINGUI Guy Ruffin Désiré",
      funtion: "Associé Fondateur",
      experience: "10+ ans d'expérience",
      content: "Diplomé de l'université de bangui.",
      avatar: "/ruffin.JPG",
    },
    {
      id: 2,
      name: "Maitre IGARA Chanel",
      funtion: "Associé collaborateur",
      experience: "6 ans d'expérience",
      content: "Diplomé de l'université de bangui.",
      avatar: "/igara.JPG",
    },
  ];
  return (
    <div className=" bg-white lg:px-16 md:px-12 px-8">
      <h1 className="text-center text-gray-700 mb-2 font-bold md:text-2xl text-xl">
        Notre Equipe d'Experts
      </h1>
      <p className="text-gray-500 text-center mb-4 md:text-md text-sm">
        Des avocats expérimentés et reconnus dans leurs domaines de
        spécialisations
      </p>
      {/* Grand ecran */}
      <div className="px-28">
        <div className="hidden md:grid md:grid-cols-2  md:p-12 gap-6 relative z-10 -mt-5">
          {equipes.map((equipe) => (
            <div key={equipe.id} className="bg-white p-2 shadow-md rounded-md">
              <img
                src={equipe.avatar}
                className="rounded-md mb-2 h-44 w-[100%]"
              />
              <h1 className="text-gray-700 text-center text-xl font-bold">
                {equipe.name}
              </h1>
              <p className="text-sm text-blue-500 text-center">
                {equipe.funtion}
              </p>
              <p className="text-green-600 text-sm text-center">
                {equipe.experience}
              </p>
              <p className="text-gray-800 text-center text-xs">
                {equipe.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Petit Ecran */}
      <div className="relative block md:hidden px-10 mt-2 mb-5 ">
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {equipes.map((equipe) => (
            <div
              key={equipe.id}
              className="bg-slate-50 shadow-xl rounded-xl flex-none w-full snap-center px-4"
            >
              <img
                src={equipe.avatar}
                className="rounded-md mb-2 h-44 w-[100%]"
              />
              <h1 className="text-gray-700 text-center text-xl font-bold">
                {equipe.name}
              </h1>
              <p className="text-sm text-blue-500 text-center">
                {equipe.funtion}
              </p>
              <p className="text-green-600 text-sm text-center">
                {equipe.experience}
              </p>
              <p className="text-gray-800 text-center text-xs">
                {equipe.content}
              </p>
            </div>
          ))}
        </div>

        {/* Points de pagination */}
        <div className="flex justify-center mt-3 space-x-2 mb-4">
          {equipes.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === i ? "bg-blue-500 w-4" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
