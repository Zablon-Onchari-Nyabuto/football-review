import React from "react";
import ReviewTable from "./ReviewTable";

function ReviewList (reviews) {
    console.log(reviews)
    return (
        <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">strength</h3>
          </th>
        </tr>
        {reviews.map((review) => (
        <ReviewTable key={review.id} reviews={review}/>))}
      </tbody>
    </table>
    )
}

export default ReviewList;