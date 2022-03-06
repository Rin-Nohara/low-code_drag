type normalElementType = 'div' | 'button' | 'input' | 'img' | 'p' | 'h1' | 'h2' | 'h3'
type reactElementType = 'reactFunctionComponent' | 'reactFC' | 'reactNode' | 'reactElement'

export type ComponentJsonElementType<T = undefined> = normalElementType | reactElementType | T
export type ComponentJsonEventType<T = undefined> = 'click' | 'change' | 'selected'

export type componentJsonType = {
    type: ComponentJsonElementType,
    event?: ComponentJsonEventType,
    style?: any
}