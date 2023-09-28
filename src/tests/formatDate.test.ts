import { describe, it, expect } from 'vitest';
import formatDate from '../utils/formatDate';

describe('formatDate', () => {
    it('should return a date in the format "dd/mm/yyyy"', () => {
        expect(formatDate('2020-01-01T00:00:00.000Z')).toBe('1 January 2020');
    });
});
