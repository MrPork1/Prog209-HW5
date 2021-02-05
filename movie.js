function Movie(title, rating) 
{
  this.movieTitle = title,
  this.movieRating = rating,
  this.validate = function() 
  {
    if (this.movieTitle != "" && this.movieRating >= 1 && this.movieRating <= 5)
    {
      return true;
    }
  };
  this.returnStr = function()
  {
    return this.movieTitle + " " + this.movieRating;
  };
}