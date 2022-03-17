import React from "react";
import Layout from "../components/Layout";

type Props = {};

const PrivacyPolicyPage = (props: Props) => {
  return (
    <Layout>
      <div className="mt-6 text-white leading-relaxed">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <div className="mt-3">
          <p>
            I just want to make privacy policy simple as possible, and make
            quick explanation about data beign used in TavernBot. If there's any
            mistake or not understand in my writing please apologize me.
          </p>

          <h2 className="text-xl font-bold mt-3">
            What kind data stored in TavernBot?
          </h2>
          <p>
            We stored kind of user data below to make sure your game information
            is correct.
          </p>
          <ol className="list-decimal ml-10 mt-3">
            <li>Discord ID / Telegram ID</li>
            <li>Discord Tag / Telegram Tag</li>
            <li>Guild ID / Group ID</li>
            <li>*hoYoLab ID (If user register their game id)</li>
            <li>*Genshin Impact UID (If user register their game id)</li>
            <li>*Avatar lists (If user register their game id)</li>
            <li>*Abyss Progress (If user register their game id)</li>
            <li>
              *Gacha token (valid only 24hrs) (If user using wish command)
            </li>
            <li>*Gacha history (If user using wish command)</li>
          </ol>
          <p className="mt-3 italic">
            *When user decide to unreg game information, all information about
            their data will be removed permanently including gacha history to
            space up our storage.
          </p>

          <h1 className="text-xl font-bold mt-3">3rd Parties</h1>
          <p>
            We use these 3rd parties to track TavernBot error and performance:
          </p>
          <ol className="list-decimal ml-10 mt-3">
            <li>
              <strong>Grafana Cloud</strong>: For Dashboard Monitoring
              performance
            </li>
            <li>
              <strong>InfluxDB Cloud</strong>: For usage tracking and error
              tracking
            </li>
            <li>
              <strong>Expo</strong>: Token Assignment for mobile devices
            </li>
          </ol>
          <h1 className="text-xl font-bold mt-3">About Personal Token</h1>
          <p>
            We are very concerned about the security aspects of your account. To
            make sure your account is secure and your token is safe, we using{" "}
            <strong>Asymmetric RSA256 Encryption (4096 bit)</strong> to ensure
            your cookie cannot be stolen. Any person like your friend, crush,
            mother even discord &amp; telegram cannot read your cookie. Only{" "}
            <strong>TavernBot</strong> and <strong>You</strong> will only know
            that it is.
          </p>
          <p className="mt-3">
            <strong>TavernBot</strong> only decrypted your cookie in runtime
            while fetching your Avatar lists and Spiral Abyss information and
            Keep your cookie Encrypted in our databases. The process to fetch
            your account will cached in <strong>10 minutes</strong> in that time
            your game information will remain same.
          </p>
          <p className="mt-3">
            Feel free to revoke your account any time. If you're still concern
            about your token is beign stored in our servers, you can using{" "}
            <strong>Ephemeral Token (beta)</strong> method instruction in our
            discord server, <em>still not documented yet.</em>
          </p>
          <p className="bg-red-200 text-red-600 p-4 mt-8 border border-red-500 rounded-md">
            Please aware of any kind person mimicking <strong>TavernBot</strong>
            , we never open any service outside{" "}
            <strong>https://tavernbot.vercel.app</strong> and{" "}
            <strong>https://s.id/tavernbot</strong>. Make sure to check the url
            every time you decide to access our service. (the url is also case
            sensitive).
          </p>
          <div className="mt-6 text-sm italic">Last Update: 17 March 2022</div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
