import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => setData(response.data.results))
      .then(() => setLoading(false));
  }, [url]);

  const refetch = () => {
    console.log("refetch");
    // axios
    //   .get(url)
    //   .then((response) => setData(response.data.results))
    //   .then(() => setLoading(false));
  };

  return { data, refetch };
}
