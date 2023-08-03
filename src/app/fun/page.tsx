"use client";
import Globe from "@/components/forfun/globe";

export default function Fun() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-bold text-3xl text-center text-neutral-focus">
        Where You Live?
      </h1>
      <div className="flex justify-center">
        <Globe />
      </div>
    </div>
  );
}
