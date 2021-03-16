/* global $*/

$(document).ready(function () {
  $("#bg-image").val();
  $("#full-layer").css("background-image","url(" + $("#bg-image").val() + ")");
  $('#sample').popover({
    container: 'body'
  })
});

