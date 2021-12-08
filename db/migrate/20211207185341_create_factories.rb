class CreateFactories < ActiveRecord::Migration[6.1]
  def change
    create_table :factories do |t|
      t.string :name #Tots garage
      t.float :production #$5/s
      t.integer :cost #$50
    end
  end
end
