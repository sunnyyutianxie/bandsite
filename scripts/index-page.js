//Get and push data from api
function getComments() {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=<506ee82f-f818-42e4-9e83-893bdf1af12b>"
    )
    .then((result) => {
      //sort result by date
      result.data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

      const commentSection = document.querySelector(".comment");
      commentSection.innerText = "";

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
        const commentSoleDiv = document.createElement("div"); //class="comment__sole"
        commentSoleDiv.classList.add("comment__sole");

        const imgDiv = document.createElement("div"); //class="comment__sole__img"
        imgDiv.classList.add("comment__sole__img");
        const img = document.createElement("img");
        img.src = "../assets/Images/comment profile pic.png";
        imgDiv.appendChild(img);
        commentSoleDiv.appendChild(imgDiv);

        const rightBlockDiv = document.createElement("div");
        rightBlockDiv.classList.add("comment__sole__rightblock"); //class="comment__sole__rightblock"
        commentSoleDiv.appendChild(rightBlockDiv);

        const topDiv = document.createElement("div");
        topDiv.classList.add("comment__sole__rightblock__top"); //class="comment__sole__rightblock__top"
        rightBlockDiv.appendChild(topDiv);

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("comment__sole__rightblock__top-name"); //class="comment__sole__rightblock__top-name"
        nameDiv.textContent = name;
        topDiv.appendChild(nameDiv);

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("comment__sole__rightblock__top-date"); //class="comment__sole__rightblock__top-date"
        dateDiv.textContent = formattedDate;
        topDiv.appendChild(dateDiv);

        const wordsDiv = document.createElement("div");
        wordsDiv.classList.add("comment__sole__rightblock__words"); //class="comment__sole__rightblock__words"
        wordsDiv.textContent = comment;
        rightBlockDiv.appendChild(wordsDiv);

        commentSection.appendChild(commentSoleDiv);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

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
      `https://project-1-api.herokuapp.com/comments?api_key=<506ee82f-f818-42e4-9e83-893bdf1af12b>`,
      {
        name: name,
        comment: comment,
      }
    )
    .then((result) => {
      document.querySelector(".conversation__right__input").value = "";
      document.querySelector(".conversation__right__textarea").value = "";
      getComments();

      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

getComments();
