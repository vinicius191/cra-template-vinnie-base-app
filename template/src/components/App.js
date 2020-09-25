import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startingApp, appStarted } from '../actions';

const App = () => {
    const dispatch = useDispatch();
    const app = useSelector(
        state => state.app
    );

    const startApp = () => {
        dispatch(startingApp());
    };

    const useMountEffect = (fun) => useEffect(fun, []);
    useMountEffect(startApp);

    const onStartAppClick = () => {
        dispatch(appStarted());
    };

    const renderInitButtons = () => {
        console.log('app', app);
        if(app) {
            if(!app.started) {
                return <button className="ui primary button" onClick={onStartAppClick}>Click to start App</button>
            } else {
                return <button className="ui positive button">App Started</button>
            }
        }

        return <button className="ui loading button">Loading...</button>
    };

    return (
        <div className="ui container">
            <h2 className="ui dividing header">Basic App</h2>
            {renderInitButtons()}
        </div>
    );
};

export default App;