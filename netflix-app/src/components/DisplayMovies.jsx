import React, {Component} from 'react';

class DisplayMovies extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Movie: {this.props.movieList}</h1>
            </div>
        )
    }
}

export default DisplayMovies;