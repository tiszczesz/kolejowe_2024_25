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



}
