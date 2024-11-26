import cl from './Loader.module.scss';

export const Loader = () => {
    return (
        <div >
            <p className={cl.loader}></p>
            <p> Data is loading... </p>
        </div>
    );
};
