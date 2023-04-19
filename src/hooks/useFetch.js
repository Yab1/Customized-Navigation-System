import { useState, useEffect } from "react";

export default function useFetch(initialUrl) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [url, setUrl] = useState(initialUrl || "");

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setIsLoading(false);
        setErrMsg(null);
      } catch (err) {
        setErrMsg(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, errMsg };
}
