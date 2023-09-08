import React from 'react';
// import AcceptDeclineButton from '../AcceptDeclineButton/AcceptDeclineButton';
// import InvitationLoader from '../InvitationLoader/InvitationLoader';
// import ContactAdded from '../ContactAdded/ContactAdded';
import AcceptedRequest from '../AcceptedRequest/AcceptedRequest';
import SentRequest from '../SentRequest/SentRequest';
import PendingRequest from '../PendingRequest/PendingRequest';
import OriginAvatarUrl from '../../../utils/originAvatarUrl';

interface ContactsProps {
  userId: number;
  accepted: any;
  pendings: any;
  sents: any;
}

function ContactList({
 userId, accepted, pendings, sents,
} : ContactsProps) {
  return (
    <ul className="w-full">
      {pendings && pendings.length > 0 && pendings.map((el) => (
        <PendingRequest
          avatar={OriginAvatarUrl(el.friend.avatar)}
          username={el.friend.username}
          userId={userId}
          friendId={el.friend.id}
        />
        ))}
      {/* Si contacts existe, on map dessus */}
      { accepted && accepted.length > 0 && accepted.map((el) => (
        <AcceptedRequest
          key={el.friend.id}
          avatar={OriginAvatarUrl(el.friend.avatar)}
          username={el.friend.username}
        />
      ))}
      {sents && sents.length > 0 && sents.map((el) => (
        <SentRequest
          key={el.friend.id}
          avatar={OriginAvatarUrl(el.friend.avatar)}
          username={el.friend.username}
        />
        ))}
    </ul>
  );
}

export default ContactList;
