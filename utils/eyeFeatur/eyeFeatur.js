"use client";

import { useState, useEffect } from "react";
import EyeModal from "@/app/rout/eye/page"; // Modal component
import { FaEye } from "react-icons/fa";

export default function ViewImageButton({ id }) {
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Client check to avoid hydration error
  }, []);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  if (!isClient) return null;

  return (
    <>
      <button
        onClick={handleOpen}
        className=" px-4 py-2 bg-white rounded hover:bg-gray-50"
      >
       <FaEye/>
      </button>

      {showModal && <EyeModal id={id} onClose={handleClose} />}
    </>
  );
}
