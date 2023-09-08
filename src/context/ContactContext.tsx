// import React, {
//   createContext,
//   useState,
//   FunctionComponent,
//   ReactNode,
//   useEffect,
// } from 'react';
// import useFetch from '../components/hooks/useFetch';

// const ContactContext = createContext(undefined);

// export const ContactContextProvider = ({ children }) => {
//   const [contactList, setContactList] = useState([]);
//   const [userId, setUserId] = useState(null);

//   const {
//     data: sentList,
//     error: sentListError,
//     loading: loadSent,
//   } = useFetch(`user_friends/sent/${userId}`, 'GET');
//   const { data: acceptedList, loading: loadAccepted } = useFetch(
//     `user_friends/accepted/${userId}`,
//     'GET',
//   );
//   const { data: pendingList, loading: loadPending } = useFetch(
//     `user_friends/pending/${userId}`,
//     'GET',
//   );

//   const value = {
//     contactList,
//     setContactList,
//     setUserId,
//   };

//   useEffect(() => {
//     if (!loadSent && !loadAccepted && !loadPending) {
//       console.log('is working');
//       setContactList((prev) => ({
//         if(acceptedList) {
//           [...acceptedList];
//         },
//       }));
//     }
//   }, [acceptedList, pendingList, sentList]);

//   return (
//     <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
//   );
// };

// export default ContactContext;
