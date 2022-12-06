# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

review1 = Review.create(username: "Johhny Bravo", match: "Brazil Vs South Koreab", date: "06-12-2022", description: "The match was intense and the samba boysb took immediate control with the first shot on target" )
review2 = Review.create(username: "Simple Simon", match: "Brazil Vs South Koreab", date: "06-12-2022", description: "The match was intense and the samba boysb took immediate control with the first shot on target" )
review3 = Review.create(username: "Walter White", match: "Brazil Vs South Koreab", date: "06-12-2022", description: "The match was intense and the samba boysb took immediate control with the first shot on target" )
review4 = Review.create(username: "Peter John", match: "Brazil Vs South Koreab", date: "06-12-2022", description: "The match was intense and the samba boysb took immediate control with the first shot on target" )
review5 = Review.create(username: "Ali Karim", match: "Brazil Vs South Koreab", date: "06-12-2022", description: "The match was intense and the samba boysb took immediate control with the first shot on target" )

users = []
10.times do
    users << User.create(username: Faker::Name.name, password_digest: Faker::Password.name )
end