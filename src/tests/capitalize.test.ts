import { describe, expect, it } from 'vitest';
import capitalize from '../utils/capitalize';

describe('capitalize', () => {
    it('should capitalizes the first letter of a string', () => {
        expect(capitalize('john')).toBe('John');
    });

    it('should capitalizes the first letter of a string with multiple words', () => {
        expect(capitalize('john doe')).toBe('John doe');
    });

    it('should capitalizes the first letter of a string with underscores', () => {
        expect(capitalize('john_doe')).toBe('John doe');
    });
});
