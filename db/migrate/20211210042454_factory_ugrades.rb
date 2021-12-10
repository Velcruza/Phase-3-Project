class FactoryUgrades < ActiveRecord::Migration[6.1]
  def change
    create_table :factory_upgrades do |t|
      t.boolean :bought
      t.integer :factory_id
    end
  end
end
