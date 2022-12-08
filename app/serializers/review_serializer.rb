class ReviewSerializer < ActiveModel::Serializer
  attributes :username, :match, :date, :description
  has_one :user
end
