import React from 'react';

const Card = ({ object, category }) => {

    switch (category) {
        case 'people': {
            return (
            <div className=" dib br3 br4 ma2 bw1">
                <div style={{lineHeight:'1.8'}}>
                    <h2 className="bg-card-title tc pa3">{object.name}</h2>
                    <div className='bg-card-content'>
                        <p className="tl"><span className="b ttu ">gender:</span> {object.gender}</p>
                        <p className="tl"><span className="b ttu">birth year:</span> {object.birth_year}</p>
                        <p className="tl"><span className="b ttu">height:</span> {object.height}</p>
                        <p className="tl"><span className="b ttu">mass:</span> {object.mass}</p>
                        <p className="tl"><span className="b ttu">eye color:</span> {object.eye_color}</p>
                        <p className="tl"><span className="b ttu">hair color:</span> {object.hair_color}</p>
                    </div>
                </div>
            </div>
            );
        }
        case 'films': {
            return (
            <div className=" dib br3 br4 ma2 bw1">
                <div style={{lineHeight:'1.8'}}>
                    <h2 className="bg-card-title tc pa3">{object.title}</h2>
                    <div className='bg-card-content'>
                    <p className="tl"><span className="b ttu">Episode:</span> {object.episode_id}</p>
                    <p className="tl"><span className="b ttu">Director:</span> {object.director}</p>
                    <p className="tl"><span className="b ttu">Producer:</span> {object.producer}</p>
                    <p className="tl"><span className="b ttu">Release date:</span> {object.release_date}</p>
                    </div>
                </div>
            </div>
            );
        }
        case 'starships': {
            return (
            <div className=" dib br3 br4 ma2 bw1">
                <div style={{lineHeight:'1.8'}}>
                    <h2 className="bg-card-title tc pa3">{object.name}</h2>
                    <div className='bg-card-content'>
                    <p className="tl"><span className="b ttu">model:</span> {object.model}</p>
                    <p className="tl"><span className="b ttu">starshipclass:</span> {object.starship_class}</p>
                    <p className="tl"><span className="b ttu">length:</span> {object.length}</p>
                    </div>
                </div>
            </div>
            );
        }
        case 'vehicles': {
            return (
            <div className=" dib br3 br4 ma2 bw1">
                <div style={{lineHeight:'1.8'}}>
                    <h2 className="bg-card-title tc pa3">{object.name}</h2>
                    <div className='bg-card-content'>
                    <p className="tl"><span className="b ttu">manufacturer:</span> {object.manufacturer}</p>
                    <p className="tl"><span className="b ttu">model:</span> {object.model}</p>
                    <p className="tl"><span className="b ttu">vehicle class:</span> {object.vehicle_class}</p>
                    <p className="tl"><span className="b ttu">length:</span> {object.length}</p>
                    </div>
                </div>
            </div>
            );
        }
        case 'species': {
            return (
            <div className=" dib br3 br4 ma2 bw1">
                <div style={{lineHeight:'1.8'}}>
                    <h2 className="bg-card-title tc pa3">{object.name}</h2>
                    <div className='bg-card-content'>
                    <p className="tl"><span className="b ttu">language:</span> {object.language}</p>
                    <p className="tl"><span className="b ttu">average height:</span> {object.average_height}</p>
                    <p className="tl"><span className="b ttu">classification:</span> {object.classification}</p>
                    <p className="tl"><span className="b ttu">designation:</span> {object.designation}</p>
                    <p className="tl"><span className="b ttu">eye colors:</span> {object.eye_colors}</p>
                    <p className="tl"><span className="b ttu">skin colors:</span> {object.skin_colors}</p>
                    <p className="tl"><span className="b ttu">hair colors:</span> {object.hair_colors}</p>
                    </div>
                </div>
            </div>
            );
        }
        case 'planets': {
            return (
                <div className=" dib br3 br4 ma2 bw1">
                <div style={{lineHeight:'1.8'}}>
                    <h2 className="bg-card-title tc pa3">{object.name}</h2>
                    <div className='bg-card-content'>
                    <p className="tl"><span className="b ttu">climate:</span> {object.climate}</p>
                    <p className="tl"><span className="b ttu">terrain:</span> {object.terrain}</p>
                    <p className="tl"><span className="b ttu">gravity:</span> {object.gravity}</p>
                    <p className="tl"><span className="b ttu">diameter:</span> {object.diameter}</p>
                    <p className="tl"><span className="b ttu">population:</span> {object.population}</p>
                    </div>
                </div>
            </div>
            );
        }
        default: { 
            return (
                <div></div>
            )
         }
        
    }
}

export default Card;