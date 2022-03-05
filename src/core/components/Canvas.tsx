import React, { useEffect, useRef, LegacyRef } from 'react';

import Style from '../styles/canvas.module.scss'
import bgImg from '../../assets/background.jpg'

import useMouse from "../hooks/useMouse";

const Canvas: React.FC = () => {
    const targetDom = useRef<HTMLDivElement>()

    const { x, y } = useMouse({ mouseEventName: 'mouseup', bindDom: targetDom.current })

    useEffect(() => {
        console.log(x, y)
    }, [x, y])

    return <>
        <div ref={targetDom as LegacyRef<HTMLDivElement>} className={`${Style.container} ${Style.flexOne}`} style={{backgroundImage: `url(${bgImg})`}}/>
    </>;
};

export default Canvas;
