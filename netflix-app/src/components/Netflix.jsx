import React, { Component } from 'react';
import DisplayMovies from './DisplayMovies';

class Netflix extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const netflixArray = [
            { movieName: 'Hook', yearReleased: '1991', genre: 'Comedy'},
            { movieName: 'The Fifth Element', yearReleased: '1997', genre: 'Action Scifi'},
            { movieName: 'Notting Hill', yearReleased: '1999', genre: 'RomCom'}, 
        ];
        return (
            <div>
                {
                    netflixArray.foreach(
                        (m) => {
                            <DisplayMovies movieList={m}/> 
                        }
                    )
                }
                <DisplayMovies />
            </div>
        )
    }

}

export default Netflix;