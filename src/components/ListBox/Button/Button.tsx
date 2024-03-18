import { ButtonType } from '../types';

export function Button({ children, onOpen }: ButtonType) {
    return (
        <button className="btn" onClick={onOpen}>
            {children}
        </button>
    );
}
