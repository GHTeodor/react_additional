const baseURL = 'https://api.themoviedb.org/3';

export default baseURL;

export const urls = {
    movies: (page, genre) => `/discover/movie?api_key=ac638f5f2ee99ab5dcc5056b9fb7fe17&language=uk-UA&region=UA&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    genres: (id) => `/movie/${id}?api_key=ac638f5f2ee99ab5dcc5056b9fb7fe17&language=uk-UA`,
    allGenres: '/genre/movie/list?api_key=ac638f5f2ee99ab5dcc5056b9fb7fe17&language=uk-UA'
};