class CreateFactories < ActiveRecord::Migration[6.1]
  def change
    create_table :factories do |t|
      t.string :name #Tots garage
      t.integer :production #$5/s
      t.integer :cost #$50
      t.integer :user_id
    end
  end
end
