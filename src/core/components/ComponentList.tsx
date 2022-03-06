import React from 'react';
import Style from '../styles/componentList.module.scss'

import { componentsArr } from "../../components";

const ComponentList: React.FC = () => {
    return <>
        <div className={`${Style.base} ${Style.shadow}`}>
            {componentsArr.map((item,index) => {
                return <React.Fragment key={index}>
                    {item}
                </React.Fragment>
            })}
        </div>
    </>
};

export default ComponentList;
