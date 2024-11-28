import { AudioList } from './AudioList';
import { FolderSection } from './FolderSection';
import '../styles/App.scss';
import { ArtistInfoSection } from './ArtistInfoSection';

export const MainSection = () => {
    return (
        <main>
            <FolderSection />
            <AudioList />
            <ArtistInfoSection />
        </main>
    );
};
