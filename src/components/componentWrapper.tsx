import React from 'react';

interface IProps {
    imgPath: string;
}

/**
 * todo 包裹可拖拽的组件，对组件进行解析，解析为 JsonSchema，保存在自己的 data-v 属性中，这一层只对组件进行包装
 * drop 时 传递给 canvas 由 canvas 绘制，后续移动、编辑逻辑交给 canvas
 * @param props
 * @constructor
 */
function ComponentWrapper (props: IProps) {

    const { imgPath } = props;

    return <div>
    {/* 封面 */}
    </div>;
}

export default ComponentWrapper;
