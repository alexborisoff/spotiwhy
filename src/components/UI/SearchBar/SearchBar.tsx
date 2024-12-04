import { ChangeEvent } from 'react';
import cl from './SearchBar.module.scss';

interface SearchBarProps {
    value?: string;
    placeholder?: string;
    type?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ type, value, placeholder, onChange }: SearchBarProps) => {
    return (
        <input
            type={type}
            className={cl.inputSearch}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};
