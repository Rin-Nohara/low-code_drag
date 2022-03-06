import {createElement} from 'react';
import * as ReactDOM from "react-dom";
import {componentJsonType} from './typings'

export interface IProps {
    componentJson?: componentJsonType;
    canvasContainer?: HTMLElement | null | undefined;
    position: {
        x: number;
        y: number
    }
}

type NullOrElement = null | HTMLElement

let cacheRoot: NullOrElement = null;

// 将 component 的 JSONSchema 转为 dom
const jsonToDom = (props: IProps): HTMLElement => {

    const { componentJson, canvasContainer = null, position } = props;
    let rootDom: NullOrElement = null;
    if(!canvasContainer) {
        rootDom = cacheRoot;
    } else {
        rootDom = canvasContainer
    }

    if(!rootDom) {
        throw new TypeError(`canvasContainer is not exist.`)
    }
    cacheRoot = canvasContainer

    // todo componentJson 转为 createElement 可识别的格式
    // @ts-ignore
    return ReactDOM.render(createElement(
        'h1',
        {
            style: {
                position: 'absolute',
                top: position.y,
                left: position.x
            }
        },
        'hello'
    ), canvasContainer)
}

export default jsonToDom;
