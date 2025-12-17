import { useEffect, useState } from "react";

export function useHash() {
  const [hash, setHash] = useState<string | undefined>(undefined);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setHash(hash);
    }
  }, []);

  function handleHashChange(newHash: string | undefined) {
    setHash(newHash);

    if (newHash) {
      window.history.replaceState(null, "", `#${newHash}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  return {
    hash,
    handleHashChange,
  };
}
