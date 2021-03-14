/* global $*/

$(document).ready(function () {
    // ユーザーがサブミットボタンを押すと下記コード実行
    $("#submit").click(function (e) {
        let accessToken;
        let albumId;

        // 最初にアクセストークンを取得
        $.ajax(
            {
              async: false,
              method: "POST",
              url: "https://accounts.spotify.com/api/token",
              data: {
                "grant_type":    "<%= ENV['SP_GRANT_TYPE'] %>",
                "client_secret": "<%= ENV['SP_CLIENT_SECRET'] %>",
                "client_id":     "<%= ENV['SP_CLIENT_ID'] %>",
              },
              success: function(result) {
                accessToken = result.access_token;
              },
            }
          );

        // エラーメッセージを隠し、ローディングアニメーションを表示
        $('.error').addClass('d-none');
        $('.loading').removeClass('d-none');

        // ユーザーが有効なSpotify URLを入力したか確認
        const spotifyUrl = $("#albumUrl").val();

        if (!spotifyUrl || !spotifyUrl.includes('https://open.spotify.com/album/')) {
            $('.error').text('URLが正しく入力されていません。SpotifyのURLは https://open.spotify.com/album/ で始まります。');
            $('.error').removeClass('d-none');
        } else {
            // APIコール用にアルバムIDのみ必要なため、URLからIDを抽出
            albumId = spotifyUrl.split('/album/').pop();
        }

        if (albumId) {
            $.ajax({
                url: 'https://api.spotify.com/v1/albums/' + albumId,
                type: 'GET',
                data: 'name',
                headers: {
                    'Authorization' : 'Bearer ' + accessToken,
                },
                success: function(data) {
                    // APIから帰ってきた全データ
                    // 下記コードでJQueryで更新することができる
                    console.log(data);

                    // add the artwork and artist info
                    const imageUrl = data.images[0].url;
                    let artistString = 'Album by: ';

                    // artistsの配列データを繰り返し処理でstring型でartistを生成する
                    if (data.artists && Array.isArray(data.artists)) {
                        data.artists.forEach(function(item, index, arr) {
                            if (index === arr.length - 1){
                                artistString += ' ' + item.name;
                            } else {
                                artistString += ' ' + item.name + ','
                            }
                        });
                    }

                    // APIのデータを使用して、メタデータを更新
                    $('.metadata').append("<h1>" + data.name + "</h1><h4>" + artistString + "</h4><img class='mt-2' width=300 height=300 src='" + imageUrl +  "' />");

                    // 埋込み型のSpotify音楽再生プレイヤー
                    // APIは通らなずに実装可
                    const url = 'https://open.spotify.com/embed/album/' + albumId;
                    $('#embed').attr('src', url);

                    // 投稿フォームを隠して結果を表示する
                    $('.loading').addClass('d-none');
                    $('.input-form').addClass('d-none');
                    $('.results').removeClass('d-none');
                    // ここでjQueryで隠れフィールで取得したデータをサブミット処理
                    // albumコントローラーのへのしょり
                },
                error: function(data) {
                    $('.loading').addClass('d-none');
                    $('.error').text('There was an error getting the album from Spotify. Please try a different album.');
                    $('.error').removeClass('d-none');
                }
            });
        }
        return false;
    });
});