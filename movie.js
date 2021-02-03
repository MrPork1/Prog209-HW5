function Movie(title, rating) 
{
  this.movieTitle = title,
  this.movieRating = rating,
  this.validate = function() 
  {
    if (document.getElementById("movieRating").value < 1 || document.getElementById("movieRating").value > 5 || document.getElementById("movieTitle").value == "")
    {
      return false;
    }
    else
    {
      return true
    }
  };
  this.toString = function()
  {
    return title + " " + rating;
  };
};