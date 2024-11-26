import { Audio } from '../data/local/models/Audio';

export interface AudioState {
    audios: Audio[];
    loading: boolean;
    error: null | string;
}

export enum AudioActionTypes {
    FETCH_AUDIO = 'FETCH_AUDIO',
    FETCH_AUDIO_SUCCESS = 'FETCH_AUDIO_SUCCESS',
    FETCH_AUDIO_ERROR = 'FETCH_AUDIO_ERROR',
}

interface FetchAudioAction {
    type: AudioActionTypes.FETCH_AUDIO;
}

interface FetchAudioSuccessAction {
    type: AudioActionTypes.FETCH_AUDIO_SUCCESS;
    payload: Audio[];
}

interface FetchAudioErrorAction {
    type: AudioActionTypes.FETCH_AUDIO_ERROR;
    payload: string;
}

export type AudioAction = FetchAudioAction | FetchAudioErrorAction | FetchAudioSuccessAction;
