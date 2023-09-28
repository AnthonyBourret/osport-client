import { describe, it, expect } from 'vitest';
import formDateNumeric from '../utils/formatDateNumeric';

describe('formDateNumeric', () => {
    it('should return a date in the format "dd/mm/yyyy"', () => {
        expect(formDateNumeric('2020-01-01T00:00:00.000Z')).toBe('01/01/2020');
    });
});
