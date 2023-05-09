//Get and push data from api
axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=<69dd872e-c65b-4220-b615-6023d9cecd1f>"
  )
  .then((result) => {
    //sort result by date
    result.data.sort((a, b) => {
      return a.timestamp - b.timestamp;
    });

    result.data.forEach((block) => {
      //get date
      const timestamp = block.timestamp;
      const firstDate = new Date(timestamp);
      const month = String(firstDate.getMonth() + 1).padStart(2, "0");
      const date = String(firstDate.getDate()).padStart(2, "0");
      const year = String(firstDate.getFullYear());
      const formattedDate = String(`${month}/${date}/${year}`);

      //get comment
      const comment = block.comment;

      // get name
      const name = block.name;

      //add to the html page
      const commentHtml = ` 
      <div class="comment__sole">
      <div class="comment__sole__img">
        <img src="../assets/Images/comment profile pic.png" alt="" />
      </div>
      <div class="comment__sole__rightblock">
        <div class="comment__sole__rightblock__top">
          <div class="comment__sole__rightblock__top-name">${name}</div>
          <div class="comment__sole__rightblock__top-date">${formattedDate}</div>
        </div>
        <div class="comment__sole__rightblock__words">${comment}</div>
      </div>
    </div>`;

      let commentSection = document.querySelector(".comment");
      commentSection.insertAdjacentHTML("afterbegin", commentHtml);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// add comment and push to api
let formEl = document.querySelector(".form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // get name
  const name = String(event.target.name.value);

  //get comment
  const comment = event.target.comment.value;

  // use api to post
  axios
    .post(
      `https://project-1-api.herokuapp.com/comments?api_key=<69dd872e-c65b-4220-b615-6023d9cecd1f>`,
      {
        name: name,
        comment: comment,
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
