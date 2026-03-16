import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Faq() {
  const faqs = [
    {
      title: "Combien coûte la première consultation ?",
      content:
        "La première consultation de 30 minutes est entièrement gratuite. Elle nous permet d'évaluer votre situation et de vous orienter vers la meilleure solution.",
      color: "bg-blue-600",
      text: "text-blue-600",
    },
    {
      title: "Quel document dois-je apporter ?",
      content:
        "Apporter tous les documents relatifs à votre affaire : contrats, courriers, jugements, factures, etc. Plus nous avons des informations, mieux nous pouvons vous conseiller.",
      color: "bg-green-600",
      text: "text-green-600",
    },
    {
      title: "Combien de temps dure la procédure ?",
      content:
        "La duréee varie selon la complexité de l'affaire et de la juridiction. Nous vous donnons une estimation lors de la consultation initiale et vous tenons informés de l'évolution.",
      color: "bg-yellow-600",
      text: "text-yellow-600",
    },
    {
      title: "Comment se déroule le paiement ?",
      content:
        "Nous vous proposons plusieurs modalités : paiment comptant, échelonné, ou selon l'avancement du dossier. Tout est défini clairement dans notre convention d'honoraire",
      color: "bg-pink-600",
      text: "text-pink-600",
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-center md:text-2xl text-xl text-gray-700">
        Questions Fréquentes
      </h1>
      <p className="text-center text-xs md:text-md text-gray-500 mb-5">
        Retrouvez les réponses aux questions les plus courantes de nos clients.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full mb-5">
        {faqs.map((faq, i) => (
          <div key={i} className="flex space-x-0">
            <div
              className={`py-16 w-2 ${faq.color} rounded-l-xl shadow-xl`}
            ></div>
            <div className=" bg-slate-50 w-[100%] rounded-r-xl shadow-xl p-4">
              <div className={`flex space-x-2 text-sm mb-4 ${faq.text}`}>
                <AiFillExclamationCircle className={`text-xl ${faq.text}`} />
                <p>{faq.title}</p>
              </div>
              <p className="text-sm text-gray-600 justify-normal">
                {faq.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs md:text-md text-gray-500 mb-5">
        Vous ne trouvez pas la réponse à votre question ?
      </p>
      {/* <div className='flex justify-center'>
            <Link 
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className='p-3 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-500 cursor-pointer'>Contactez-nous directement</Link>        
        </div> */}
    </div>
  );
}
