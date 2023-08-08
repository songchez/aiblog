"use client";
import Meow from "@/components/forfun/MeowArtcle";
import Globe from "@/components/forfun/globe";
import Rating from "@/components/forfun/rating";
import { useState } from "react";

export default function Fun() {
  const [Collipse, setCollipse] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <button
          onClick={() => {
            setCollipse(!Collipse);
          }}
        >
          <Globe />
        </button>
        {Collipse ? (
          <div className="animate-fade-right flex flex-col justify-center items-left gap-5">
            <h1 className="font-bold text-3xl text-center text-neutral-focus">
              Where You Live??
            </h1>
            <input
              type="text"
              placeholder="Where You Live?"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <Rating />
            <textarea
              className="textarea textarea-primary"
              placeholder="Tell Me About Your Contry!"
            ></textarea>
          </div>
        ) : null}
      </div>
      <Meow />
    </div>
  );
}
