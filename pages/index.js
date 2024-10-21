import { useEffect, useState } from 'react';
import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import axios from '@/lib/axios';

export async function getStaticProps() {      // Next 기능 React의  Hook 등은 못 쓴다.
  const res = await axios.get('/movies');
  const movies = res.data.results;

  return {
    props: {
      movies,
    }
  }
}

export default function Home({ movies }) {
  /*
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const res = await axios.get('/movies/');
    const movies = res.data.results ?? [];
    setMovies(movies);
  }

  useEffect(() => {
    getMovies();
  }, []);
  */

  return (
    <>
      <SearchForm />
      <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}
