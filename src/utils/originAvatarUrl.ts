import { userAvatarOrigin } from './regex';

function OriginAvatarUrl(url: string | null) {
    // We accept only picsum url for faker user or
    if (userAvatarOrigin.test(url)) return url;

    // Pixabay for user without avatar
    if (url === null) return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    // For users who uploaded themselves their avatar
    return import.meta.env.VITE_SERVER_URL + url;
}

export default OriginAvatarUrl;
