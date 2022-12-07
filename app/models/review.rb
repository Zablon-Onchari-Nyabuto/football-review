class Review < ApplicationRecord
    belongs_to :user
    validates :username, presence: true
    validates :match, length: { minimum: 10 }
end
