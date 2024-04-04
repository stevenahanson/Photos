"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Photos {
  id: string;
  url: string;
  title: string;
}

export default function Home() {
  const [photos, setPhotos] = useState<Photos[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data: Photos[]) => {
        setPhotos(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-12">
      {photos.map((photos) => (
        <Image
          key={photos.id}
          src={photos.url}
          alt={photos.title}
          height={100}
          width={100}
        />
      ))}
    </div>
  );
}
