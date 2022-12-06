import React from "react";

function ReviewTable({ reviews }) {
  return (
    <tr>
      <td>{reviews.username}</td>
      <td>{reviews.match}</td>
      <td>{reviews.date}</td>
      <td>{reviews.description}</td>
    </tr>
  );
}

export default ReviewTable;