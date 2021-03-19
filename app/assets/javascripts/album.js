/* global $*/

$(document).ready(function () {
  $("#bg-image").val();
  $("#full-layer-image").css("background-image","url(" + $("#bg-image").val() + ")");
  $('#sample').popover({
    container: 'body'
  })
});