class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.date :date, null:false
      t.string :description, null:false
      t.integer :user_pay_id,  null:false, index:true
      t.integer :user_owe_id,  null:false, index:true
      t.float :owed, null:false
      t.float :total, null:false
      t.text :note

      t.timestamps null: false
    end
  end
end
