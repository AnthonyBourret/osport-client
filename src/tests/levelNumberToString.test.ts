import { describe, it, expect } from 'vitest';
import levelNumberToString from '../utils/levelNumberToString';

describe('levelNumberToString', () => {
    it('should transform 0 to a string', () => {
        expect(levelNumberToString(0)).toBe('No rating yet');
    });
    it('should transform null to a string', () => {
        expect(levelNumberToString(null)).toBe('No rating yet');
    });
    it('should transform 3 to a string', () => {
        expect(levelNumberToString(3)).toBe('Beginner');
    });
    it('should transform 5 to a string', () => {
        expect(levelNumberToString(5)).toBe('Intermediate');
    });
    it('should transform 8 to a string', () => {
        expect(levelNumberToString(8)).toBe('Confirmed');
    });
    it('should transform 10 to a string', () => {
        expect(levelNumberToString(10)).toBe('Expert');
    });
});
