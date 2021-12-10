puts "Removing old data.."
Factory.destroy_all
User.destroy_all
Upgrade.destroy_all
Faker::UniqueGenerator.clear

puts "Seeding data..."

user1 = User.create(gold: 500, production: 5)

cost = 20
prod = 2
50.times do
    factory = Factory.create(name: Faker::Restaurant.unique.name, cost: cost, production: prod, user_id: user1.id)
    cost = cost*1.5
    prod = prod*1.5
end

# factory1 = Factory.create(name: Faker::Restaurant.unique.name, cost: 50, production: 5, user_id: user1.id)
# factory2 = Factory.create(name: "Kitchen", cost: 200, production: 10, user_id: user1.id)
# factory3 = Factory.create(name: "Parking", cost: 1000, production: 20, user_id: user1.id)
# factory4 = Factory.create(name: "Real Estate", cost: 5000, production: 40, user_id: user1.id)

upgrade1 = Upgrade.create(name: "Airconditioner", description: "1.5x", price: 50, multiplier: 2)
upgrade2 = Upgrade.create(name: "Water", description: "2x", price: 200, multiplier: 2)
upgrade3 = Upgrade.create(name: "Electricity", description: "2x", price: 1000, multiplier: 2)
upgrade4 = Upgrade.create(name: "Gas", description: "3x", price: 5000, multiplier: 3)
upgrade4 = Upgrade.create(name: "Gas", description: "3x", price: 300000, multiplier: 4)
upgrade4 = Upgrade.create(name: "Gas", description: "3x", price: 1000000, multiplier: 5)
upgrade4 = Upgrade.create(name: "Gas", description: "3x", price: 100000000, multiplier: 6)


puts "✅ Done seeding!"
