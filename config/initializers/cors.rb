# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins '*'
#     resource '*', headers: :any, methods: [:get, :post, :put, :delete, :options]
#   end
# end

if Rails.env.development?
    Rails.application.config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'localhost:*'
        resource '*', headers: :any
      end
    end
end