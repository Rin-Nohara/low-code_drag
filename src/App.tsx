import React from 'react';
import CoreCanvas from './core/components/canvas'

import Style from './common/index.module.scss'

const App: React.FC = () => {
    return <>
        <div className={Style.base}>
            <CoreCanvas />
        </div>
    </>;
}

export default App;
