class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :username
      t.string :match
      t.string :date
      t.string :description

      t.timestamps
    end
  end
end
