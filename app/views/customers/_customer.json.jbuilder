json.extract! customer, :id, :customer_name, :created_at, :updated_at
json.url customer_url(customer, format: :json)
json.goal_count customer.goals.count
json.goals customer.goals,
        partial: 'goals/goal',
        as: :goal