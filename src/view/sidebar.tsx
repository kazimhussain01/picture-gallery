import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Sidebar = () => {
  return ( 
    <div className="pb-12 border-r h-full lg:w-64 md:w-48 w-24">
      <div className="space-y-2 py-4">
        <div className="lg:px-3 lg:py-2 md:px-3 md:py-2">
          <h2 className="mb-2 px-3 lg:text-lg md:text-lg text-base font-poppins font-bold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {/* Picture Gallery */}
            <Link href="gallery">
              <Button variant="ghost" className="w-full p-3 font-poppins font-semibold lg:text-xl md:text-lg text-xs justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="lg:w-6 lg:h-6 md:w-4 md:h-4 lg:flex md:flex hidden mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Gallery
              </Button>
            </Link>
            {/* Album*/}
            <Link href="/album">
              <Button variant="ghost" className="w-full p-3 font-poppins font-semibold  lg:text-xl md:text-lg text-xs tracking-tighter justify-start whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="lg:w-6 lg:h-6 md:w-4 md:h-4 lg:flex md:flex hidden mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                  />
                </svg>
                Picture Album
              </Button>
            </Link>
            {/* Favourites */}
            <Link href="favourite">
              <Button variant="ghost" className="w-full p-3 font-poppins font-semibold lg:text-xl md:text-lg text-xs justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="lg:w-6 lg:h-6 md:w-4 md:h-4 lg:flex md:flex hidden mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                Favourites
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
