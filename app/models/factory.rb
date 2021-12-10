class Factory < ActiveRecord::Base
    belongs_to :user
    has_one :factory_upgrades
end 