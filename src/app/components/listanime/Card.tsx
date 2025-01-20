type Anime = {
    id: number;
    name: string;
    img: string;
    description: string;
  }
export default function Card ({anime}: {anime : Anime}) {   
    return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={anime.img} alt={anime.name} />
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {anime.name}
        </h1>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {anime.description}
        </p>
    </div>
    );
}