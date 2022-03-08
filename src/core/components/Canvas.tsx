import React, { useEffect, useRef, LegacyRef } from 'react';
import { useDrop } from 'ahooks'

import Style from '../styles/canvas.module.scss'
import bgImg from '../../assets/background.jpg'

import useMouse from "../hooks/useMouse";
import jsonToDom from "../utlis/canvasAppend";

const Canvas: React.FC = () => {
    const targetDom = useRef<HTMLDivElement>()
    const { x: mouseDownX, y: mouseDownY } = useMouse({ mouseEventName: 'mousedown', bindDom: targetDom.current })
    const { x: mouseMoveX, y: mouseMoveY } = useMouse({ mouseEventName: 'mousemove', bindDom: targetDom.current, delayTime: 1000 })
    const { x: mouseUpX, y: mouseUpY } = useMouse({ mouseEventName: 'mouseup', bindDom: targetDom.current })

    useEffect(() => {
        console.log(mouseDownX, mouseDownY, mouseMoveX, mouseMoveY, mouseUpX, mouseUpY)
    }, [mouseDownX, mouseDownY, mouseMoveX, mouseMoveY, mouseUpX, mouseUpY])

    useDrop(targetDom, {
        onDom: (content: string, e) => {
            console.log('onDom data is :', content)
            const x = e?.clientX || e?.pageX || 0
            const y = e?.clientY || e?.pageY || 0

            /*
                todo 硬编码，由于左侧定宽，canvas 开启相对定位之后 需要减去左侧 componentlist 的宽度
                理想状态：动态计算左侧宽度 或者 基于 canvas 区域 鼠标的 x、y
             */
            const computedX = x <= 0 ? 0 : x - 300
            const renderDom = jsonToDom({ canvasContainer: targetDom.current, position: { x: computedX, y } })
            targetDom.current?.appendChild(renderDom)
        },
    });

    return <>
        <div ref={targetDom as LegacyRef<HTMLDivElement>} className={`${Style.container} ${Style.flexOne}`} style={{backgroundImage: `url(${bgImg})`}}/>
    </>;
};

export default Canvas;
