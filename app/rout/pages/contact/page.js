"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import ContactSection from "./ContactSection";

const position = [22.3419, 91.7946]; // Halishohor, Chattogram

export default function ContactPage() {
  const mapRef = useRef();
  const [zoom, setZoom] = useState(13); // initial zoom

  return (
    <div>
    <div className="w-full h-[400px] relative">
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}  // 🔴 Mouse scroll দিলে Zoom হবে না
        className="w-full h-full z-0"
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </MapContainer>
      
    </div>
    <ContactSection/>
    </div>
  );
}
