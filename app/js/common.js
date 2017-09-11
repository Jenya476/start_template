$(function() {

	// Custom JS

  //E-mail Ajax Send
  $(".feedback").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      swal(
        'Позравляем!',
        'Ваше сообщение успешно отправлено!',
        'success'
      )
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  // Scroll
  $('.header-menu a').mPageScroll2id({
    scrollSpeed: 600,
    forceSingleHighlight: true
  });

  // Popup
  $('.about-btn, .feedback-btn').magnificPopup({
    fixedContentPos: true,
  });

});
