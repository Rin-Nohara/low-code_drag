import {createElement} from 'react';
import * as ReactDOM from "react-dom";
import {componentJsonType} from './typings'

export interface IProps {
    // todo componentJson 应为 required
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
    console.log('componentJson == ', componentJson)
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

    /*
        todo componentJson 转为 createElement 可识别的格式
        现在为 写死的 h1 标签，后续 TODO:
            1. 解析 jsonSchema 将对应组件渲染
            2. 添加 componentId 和 renderId，优化性能
            3. 支持 custom 组件
     */
    // @ts-ignore
    return ReactDOM.render(createElement(
        'h1',
        {
            // 渲染时必须的三个样式
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
