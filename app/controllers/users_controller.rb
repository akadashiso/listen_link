class UsersController < ApplicationController
  before_action :ensure_correct_user, only: [:update, :edit]

  def show
    @user = User.find(current_user.id)
    @albums = @user.albums
  end


  def edit
    @user = User.find(current_user.id)
  end

  def update
    @user = User.find(current_user.id)
  end

  private

  def user_params
    params.require(:user).permit(:name, :introduction, :profile_image_id)
  end

end
