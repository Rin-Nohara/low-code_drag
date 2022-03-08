import {componentJsonType} from './typings'

export interface IProps {
    componentJson: componentJsonType;
    canvasContainer?: HTMLElement | null | undefined;
}

export default function vdomToDom (elementJson: IProps): HTMLElement {

    const { componentJson } = elementJson;
    const { props, type } = componentJson;

    const element =  document.createElement(type as string)

    for (let i in props.style) {
        // @ts-ignore
        element.style[i] = props.style[i]
    }

    // todo 动态
    element.innerText = 'hello'

    return element
}
