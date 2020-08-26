import React, { useState, useEffect } from 'react'
import axios from '../axios';
import VideoCard from './VideoCard'
import FlipMove from 'react-flip-move';


function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(selectedOption);
            // console.log(res.data.results);
            setMovies(res.data.results);
            return res;
        }

        fetchData();
    }, [selectedOption]);
    console.log(movies);
    return (
        <div className="results">
            <FlipMove>
                {
                    movies.map((item, key) => (
                        <VideoCard
                            key={item.id}
                            movie={item}
                        />
                    ))}
            </FlipMove>
        </div>
    )
}

export default Results
