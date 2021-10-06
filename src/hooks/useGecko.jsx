import { useEffect, useState } from "react";

const API = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false";

export function useGecko() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((response) => {
        const { symbol, name, image, market_data } = response;

        setData({
          symbol,
          name,
          image: image.thumb,
          value: {
            pen: market_data.current_price.pln,
            usd: market_data.current_price.usd,
          },
        });
        setIsLoading(false);
      });
  }, [reload]);

  const reloadApi = () => {
    setReload(true);
    setIsLoading(true);
    setTimeout(() => setReload(false), 10);
  };

  return { data, isLoading, reloadApi };
}
