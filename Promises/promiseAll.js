'use strict';

import fetch from 'node-fetch';
import { apikey } from '../variablesEnv.js';

const url = 'http://www.omdbapi.com/';


const movies = ['Inception', 'The Dark Knight', 'The Godfather', 'Pulp Fiction', 'The Good, the Bad and the Ugly'];

const getMovies = async () => {
    const promises = movies.map(movie => 
        fetch(`${url}?t=${movie}&apikey=${apikey}`));
    const responses = await Promise.all(promises);
    const data = await Promise.all(responses.map(response => response.json()))
    const everyResponse = responses.every(response => response.ok)
    const someResponse = responses.some(response => !response.ok)

    if (everyResponse || someResponse) {

        const title = data.map(movie => movie.Title);
        const status = responses.map(response => response.status)
        const merged = title.map((title, index) => {
            return {
                title,
                status: status[index]
            }
        });
        console.log(merged);
    } 
    return data;
}

getMovies().then(data => {

        // sort data by imdbRating
        const sortedData = data.sort((a, b) => b.imdbRating - a.imdbRating);
        const allMovies = sortedData.map(movie => {
            const [title, director, actors, released, rating] = [movie.Title, movie.Director, movie.Actors, movie.Released, movie.imdbRating];
            console.log(`Title: ${title}, Director: ${director}, Year: ${released}, IMDb rating: ${rating}, Actors: ${actors}`);
        }) 
        
        return allMovies;
    }) 
     .catch(error => console.log(error));