import { useEffect, useState } from 'react';

// 鼠标事件类型，调用 hook 时，只可以监听这些事件
type MouseEventNamesType = 'mouseup' | 'mousedown' | 'mousemove'

export interface IReturn {
    x: number,
    y: number,
}

export interface IUseMouseAttr {
    mouseEventName: MouseEventNamesType;
    // mousemove 时 节流秒数
    delayTime?: number;
}

export default function useMouse(attr: IUseMouseAttr): IReturn {

    const { mouseEventName, delayTime } = attr;

    const [scopedState, setScopedState] = useState<IReturn>({
        x: 0,
        y: 0
    });

    function mouseHandle (event: MouseEvent) {
        setScopedState({
            x: event.clientX,
            y: event.clientY,
        })
    }

    useEffect(() => {
        window.addEventListener(mouseEventName, (event) => mouseHandle(event as MouseEvent))
        return () => {
            console.log('unmount mouse')
            window.removeEventListener(mouseEventName, (event) => mouseHandle(event as MouseEvent))
        }
    }, [mouseEventName])

    return scopedState as IReturn;
}
