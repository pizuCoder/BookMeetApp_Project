function openBookingPage(button) {
    var bookingName = button.querySelector('.replies').textContent;
    // console.log(bookingName)
    window.open(`../bookingPage_pravallika/booking.html?bookingName=${bookingName}`, '_self');
  }
  