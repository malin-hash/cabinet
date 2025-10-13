import React, { useRef, useState, useEffect } from "react";
import { AiFillPhone, AiFillCheckCircle, AiOutlineUser, AiFillBook, AiFillSetting, AiOutlineCheck } from "react-icons/ai";

const movies = [
    {
        id: 1,
        title: "Premier Contact",
        genre: "Contacter nous par Téléphone, E-mail ou via notre formulaire en ligne pour exposer votre situation ",
        icon: <AiFillPhone/>,
        info: ["Appel téléphonique gratuit", "Evaluation préliminaire", "Orientation vers le bon spécialiste" ]
    },
    {
        id: 2,
        title: "Consultation initial",
        genre: "Rencontrez votre avocat pour une consultation gratuite de 30 minutes afin d'analyser votre dossier ",
        icon: <AiOutlineUser/>,
        info: ["Analyse juridique de votre situation", "Conseil préliminaire", "Estimation des coûts et délais" ]
    },
    {
        id: 3,
        title: "Proposition d'acconpagnement",
        genre: "Recevez une proposition détaillée avec stratégie juridique, planification et conception transparente ",
        icon: <AiFillBook/>,
        info: ["Stratégie juridique personnalisée", "Devis détaillé et transparent", "Planning prévisionnel" ]
    },
    {
        id: 4,
        title: "Mise en oeuvre ",
        genre: "Votre avocat met en oeuvre la stratégie convenue avec un suivi régulier de l'avancement",
        icon: <AiFillSetting/>,
        info: ["Exécution de la stratégie", "Suivi régulier", "Communication transparente" ]
    },
    {
        id: 5,
        title: "Résolution",
        genre: "Finalisation de votre dossier avec bilan complet et conseil pour l'avenir",
        icon: <AiOutlineCheck/>,
        info: ["Finalisation du dossier", "Bilan complet", "Conseils Préventifs" ]
        
    },
];

const Guide = () => {
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

return (
<div className="">
    <h2 className="text-2xl font-bold mb-0 text-center text-gray-700 p-2">Comment nous Procédons</h2>
    <p className="text-center md:tet-md text-sm text-gray-500">Un processus clair et transparent pour vous accompagner de la première consultation à la résolution de votre affaire</p>

{/* Grille pour grand écran */}
<div className="hidden md:grid grid-cols-5 md:p-12 gap-2 relative z-10 -mt-5">
    {movies.map((movie) => (
        <div
            key={movie.id}
            className="flex-none w-full snap-center px-4 z-10"
        >
            <div className="rounded-xl overflow-hidden shadow-xl bg-slate-100">
                <div className=" p-4">
                    <div className="justify-center flex mb-5">
                        <p className="py-1 px-2 rounded-full text-white bg-blue-600">0{movie.id}</p>
                    </div>
                    <div className="justify-center flex mb-5">
                        <p className="py-3 px-4 rounded-full text-white bg-blue-300">{movie.icon}</p>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-700 text-center">{movie.title}</h3>
                    <p className="text-xs text-gray-500 text-center md:text-md">{movie.genre}</p>
                </div>
                <div className="px-8 mb-5">
                {
                    movie.info.map((inf, i) => (
                    <div className="flex space-x-2 px-14 md:px-1" key={i}>
                        <AiFillCheckCircle className="text-xl text-green-600"/>
                        <p className="text-xs text-gray-600">{inf}</p>
                    </div>
                ))
                }
            </div>
            </div>
    </div>
    ))}
    <div className="absolute top-56 w-full">
        <hr className="w-full border-2 border-blue-700" />
    </div>
</div>

{/* Carrousel horizontal pour mobile */}
<div className="relative block md:hidden px-10 mt-2 mb-5 ">
    <div
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
    >
        {movies.map((movie) => (
        <div
            key={movie.id}
            className="flex-none w-full snap-center px-4"
        >
            <div className="rounded-xl overflow-hidden shadow-xl bg-slate-100 px-1">
                <div className="p-4">
                    <div className="justify-center flex mb-5">
                        <p className="py-1 px-2 rounded-full text-white bg-blue-600">0{movie.id}</p>
                    </div>
                    <div className="justify-center flex mb-5">
                        <p className="py-3 px-4 rounded-full text-white bg-blue-300">{movie.icon}</p>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-700 text-center">{movie.title}</h3>
                    <p className="text-xs text-gray-500 text-center md:text-md">{movie.genre}</p>
                </div>
                <div className="px-8 mb-5">
                {
                    movie.info.map((inf, i) => (
                    <div className="flex space-x-2 px-12 " key={i}>
                        <AiFillCheckCircle className="text-xl text-green-600"/>
                        <p className="md:text-sm text-xs text-gray-600">{inf}</p>
                    </div>
                ))
                }
            </div>
            </div>
    </div>
    ))}
</div>

{/* Points de pagination */}
<div className="flex justify-center mt-3 space-x-2 mb-4">
    {movies.map((_, i) => (
        <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            index === i ? "bg-blue-500 w-4" : "bg-gray-300"
             }`}
        >
        </div>
    ))}
    </div>
</div>
</div>
);
};

export default Guide;
