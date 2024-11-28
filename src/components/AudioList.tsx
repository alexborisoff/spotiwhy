import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect } from 'react';
import { fetchAudios } from '../store/actions/audio';
import { Loader } from './UI/loader/Loader';
import { AudioCard } from './UI/AudioCard/AudioCard';
import '../styles/MainSection.scss';

export const AudioList = () => {
    const { audios, error, loading } = useTypedSelector((state) => state.audio);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAudios());
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <section className="audioList">
            {audios.map((audio) => (
                <AudioCard key={audio.id} audio={audio} />
            ))}
        </section>
    );
};
