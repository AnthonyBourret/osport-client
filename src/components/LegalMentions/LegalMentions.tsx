import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const LegalMentions = () => (
  <>
    <Header />
    <Menu />
    <div className="min-h-screen p-8 px-3 sm:px-8 mb-10">
      <div className="max-w-3xl mx-auto bg-neutral-focus p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">LEGAL NOTICE</h1>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Website Edition</h2>
          <p>
            This website, accessible at URL
            {' '}
            <a href="https://osport-client.netlify.app/" className="text-blue-500 hover:underline">
              https://osport-client.netlify.app/
            </a>
            {' ('}
            the "Site"
            {') '}
            , is published by:
          </p>
          <p>
            The Osport association, registered with the prefecture/sub-prefecture of 1 -
            Prefecture Bourg-en-Bresse under registration number W123456789, with its
            registered office at 75000 Paris, located at rue de la tour eiffel,
            represented by Osport prenom Osport duly authorized.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Hosting</h2>
          <p>
            The Site is hosted by the company Autre, located at 2 rue
            de l'échappée 75010 PARIS, (phone contact or email: +33612345678).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Publication Director</h2>
          <p>The Publication Director of the Site is [Name of the Director].</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>By phone: +33612345689</p>
          <p>
            By email:
            <a href="mailto:mail@gmail.com" className="text-blue-500 hover:underline">mail@gmail.com</a>
          </p>
          <p>By mail: 2 rue de l'échappée 75010 PARIS</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Personal Data</h2>
          <p>
            The processing of your personal data is governed by our
            Privacy Policy, available from the "Personal Data Protection
            Charter" section, in accordance with the General Data
            Protection Regulation 2016/679 of April 27, 2016 ("GDPR").
          </p>
        </section>
      </div>
    </div>
  </>
  );

export default LegalMentions;
