import { useEffect, useState } from 'react';

// 鼠标事件类型，调用 hook 时，只可以监听这些事件
type MouseEventNamesType = 'mouseup' | 'mousedown' | 'mousemove'

export interface IReturn {
    x: number,
    y: number,
    _isSelf?: boolean,
}

export interface IUseMouseAttr {
    mouseEventName: MouseEventNamesType;
    // mousemove 时 节流秒数
    delayTime?: number;
    bindDom?: HTMLElement;
}

export default function useMouse(attr: IUseMouseAttr): IReturn {

    const { mouseEventName, bindDom } = attr;

    const [scopedState, setScopedState] = useState<IReturn>({
        x: 0,
        y: 0
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function mouseHandle (event: MouseEvent) {
        setScopedState({
            x: event.clientX,
            y: event.clientY,
            // 需要注意 dom2 冒泡阶段 currentTarget 和 target 不一致，currentTarget 为 祖先元素，target 为 目标元素，所以只需要比较 target
            // todo 第一次点击时 bindDom 为 undefined 所以第一次点击恒为 false
            _isSelf: event.target === bindDom
        })
    }

    useEffect(() => {
        const targetDom: HTMLElement | Window = bindDom ? bindDom : window;
        targetDom.addEventListener(mouseEventName, mouseHandle as EventListener)
        return () => {
            targetDom.removeEventListener(mouseEventName, mouseHandle as EventListener)
        }
    }, [mouseEventName, bindDom, mouseHandle])

    return scopedState as IReturn;
}
