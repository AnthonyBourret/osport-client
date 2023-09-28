import { describe, it, expect } from 'vitest';
import OriginAvatarUrl from '../utils/originAvatarUrl';

describe('OriginAvatarUrl', () => {
    it('should return the picsum url', () => {
        expect(OriginAvatarUrl('https://picsum.photos/200/300')).toBe('https://picsum.photos/200/300');
    });
    it('should return the default avatar url', () => {
        expect(OriginAvatarUrl(null)).toBe('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');
    });
    it('should return the uploaded image url', () => {
        expect(OriginAvatarUrl('/uploads/avatars/2021-10-17T13:45:49.000Z-1634477149000-IMG_20211017_154544.jpg')).toBe('http://localhost:5001/uploads/avatars/2021-10-17T13:45:49.000Z-1634477149000-IMG_20211017_154544.jpg');
    });
});
