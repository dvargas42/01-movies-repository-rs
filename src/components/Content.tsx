import { MovieCard } from "./MovieCard"

import '../styles/content.scss';
interface ContentProps {
  genreTitle: string;
  moviesList: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Value: string;
    }>
    Runtime: string;
  }>
}

function Content({ genreTitle, moviesList }: ContentProps) {
 return (
  <div className="container">
    <header>
      <span className="category">Categoria:<span>{genreTitle}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {moviesList.map(movie => (
          <MovieCard 
            key ={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  </div>
 )
}
 export { Content }