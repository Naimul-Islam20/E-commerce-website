"use client";

import { useState, useEffect } from "react";
import EyeModal from "@/app/rout/eye/page"; // Modal component
import { FaEye } from "react-icons/fa";

export default function ViewImageButton({ id }) {
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  if (!isClient) return null;

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-3 ps-5  border-s-2  border-gray-300  py-2   text-2xl  "
      >
        < FaEye className=" hover:-translate-y-1 transform duration-200 transition-all "/>
      </button>

      {showModal && <EyeModal id={id} onClose={handleClose} />}
    </>
  );
}
