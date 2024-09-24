function Table({ currencyRates, calcBuy, calcSell }) {
  return (
    <div className="overflow-x-auto table-lg">
      <table className="table">
        {/* head */}
        <thead className="text-white uppercase text-center">
          <tr className="border-b border-white">
            <th></th>
            <th>We Buy</th>
            <th>
              Exchange<br></br>Rate
            </th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody className="text-slate-100 text-center">
          {/* row 1 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">CAD</th>
            <td>{calcBuy(currencyRates.CAD)}</td>
            <td>{parseFloat(currencyRates.CAD).toFixed(4)}</td>
            <td>{calcSell(currencyRates.CAD)}</td>
          </tr>
          {/* row 2 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">IDR</th>
            <td>{calcBuy(currencyRates.IDR)}</td>
            <td>{parseFloat(currencyRates.IDR).toFixed(4)}</td>
            <td>{calcSell(currencyRates.IDR)}</td>
          </tr>
          {/* row 3 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">JPY</th>
            <td>{calcBuy(currencyRates.JPY)}</td>
            <td>{parseFloat(currencyRates.JPY).toFixed(4)}</td>
            <td>{calcSell(currencyRates.JPY)}</td>
          </tr>
          {/* row 4 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">CHF</th>
            <td>{calcBuy(currencyRates.CHF)}</td>
            <td>{parseFloat(currencyRates.CHF).toFixed(4)}</td>
            <td>{calcSell(currencyRates.CHF)}</td>
          </tr>
          {/* row 5 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">EUR</th>
            <td>{calcBuy(currencyRates.EUR)}</td>
            <td>{parseFloat(currencyRates.EUR).toFixed(4)}</td>
            <td>{calcSell(currencyRates.EUR)}</td>
          </tr>
          {/* row 6 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">USD</th>
            <td>{calcBuy(currencyRates.USD)}</td>
            <td>{parseFloat(currencyRates.USD).toFixed(4)}</td>
            <td>{calcSell(currencyRates.USD)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
