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
import Footer from '../Footer/Footer';

function Profile() {
const { user: { userInfos: { userId } } } = useContext(AuthContext);
const { data: userInfos } = useFetch(`user/${userId}`, 'GET');
const { data: events, error: errorEvent, loading: loadingEvent } = useFetch(`event/${userId}`, 'GET');
const { data: sports, loading: loadingSports } = useFetch(`user/sport/${userId}`, 'GET');
const { data: ownRating, loading: loadingOwnRating } = useFetch(`user/own_rating/${userId}`, 'GET');

const eventClosed = events?.filter((event : Event) => event.status === 'finished').slice(0, 3);
const eventOpen = events?.filter((event: Event) => (event.status === 'open' || event.status === 'full'));

  return (
    <div className="mb-12 sm:mb-0">
      <Header />
      <Menu />
      {/* Loader for the whole page while fetching is active */}
      {loadingSports || loadingOwnRating || loadingEvent
      ? <div className="flex items-center justify-center w-full my-8"><Spinner /></div>
      : (
        <>
          <div className="flex flex-col px-4 sm:mb-0 my-auto sm:w-[90%] sm:m-auto sm:my-4">

            <div className="flex flex-col gap-4 py-4 sm:flex-row">
              <ProfileInfo
                username={userInfos?.username}
                avatar={userInfos?.image_url}
                sports={sports}
                ownRating={ownRating}
              />
              <EventListPreview lastEvents={eventClosed} error={errorEvent} />
            </div>
            <IncomingEventList nextEvents={eventOpen} />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Profile;
