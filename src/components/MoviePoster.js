import React from 'react';
import {Box} from "gestalt";


const MoviePoster = ({title, posterUrl, onClick}) => (
  <div className="poster">
    <Box>
      <img alt={title}
           style={{maxWidth: '100%', minHeight: 400}}
           src={posterUrl}
           onClick={onClick}/>
    </Box>
  </div>

);

export default MoviePoster;