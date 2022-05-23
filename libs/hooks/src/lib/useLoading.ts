import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function useLoading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    const handleStart = (url: string) => {
      setLoading(true);
      setUrl(url);
    };
    const handleComplete = (url: string) => {
      setLoading(false);
      setUrl(url);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return { loading, url };
}
