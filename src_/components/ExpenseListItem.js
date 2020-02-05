// export a stateless funcitonal component
// description, amount, createdAt

import React from "react";
import { Link } from "react-router-dom"

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <h6>{amount} - {createdAt}</h6>
    </div>
);

export default ExpenseListItem;