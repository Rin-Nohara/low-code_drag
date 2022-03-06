import { useState, useRef } from 'react';

export interface IReturn {
    toggleState: boolean;
    toggle: () => void;
    close: () => void;
    open: () => void;
}

export default function useToggle(defaultToggle: boolean, delayTime?: number): IReturn {
    const [toggleState, setToggleState] = useState<boolean>(defaultToggle);
    const setTimeoutRef = useRef<any>();

    function toggle (): void {
        // 计时器已经存在，不执行 setToggleState
        if(setTimeoutRef.current) return void 0;
        if(delayTime) {
            setTimeoutRef.current = setTimeout(() => {
                setToggleState(!toggleState);
                clearTimeout(setTimeoutRef.current)
                setTimeoutRef.current = undefined
            }, delayTime)
        } else {
            setToggleState(!toggleState);
        }
    }

    function close ():void {
        setToggleState(false)
    }

    function open ():void {
        setToggleState(true)
    }

    return {
        toggleState,
        toggle,
        close,
        open
    }

}
