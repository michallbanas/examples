'use strict';

import fetch from 'node-fetch';
import { apikey } from '../variablesEnv.js';

const url = 'http://www.omdbapi.com/';


const movies = ['Inception', 'The Dark Knight', 'The Godfather', 'Pulp Fiction', 'The Good, the Bad and the Ugly'];

const getMovies = async () => {
    
    // Promise.allSettled is used to check if all promises are resolved or rejected
    const responses = await Promise.allSettled(
        movies.map(movie => fetch(`${url}?t=${movie}&apikey=${apikey}`)) // fetch url for every movie
    )

    responses.forEach((result) =>{
        if (result.status === 'rejected') {
            console.log(`${result.value.url}: ${result.reason}`)
        }
    })    

    if ( responses.some(response => !response.value.ok) ) {
    
        const statusCode = responses.filter(response => !response.value.ok)
                                    .map(response => response.value.status)
        const url = responses.filter(response => !response.value.ok)
                             .map(response => response.value.url)
        
        const merged = url.map((url, index) => {
            return {
                status: statusCode[index],
                url,
            }
        })
        
       console.log(merged)
        throw new Error (JSON.stringify({msg: 'Some of the movies are not found', response: merged}));

    } else {
        const data = await Promise.all(responses.map(response => response.value.json()))
        return data;
    }  

}

getMovies()
    .then(data => {
        const sortedData = data.sort((a, b) => b.imdbRating - a.imdbRating);
        sortedData.map(movie => {
            const [title, director, actors, released, rating] = [movie.Title, movie.Director, movie.Actors, movie.Released, movie.imdbRating];
            console.log(`Title: ${title}, Director: ${director}, Year: ${released}, IMDb rating: ${rating}, Actors: ${actors}`);
        }) 
    })
    .catch(error => console.log(error));