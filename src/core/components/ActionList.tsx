import React from 'react';
import Style from '../styles/actionList.module.scss'

const ActionList: React.FC = () => {
    return <div className={`${Style.wrapper} `}>
        {/* todo text or title from open status */}
        <button className={`${Style.button}`} title={'关闭'}> {'>'} </button>
        {/* todo open or close from redux */}
        <div className={`${Style.base} ${Style.shadow} ${Style.open}`}></div>
    </div>
};

export default ActionList;
