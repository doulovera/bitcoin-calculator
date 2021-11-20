import React, { useEffect, useState } from "react";
import "./style.css";

function Logic() {
  const [amountInFiat, setAmountInFiat] = useState(0);
  const [amountInCrypto, setAmountInCrypto] = useState(0);

  const calcFromCryptoToFiat = (amountInCrypto * price) / 1;
  const calcFromFiatToCrypto = (amountInFiat * 1) / price;

  useEffect(() => {
    setAmountInCrypto(calcFromFiatToCrypto);
  }, [amountInFiat]);

  useEffect(() => {
    setAmountInFiat(calcFromCryptoToFiat);
  }, [amountInCrypto]);

  return (
    <input
      type="number"
      value={amountInCrypto}
      onChange={(event) => setAmountInCrypto(event.target.value)}
    />
  );
}

export default function CurrencyCalculator({ price, isUSD }) {
  const [tabIndex, setTabIndex] = useState(0);

  const currencyComparison = isUSD ? "USD" : "PEN";
  const tabs = [
    `${currencyComparison} to Bitcoin`,
    `Bitcoin to ${currencyComparison}`,
  ];

  return (
    <>
      <div className="calc-tabs">
        {tabs.map((tab, index) => (
          <button
            className={`calc-tabs__tab ${
              index === tabIndex ? "calc-tabs__tab--active" : ""
            }`}
            key={tab}
            onClick={() => setTabIndex(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
}
