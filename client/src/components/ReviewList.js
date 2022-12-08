import React, { useEffect, useState } from "react";
import ReviewTable from "./ReviewTable";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);
  function handleUpdateClick() {

  }
  function handleDeleteClick() {
    fetch(`/reviews/id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Username</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Match</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
        </tr>
        {reviews.map((review) => (
          <ReviewTable key={review.id} reviews={review} />))}
        <button className="remove" onClick={handleDeleteClick}>
          Delete
        </button>
      </tbody>
    </table>
  )
}

export default ReviewList;