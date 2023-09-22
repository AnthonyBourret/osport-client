/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useCookies, Cookies } from 'react-cookie';
import levelNumberToString from '../../../utils/levelNumberToString';
import axiosInstance from '../../../services/axiosInstance';
import capitalize from '../../../utils/capitalize';
import type { Sport, OwnRating, ProfileInfos } from '../../types';
import AuthContext from '../../../context/AuthContext';
import OriginAvatarUrl from '../../../utils/originAvatarUrl';

function ProfileInfo({
 username, avatar, ratings, ownRating,
} : ProfileInfos) {
const { setIsAuth } = useContext(AuthContext);
const [sportChosen, setSportChosen] = useState<'Football' | 'BasketBall'>('Football');

const handleClickLogout = async () => {
    setIsAuth(false);
    await axiosInstance.post('/logout');
};

const handleChangeSport = (e: any) => {
setSportChosen(e.target.value);
};

// Function to convert the number of the level to a string IF the user has MORE THAN ONE rating
const displayCurrentSport = (arraySport : Sport[]) : string => {
const currentSport = arraySport
  .find((sport) => sport.name.toLowerCase() === sportChosen.toLowerCase());
const convertedRating = levelNumberToString(currentSport?.gb_rating);
return convertedRating;
};

// Function to convert the number of the level to a string IF the user has NO rating, but has HIS OWN rating
const displayOwnRating = (arrayOwnRating : OwnRating[]) : string => {
  const currentSport = arrayOwnRating
    .find((sport) => sport.name.toLowerCase() === sportChosen.toLowerCase());
  const convertedRating = levelNumberToString(currentSport?.rating);
  return convertedRating;
  };

  return (
    // ProfileInfo container
    <div className="flex flex-col h-content gap-4 pb-4 px-5 m-auto w-full min-h-80 shadow-xs border border-base-300 rounded-xl mb-2 bg-neutral-focus sm:mb-0 sm:w-1/2">
      <div className="flex flex-col items-center justify-between w-full">

        {/* Avatar and username container */}
        <div className="flex items-center gap-6 p-4 sm:self-start">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img
                src={OriginAvatarUrl(avatar)}
                alt={`${username} avatar`}
              />
            </div>
          </div>
          { username && (<h1 className="text-3xl font-semibold">{capitalize(username)}</h1>)}
        </div>

        {/* If the user hasn't chosen his level yet, this message will be displayed */}
        {ownRating && ownRating.length === 0 && (
          <div className="flex flex-col gap-4 bg-neutral-focus p-4 shadow-md text-base rounded-xl text-center mb-8 sm:m-4">
            <h2 className="text-lg font-semibold">Welcome on O'sport !!</h2>
            <p className="text-justify">
              In order to create balanced teams, you are invited to chose your level by clicking the edit profile button down below.
            </p>
          </div>
        )}
        {/* Link to edit profile and logout */}
        <div className=" flex justify-center sm:self-end">
          <Link to="/edit_profile">
            <button type="button" className="btn btn-ghost border-gray-500 btn-xs m-2">Edit profile</button>
          </Link>
          <button type="button" className="btn btn-ghost border-gray-500 btn-xs m-2" onClick={handleClickLogout}>Logout</button>
        </div>
      </div>

      {/* Level info container */}
      <div className="w-full h-full flex flex-col justify-evenly items-center gap-4">
        <div className="form-control w-full px-4 gap-4">
          <label className="label-text text-xl font-semibold" htmlFor="sport">Check your level</label>
          <select className="select select-bordered select-sm" id="sport" onChange={handleChangeSport} defaultValue={sportChosen}>
            {/* <option disabled selected>{sportChosen}</option> */}
            <option>Football</option>
            <option>Basketball</option>
          </select>
        </div>
        {(ratings) && (
        <div className="text-xl text-base bg-neutral-focus rounded-xl shadow-md p-5 font-bold">

          {/* If global rating is null => ownRating is chosen instead */}
          {(ratings.length === 0 && ownRating.length === 0)
            ? displayCurrentSport(ratings)
            : displayOwnRating(ownRating)}
        </div>
        )}

      </div>
    </div>
  );
}

export default ProfileInfo;
