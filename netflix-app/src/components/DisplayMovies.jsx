import React, {Component} from 'react';

class DisplayMovies extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div >
                <p className= 'pink'>Name: {this.props.movieList.movieName}</p>
                <p className='green'>Year Released: {this.props.movieList.yearReleased}</p>
                <p className='orange'>Genre: {this.props.movieList.genre}</p>
                <hr/>
            </div>
        );
    }
}

export default DisplayMovies;