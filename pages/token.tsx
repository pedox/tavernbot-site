import {
  ClipboardCheckIcon,
  ClipboardCopyIcon,
  EyeIcon,
  EyeOffIcon,
} from "@heroicons/react/solid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useRef, useState } from "react";
import { useCopyToClipboard } from "react-use";
import Layout from "../components/Layout";
import { encryptToken } from "../utils/token";
type Props = {};

const TokenPage = (props: Props) => {
  const { query } = useRouter();
  const [isShow, setIsShow] = useState(false);
  const [token, setToken] = useState(null);
  const timeoutRef = useRef<any>(null);
  const [hasCopied, setHasCopied] = useState(false);
  const [state, doCopy] = useCopyToClipboard();

  const cookie = useMemo(() => {
    if (query.token) {
      try {
        const decoded = decodeURIComponent(
          escape(window.atob(query.token as string))
        );
        return decoded;
      } catch (e) {
        console.error(e);
        return "";
      }
    }
    return "";
  }, [query]);

  const onSubmit = async (values, { setErrors }) => {
    if (values.cookie === "") {
      setErrors({ cookie: "Please input your hoyolab cookie" });
      return;
    }

    const cookie = await encryptToken(values.cookie);
    setToken(cookie);
  };

  const copyToClipboard = () => {
    doCopy(token);
    setHasCopied(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setHasCopied(false), 1000);
  };
  return (
    <Layout>
      <Head>
        <title>Encrypted token</title>
      </Head>
      <div className="text-white mt-10">
        <div className="bg-black border border-white border-opacity-20 rounded-lg p-6 bg-opacity-70">
          <h1 className="text-2xl font-bold">🔏 Encrypted token</h1>
          <p className="mt-2">
            For security Reason, you will need to encrypt your cookie before
            using <strong>TavernBot</strong>.
          </p>
          <div className="text-sm mt-2">
            We not send any process to server side, the website purposes just
            for encrypt your cookie using native web encryption API.
          </div>

          <div className="mt-5">
            <Formik
              initialValues={{ cookie }}
              enableReinitialize
              onSubmit={onSubmit}
            >
              <Form autoComplete="off">
                <div>
                  <label
                    className="font-bold w-full block mb-1"
                    htmlFor="cookie-id"
                  >
                    hoYoLab Cookie
                  </label>
                  <div className="w-full relative">
                    <Field
                      id="cookie-id"
                      type={isShow ? "text" : "password"}
                      name="cookie"
                      className="p-2 bg-black bg-opacity-40 border pr-12 border-gray-800 w-full rounded-md"
                      placeholder="Paste your cookie here"
                    />

                    <button
                      className="appearance-none absolute right-0 top-0 px-4 bg-gray-800 bg-opacity-30 bottom-0"
                      type="button"
                      onClick={() => setIsShow(!isShow)}
                    >
                      {isShow ? (
                        <EyeOffIcon className="w-4" />
                      ) : (
                        <EyeIcon className="w-4" />
                      )}
                    </button>
                  </div>
                  <div className="text-red-500">
                    <ErrorMessage name="cookie" />
                  </div>
                </div>
                <p className="text-sm mt-2">
                  Before to procced, make sure the website URL is pointed to{" "}
                  <strong className="underline">
                    https://tavernbot.vercel.app/token
                  </strong>
                </p>
                <div className="mt-4 flex items-center">
                  <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-900 transition-all">
                    🔑 Encrypt
                  </button>
                  <Link href="/privacy-policy">
                    <a className="underline text-sm ml-3">Privacy Policy</a>
                  </Link>
                </div>
                {token && (
                  <div className="mt-4 text-sm">
                    <p className="mb-2">Copy your Encrypted token below</p>
                    <div>
                      <pre className="w-full overflow-hidden bg-black border border-gray-700 p-2 mb-2">
                        {token}
                      </pre>
                      <div className="flex items-center">
                        <button
                          className="bg-gray-800 px-3 w-full justify-center py-2 rounded-md hover:bg-gray-900 transition-all flex items-center"
                          type="button"
                          onClick={copyToClipboard}
                        >
                          {hasCopied ? (
                            <ClipboardCheckIcon className="w-4 mr-2" />
                          ) : (
                            <ClipboardCopyIcon className="w-4 mr-2" />
                          )}
                          {hasCopied
                            ? " Your token has been copied..."
                            : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <div className="text-xs mt-4">
                  Encryption Script also available at:{" "}
                  <a
                    href="https://github.com/pedox/tavernbot-site"
                    className="underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://github.com/pedox/tavernbot-site
                  </a>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TokenPage;
