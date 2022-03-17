export const encryptToken = async (plaintext) => {
  const publicKey =
    "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAwEyRpKhyaT9Er4AUvXOf\n42FHRCgZWNsmaAqP9e3YRpKqPiG8nVU4Y5CDkFnzfG8wK+sf2L+CN7fPFnbP3zvp\nxFijj0oWZOf1jzmLl7ObsIkNJ2n/Qxvn7zU5eE+yp1epmZz+Sm5RlPB7DGdeyWhz\nJ4xRJPKZVqKRAjE67acemsSUtZBeaN7C7bJLVPY45QWaoo/PoiKLB1/KAxyIUf2T\nUQT/KsJrlYOAcfdAPNUfdzjUK0nAjjDaasoR0eOkhmDWdCwQAJWtzCsCxX76EQlr\nUk1JIXVlBzh5VZinH5fa3PZInh45m+S72KOxvTnwktN2qbulloIly83Yem1nx2wm\nIihEhDbwb0acdQCAVeUR9P/7uyqc2/16XG6gbURQvT9pni7RGz1rVujbIS2fDNod\nwWSfSeDrJa3PsKfK+Qtc0x1ubI4FWDXM0Y2CsWxwkB4/+LY8ErP/bGB6PIeQkIPf\nuV4LTaSbiNtgffnYiFQ3MeoI97zJZMuQiV6XfbWSOpdTgobsM+ec+ywIiTaLqhFa\nQFBdS/U4IJU+r1lMJbz4txuzRGNh9G9qJfbqdXbt1mzT64VSBV+q/sG9HoMKOdrI\npy7hq7dmhnDhvzY0toSUeJ3e8FT4phjdbMOhVmmLTAKwzRwbTnr6Cmh9fO6+eLdd\ndw1553jUWrVPdTSvoihkgscCAwEAAQ==";

  function getSpkiDer() {
    var binaryDerString = window.atob(publicKey);
    return str2ab(binaryDerString);
  }

  async function importPublicKey() {
    return await window.crypto.subtle.importKey(
      "spki",
      getSpkiDer(),
      {
        name: "RSA-OAEP",
        hash: "SHA-256",
      },
      true,
      ["encrypt"]
    );
  }

  async function encryptRSA(key, plaintext) {
    let encrypted = await window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP",
      },
      key,
      plaintext
    );
    return encrypted;
  }

  // https://stackoverflow.com/a/11058858
  function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

  function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }

  try {
    const pub = await importPublicKey();
    const encrypted = await encryptRSA(
      pub,
      new TextEncoder().encode(plaintext)
    );
    const encryptedBase64 = window.btoa(ab2str(encrypted));
    return encryptedBase64;
  } catch (error) {
    alert(error);
    return null;
  }
};
