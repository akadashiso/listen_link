class AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id])
  end

  def create
    @album = Album.new(album_params)
    
    @album.user_id = current_user.id
    @album.save
    redirect_to @album
  end

  def destroy
  end

  private

  def album_params
    params.permit(:album_id, :artist_name, :spotify_url, :album_name, :image_url, :itunes_url, :youtube_url, :soundcloud_url, :bak_artist_name, :bak_image_id)
  end

end
