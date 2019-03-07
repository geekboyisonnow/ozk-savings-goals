json.extract! goal, :id, :goal_name, :goal_amount, :customer_id, :created_at, :updated_at
json.url goal_url(goal, format: :json)
json.deposit_count goal.deposit.count
json.deposits goal.deposit,
        partial: 'deposits/deposit',
        as: :deposit