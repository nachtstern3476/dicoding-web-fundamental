import '../components/movie-list.js';
import MovieData from '../data/movie-data.js';
import igIc from '../../assets/icons/instagram.svg';
import twIc from '../../assets/icons/twitter.svg';
import fbIc from '../../assets/icons/facebook.svg';
import poster from '../../assets/img/poster.jpg';

function main() {
    document.addEventListener("DOMContentLoaded", ()=>{
        const movieListElement = document.querySelector(`movie-list`);
        const searchElement = document.querySelector(`input[name="search-keyword"]`);
        const posterElement = document.querySelector(`img[alt="gambar"]`);
        const btnElement = document.querySelector(`button[name="btn-search"]`);
        const igIcElement = document.querySelector(`img[alt="ig-icon"]`);
        const twIcElement = document.querySelector(`img[alt="tw-icon"]`);
        const fbIcElement = document.querySelector(`img[alt="fb-icon"]`);
        searchElement.value = "";
        posterElement.src = poster;
        igIcElement.src = igIc;
        twIcElement.src = twIc;
        fbIcElement.src = fbIc;

        btnElement.addEventListener("click", async(e)=>{
            try{
                const result = await MovieData.searchMovie(searchElement.value);
                if (result) {
                    movieListElement.movieList = result;
                }else{
                    movieListElement.errorMessage(`Can't find ${searchElement.value} in our databases`);
                }
            }catch(err){
                movieListElement.errorMessage(err);
            }
        })
    })
}

export default main;