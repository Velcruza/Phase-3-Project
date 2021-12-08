class CreateUpgrades < ActiveRecord::Migration[6.1]
  def change
    create_table :upgrades do |t|
      t.string :name #Airconditioner 
      t.string :description #1.2x Production
      t.integer :price #$50
      t.float :multiplier
    end
  end
end
