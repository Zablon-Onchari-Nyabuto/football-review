import React, { useState } from "react";

function NewReview({ addRev }) {
  const [reviewData, setReviewData] = useState({
    username: "", 
    match: "", 
    date: "", 
    description: "",
  })

  function handleChange(e){
    const key = e.target.id
    setReviewData({
      ...reviewData,
      [key]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
  fetch("/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  })
    .then((res) => res.json())
    .then((data) => addRev(data));
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="text" name="date" value={reviewData.username} id="username" placeholder="Username" onChange={handleChange}/>
          <input type="text" name="description" value={reviewData.match} id="match" placeholder="Match" onChange={handleChange}/>
          <input type="date" name="category" value={reviewData.date} id="date" placeholder="Date" onChange={handleChange}/>
          <input type="text" name="strength" value={reviewData.description} id="description" placeholder="Description" onChange={handleChange} />
        </div>
        <button className="ui button" type="submit" >
          Add Review 
        </button>
      </form>
    </div>
  );
}

export default NewReview;