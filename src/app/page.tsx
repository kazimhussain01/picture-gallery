"use client";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from 'next-cloudinary';
import { useState } from "react";


interface UploadImage {
  event: "success"
  info: { public_id: "string" }
}

export default function Home() {
  // UseState to Change the Image
  const [imageId, setImageId] = useState("qnpnmgwiglc1bdirteg4")
  return (
    <main className="flex flex-col items-center justify-between lg:p-24 md:p-24 p-10">
      {/* Upload Button  */}
      <CldUploadButton 
        className="font-poppins font-semibold lg:text-6xl md:text-5xl text-xl text-center"
        uploadPreset="qvss1zf1" 
        onUpload={(results) => {
          let res = results as UploadImage
          setImageId(res.info.public_id)
        }}
      />

      {/* View Image */}
      <CldImage
        className="mt-5 lg:h-96 lg:w-[28rem] md:h-80 md:w-96 h-36 w-40"
        width="300"
        height="100"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
