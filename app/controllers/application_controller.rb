class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/factories" do
    Factory.all.to_json
  end

  get "/upgrades" do
    Upgrade.all.to_json
  end

end