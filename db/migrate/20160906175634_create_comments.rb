class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null:false, index:true
      t.integer :bill_id, null:false, index:true
      t.string :body, null:false

      t.timestamps null: false
    end
  end
end
