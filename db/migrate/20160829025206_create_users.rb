class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null:false
      t.string :sesson_token
      t. string :password_digest, null:false, index: true, unique:true
      t.string :email, null:false, index: true, unique:true

      t.timestamps null: false
    end
  end
end
