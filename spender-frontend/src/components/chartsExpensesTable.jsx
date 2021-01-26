import styles from "../styles/Charts.module.css";

export default function ExpensesTable({ amountByCategory }) {
    if (amountByCategory) {
        return (
            <div size="sm" className={styles.expensesTable}>
                {amountByCategory.map(expense => {
                    return (
                        <div
                            className="border border-danger text-danger small font-weight-bold rounded"
                            key={expense.category}
                        >
                            {expense.category}
                            <br />
                            {expense.amount}
                        </div>
                    )
                })}
            </div>
        );
    }
    else {
        return (<></>)
    }
}

















