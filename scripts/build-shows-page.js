//Get and push data from api
axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=<506ee82f-f818-42e4-9e83-893bdf1af12b>"
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

      //add to the html page

      const showsTicketDiv = document.createElement("div");
      showsTicketDiv.classList.add("shows__ticket__info"); //<div class="shows__ticket__info">

      //DATE
      const showsTicketDateDiv = document.createElement("div");
      showsTicketDateDiv.classList.add("shows__ticket__info-date"); //<div class="shows__ticket__info-date">
      showsTicketDiv.appendChild(showsTicketDateDiv);

      const showsLabelSpan = document.createElement("span");
      showsLabelSpan.classList.add("shows-label"); //  <span class="shows-label"></span>
      showsLabelSpan.textContent = `DATE`;
      showsTicketDateDiv.appendChild(showsLabelSpan);

      const showsFormattedDate = document.createElement("div");
      showsFormattedDate.textContent = formattedDate; // <div>${formattedDate}</div>
      showsTicketDateDiv.appendChild(showsFormattedDate);

      //VENUE:
      const showsTicketVenueDiv = document.createElement("div");
      showsTicketVenueDiv.classList.add("shows__ticket__info-venue");
      showsTicketDiv.appendChild(showsTicketVenueDiv);

      const showsLabelSpanTwo = document.createElement("span");
      showsLabelSpanTwo.classList.add("shows-label");
      showsLabelSpanTwo.textContent = `VENUE`;
      showsTicketVenueDiv.appendChild(showsLabelSpanTwo);

      const showsVenue = document.createElement("div");
      showsVenue.textContent = venue;
      showsTicketVenueDiv.appendChild(showsVenue);

      //LOCATION:
      const showsTicketLocationDiv = document.createElement("div");
      showsTicketLocationDiv.classList.add("shows__ticket__info-location");
      showsTicketDiv.appendChild(showsTicketLocationDiv);

      const showsLabelSpanThird = document.createElement("span");
      showsLabelSpanThird.classList.add("shows-label");
      showsLabelSpanThird.textContent = `LOCATION`;
      showsTicketLocationDiv.appendChild(showsLabelSpanThird);

      const showsLocation = document.createElement("div");
      showsLocation.textContent = location;
      showsTicketLocationDiv.appendChild(showsLocation);

      //BUTTON:
      const showsButton = document.createElement("div");
      showsButton.classList.add("shows__ticket__info-buy");
      showsTicketDiv.appendChild(showsButton);

      const showsBuy = document.createElement("button");
      showsBuy.textContent = "BUY TICKETS";
      showsButton.appendChild(showsBuy);

      commentSection.appendChild(showsTicketDiv);
    }

    const showsLabel = document.querySelectorAll(".shows-label");

    //to hide label except first line
    for (let i = 3; i < showsLabel.length; i++) {
      showsLabel[i].classList.add("hide-label");
    }
  })
  .catch((error) => {
    console.log(error);
  });
