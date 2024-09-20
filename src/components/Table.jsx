function Table() {
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
            <td>001.7434</td>
            <td>001.7092</td>
            <td>001.6750</td>
          </tr>
          {/* row 2 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">IDR</th>
            <td>18522.3525</td>
            <td>18159.1691</td>
            <td>17795.9857</td>
          </tr>
          {/* row 3 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">JPY</th>
            <td>143.4565</td>
            <td>140.6437</td>
            <td>137.8308</td>
          </tr>
          {/* row 4 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">CHF</th>
            <td>001.3114</td>
            <td>001.2857</td>
            <td>001.2600</td>
          </tr>
          {/* row 5 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">EUR</th>
            <td>001.1937</td>
            <td>001.1703</td>
            <td>001.1469</td>
          </tr>
          {/* row 6 */}
          <tr className="border-b border-[#e7e7e76d]">
            <th className="font-semibold">USD</th>
            <td>001.3141</td>
            <td>001.2884</td>
            <td>001.2626</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
