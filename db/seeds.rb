# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Customer.destroy_all

Goal.destroy_all

Deposit.destroy_all

kenneth = Customer.create!({ customer_name: "Kenneth Cannon" })
kenneth.goals.create!({ goal_name: "College Fund", goal_amount: "100000"})
kenneth.goals.create!({ goal_name: "New House", goal_amount: "60000"})
kenneth.goals.create!({ goal_name: "Retirement", goal_amount: "4000000"})
kenneth.goals.create!({ goal_name: "Vacation", goal_amount: "2000"})
kenneth.goals.create!({ goal_name: "New Car", goal_amount: "10000"})

joe = Customer.create!({ customer_name: "Joseph Campbell" })
joe.goals.create!({ goal_name: "Retirement", goal_amount: "100000"})
joe.goals.create!({ goal_name: "College Fund", goal_amount: "50000"})
joe.goals.create!({ goal_name: "Vacation", goal_amount: "1000"})
joe.goals.create!({ goal_name: "Disney Stock", goal_amount: "1000000"})
joe.goals.create!({ goal_name: "Tatooine Rental", goal_amount: "1000000000"})

will = Customer.create!({ customer_name: "Willie Nelson Smith" })
will.goals.create!({ goal_name: "Retirement", goal_amount: "120000"})
will.goals.create!({ goal_name: "Bolder Rental", goal_amount: "250000"})
will.goals.create!({ goal_name: "New Car", goal_amount: "300000"})
will.goals.create!({ goal_name: "College Fund", goal_amount: "360000"})
will.goals.create!({ goal_name: "Bel Air Rental", goal_amount: "4500000"})

veronica = Customer.create!({ customer_name: "Veronica Electronica" })
veronica.goals.create!({ goal_name: "Retirement", goal_amount: "400000"})
veronica.goals.create!({ goal_name: "Record Album", goal_amount: "50000"})
veronica.goals.create!({ goal_name: "Vacation", goal_amount: "4500"})
veronica.goals.create!({ goal_name: "Paris Trip", goal_amount: "9500"})
veronica.goals.create!({ goal_name: "College Fund", goal_amount: "125000.00"})

shannon = Customer.create!({ customer_name: "Shannon Hoon" })
shannon.goals.create!({ goal_name: "Retirement", goal_amount: "415658.14"})
shannon.goals.create!({ goal_name: "College Fund", goal_amount: "98751.23"})
shannon.goals.create!({ goal_name: "New House", goal_amount: "175693.33"})


kenny = Customer.create!({ customer_name: "Kenny McCormic" })
kenny.goals.create!({ goal_name: "New House", goal_amount: "12635.98"})


pablo = Customer.create!({ customer_name: "Pablo Picaso" })
pablo.goals.create!({ goal_name: "Paint", goal_amount: "36.50"})
pablo.goals.create!({ goal_name: "Canvas", goal_amount: "156.48"})
pablo.goals.create!({ goal_name: "New Car", goal_amount: "54988.88"})
pablo.goals.create!({ goal_name: "Retirement", goal_amount: "801254.45"})
pablo.goals.create!({ goal_name: "New House", goal_amount: "415684.21"})

leo = Customer.create!({ customer_name: "Leonardo Di Vinci" })
leo.goals.create!({ goal_name: "College Fund", goal_amount: "12500.30"})

obi = Customer.create!({ customer_name: "Obi Wan Kenobi" })
obi.goals.create!({ goal_name: "Retirement", goal_amount: "5600145.89"})

martin = Customer.create!({ customer_name: "Martin Van Scorsese" })
martin.goals.create!({ goal_name: "New House", goal_amount: "4569363.17"})
martin.goals.create!({ goal_name: "Retirement", goal_amount: "8500046.57"})

keyser = Customer.create!({ customer_name: "Keyser Soze" })
keyser.goals.create!({ goal_name: "Vacation", goal_amount: "10000"})
keyser.goals.create!({ goal_name: "Retirement", goal_amount: "100000"})
keyser.goals.create!({ goal_name: "New Car", goal_amount: "50000"})
keyser.goals.create!({ goal_name: "New House", goal_amount: "350000"})
keyser.goals.create!({ goal_name: "Tanker Ship", goal_amount: "1500565.36"})

lucas = Customer.create!({ customer_name: "Lucas Stephenson" })
lucas.goals.create!({ goal_name: "College Fund", goal_amount: "125000"})
lucas.goals.create!({ goal_name: "Vacation", goal_amount: "12500"})
lucas.goals.create!({ goal_name: "New House", goal_amount: "250000"})
lucas.goals.create!({ goal_name: "Retirement", goal_amount: "2500000"})
lucas.goals.create!({ goal_name: "Independent Film", goal_amount: "25000"})

sal = Customer.create!({ customer_name: "Salvador Dali" })
sal.goals.create!({ goal_name: "New Car", goal_amount: "315000"})
sal.goals.create!({ goal_name: "New House", goal_amount: "7500000"})

roger = Customer.create!({ customer_name: "Roger Verbal Kint" })
roger.goals.create!({ goal_name: "New House", goal_amount: "57000"})
roger.goals.create!({ goal_name: "Retirement", goal_amount: "130000"})
roger.goals.create!({ goal_name: "Vacation", goal_amount: "1100.31"})

milla = Customer.create!({ customer_name: "Milla Joan Jovovich" })
milla.goals.create!({ goal_name: "Aerosmith Tickets", goal_amount: "27.50"})
milla.goals.create!({ goal_name: "New House", goal_amount: "58650"})
milla.goals.create!({ goal_name: "College Fund", goal_amount: "3000"})
milla.goals.create!({ goal_name: "New Car", goal_amount: "3657.25"})
milla.goals.create!({ goal_name: "Vacation", goal_amount: "100.00"})