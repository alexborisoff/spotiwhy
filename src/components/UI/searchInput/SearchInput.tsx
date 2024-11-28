import { ChangeEvent } from 'react';
import cl from './SearchInput.module.scss';

interface SearchInputProps {
    value?: string;
    placeholder?: string;
    type?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ type, value, placeholder, onChange }: SearchInputProps) => {
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
