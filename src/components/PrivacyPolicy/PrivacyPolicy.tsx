import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const PrivacyPolicy = () => (
  <>
    <Header />
    <Menu />
    <div className="min-h-screen p-8 px-3 sm:px-8 mb-10">
      <div className="max-w-3xl mx-auto bg-neutral-focus p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">PRIVACY POLICY</h1>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
          <p>
            The website
            {' '}
            <a href="https://osport-client.netlify.app/" className="text-blue-500 hover:underline">https://osport-client.netlify.app/</a>
            {' '}
            is owned by O'sport, who is a data controller of your personal data.
          </p>
          <p>
            We have adopted this privacy policy, which determines how we process
            the information collected by
            {' '}
            <a href="https://osport-client.netlify.app/" className="text-blue-500 hover:underline">https://osport-client.netlify.app/</a>
            , also providing the reasons why we need to collect certain personal
            data about you. Therefore, you should read this privacy policy before
            using the website of
            {' '}
            <a href="https://osport-client.netlify.app/" className="text-blue-500 hover:underline">https://osport-client.netlify.app/</a>
            .
          </p>
          <p>
            We take care of your personal data and are committed to ensuring its
            confidentiality and security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Personal Information We Collect</h2>
          <p>
            When you visit
            {' '}
            <a href="https://osport-client.netlify.app/" className="text-blue-500 hover:underline">https://osport-client.netlify.app/</a>
            , we automatically collect certain information about your device,
            including information about your web browser, IP address, time zone,
            and some of the cookies installed on your device. Additionally, when
            you browse the site, we collect information about the web pages or
            individual products you view, websites or search terms that referred
            you to the site, and how you interact with the site. We refer to this
            information automatically collected as "device information." Furthermore,
            we may collect personal data that you provide to us (including, but not
            limited to, name, first name, address, payment information, etc.) when
            registering to fulfill the contract.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Why We Process Your Data</h2>
          <p>
            Our top priority is the security of customer data, and as such, we
            can only process minimal data about users, only to the extent absolutely
            necessary to maintain the website. Automatically collected information
            is used solely to identify potential cases of abuse and to compile
            statistical information about the use of the website. This statistical
            information is not otherwise aggregated to identify a specific user of
            the system.

          </p>
          <p>
            You can visit the website without telling us who you are or revealing
            any information by which someone could identify you as a specific and
            identifiable individual. However, if you want to use certain features
            of the website, or if you want to receive our newsletter or provide
            other details by filling out a form, you may provide us with personal
            data, such as your email, first name, last name, city of residence,
            organization, phone number. You can choose not to provide us with your
            personal data, but you may then not be able to enjoy certain features
            of the website. For example, you will not be able to receive our newsletter
            or contact us directly from the website. Users who are unsure about what
            information is mandatory are invited to contact us via
            {' '}
            <a href="mailto:osport@ogmail.com" className="text-blue-500 hover:underline">osport@ogmail.com</a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Your Rights</h2>
          <p>
            If you are a European resident, you have the following rights regarding
            your personal data:

          </p>
          <ul className="list-disc pl-6">
            <li>The right to be informed.</li>
            <li>The right to access.</li>
            <li>The right to rectification.</li>
            <li>The right to erasure.</li>
            <li>The right to restrict processing.</li>
            <li>The right to data portability.</li>
            <li>The right to object.</li>
            <li>Rights related to automated decision-making and profiling.</li>
          </ul>
          <p>
            If you wish to exercise any of these rights, please contact us using
            the contact details below.

          </p>
          <p>
            Additionally, if you are a European resident, please note that we process
            your information in order to fulfill contracts we might have with you (for
            example, if you place an order through the site), or otherwise to pursue
            our legitimate business interests as listed above. Additionally, please
            note that your information may be transferred outside of Europe, including
            to Canada and the United States.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Links to Other Websites</h2>
          <p>
            Our website may contain links to other websites that are not owned or
            controlled by us. Please be aware that we are not responsible for these
            other websites or the privacy practices of third parties. We encourage
            you to be mindful when you leave our website and to read the privacy statements
            of each website that may collect personal information.

          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Information Security</h2>
          <p>
            We secure the information you provide on computer servers in a controlled,
            secure environment, protected from unauthorized access, use, or disclosure.
            We maintain reasonable administrative, technical, and physical safeguards
            to protect against unauthorized access, use, alteration, and disclosure of
            personal data under its control and custody. However, no data transmission
            over the internet or wireless network can be guaranteed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Legal Disclosure</h2>
          <p>
            We will disclose any information we collect, use, or receive if required or
            permitted by law, for example, to comply with a subpoena or similar legal
            process, and when we believe in good faith that disclosure is necessary to
            protect our rights, your safety, or the safety of others, investigate fraud,
            or respond to a government request.

          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
          <p>
            If you wish to contact us to better understand this policy or if you have any
            questions regarding individual rights and your personal information, you can
            send an email to
            {' '}
            <a href="mailto:osport@ogmail.com" className="text-blue-500 hover:underline">osport@ogmail.com</a>
            .
          </p>
        </section>
      </div>
    </div>
  </>
  );

export default PrivacyPolicy;
