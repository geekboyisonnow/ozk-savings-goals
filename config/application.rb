require_relative 'boot'

require 'rails/all'

# config.autoload_paths << Rails.root.join('client')
# config.eager_load_paths << Rails.root.join('client')
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FinalOzkTest
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    # config.api_only = true
    # config.action_dispatch.default_headers = {
    #   'Access-Control-Allow-Origin' => 'http://localhost:3001',
    #   'Access-Control-Request-Method' => %w{GET POST PUT OPTIONS}.join(",")
    # }
  end
end
