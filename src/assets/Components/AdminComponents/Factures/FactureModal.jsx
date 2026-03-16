import React, { useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaClosedCaptioning, FaPrint } from "react-icons/fa6";

export default function FactureModal({ closeFacture, dataFacture }) {
  const prinRef = useRef();
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="fixed z-50 bg-blue-600 w-full h-screen p-3 top-0 left-0 right-0 overflow-auto">
      <div className="py-1 px-16 flex justify-between">
        <AiFillCloseCircle
          onClick={closeFacture}
          className="text-red-500 hover:text-red-600 text-2xl cursor-pointer"
        />
        <div
          onClick={handlePrint}
          className="text-blue-600 py-2 px-4 flex space-x-2 rounded-md cursor-pointer bg-white hover:bg-slate-400 duration-300 transition-colors"
        >
          <FaPrint className="mt-1" />
          <p>Imprimer</p>
        </div>
      </div>
      <section
        ref={prinRef}
        id="print-section"
        className="px-8 py-4 w-full h-auto bg-white grid md:grid-cols-2 grid-cols-1 gap-3 text-justify"
      >
        <div className="">
          {/* <div className=" border-2 border-black mx-16 font-bold mb-2">
            <p className="text-center text-black ">
              Cabinet PABINGUI & Associés
            </p>
            <p className="text-center uppercase">Convention d'honoraires</p>
          </div> */}
          <div className="p-2 flex items-center">
            <img src="/public/justice.png" alt="" className="h-14 w-28  " />
            <div>
              <p className="text-gray-700 sm:text-xs md:sm font-mono">
                PABINGUI <span className="text-yellow-600">&</span> Associés
              </p>
              <p className="text-blue-700 text-xs font-thin text-center -mt-1">
                Justise - Défense - Droit
              </p>
            </div>
          </div>
          <p className="text-center uppercase font-bold underline">
            Convention d'honoraires
          </p>
          <div className="text-xs text-justify">
            <p>Entre les soussignés :</p>
            <p>
              Mr/Mme/Mlle:{" "}
              <span className="font-bold">
                {" "}
                {dataFacture.folder.client.name}{" "}
                {dataFacture.folder.client.firstname}
              </span>
            </p>
            <p>
              Né(e) le{" "}
              <span className="font-bold">
                {" "}
                {dataFacture.folder.client.date}{" "}
              </span>{" "}
              à{" "}
              <span className="font-bold">
                {" "}
                {dataFacture.folder.client.lieu}{" "}
              </span>
            </p>
            <p>
              De Nationalité :{" "}
              <span className="font-bold">
                {" "}
                {dataFacture.folder.client.nationality}
              </span>
            </p>
            <p>
              B.P : tél :{" "}
              <span className="font-bold">
                {" "}
                {dataFacture.folder.client.phoneNumber}
              </span>{" "}
              ci-après
            </p>
            <p>
              Quartier:
              <span className="font-bold">
                {" "}
                {dataFacture.folder.client.address}
              </span>{" "}
              dénommé le (la) client(e), d'une part et d'autre part.
            </p>
            <p>
              <span className="font-bold">
                Me {dataFacture.folder.avocat.name}{" "}
                {dataFacture.folder.avocat.firstname}
              </span>{" "}
              , Avocat à la cour. BP:259 Bangui, République Centrafricaine. Tel:{" "}
              <span className="font-bold">
                {dataFacture.folder.avocat.phoneNumber}
              </span>
              <br />
              Mail :{" "}
              <span className="font-bold">
                {dataFacture.folder.avocat.email}
              </span>
              <br />
              Cabinet sis place de la république (Derrière AZUR)
            </p>
          </div>
          <div className="text-xs p-2 text-justify">
            <p className="uppercase text-center font-bold mt-1 mb-1 underline">
              Il est arrete et convenu ce qui suit
            </p>
            <p className="font-bold">
              <span className="font-bold underline">Article 1er :</span> OBJET
            </p>
            <p>
              Le (la) client(e), s'engage à confier à Maitre{" "}
              <span className="font-bold">
                {" "}
                {dataFacture.folder.avocat.name}{" "}
                {dataFacture.folder.avocat.firstname}
              </span>{" "}
              qui accepte la défense de ses interêts contre{" "}
              <span className="font-bold"> {dataFacture.nom}</span> dans les
              procédures engagées devant les cours et tribunaux de Centrafrique.{" "}
              <br />
              <p className="font-bold">
                <span className="font-bold underline">Article 2 :</span> FRAIS
                ET HONORAIRES
              </p>
              <p>
                <span className="font-bold ml-8">
                  2.1. Frais d'ouverture de dossier :
                </span>{" "}
                les parties conviennent de :{" "}
                <span className="font-bold">
                  {dataFacture.FraisOuverture
                    ? dataFacture.FraisOuverture
                    : "XXXXXXXX"}{" "}
                  FCFA
                </span>{" "}
                à titre des frais d'ouvertures de dossier.
              </p>
              <span className="font-bold ml-8">
                2.2. Des honoraires de plaidoirie :
              </span>{" "}
              les parties conviennent du paiement des honoraires de :{" "}
              <span className="font-bold">
                {dataFacture.FraisFirstInstance
                  ? dataFacture.FraisFirstInstance
                  : "XXXXXXXX"}{" "}
                FCFA
              </span>{" "}
              en première instance, de :{" "}
              <span className="font-bold">
                {dataFacture.FraisAppel ? dataFacture.FraisAppel : "XXXXXXXX"}{" "}
                FCFA
              </span>{" "}
              en appel et de :{" "}
              <span className="font-bold">
                {dataFacture.FraisCassation
                  ? dataFacture.FraisCassation
                  : "XXXXXXXX"}{" "}
                FCFA{" "}
              </span>
              en cassation.
              <br />
              <span className="font-bold ml-8">
                2.3. Des honoraires de procédure incidents ou d'urgence
                (Référés):
              </span>{" "}
              les parties conviennent du paiement des honoraires de{" "}
              <span className="font-bold">
                {dataFacture.FraisIncident
                  ? dataFacture.FraisIncident
                  : "XXXXXXXX"}{" "}
                FCFA
              </span>{" "}
              pour procédure incidente. <br />
              <span className="font-bold ml-8">
                2.4. Des honoraires de résultat
              </span>{" "}
              les parties conviennent d'un honoraires de résultat de{" "}
              <span className="font-bold">
                {dataFacture.FraisFinProcedure
                  ? dataFacture.FraisFinProcedure
                  : "XXXXXXXX"}{" "}
                %
              </span>{" "}
              en fin de procédure. <br />
              <span className="font-bold ml-8">
                2.5. Des frais de consultation
              </span>{" "}
              les parties conviennent <br />
              Soit d'un honoraire de XXXXXXXX %, suivant l'importance de
              l'affaire chiffré: XXXXXXXX x _________ sur 100 = FCFA XXXXXXXX
              Soit d'un forfait de FCFA XXXXXXXX
            </p>
          </div>
        </div>
        <div className="text-xs p-2 text-justify">
          <p className="font-bold">
            <span className="font-bold underline">Article 3 :</span> FRAIS DE
            PROCEDURE
          </p>
          <p>
            Les frais inhérents aux différentes phases de procédure sont à la
            charge du ou de la client(e), qui les répercutera eventuellement sur
            l'adversaire. les frais de procédure sont: Explois d'Huissier, Frais
            de dépôt des requêtes, retraits d'ordonnance, levée de jugements ou
            d'arrêts, commission d'expert, frais de transport, d'hébergement, de
            copie etc.
          </p>
          <p className="font-bold">
            <span className="font-bold underline">Article 4 :</span> OBLIGATION
            DU CLIENT ET DE L'AVOCAT
          </p>
          <p>
            Le client doit mettre à la disposition de l'avocat toutes les
            informations, les pièces nécessaires, les frais et honoraires en
            temps utiles et, collaborer étroitement avec son conseil en évitant
            la compromission. <br /> L'avocat s'engage à suivre le dossier
            suivant les règles de l'art et de la procédure sans mettre en périle
            les interêts de son client (e). <br /> Ce pendant, l'avocat ne peut
            être soumis à l'obligation de résultat, ni à l'ingérence d'un tiers
            sur concours du client (e).
          </p>
          <p className="font-bold">
            <span className="font-bold underline">Article 5 :</span> DECOMPTE
            DEFINITIF
          </p>
          <p>
            L'avocat procèdera au décompte définitif de ses differents
            honoraires par dossier dossiers et instances et soumet l'etat à son
            (sa) client (e). Les parties discutent des modalités de règlement.
          </p>
          <p className="font-bold">
            <span className="font-bold underline">Article 6 :</span> RESILIATION
          </p>
          <p>
            La rupture de la présente Convention peut intervenir pour les
            raisons ci-après : Mauvais suivi du dossier à prouver par le (la)
            client (e), Compromission des intérêts du (de la) client (e),
            Désaccord grave sur l'affaire et particulièrement tous actes pouvant
            entamer l'indépendance et la dignité de l'avocat, Non paiement des
            frais, Honoraire et Emoluments tels que convenus.
          </p>
          <p className="font-bold">
            <span className="font-bold underline">Article 7 :</span> ATTRIBUTION
            DE COMPETENCE
          </p>
          <p>
            Tout litige né à l'occasion de l'exécusion de la présente Convention
            sera réglé par le batonnier de l'ordre des avocats conformément à la
            loi fixant le statut de la profession d'Avocat.
          </p>
          <p className="text-center mt-7">
            Fait à Bangui le : ___________________________
          </p>
          <p className="text-center italic font-bold mt-2 mb-2">
            En deux exemplaires
          </p>
          <div className="flex justify-between mt-5">
            <p>Pour le (la) client (e),</p>
            <span className="font-bold">
              Me {dataFacture.folder.avocat.name}{" "}
              {dataFacture.folder.avocat.firstname}
            </span>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}
