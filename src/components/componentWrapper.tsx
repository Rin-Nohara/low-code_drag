import React, {ReactElement, ReactNode, useEffect, useMemo} from 'react';

interface IProps {
    imgPath: string;
    children: ReactElement | ReactNode
}

/**
 * todo 包裹可拖拽的组件，对组件进行解析，解析为 JsonSchema，保存在自己的 data-v 属性中，这一层只对组件进行包装
 * drop 时 传递给 canvas 由 canvas 绘制，后续移动、编辑逻辑交给 canvas
 * @param props
 * @constructor
 */
const ComponentWrapper: React.FC<IProps> = (props) => {

    // todo 支持点击后出现特殊效果

    const { imgPath, children } = props;

    function clickHandle (): void {

    }

    useEffect(() => {
        console.log(children)
    }, [])

    return <div onClick={clickHandle}>
        {children}
    </div>;
}

export default ComponentWrapper;
