puts "Removing old data.."
Factory.destroy_all
User.destroy_all
Upgrade.destroy_all

puts "Seeding data..."

# cost = 50
# production = 5
# factories = ["Tots garage", "Jacko Kitchen", "Lukes Parking", "Dooms Real Estate"]
# factories.each{|factory|
#     Factory.create(name: factory, cost: cost, production: production)
#     Upgrade.create(name: "Upgrade1 #{factory}", description: "1.5x", price: 50, multiplier: 1.5)
#     Upgrade.create(name: "Upgrade2 #{factory}", description: "2x", price: 500, multiplier: 2)
#     Upgrade.create(name: "Upgrade3 #{factory}", description: "2x", price: 5000, multiplier: 2)
#     Upgrade.create(name: "Upgrade4 #{factory}", description: "3x", price: 10000, multiplier: 3)
#     cost = cost*3
#     production = production*2
# }
user1 = User.create(username: "Testuser", password: "test", gold: 500)

factory1 = Factory.create(name: "Garage", cost: 50, production: 5)
factory2 = Factory.create(name: "Kitchen", cost: 200, production: 10)
factory3 = Factory.create(name: "Parking", cost: 1000, production: 20)
factory4 = Factory.create(name: "Real Estate", cost: 5000, production: 40)

upgrade1 = Upgrade.create(name: "Airconditioner", description: "1.5x", price: 50, multiplier: 1.5)
upgrade2 = Upgrade.create(name: "Water", description: "2x", price: 200, multiplier: 2)
upgrade3 = Upgrade.create(name: "Electricity", description: "2x", price: 1000, multiplier: 2)
upgrade4 = Upgrade.create(name: "Gas", description: "3x", price: 5000, multiplier: 3)


puts "✅ Done seeding!"
