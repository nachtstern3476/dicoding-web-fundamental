import "./movie-item.js";

class MovieList extends HTMLElement{
    constructor(){
        super();
    }

    set movieList(item){
        this._movie = item;
        this.render();
    }

    render(){
        this.innerHTML = "";
        this._movie.slice(0, 8).forEach(item => {
            const movieItem = document.createElement("movie-item");
            movieItem.classList.add("col-12", "col-sm-6", "col-md-3", "mt-4");
            movieItem.movie = item;
            this.appendChild(movieItem)
        });
    }

    errorMessage(message){
        this.textContent = "";
        this.innerHTML += `
            <div class="col font-weight-bold font-italic">
                <h2>¯&bsol;_(ツ)_/¯</h2>
                <p>${message}</p>
            </div>
        `
    }
}

customElements.define('movie-list', MovieList);