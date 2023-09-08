import React, { useContext } from 'react';
import { EventContext } from '../../../context/EventContext';

function CreateEventForm() {
  const { eventData, setEventData } = useContext(EventContext);

  return (
    <div className="flex flex-col items-left justify-evenly w-full m-auto gap-6 pt-6 pb-8 bg-neutral-focus p-4 shadow-sm border rounded-xl border-base-300">
      <h1 className="text-3xl sm:pb-4">New event</h1>
      <div className="flex flex-col p-5 gap-5 w-full min-[815px]:flex-row min-[815px]:flex-wrap min-[815px]:justify-around min-[815px]:w-full">
        <div className="flex flex-col gap-3">
          {/* On selectionne le sport pour créer l'event */}
          <label htmlFor="sport" className="text-lg">Chose a sport</label>
          <select
            className="select shadow-md select-sm bg-base-100 m-auto w-full"
            onChange={(e) => {
              setEventData({ ...eventData, sportId: Number(e.target.value) });
            }}
          >
            <option className="hidden">Pick one</option>
            <option value={1}>Football</option>
            <option value={2}>BasketBall</option>
          </select>
        </div>
        {/* Une fois le sport choisi on selectionne le nombre de participants */}
        <div className="flex flex-col gap-3">
          <label htmlFor="nb-particpant" className="text-lg">Number of participants</label>
          <select
            className="select shadow-md select-sm bg-base-100 m-auto w-full"
            onChange={(e) => {
              setEventData({ ...eventData, nbMaxParticipant: Number(e.target.value) });
            }}
            defaultValue={6}
          >
            <option value={6}>3v3</option>
            <option value={10}>5v5</option>
          </select>
        </div>
        {/* On selectionne le lieu de l'event */}
        <div className="flex flex-col justify-between gap-3">
          <label htmlFor="location" className="text-lg">Location</label>
          <input
            className="select shadow-md select-sm bg-base-100 m-auto w-full"
            type="text"
            name="location"
            placeholder="City..."
            onChange={(e) => {
              setEventData({ ...eventData, location: e.target.value });
            }}
          />
        </div>
        {/* On selectionne la dureé de l'event */}
        <div className="flex flex-col gap-3">
          <label htmlFor="location" className="text-lg">Duration</label>
          <input
            className="select select-sm shadow-md bg-base-100 m-auto w-full"
            type="text"
            name="duration"
            placeholder="Duration in min ..."
            onChange={(e) => {
              setEventData({ ...eventData, duration: Number(e.target.value) });
            }}
          />
        </div>
        {/* On selectionne la date de l'event */}
        <div className="flex flex-col gap-3">
          <label htmlFor="sport" className="text-lg">Chose a date</label>
          <input
            type="date"
            name="date"
            id="date"
            className="bg-base-100 shadow-md rounded-lg px-3 py-1 m-auto w-full"
            min={new Date().toISOString().split('T')[0]} // Set the minimum date dynamically
            onChange={(e) => {
              const selectedDate = new Date(e.target.value).toISOString();
              setEventData((prevEventData) => ({
                ...prevEventData,
                eventDate: selectedDate,
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateEventForm;
