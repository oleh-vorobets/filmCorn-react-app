import './FoundNumber.css';
import { FoundNumberType } from '../types';

export function FoundNumber({ foundNumber }: FoundNumberType) {
    return (
        <p className="num-results">
            Found <strong>{foundNumber}</strong> results
        </p>
    );
}
