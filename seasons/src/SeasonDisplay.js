import React from 'react';
import './SeasonDisplay.css';


const seasonConfig = {
    summer: {
        textOnScreen: "Lets hit the beach",
        iconName: "sun"
    },
    winter: {
        textOnScreen: "Oh its chilly outside",
        iconName: "snowflake"
    }
}

const getSeason=(lat, month) => {
    if(month > 2 && month < 9 ) {
        return lat > 0 ? "summer" : "winter";
    }else{
        return lat > 0 ? "winter" : "summer"
    }
}

const SeasonDisplay=(props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {textOnScreen, iconName} = seasonConfig[season];
    
    return (
    <div className={`season-display ${season}`}>
        <i className={`massive top-left ${iconName} icon`} />
        <h1>{textOnScreen}</h1>
        <i className={`massive bottom-right ${iconName} icon`} />
    </div>
    );
}

export default SeasonDisplay;