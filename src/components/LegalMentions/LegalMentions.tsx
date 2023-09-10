import React from 'react';
import { Link } from 'react-router-dom';

const LegalMentions = () => (
  <>
    <div className="flex flex-col items-center gap-10 mt-6">
      <h1 className="text-6xl">O'sport</h1>
    </div>

    <div className="min-h-screen p-8 px-3 sm:px-8 mb-10">
      <div className="max-w-3xl mx-auto bg-neutral-focus p-8 rounded-xl shadow border border-base-300 relative">
        <Link
          to="/signup"
          onClick={() => window.scrollTo(0, 0)}
          className="absolute top-5 right-5"
        >
          <button type="button" className="btn btn-ghost border-2 border-gray-500 sm:btn-md">
            Return
          </button>
        </Link>

        <h1 className="text-2xl font-bold mb-4 pt-12 sm:pt-0">LEGAL NOTICE</h1>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Website Edition</h2>
          <p>
            This website, accessible at URL
            {' '}
            <a href="https://osport-client.netlify.app/" className="link-info hover:underline">
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
            <a href="mailto:mail@gmail.com" className="link-info hover:underline">mail@gmail.com</a>
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
