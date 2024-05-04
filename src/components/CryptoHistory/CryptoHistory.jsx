import formating from 'helpers/formatdate';
import style from './CryptoHistory.module.css';

const tableHeaders = ['№', 'price', 'amount', 'date'];

export const CryptoHistory = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map(header => (
            <th className={style.th} key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, index) => (
          <tr className={style.tr} key={id}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{formating.dateToString(date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
