class ApplicationController < ActionController::Base
   skip_before_action :verify_authenticity_token
    
    private
    def current_customer
      @customer ||= begin
        token = request.headers["Authorization"].to_s.split(" ").last
        payload, header = *JSONWebToken.verify(token)
        Customer.from_auth_hash(payload)
      end
    rescue JWT::VerificationError, JWT::DecodeError
      nil
    end

end
