import React from 'react';

const Card = ({ title, episode_id, director, producer, release_date }) => {
    return ( 
        <div className=" dib bn b--white-30 br4 pa3 ma2 grow bw1 card">
            <div style={{lineHeight:'1.8'}}>
                <h2 className="tc bb bw1 b--yellow mb3">FILM</h2>
                <p className="tl"><span className="b">Title:</span> {title}</p>
                <p className="tl"><span className="b">Episode:</span> {episode_id}</p>
                <p className="tl"><span className="b">Director:</span> {director}</p>
                <p className="tl"><span className="b">Producer:</span> {producer}</p>
                <p className="tl"><span className="b">Release date:</span> {release_date}</p>
            </div>
        </div>
    )
}

export default Card;