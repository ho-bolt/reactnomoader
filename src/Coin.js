import { useEffect, useState } from 'react';

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [price, setPrice] = useState(0);
  const [cnt, setCnt] = useState(0);
  const onChange = e => {
    setMoney(e.target.value);
    setPrice(price);
  };

  const onSelect = target => {
    setPrice(Number(target.target.value));
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => setCoins(json), setLoading(false));
    console.log('코인 로드');
  }, []);

  useEffect(() => {
    console.log('머니, 코인 가격,  바뀔 때마다 실행');
    setCnt(money / price);
  }, [money, coins, price]);

  return (
    <div>
      <h1>The Coins! {loading ? ' ' : `(${coins.length})`} </h1>
      {loading ? (
        <strong>Loading... </strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} {coin.symbol} : {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <h3>내가 가진 돈으로 살 수 있는 코인의 개수는? </h3>
      <h4>{cnt.toFixed(2)} 개 </h4>
      <h5> 내 가 가진 돈 {money}</h5>
      <input onChange={onChange} value={money} type="number"></input>
    </div>
  );
}

export default Coin;
