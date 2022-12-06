class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :match, :date, :description
  has_one :user
end
