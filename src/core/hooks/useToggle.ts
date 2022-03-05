import { useState, useRef } from 'react';

export interface IReturn {
    toggleState: boolean,
    toggle: () => void
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

    return {
        toggleState,
        toggle
    }

}
