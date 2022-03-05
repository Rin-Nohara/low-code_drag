import React from 'react';
import CoreCanvas from './core/components/Canvas'
import ComponentList from "./core/components/ComponentList";
import ActionList from "./core/components/ActionList";

import Style from './common/index.module.scss'

const App: React.FC = () => {
    return <>
        <div className={`${Style.base} ${Style.containerFlexRow}`}>
            <ComponentList />
            <CoreCanvas />
            <ActionList />
        </div>
    </>;
}

export default App;
