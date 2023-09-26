import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Header from '../Header/Header';
import EditInfo from './EditInfo/EditInfo';
import EditLevel from './EditLevel/EditLevel';
import useFetch from '../hooks/useFetch';
import Footer from '../Footer/Footer';
import DeleteAccount from './DeleteAccount/DeleteAccount';

function EditProfile() {
  const { user: { userInfos: { userId } } } = useContext(AuthContext);
  const { data: userInfos } = useFetch(`user/${userId}`, 'GET');

  return (
    <div className="mb-12 sm:mb-0">
      <Header />
      <div className="flex flex-col p-4 sm:w-4/5 sm:m-auto sm:gap-4 sm:my-4 sm:pb-4 sm:flex-row sm:justify-between">
        <EditInfo avatar={userInfos?.image_url} />
        <div className="divider" />
        <EditLevel />
      </div>
      <div className="px-4 sm:w-4/5 sm:m-auto sm:gap-4 sm:my-4 sm:pb-4">
        <div className="divider mt-0" />
        <DeleteAccount />
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
