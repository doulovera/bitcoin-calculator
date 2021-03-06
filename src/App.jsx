import { useState } from "react";
import { useGecko } from "./hooks/useGecko";
import CurrencyCard from "./components/CurrencyCard";
import CurrencyCalculator from "./container/CurrencyCalculator";
import "./App.css";

export default function App() {
  const { data, isLoading, reloadApi } = useGecko();
  const [isCurrencyUSD, setIsCurrencyUSD] = useState(true);

  const price = isCurrencyUSD ? data.value?.usd : data.value?.pen;

  if (!data.name)
    return (
      <div className="App--loading">
        <h1>Cargando...</h1>
      </div>
    );

  return (
    <div className="App">
      <section className="App-head">
        <h1 className="App-head__title">Bitcoin Calculator</h1>
        <div className="App-head__buttons">
          <button
            className="App-head__button"
            onClick={() => setIsCurrencyUSD(!isCurrencyUSD)}
          >
            Change to {!!isCurrencyUSD ? "PEN" : "USD"}
          </button>
          <button className="App-head__button" onClick={reloadApi}>
            Reload
          </button>
        </div>
      </section>

      <div className="content">
        <section className="content__section">
          <CurrencyCard
            {...data}
            price={price}
            isUSD={isCurrencyUSD}
            isLoading={isLoading}
          />
        </section>
        <section className="content__section">
          <CurrencyCalculator price={price} isUSD={isCurrencyUSD} />
        </section>
      </div>
    </div>
  );
}
