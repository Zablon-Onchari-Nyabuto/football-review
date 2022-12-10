class Review < ApplicationRecord
    belongs_to :user
    validates :username, presence: true
    validates :match, length: { minimum: 5 }
    validates :id, presence: true
end
