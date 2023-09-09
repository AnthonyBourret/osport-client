import React, {
 FormEvent, useState, useContext, useRef, useEffect,
} from 'react';
import DOMPurify from 'dompurify';
import axios from 'axios';
import useMutation from '../../hooks/useMutation';
import AuthContext from '../../../context/AuthContext';
import useFetch from '../../hooks/useFetch';
import OriginAvatarUrl from '../../../utils/originAvatarUrl';

function EditInfo({ avatar }) {
  const { userId } = useContext(AuthContext).user.userInfos;
  const imageRef = useRef<HTMLInputElement>(null);

  const [newUsername, setNewUsername] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [body, setBody] = useState<object>(null);
  const [userImage, setUserImage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const regexes = {
    username: /^[a-zA-Z0-9_-]{4,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]{8,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  };

  const isValidUsername = regexes.username.test(newUsername);
  const isValidEmail = regexes.email.test(newEmail);

  const { data: user, loading } = useFetch(`/user/${userId}`, 'GET');

  useEffect(() => {
    setNewEmail(user?.email);
      setNewUsername(user?.username);
  }, [loading, user?.email, user?.username]);

  useEffect(() => {
    setUserImage(avatar);
  }, [setUserImage, avatar]);

  const handleChange = (/* e: React.ChangeEvent<HTMLFormElement> */) => {
    setBody(null); // Reset messages
    if (!isValidUsername || !isValidEmail) {
      setErrorMessage('Invalid username or email adress');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanNewUsername = DOMPurify.sanitize(newUsername);
    const body = {
      userId,
      username: cleanNewUsername,
      email: newEmail,
    };

    if (!cleanNewUsername) {
      setErrorMessage('Type a username');
      return;
    }

    if (!isValidUsername) {
      setErrorMessage('Username must be at least 2 characters long.');
      return;
    }

    if (!newEmail) {
      setErrorMessage('Type an email adress');
      return;
    }

    if (!isValidEmail) {
      setErrorMessage('Email must be valid');
      return;
    }

    setBody(body);
  };

  const handleChangeImageFile = async (e : any) => {
    const validFilesTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg', 'image/webp'];
    const maxSize = 1024 * 1024 * 1024; // 1024 mo

    if (!validFilesTypes.find((type) => type === e.target.files[0].type)) {
      console.log('File must be an png or jpg type');
    } else if (e.target.files[0].size > maxSize) {
      console.log('File must not exceded 1024 mo');
    } else {
    const formData = new FormData();
    formData.append('id', userId.toString());
    formData.append('image', e.target.files[0]);

    await axios.patch(`${import.meta.env.VITE_SERVER_URL}/user/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      console.log(import.meta.env.VITE_SERVER_URL + res.data.data.image_url);
      setUserImage(import.meta.env.VITE_SERVER_URL + res.data.data.image_url);
    }).catch((err) => {
      console.log(err);
    });
  }
};

    const { data, error } = useMutation('/user', body, 'PATCH');

  return (
    <div className="flex flex-col shadow- bg-neutral-focus border border-base-300 rounded-xl items-center text-left sm:w-1/2">

      {/* Edit profile container */}
      <form className="w-full flex flex-col items-center gap-6 py-4" onChange={handleChange}>
        <h1 className="text-2xl">Edit profile</h1>

        {/* Change username container */}
        <div className="w-full px-6 sm:flex sm:flex-col">
          <label htmlFor="username" className="label-text text-base">Change your username</label>
          <div className="flex gap-2 justify-between items-center mt-4">
            <input id="username" name="username" type="text" className="input input-sm input-bordered w-3/4" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
          </div>
        </div>

        {/* Change email container */}
        <div className="w-full px-6 sm:flex sm:flex-col">
          <label htmlFor="email" className="label-text text-base">Change your email</label>
          <div className="flex gap-2 justify-between items-center mt-4">
            <input id="email" name="email" type="email" className="input input-sm input-bordered w-3/4" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

            {/* Button to save email & username changes */}
            <button type="button" className="btn btn-sm btn-ghost border-gray-500" onClick={handleSubmit}>Save</button>
          </div>
          {errorMessage ? (
            <div className="text-error text-sm ml-2 mt-6">
              {errorMessage}
            </div>
          ) : null }
          {data ? (
            <div className="text-success text-sm ml-2 mt-6">
              Modifications saved
            </div>
          ) : null}
        </div>
      </form>

      {/* Change avatar picture container */}
      <form encType="multipart/form-data" className="w-full flex flex-col items-center gap-6 py-4">
        <div className="avatar flex flex-col items-center gap-6 px-6">
          <div className="w-20 rounded-full">
            <label htmlFor="image" className="cursor-pointer">
              <img
                src={OriginAvatarUrl(userImage)}
                alt={`${newUsername} avatar`}
              />
            </label>
            <input
              type="file"
              hidden
              ref={imageRef}
              className="input input-sm input-bordered"
              id="image"
              name="image"
              onChange={handleChangeImageFile}
            />
          </div>
        </div>
        <p className="text-xs px-4 mb-10 sm:text-sm">Click on your profile picture to chose a new one</p>
      </form>
    </div>

  );
}

export default EditInfo;
