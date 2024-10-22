using System;
using System.Text.Json;

namespace cw6.Models;

public class MoviesRepo
{
    private string _filePath;
    private List<Movie>? _movies;

    public MoviesRepo(string filePath)
    {
        _filePath = filePath;
        string content = File.ReadAllText(_filePath);
        _movies = JsonSerializer.Deserialize<List<Movie>>(content);
    }
    public List<Movie>? Movies
    {
        get { return _movies; }
    }
    private void SaveChanges()
    {
         var options = new JsonSerializerOptions
        {
            WriteIndented = true
        };
        string content = JsonSerializer.Serialize(_movies, options);
        File.WriteAllText(_filePath, content);
    }
    private int GetNextId() //autoincrement
    {
        return _movies != null ? _movies.Max(m => m.Id) + 1 : 1;
    }
    public void AddMovie(Movie movie)
    {
        if (_movies == null)
        {
            _movies = new List<Movie>();
        }
        movie.Id = GetNextId();
        _movies.Add(movie);
        SaveChanges();
    }
}
