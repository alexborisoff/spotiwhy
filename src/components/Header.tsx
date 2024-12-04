import { ChangeEvent, useMemo, useState } from 'react';
import { SearchBar } from './UI/SearchBar/SearchBar';

export const Header = () => {
    const [selectedSort, setSelectedSort] = useState<string>('');
    const [search, setSearch] = useState<string>('');

    const sortedAudios = useMemo(() => {}, [selectedSort]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <header>
            <SearchBar
                value={search}
                placeholder="What do you want to play?"
                onChange={changeHandler}
            />
        </header>
    );
};
