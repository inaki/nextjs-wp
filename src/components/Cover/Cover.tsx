import React, { ComponentProps } from "react";
import Image, { ImageProps } from "next/image";

interface CoverProps {
  children: React.ReactNode;
  background: ImageProps["src"];
}

export const Cover: React.FC<CoverProps> = ({ children, background }) => {
  return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items">
      <Image
        alt="Cover"
        src={background}
        fill
        className="mix-blend-soft-light object-cover"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};
