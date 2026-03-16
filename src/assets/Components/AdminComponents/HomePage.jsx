import React, { useEffect, useState } from "react";
import {
  AiFillCalendar,
  AiFillFolderOpen,
  AiOutlineFolder,
  AiOutlineUser,
} from "react-icons/ai";
import Card from "../@design-system/Card";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import {
  getNumberClient,
  getNumberDossierArchiver,
  getNumberDossierNoArchiver,
  getNumber,
} from "../../../Apis/axios";
import ChartClient from "../@design-system/ChartClient";
import ChartDossier from "../@design-system/ChartDossier";
export default function HomePage() {
  // Number function
  const [clients, setClient] = useState(null);
  const [rdvs, setRdvs] = useState(null);
  const [archive, setArchive] = useState(null);
  const [noArchive, setNoArchive] = useState(null);

  const fetchClient = async () => {
    try {
      const res = await getNumberClient();
      setClient(res.data.clients);
    } catch {
      return setClient(0);
    }
  };
  const fetchRdv = async () => {
    try {
      const res = await getNumber();
      setRdvs(res.data.rdvs);
    } catch {
      return setRdvs(0);
    }
  };
  const fetchArchive = async () => {
    try {
      const res = await getNumberDossierArchiver();
      setArchive(res.data.archive);
    } catch {
      return setArchive(0);
    }
  };
  const fetchNoArchive = async () => {
    try {
      const res = await getNumberDossierNoArchiver();
      setNoArchive(res.data.noarchive);
    } catch {
      return setNoArchive(0);
    }
  };

  useEffect(() => {
    fetchClient();
    fetchArchive();
    fetchRdv();
    fetchNoArchive();
  }, []);

  const infos = [
    {
      id: 1,
      name: "Nombre des Clients",
      number: clients,
      color: "blue-700",
      avatar: <AiOutlineUser />,
      background: "blue-300",
    },
    {
      id: 2,
      name: "Dossier en cours",
      number: noArchive,
      color: "green-700",
      avatar: <AiFillFolderOpen />,
      background: "green-400",
    },
    {
      id: 3,
      name: "Rendez-vous en Attente",
      number: rdvs,
      color: "yellow-600",
      avatar: <AiFillCalendar />,
      background: "yellow-300",
    },
    {
      id: 4,
      name: "Nombre documents archivés",
      number: archive,
      color: "pink-300",
      avatar: <AiOutlineFolder />,
      background: "pink-600",
    },
  ];
  return (
    <div className="md:px-8 px-2 -mt-16 md:mt-16">
      <p className="text-xl font-bold uppercase text-blue-500 mb-1">
        tableau de bord
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mb-3">
        {infos.map((info) => (
          <Card
            id={info.id}
            name={info.name}
            number={info.number}
            color={info.color}
            avatar={info.avatar}
            background={info.background}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6">
        <ChartClient />
        {/* <ChartDossier /> */}
      </div>
    </div>
  );
}
