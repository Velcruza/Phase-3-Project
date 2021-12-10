class UpgradeFactories < ActiveRecord::Migration[6.1]
  def change
    create_table :upgrade_factories do |t|
      t.boolean :bought
      t.integer :upgrade_id
    end
  end
end
