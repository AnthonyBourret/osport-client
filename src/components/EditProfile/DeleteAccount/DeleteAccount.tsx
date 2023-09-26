import React, { useContext, useState } from 'react';
import AuthContext from '../../../context/AuthContext';
import axiosInstance from '../../../services/axiosInstance';

function DeleteAccount() {
    const { userId } = useContext(AuthContext).user.userInfos;
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const { setIsAuth } = useContext(AuthContext);

    const handleDelete = async (deleteUserId: number) => {
        try {
            const res = await axiosInstance.delete(`/user/${deleteUserId}`);
            setIsDeleted(true);
            if (res.status === 200) {
              setTimeout(async () => {
                setIsAuth(false);
                await axiosInstance.post('/logout');
              }, 2000);
            }
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <div className="flex justify-center shadow-sm items-center py-4 bg-neutral-focus border border-base-300 rounded-xl">
      <button
        type="button"
        className="btn btn-sm btn-ghost border-gray-500"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Delete your account
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-col gap-8 items-center">
          <form method="dialog">
            {/* eslint-disable-next-line react/button-has-type */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg text-center">{!isDeleted ? 'Do you really want to delete your account ?' : 'Your account has been successfully deleted, waiting for redirection'}</h3>
          <button
            type="button"
            className="btn btn-sm btn-ghost border-gray-500"
            onClick={() => handleDelete(userId)}
            disabled={isDeleted}
          >
            {!isDeleted ? 'Yes, delete my account' : <span className="loading loading-spinner loading-xs" />}
          </button>
          <p className="py-4 text-sm">You will be missed !</p>
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
        >
          <button type="submit">close</button>
        </form>
      </dialog>

    </div>
  );
}

export default DeleteAccount;
