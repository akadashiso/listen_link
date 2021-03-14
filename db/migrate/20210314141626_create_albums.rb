class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :album_id,         null: false
      t.string :artist_name,      null: false
      t.string :spotify_url,      null: false
      t.string :album_name,       null: false
      t.string :image_url,        null: false
      t.string :itunes_url
      t.string :youtube_url
      t.string :soundcloud_url
      t.string :bak_artist_name
      t.string :bak_image_id
      t.timestamps
    end
  end
end
