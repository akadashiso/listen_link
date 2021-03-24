/* global $*/

$(document).ready(function () {
  $("#bg-image").val();
  $("#full-layer-image").css("background-image","url(" + $("#bg-image").val() + ")");
  $('#sample').popover({
    container: 'body'
  });
  const itunes = $("#url-itunes").val();
  const youtube = $("#url-youtube").val();
  const soundcloud = $("#url-soundcloud").val();
  console.log(itunes);
  console.log(youtube);
  console.log(soundcloud);
  if (itunes === "") {
    $('.itunes-link-options').addClass('d-none');
  };
  if (youtube === "") {
    $('.youtube-link-options').addClass('d-none');
  };
  if (soundcloud === "") {
    $('.soundcloud-link-options').addClass('d-none');
  };

});