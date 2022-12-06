import React, { useEffect, useState } from "react";
import NewReview from "./NewReview";
import ReviewList from "./ReviewList";

function Forum () {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch("/reviews")
        .then((res) => res.json())
        .then((data) => {
       setReviews(() => [...data])
        })
    }, []);
    // console.log(reviews)
  
    function addReview(newReview) {
      const updateReviews = [...reviews, newReview]
      setReviews(updateReviews)
    }
  
    return (
      <div>
        <NewReview addRev={addReview} />
        <ReviewList reviews={reviews} />
      </div>
    );
}

export default Forum;