"use client";
import View from "./view";
import { myImage } from "./page";
import { useEffect, useState } from "react";

const FavouriteList = ({ resources }: { resources: myImage[] }) => {
  const [initialState, setInitialState] = useState(resources);
  useEffect(() =>{
    setInitialState(resources)
  }, [resources])
  return (
    <div className="columns-4 gap-4 mx-auto p-5 space-y-4">
      {initialState.map((item, i) => {
        return (
          <div key={i} className="break-inside-avoid">
            <View
              src={item.public_id}
              tag={item.tags}
              fun={(publicId: string) => {
                setInitialState((current) =>
                  current.filter((val) => val.public_id !== publicId)
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FavouriteList;
