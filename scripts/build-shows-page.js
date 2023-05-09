//Get and push data from api
axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=<69dd872e-c65b-4220-b615-6023d9cecd1f>"
  )
  .then((result) => {
    //sort result by date
    result.data.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    // console.log(result);
    let commentSection = document.querySelector(".shows__ticket");
    for (i = 0; i < result.data.length; i++) {
      let block = result.data[i];
      //get date
      const timestamp = block.date;
      const newDate = new Date(timestamp);
      const options = {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
      };
      const formattedDate = newDate.toLocaleDateString("en-US", options);

      //get venue
      const venue = block.place;

      // get location
      const location = block.location;
      if (i == 0) {
        //add to the html page
        const commentHtml = `
            <div class="shows__ticket__info">
                <div class="shows__ticket__info-date">
                  <span class="shows-label">DATE</span>
                  <div>${formattedDate}</div>
                </div>
                <div class="shows__ticket__info-venue">
                  <span class="shows-label">VENUE</span>
                  <div>${venue}</div>
                </div>
                <div class="shows__ticket__info-location">
                  <span class="shows-label">LOCATION</span>
                  <div>${location}</div>
                </div>
                <div class="shows__ticket__info-buy">
                  <button>BUY TICKETS</button>
                </div>
              </div>`;
        commentSection.insertAdjacentHTML("beforeend", commentHtml);
      } else {
        //add to the html page
        const commentHtml2 = `
      <div class="shows__ticket__info">
      <div class="shows__ticket__info-date">
        <span class="shows-label hide-label">DATE</span>
        <div>${formattedDate}</div>
      </div>
      <div class="shows__ticket__info-venue">
        <span class="shows-label hide-label">VENUE</span>
        <div>${venue}</div>
      </div>
      <div class="shows__ticket__info-location">
        <span class="shows-label hide-label">LOCATION</span>
        <div>${location}</div>
      </div>
      <div class="shows__ticket__info-buy hide-label-btn">
        <button>BUY TICKETS</button>
      </div>
      </div>`;
        commentSection.insertAdjacentHTML("beforeend", commentHtml2);
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });
