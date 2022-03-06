import {componentJsonType} from './typings'

export interface IProps {
    componentJson: componentJsonType;
    canvasContainer?: HTMLElement | null | undefined;
}

export default function (elementJson: IProps): HTMLElement {

    const { componentJson } = elementJson;

    const element =  document.createElement(componentJson.type as string)

    for (let i in componentJson.style) {
        // @ts-ignore
        element.style[i] = componentJson.style[i]
    }

    // todo 动态
    element.innerText = 'hello'

    return element
}
