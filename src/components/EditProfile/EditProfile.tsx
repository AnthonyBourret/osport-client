import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import EditInfo from './EditInfo/EditInfo';
import EditLevel from './EditLevel/EditLevel';
import useFetch from '../hooks/useFetch';
import Footer from '../Footer/footer';

function EditProfile() {
  const { user: { userInfos: { userId } } } = useContext(AuthContext);
  const { data: userInfos } = useFetch(`user/${userId}`, 'GET');

  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col p-4 mb-28 sm:w-4/5 sm:m-auto sm:gap-4 sm:my-4 sm:pb-4 sm:flex-row sm:justify-between">
        <EditInfo avatar={userInfos?.image_url} />
        <div className="divider" />
        <EditLevel />
      </div>
      <Footer />
    </>
  );
}

export default EditProfile;
