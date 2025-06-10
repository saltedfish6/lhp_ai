// 配置
// 电影接口地址
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
// Dom 编程 原生JS
// 返回的DOM对象 节点对象
const oForm = document.querySelector('#form');
const oInput = document.querySelector('#search');
// const main = document.querySelector('#main');
console.log(oForm);
// 获取电影
const getMovies = (keyword) => {
    // console.log(keyword)
    let reqUrl = '';
    if (keyword) {
        //搜索
        reqUrl = SEARCH_API + keyword;
    } else {
        reqUrl = API_URL;
    }
    fetch(reqUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            showMovies(data.results);
        })
}
// movie list render 渲染
const showMovies = (movies) => {
    // main.innerHTML = '';
    // es6 解构
    // 右边{ } 解给左边
    let main = document.querySelector("#main");
    main.innerHTML= movies.map(movie => {
        const { poster_path, title, vote_average, overview} = movie;
        return`
        <div class="movie">
            <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>${movie.vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${movie.overview}
            </div>
        </div>`
        
    }
    ).join('');
}

// 页面加载完成后执行
window.onload = function () {
    getMovies();
}
oForm.addEventListener('submit', function (event) {
    // 事件对象
    console.log(event, '////');
    event.preventDefault();
    const search = oInput.value;
    // console.log(search);
    // if (search.trim()) {
    //     console.log(search.trim());
    // } else {
    //     console.log('请输入内容');
    // }
    if (search) {
        // 搜索电影
        getMovies(search);
    }
})