import React from 'react';

interface ContactModalProps {
    avatar: string;
    username: string;
    email: string;
}

function ContactModal({ avatar, username, email } : ContactModalProps) {
  return (
    <dialog id="contact_modal" className="modal">
      <div className="modal-box flex flex-col items-center gap-16 px-12 pt-0">
        <form method="dialog">
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div className="avatar flex items-center gap-8 w-fit">
          <div className="w-20 rounded-full border-2 border-neutral-focus sm:w-24">
            {avatar
                  ? <img src={avatar} alt={username} />
                  : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="default avatar" />}
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold">{username}</h1>
        </div>
        <div className="alert flex justify-center w-fit">
          <p className="text-xl sm:text-2xl font-semibold sm:px-4">{email}</p>
        </div>
        <p className="text-sm text-center mt-8">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
}

export default ContactModal;
