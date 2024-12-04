import { Dispatch } from 'redux';
import { AudioActionTypes } from '../../types/audio';
import { audioData } from '../../data/remote/models/AudioResponseModel';

// correct  Type: any
export const fetchAudios = (): any => {
    return (dispatch: Dispatch) => {
        try {
            dispatch({ type: AudioActionTypes.FETCH_AUDIO });
            const delayDebounceFn = setTimeout(() => {
                dispatch({ type: AudioActionTypes.FETCH_AUDIO_SUCCESS, payload: audioData });
            }, 4000);
            return () => clearTimeout(delayDebounceFn);
        } catch (e) {
            dispatch({ type: AudioActionTypes.FETCH_AUDIO_ERROR, payload: 'Was error' });
        }
    };
};
