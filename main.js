let moviesArray = [];

function createMovieObjectAndValidate()
{
    let inputField = document.forms["addMovieForm"]["movieTitle"].value;
    let ratingField = document.forms["addMovieForm"]["movieRating"].value;

    let newMovie = new Movie(inputField, ratingField);
    if (newMovie.validate())
    {
        console.log("adding movie to array!");
        moviesArray.push(newMovie);
    }
    else
    {
        alert("Data was not entered correctly. Try again.");

    }

    let movieTitleText = document.getElementById("movieTitle").value = '';
    let ratingMovieText = document.getElementById("movieRating").value = '';
}

function showMovieList()
{
    let myUI = document.getElementById("moviesListHere");
    myUI.innerHTML = "";

    let ul = document.createElement('ul');
    document.getElementById('moviesListHere').appendChild(ul);
    for(let i = 0; i < moviesArray.length; i++)
    {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = moviesArray[i].returnStr();
    };
}