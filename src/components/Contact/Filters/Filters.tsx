import React from 'react';
import { FilterSelection } from '../../types';

function Filters({ setfilter }: FilterSelection) {
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        // Selon l'option choisie dans le select on met à jour le state filter
        // avec la valeur qui correspond au statut renvoyé par la BDD
        if (e.target.value === 'Show all') {
            setfilter('all');
        }
        if (e.target.value === 'Accepted') {
            setfilter('accepted');
        }
        if (e.target.value === 'Waiting for confirmation') {
            setfilter('pending');
        }
    }
  return (
    <div className="form-control items-center gap-2 my-8 mt-8">
      <label htmlFor="id" className="label-text text-lg">Filter contacts by</label>
      <select
        id="filter"
        className="select select-bordered border-neutral shadow-md w-full max-w-xs"
        onChange={handleChange}
      >
        <option disabled selected>Chose an option</option>
        <option>Show All</option>
        <option>Accepted</option>
        <option>Waiting for confirmation</option>
      </select>
    </div>
  );
}

export default Filters;
