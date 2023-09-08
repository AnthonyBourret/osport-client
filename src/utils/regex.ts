const userAvatarOrigin = /^(http|https):/;

const usernameCreation: any = /^[a-zA-Z0-9_-]{2,}$/;

const passwordCreation: any = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]{8,}$/;

const emailCreation: any = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export {
 userAvatarOrigin, usernameCreation, passwordCreation, emailCreation,
};
