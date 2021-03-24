class HomesController < ApplicationController
  def top
    gon.grant_type = ENV['SP_GRANT_TYPE']
    gon.client_secret = ENV['SP_CLIENT_SECRET']
    gon.client_id = ENV['SP_CLIENT_ID']
  end
end
