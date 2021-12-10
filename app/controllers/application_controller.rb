class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/factories" do
    Factory.all.to_json
  end

  get "/upgrades" do
    Upgrade.all.to_json
  end

  get "/user" do
    User.all.to_json
  end

  patch "/user/:id" do
    tempuser = User.find(params[:id])
    tempuser.update(
      {
        gold: params[:gold],
        production: params[:production]
      }
    )
    tempuser.to_json
  end

  post "/factory_upgrades" do
    Factory_Upgrade.create(factory_id: params[:factory_id], bought: params[:bought])
  end

  get "/factory_upgrades" do
    Factory_Upgrade.all.to_json
  end

  delete "/factory_upgrades/:id" do
    tempfactory = Factory_Upgrade.find(params[:id])
    tempfactory.delete
  end

end