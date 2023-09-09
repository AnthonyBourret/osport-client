import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from '../../context/AuthContext';
import LogIn from '../LogIn/LogIn';
import SignUp from '../Signup/SignUp';
import Profile from '../Profile/Profile';
import Contact from '../Contact/Contact';
import EventList from '../EventList/EventList';
import EditProfile from '../EditProfile/EditProfile';
import CreateEvent from '../CreateEvent/CreateEventPage';
import Event from '../Event/Event';
import ProtectedRoutes from './ProtectedRoutes';
import RedirectToProfile from './RedirectToProfile';
import { EventContextProvider } from '../../context/EventContext';
import Page404 from '../Page404/Page404';
import LegalMentions from '../LegalMentions/LegalMentions';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <AuthContextProvider>
      <Routes>

        <Route element={<RedirectToProfile />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edit_profile" element={<EditProfile />} />
          <Route path="/event_list" element={<EventList />} />
          <Route
            path="/create_event"
            element={(
              <EventContextProvider>
                <CreateEvent />
              </EventContextProvider>
        )}
          />
          <Route path="/event/:id" element={<Event />} />
        </Route>

        <Route path="/legal_mentions" element={<LegalMentions />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AuthContextProvider>

  );
}

export default App;
