import React, {useEffect} from 'react';

import Style from '../styles/canvas.module.scss'
import bgImg from '../../assets/background.jpg'

import useMouse from "../hooks/useMouse";

const Canvas: React.FC = () => {

    const { x, y } = useMouse({ mouseEventName: 'mousedown' })

    useEffect(() => {
        console.log(x, y)
    }, [x, y])

    return <>
        <div className={`${Style.container} ${Style.flexOne}`} style={{backgroundImage: `url(${bgImg})`}}/>
    </>;
};

export default Canvas;
