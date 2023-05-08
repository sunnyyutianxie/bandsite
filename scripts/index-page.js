let formEl = document.querySelector(".form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // get name
  const name = String(event.target.name.value);

  //get date
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const date = String(currentDate.getDate()).padStart(2, "0");
  const year = String(currentDate.getFullYear());
  const formattedDate = String(`${month}/${date}/${year}`);

  //get comment
  const comment = event.target.comment.value;

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

  form.reset();
});
