function addMovieEvent()
{
    let inputField = document.forms["addMovieForm"]["movieTitle"].value;
    let ratingField = document.forms["addMovieForm"]["movieRating"].value;

    if (inputField == "" || ratingField > 5 || ratingField < 0)
    {
        alert("Data was not entered correctly. Try again.");
    }
    
    let movieTitleText = document.getElementById("movieTitle").value = '';
    let ratingMovieText = document.getElementById("movieRating").value = '';
}