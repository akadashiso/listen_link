// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets

//= require rails-ujs
//= require activestorage
//= require_tree .
//= require jquery
//= require jquery_ujs
//= require toastr
//= require clipboard

/* global $*/

// 各プラットフォームのサンプルURL

$(document).ready(function(){

  var spotifyClipboard = new Clipboard('.spotify-clipboard-btn');
  console.log(spotifyClipboard);
  $(".spotify-clipboard-btn").click(function (e) {
    toastr.success('コピーしました。')
  });

  var itunesClipboard = new Clipboard('.itunes-clipboard-btn');
  console.log(itunesClipboard);
  $(".itunes-clipboard-btn").click(function (e) {
    toastr.success('コピーしました。')
  });

  var youtubeClipboard = new Clipboard('.youtube-clipboard-btn');
  console.log(youtubeClipboard);
  $(".youtube-clipboard-btn").click(function (e) {
    toastr.success('コピーしました。')
  });

  var soundcloudClipboard = new Clipboard('.soundcloud-clipboard-btn');
  console.log(soundcloudClipboard);
  $(".soundcloud-clipboard-btn").click(function (e) {
    toastr.success('コピーしました。')
  });
});