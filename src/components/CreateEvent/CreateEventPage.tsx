import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import CreateEventForm from './EventForm/EventForm';
import FriendsToInvite from './FriendsToInvite/FriendsToInvite';
// import EventContactList from './EventContactList/EventContactList';
import SendInvitations from './SendInvitations/SendInvitations';
import Footer from '../Footer/Footer';

function CreateEvent() {
  return (
    <div className="pb-6 mb-8 sm:mb-0">
      <Header />
      <Menu />
      <div className="flex flex-col items-center m-4 sm:w-4/5 sm:p-4 sm:m-auto sm:pb-4 sm:mt-4 gap-4 sm:mb-16">
        <CreateEventForm />
        <div className="flex flex-col w-full gap-4 sm:flex-row">
          <FriendsToInvite />
          <SendInvitations />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateEvent;
