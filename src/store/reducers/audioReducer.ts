import { AudioAction, AudioActionTypes, AudioState } from '../../types/audio';

const initialState: AudioState = {
    audios: [],
    loading: false,
    error: null,
};

export const audioReducer = (state = initialState, action: AudioAction): AudioState => {
    switch (action.type) {
        case AudioActionTypes.FETCH_AUDIO:
            return { loading: true, error: null, audios: [] };
        case AudioActionTypes.FETCH_AUDIO_SUCCESS:
            return { loading: false, error: null, audios: action.payload };
        case AudioActionTypes.FETCH_AUDIO_ERROR:
            return { loading: false, error: action.payload, audios: [] };
        default:
            return state;
    }
};
