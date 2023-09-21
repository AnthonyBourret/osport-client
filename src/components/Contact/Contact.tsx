import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import useFetch from '../hooks/useFetch';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact/SearchContact';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';

function Contact() {
  // On recupere l'id de l'user connecté
  const { user } = useContext(AuthContext);
  const id = user?.userInfos.userId;
  const [pendings, setPendings] = useState(null);
  const [accepted, setAccepted] = useState(null);
  const [sent, setSent] = useState(null);
  const [contactList, setContactList] = useState(null);

  // On recupere la liste des amis de l'user connecté selon chaque statut (sent, accepted, pending)
  const { data: sentList, error: sentListError, loading: sentLoading } = useFetch(`user_friends/sent/${id}`, 'GET');
  const { data: acceptedList, error: acceptedListError, loading: acceptedLoading } = useFetch(`user_friends/accepted/${id}`, 'GET');
  const { data: pendingList, error: pendingListError, loading: pendingLoading } = useFetch(`user_friends/pending/${id}`, 'GET');

  // Le useEffect permet de mettre à jour les listes des contacts à chaque fois que
  // les listes d'amis sont mises à jour
  useEffect(() => {
    if (!acceptedList || !pendingList || !sentList) return;
      setAccepted(acceptedList);
      setPendings(pendingList);
      setSent(sentList);
    }, [acceptedList, pendingList, sentList]);

  // useEffect qui permet de créer un nouveau tableau réunissant
  // tous les contacts précedemment mis à jour
  useEffect(() => {
    if (!sent || !accepted || !pendings) return;
    setContactList([...pendings, ...sent, ...accepted]);
  }, [sent, accepted, pendings]);

  // Si il y a une erreur lors d'une des 3 requêtes, on ne renvoie
  if (sentListError || pendingListError || acceptedListError) return null;

  return (
    <div className="pb-6 mb-8 sm:mb-0">
      <Header />
      {/* Si le statut loading est true, on affiche l'îcone de chargement */}
      {sentLoading || acceptedLoading || pendingLoading
      ? <div className="flex items-center justify-center w-full my-8"><Spinner /></div>
      : (
        <>
          <div className="m-4 sm:w-3/5 sm:p-4 sm:m-auto sm:pb-4 sm:mt-4">
            <SearchContact userId={id} />
            <ContactList
              contactList={contactList}
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
