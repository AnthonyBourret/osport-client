import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import useFetch from '../hooks/useFetch';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import CreateEventButton from './CreateEventButton/CreateEventButton';
import List from './List/List';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';

function EventList() {
  // On recupère l'id de l'user connecté via le AuthContext
  const { user } = useContext(AuthContext);
  const id = user?.userInfos.userId;

  // On recupère la liste des events de l'user connecté
  const { data: list, error: eventsError, loading: listLoading } = useFetch(`event/${id}`, 'GET');
  const [eventList, setEventList] = useState();

  // Le useEffect permet de mettre à jour la liste à chaque fois que la page est (re)chargée
  useEffect(() => {
    if (list) {
      setEventList(list);
  }
  }, [list]);
  // Si aucun event n'est trouvé on ne renvoie rien
  if (eventsError) return null;

  return (
    <div className="pb-4 mb-8 sm:mb-0">
      <Header />
      <Menu />
      {listLoading
        ? <div className="flex items-center justify-center w-full my-8"><Spinner /></div>
        : (
          <>
            <div className="flex flex-col items-center p-4 sm:w-4/5 sm:m-auto sm:my-4 sm:pb-4">
              <CreateEventButton />
              {/* // On envoie la liste des events et l'id de l'user connecté au composant List */}
              <List events={eventList} />
            </div>
            <Footer />
          </>
      )}
    </div>
  );
}

export default EventList;
