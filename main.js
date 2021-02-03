let moviesArray = [];

function addMovieEvent()
{
    let inputField = document.forms["addMovieForm"]["movieTitle"].value;
    let ratingField = document.forms["addMovieForm"]["movieRating"].value;

    let newMovie = new Movie(inputField, ratingField);
    if (newMovie.validate() == true)
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
    let myUI = document.getElementById("allMoviesList");
    myUI.innerHTML = "";


    for(let i = 0; i < moviesArray.length; i++)
    {
        let ul = document.createElement('ul');
        document.getElementById('allMoviesList').appendChild(ul);
        let li = document.createElement('li');
        ul.appendChild(li);
        document.getElementById("allMoviesList").innerHTML = moviesArray[i];
        li.innerHTML = moviesArray[i];
    };
}