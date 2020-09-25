import { STARTING_APP, APP_STARTED } from './types';

export const startingApp = () => (dispatch) => {
    dispatch({
        type: STARTING_APP
    });
};

export const appStarted = () => (dispatch) => {
    dispatch({
        type: APP_STARTED,
        payload: { started: true, loading: false }
    })
};