const Movie = ({params}: {params: {
  slug: string
}}) => {
  return <div>
    This movie is called {params.slug}
  </div>;
};

export default Movie;
