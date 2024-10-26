"use client";
import HomePage from "@/app/(pages)/home/page";
import { useState } from "react";
import Heading from "@/app/utils/Heading";

export default function Home() {
  const [activeItem] = useState(0);

  return (
    <>
      <Heading
        title="BRUCKER HAFEN"
        description="Brucker Hafen is a platform for learning and sharing knowledge"
        keywords="Brucker Hafen, elearning, courses, education"
      />
      <HomePage />
    </>
  );
}
