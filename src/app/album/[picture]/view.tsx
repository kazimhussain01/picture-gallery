"use client";
import { CldImage } from "next-cloudinary";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AddTags } from "./action";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi"
import Link from "next/link";


const View = ({ src, tag, fun }: { src: string; tag: string[]; fun?: any }) => {
  const [fav, setFav] = useState(tag.includes("favourite"));
  return (
    <div className="relative">
      <CldImage
        className="rounded-sm"
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      {/* Heaart Icons for Favourite */}
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          setFav(!fav);
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <AiFillHeart className="w-8 h-8 cursor-pointer text-red-600" />
        ) : (
          <AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-600 duration-300" />
        )}
      </div>
      {/* Edit Icon for Edit Page */}
      <div className="absolute top-1 left-1">
        <Link href={`/edit?publicId=${src}`}>
          <BiEditAlt className="w-8 h-8 cursor-pointer text-white hover:text-red-600 duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default View;
