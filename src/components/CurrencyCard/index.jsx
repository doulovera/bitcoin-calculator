import React, { useState } from "react";
import "./style.css";

export default function CurrencyCard({
  symbol,
  name,
  image,
  value,
  isUSD,
  isLoading,
}) {
  const lang = navigator.language;

  const currencyFormatter = (value = "0") => {
    const formatter = new Intl.NumberFormat(lang, {
      style: "currency",
      currency: isUSD ? "USD" : "PEN",
    });

    return formatter.format(value);
  };

  return (
    <article className="currency-card-item">
      <div className="currency-card__element currency-card__element--coin">
        <img src={image} alt={name} className="currency-card__logo" />
        <h2 className="currency-card__text">
          {name} (<span className="currency-card__text--symbol">{symbol}</span>)
        </h2>
      </div>
      <div className="currency-card__element currency__card-element--value">
        <h2 className="currency-card__text">
          {isLoading
            ? "XXXXXXXXXXX"
            : isUSD
            ? currencyFormatter(value?.usd)
            : currencyFormatter(value?.pen)}
        </h2>
      </div>
    </article>
  );
}
