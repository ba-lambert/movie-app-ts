import axios from "axios";
const AuthToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzJlMzc2ZWM3ZTI4NDdlNGVjNmY5ODY5Yzk0MTQ2NyIsInN1YiI6IjY0OTc2OWE1NjJmMzM1MDE0NjI4OTQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZiRDMsJj2t0VFgOMCJ001z9JBihvWpLpEO2AIAtiEtA'
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org'
  });
  instance.defaults.headers.common['Authorization'] =`Bearer ${AuthToken}`; 
  export default instance