import React from 'react';
import Style from '../styles/canvas.module.scss'
import bgImg from '../../assets/background.jpg'

const Canvas: React.FC = () => {
    return <>
        <div className={`${Style.container} ${Style.flexOne}`} style={{backgroundImage: `url(${bgImg})`}}/>
    </>;
};

export default Canvas;
