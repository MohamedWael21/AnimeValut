"use server";

import AnimeCard from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME_API_BASE_URL}/api/animes?page=${page}&limit=8&order=popularity`
  );
  const animes = await response.json();
  return animes.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
