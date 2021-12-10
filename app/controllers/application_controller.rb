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

  get "/factory_upgrades/:id" do
    tempfac = Factory_Upgrade.find_by(factory_id: params[:id])
    tempfac.to_json
  end

  delete "/factory_upgrades/:id" do
    tempfactory = Factory_Upgrade.find(params[:id])
    tempfactory.delete
  end

  post "/upgrades_factory" do
    Upgrade_Factory.create(upgrade_id: params[:upgrade_id], bought: params[:bought])
  end

  get "/upgrades_factory" do
    Upgrade_Factory.all.to_json
  end

  get "/upgrades_factory/:id" do
    tempup = Upgrade_Factory.find_by(upgrade_id: params[:id])
    tempup.to_json
  end

  delete "/upgrades_factory/:id" do
    tempupgrade = Upgrade_Factory.find(params[:id])
    tempupgrade.delete
  end

end