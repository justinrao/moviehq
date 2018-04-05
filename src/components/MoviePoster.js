import React from 'react';
import {Box} from "gestalt";


const MoviePoster = ({title, posterUrl, onClick, height}) => (
  <div className="poster">
    <Box>
      <img alt={title}
           style={{maxWidth: '100%', height}}
           src={posterUrl}
           onClick={onClick}/>
    </Box>
  </div>

);

export default MoviePoster;
