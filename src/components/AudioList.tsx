import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect } from 'react';
import { fetchAudios } from '../store/actions/audio';
import { Loader } from './UI/loader/Loader';

export const AudioList = () => {
    const { audios, error, loading } = useTypedSelector((state) => state.audio);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAudios());
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <div>
                {audios.map((audio) => (
                    <p key={audio.id}>
                        {audio.artistName}
                        {audio.audioTitle}
                        {audio.albumTitle}
                    </p>
                ))}
            </div>
        </div>
    );
};
