class MovieItem extends HTMLElement{
    constructor(){
        super();
    }

    set movie(item){
        this._movie = item;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="card h-100">
                <img class="card-img-top" src="https://image.tmdb.org/t/p/original/${this._movie.poster_path}" alt="movie poster">
                <div class="card-body">
                    <h5 class="card-title">${this._movie.title}</h5>
                    <p class="card-text">${this._movie.overview.substr(0, 800)} ...</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Rating: ${this._movie.vote_average}</li>
                    <li class="list-group-item">Release Date: ${this._movie.release_date}</li>
                </ul>
            </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);