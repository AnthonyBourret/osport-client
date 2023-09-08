import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import EventListPreview from './EventListPreview/EventListPreview';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import useFetch from '../hooks/useFetch';
import { Event } from '../types';
import Spinner from '../Spinner/Spinner';
import IncomingEventList from './IncomingEventList/IncomingEventList';

function Profile() {
const { user: { userInfos: { userId } } } = useContext(AuthContext);
const { data: userInfos } = useFetch(`user/${userId}`, 'GET');
const { data: sports } = useFetch(`user/sport/${userId}`, 'GET');
const { data: events, error: errorEvent, loading: loadingEvent } = useFetch(`event/${userId}`, 'GET');

const eventClosed = events?.filter((event : Event) => event.status === 'finished').slice(0, 3);
const eventOpen = events?.filter((event: Event) => (event.status === 'open' || event.status === 'full'));

  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col px-4 my-auto sm:w-[90%] sm:m-auto sm:my-4 sm:pb-4">
        <div className="flex flex-col gap-4 py-4 sm:flex-row">
          <ProfileInfo
            username={userInfos?.username}
            avatar={userInfos?.image_url}
            sports={sports}
          />
          {loadingEvent
            ? <div className="flex items-center justify-center w-[1/2]"><Spinner /></div>
            : <EventListPreview lastEvents={eventClosed} error={errorEvent} />}
        </div>
        <IncomingEventList nextEvents={eventOpen} />
      </div>
    </>
  );
}

export default Profile;
