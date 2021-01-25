import { Table } from "react-bootstrap"
export default function ExpensesTable({ amountByCategory }) {
    if (amountByCategory) {
        return (
            <Table striped bordered hover size="sm" className="text-danger small">
                <thead>
                    <tr>
                        {amountByCategory.map(expense => {
                            return (
                                <th key={expense.category}>{expense.category}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {amountByCategory.map(expense => {
                            return (
                                <td key={expense.amount} className="font-weight-bold">{expense.amount}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </Table>
        );
    }
    else {
        return (<></>)
    }
}

















