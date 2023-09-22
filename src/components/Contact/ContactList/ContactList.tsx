/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */

import React, { useState } from 'react';
import AcceptDeclineButton from '../AcceptDeclineButton/AcceptDeclineButton';
import ContactAdded from '../ContactAdded/ContactAdded';
import InvitationLoader from '../InvitationLoader/InvitationLoader';
import ContactModal from '../ContactModal/ContactModal';
import { Contacts, ContactInfo } from '../../types';

function ContactList({ userId, contactList } : Contacts) {
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);

  // Fonction qui permet de mettre à jour les données à envoyer dans la modale
  const setModalData = (avatar: string, username: string, email: string) => {
    setPicture(avatar);
    setName(username);
    setMail(email);
  };

  return (
    <ul className="w-full">

      {/* Map sur la liste des contacts créée grâce au spread operator */}
      {contactList && contactList.length > 0 && contactList.map((contact: ContactInfo) => (
        <li
          key={contact.friend.id}
          className="bg-neutral-focus flex flex-col gap-6 shadow-md border border-base-300 rounded-xl py-2.5 px-6 my-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="avatar flex self-start items-center gap-6 w-full">
            <div
              className="w-12 rounded-full sm:w-14 cursor-pointer"
                // A chaque fois que la modale est ouverte (via l'avatar) on met à jour le state
              onClick={() => {
                  document.getElementById('contact_modal').showModal();
                  setModalData(contact.friend.avatar, contact.friend.username, contact.friend.email);
                 }}
            >

              {/* On affiche l'avatar de l'utilisateur si il en a un, sinon on affiche un avatar par défaut */}
              {contact.friend.avatar
                ? <img src={contact.friend.avatar} alt={contact.friend.username} />
                : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="default avatar" />}
            </div>
            {contact.friend.username
              && (
                <h1
                  className="text-2xl cursor-pointer"
                  // A chaque fois que la modale est ouverte (via le nom) on met à jour le state
                  onClick={() => {
                    document.getElementById('contact_modal').showModal();
                    setModalData(contact.friend.avatar, contact.friend.username, contact.friend.email);
                   }}
                >
                  {contact.friend.username}
                </h1>
              )}
          </div>

          {/* Si l'id de l'user connecté === à l'id de l'user qui a envoyé la demande d'ami, on affiche le bouton d'acceptation/refus */}
          {contact.user_id === userId && <AcceptDeclineButton askedId={userId} askerId={contact.friend.id} />}

          {/* Si l'id de l'user connecté === à l'id de l'user qui a envoyé l'invitation et que le statut != de 'accepted', on affiche le loader */}
          {contact.asker_id === userId && contact.status !== 'accepted' && <InvitationLoader />}

          {/* Si le statut est accpeted, on affiche le composant ContactAdded */}
          {contact.status === 'accepted' && <ContactAdded />}

          {/* Modale où on affiche les informations de l'utilisateur mise à jour dans les  différents states */}
          <ContactModal avatar={picture} username={name} email={mail} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
