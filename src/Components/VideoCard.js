import React, { forwardRef } from 'react'
import ReactTextTruncate from 'react-text-truncate';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
const base_url = "https://image.tmdb.org/t/p/original/"
const VideoCard = forwardRef(({ movie }, ref) => {

    return (
        <div ref={ref} className="videoCard">
            <img
                src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                alt="Movie Poster" />
            <ReactTextTruncate
                line={1}
                element="p"
                truncateText="-"
                text={movie.overview}

            />

            <h2>{movie.original_title || movie.title}</h2>
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} *`}
                {movie.release_date || movie.first_air_date} *
    <ThumbUpAltSharpIcon />{" "}{movie.vote_count}</p>
        </div>
    )
})

export default VideoCard
