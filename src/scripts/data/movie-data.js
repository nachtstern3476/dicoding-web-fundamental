const apiKey = "api_key=4441f451654e5d50d491526f8c446c63";
const baseUrl = "https://api.themoviedb.org/3";

class MovieData{
    static searchMovie(params){
        let url=`${baseUrl}/movie/top_rated?${apiKey}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (params) url=`${baseUrl}/search/movie?query=${params}&${apiKey}`;

        return fetch(url, options)
        .then(response=>{
            return response.json();
        }).then(responseJSON=>{
            if (responseJSON.results.length) {
                return Promise.resolve(responseJSON.results);
            }
        }).catch(err=>{
            return Promise.reject('(No internet connection)');
        });
    }
}

export default MovieData;