import cl from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={cl.loader__secion}>
            <p className={cl.loader}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <p> loading </p>
        </div>
    );
};
