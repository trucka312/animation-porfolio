import React from "react";

export default function TextLight({ title }: { title: string }) {
  return (
    <div className="text-light text-4xl lg:text-5xl font-bold">{title}</div>
  );
}
