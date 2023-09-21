import React, { useState } from 'react';

interface PlayerModalProps {
    userId : number;
    userIdToRate: number;
    closeModal: () => void;
    rateUser: (rating: number, playerToRateId: number) => void;
    formModal: React.RefObject<HTMLFormElement>;
}

function PlayerModal({
    userIdToRate,
    closeModal,
    rateUser,
    formModal,
    userId,
}: PlayerModalProps) {
    const [rating, setRating] = useState<number>();

  return (
    <dialog id="ratingModal" className="modal">
      <form
        method="dialog"
        className="modal-box flex flex-col items-center gap-4 py-12"
        ref={formModal}
        onSubmit={() => { rateUser(rating, userIdToRate); }}
      >
        {/* Le button pour fermer ne fonctionne pas avec le type="button" (modal DaisyUI)  */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button" onClick={closeModal}>✕</button>
        <h3 className="font-bold text-lg mb-2">
          {/* Le texte change si l'id de l'utilisateur
          à noter est le même que celui de l'utilisateur connecté */}
          {userIdToRate === userId ? 'You are not allowed to rate yourself !' : 'Chose a note between 1 to 10'}
        </h3>
        <div className="flex justify-center w-full">
          <input
            onChange={(e) => {
                setRating(Number(e.target.value));
              }}
            min={1}
            max={10}
            type="number"
              // Si l'id de l'utilisateur à noter est le même que celui de
              // l'utilisateur connecté, on désactive le bouton et l'input
            className={userIdToRate === userId
                ? 'p-4 bg-neutral btn-disabled shadow-xl border rounded-xl rounded-r-none border-gray-700 w-24 text-center text-xl font-bold'
                : 'p-4 bg-neutral shadow-xl border rounded-xl rounded-r-none border-gray-700 w-24 text-center text-xl font-bold'}
          />
          <button
            type="submit"
            className={userIdToRate === userId ? 'btn btn-disabled btn-lg m-0 rounded-l-none' : 'btn btn-lg m-0 rounded-l-none'}
            disabled={userIdToRate === userId || !rating}
          >
            Rate
          </button>
        </div>
        <p className="text-sm pt-8">
          Be careful, once you have rated a player, you can't change your rating !
        </p>
      </form>
      <form
        method="dialog"
        className="modal-backdrop"
      >
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}

export default PlayerModal;
