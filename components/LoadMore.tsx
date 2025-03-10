"use client";
import { fetchAnime } from "@/app/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

let page = 2;

function LoadMore() {
  const { ref, inView } = useInView();
  const [animes, setAnimes] = useState<JSX.Element[]>([]);
  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((animes: JSX.Element[]) => {
        setAnimes((prev) => [...prev, ...animes]);
        page++;
      });
    }
  }, [inView]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {animes}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
