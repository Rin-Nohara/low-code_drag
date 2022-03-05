import React, { useMemo } from 'react';
import Style from '../styles/actionList.module.scss';
import useToggle from '../hooks/useToggle'

const ActionList: React.FC = () => {

    const { toggleState, toggle } = useToggle(true);

    const btnInfo = useMemo(() => {
        return toggleState ? {
            btnText: '关闭',
            btnSymbol: '>'
        } : {
            btnText: '打开',
            btnSymbol: '<'
        }
    }, [toggleState])

    return <div className={`${Style.wrapper} `}>
        <button className={`${Style.button}`} title={btnInfo.btnText} onClick={toggle}> {btnInfo.btnSymbol} </button>
        <div className={`${Style.base} ${Style.shadow} ${toggleState ? Style.open : Style.close}`}/>
    </div>
};

export default ActionList;
