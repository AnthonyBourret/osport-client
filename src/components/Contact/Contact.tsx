import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import useFetch from '../hooks/useFetch';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact/SearchContact';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';

function Contact() {
  // On recupere l'id de l'user connecté
  const { user } = useContext(AuthContext);
  const id = user?.userInfos.userId;
  const [pendings, setPendings] = useState(null);
  const [accepted, setAccepted] = useState(null);
  const [sent, setSent] = useState(null);

  // On recupere la liste des amis de l'user connecté
  const { data: sentList, error: sentListError, loading: sentLoading } = useFetch(`user_friends/sent/${id}`, 'GET');
  const { data: acceptedList, loading: acceptedLoading } = useFetch(`user_friends/accepted/${id}`, 'GET');
  const { data: pendingList, loading: pendingLoading } = useFetch(`user_friends/pending/${id}`, 'GET');

  // Le useEffect permet de mettre à jour la liste des contacts à chaque fois que
  // les listes d'amis sont mises à jour

 useEffect(() => {
  if (!acceptedList) return;
    setAccepted(acceptedList);
  }, [acceptedList]);

 useEffect(() => {
  if (!pendingList) return;
    setPendings(pendingList);
  }, [pendingList]);

  useEffect(() => {
    if (!sentList) return;
    setSent(sentList);
  }, [sentList]);

  if (sentListError) return null;

  return (
    <div className="pb-6 mb-8 sm:mb-0">
      <Header />
      <Menu />
      {sentLoading || acceptedLoading || pendingLoading
      ? <div className="flex items-center justify-center w-full my-8"><Spinner /></div>
      : (
        <>
          <div className="m-4 sm:w-3/5 sm:p-4 sm:m-auto sm:pb-4 sm:mt-4">
            <SearchContact userId={id} />
            <ContactList
              accepted={accepted}
              pendings={pendings}
              sents={sent}
              userId={id}
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Contact;
