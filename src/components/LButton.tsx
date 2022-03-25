import React, { useRef, LegacyRef } from 'react';
import ComponentWrapper from './componentWrapper';
import {useDrag} from "ahooks";

const LButton: React.FC = () => {

    const dragRef = useRef<HTMLElement>();

    useDrag(LButtonJSON, dragRef, {
        onDragStart: () => {
            console.log('drag start')
        },
        onDragEnd: () => {
            console.log('drag end')
        },
    });

    return <>
        <ComponentWrapper imgPath={'asd'}>
            <button ref={dragRef as LegacyRef<HTMLButtonElement>} draggable={true} data-componentData={LButtonJSON}>test button</button>
        </ComponentWrapper>
    </>
}

export const LButtonJSON = {
    type: 'button',
    event: 'click',
    handle: () => {},
    children: undefined,
}

export default LButton
