import { MovieCard } from "./MovieCard";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}
export function Content({ movies, selectedGenre }: ContentProps) {
  // Complete aqui
  console.log(movies);
  return (
    <div className="container">

      <header>
        <h1>Categoria <span> {selectedGenre.title}</span></h1>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
              key={movie.Title}
            />
          ))}
        </div>
      </main>
    </div>
  )
}