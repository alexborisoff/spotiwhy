import { ChangeEvent, useState } from 'react';
import { SearchInput } from './UI/searchInput/SearchInput';

export const Header = () => {
    const [search, setSearch] = useState<string>('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <header>
            <SearchInput value={search} placeholder="What do you want to play?" onChange={changeHandler} />
        </header>
    );
};
