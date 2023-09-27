import React, { useState } from 'react';

interface PlayerModalProps {
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
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button" onClick={closeModal}>✕</button>
        <h3 className="font-bold text-lg mb-2">Chose a note between 1 to 10</h3>
        <div className="flex justify-center w-full">
          <input
            onChange={(e) => {
                setRating(Number(e.target.value));
              }}
            min={1}
            max={10}
            type="number"
            name="rating"
            className="p-4 bg-neutral shadow-xl border rounded-xl rounded-r-none border-gray-700 w-24 text-center text-xl font-bold"
          />
          <button
            type="submit"
            className="btn btn-lg m-0 rounded-l-none"
            disabled={!rating}
          >
            Rate
          </button>
        </div>
        <p className="text-sm pt-8 text-center">
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
