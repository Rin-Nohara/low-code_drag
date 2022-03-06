import React from 'react';
import { Route, Routes } from 'react-router-dom'

import CoreCanvas from './core/components/Canvas'
import ComponentList from "./core/components/ComponentList";
import ActionList from "./core/components/ActionList";

import Testing from './testing/index'

import Style from './common/index.module.scss'

const App: React.FC = () => {
    return <>
        <Routes>
            <Route path={'/test'} element={
                <Testing />
            } />
            <Route path="/" element={
                <div className={`${Style.base} ${Style.containerFlexRow}`}>
                    <ComponentList />
                    <CoreCanvas />
                    <ActionList />
                </div>
            } />
        </Routes>
    </>;
}

export default App;
