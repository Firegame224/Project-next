//app/page.tsx
import Card from "./Card"

type Anime = {
    id: number;
    name: string;
    img: string;
    description: string;
  }
  
  type ApiResponse = { // type for the response
  spotLightAnimes : Anime[]
  }

  export default async function ListAnime() {
  const res = await fetch('https://api-anime-rouge.vercel.app/aniwatch/' ,{cache : "no-store"});
  const Anime: ApiResponse = await res.json();
  
  
  console.log(Anime.spotLightAnimes);
    return (
      <div className="container mx-auto flex justify-between items-center flex-wrap ">
        {Anime.spotLightAnimes.map((Anime) => {
          return (
            <div key={Anime.id}>
              <Card anime={Anime} />
            </div>
          );
        })}
      </div>
    );
  }
  