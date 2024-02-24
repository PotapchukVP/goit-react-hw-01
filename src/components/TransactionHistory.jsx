import css from "../components/TransactionHistory.module.css";
export default function TransactionHistory({ transactions }) {
  if (
    !transactions ||
    !Array.isArray(transactions) ||
    transactions.length === 0
  ) {
    return <p>No transactions found</p>;
  }

  return (
    <div className={css.container}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
