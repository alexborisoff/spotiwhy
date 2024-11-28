import { Audio } from '../../../data/local/models/Audio';
import cl from './AudioCard.module.scss';

interface AudioCardProps {
    audio: Audio;
}

export const AudioCard = ({ audio }: AudioCardProps) => {
    return (
        <div className={cl.cardContainer}>
            <p>{audio.id}</p>
            <div className={cl.trackInfo}>
                <p className={cl.audioTitle}>{audio.audioTitle}</p>
                <p>{audio.artistName}</p>
            </div>
            <p>{audio.albumTitle}</p>
        </div>
    );
};
