const api = 'https://api.themovielab.org/3/discover/movie?sort_by=popularity.desc&api_key=062c256e6dcceb85e99718b5574bfbaf&page=1';
const img_src = 'https://image.tmdb.org/t/p/w1280';
const search_api = 'https://api.themoviedb.org/3/search/movie?&api_key=062c256e6dcceb85e99718b5574bfbaf&query=';

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

searchedmovies(api);

function searchedmovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');
                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');
                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');
                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'image');
                const title = document.createElement('h3');
                title.setAttribute('id', 'title');
                const center = document.createElement('center');

                title.innerHTML = `${element.title}`;
                image.src = img_src + element.poster_path;

                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);
            });
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;
    if (searchItem) {
        searchedmovies(search_api + searchItem);
        search.value = " ";
    }
});