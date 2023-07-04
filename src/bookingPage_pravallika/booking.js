const urlParams = new URLSearchParams(window.location.search);
  const bookingName = urlParams.get("bookingName");
  console.log(bookingName)
  // Set the room name as the content of the h1 element with id "roomName"
  const roomNameElement = document.getElementById("roomName");
  roomNameElement.innerHTML = bookingName;