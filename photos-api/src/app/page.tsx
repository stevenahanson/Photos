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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );

      if (!response.ok) {
        throw new Error("Oops! Unable to fetch data, please try again.");
      }

      const data = await response.json();

      setPhotos(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-12">
      {loading ? (
        <p className="font-bold text-xl">Loading...</p>
      ) : (
        photos.map((photos) => (
          <Image
            key={photos.id}
            src={photos.url}
            alt={photos.title}
            height={100}
            width={100}
          />
        ))
      )}
    </div>
  );
}
