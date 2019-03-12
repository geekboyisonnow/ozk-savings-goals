import React, {Component} from 'react';
import './App.css';

class Challenge extends Component {
  render() {
    return (
            <>
                <div className="body">
                  <div className="content">
                    <h2>The Rainy Day Challenge</h2>
                    <div className="rainy-content">
                      <section>
                                Competition can be healthy. So, try the Rainy
                                Day Challenge. Here's how it works... You pick a
                                savings goal that you might need for a rainy
                                day, such as; $100, $1,000, $10,000, or more.
                                Match your progress against others in the
                                challenge. See if you can beat expectations. Are
                                you ready for the Challenge? Bank OZK helps you
                                save today to meet your financial goals for
                                tomorrow! Enter now to take the Challenge!
                      </section>
                    </div>
                  </div>

                  <div className="row">
                    <div className="column">
                      <label for="name" className="label">
                      Amount:
                      </label>
                      <label for="target" className="label">
                      Deposit:         
                      </label>
                      <label for="current" className="label">
                      Progress:        
                      </label>
                      <label for="date" className="label">
                      Competion:        
                      </label>
                    </div>
                    <div className="input-column">
                      <input
                        type="text"
                        id="target"
                        name="target_amount"
                        className="label"
                      />
                      <input
                        type="text"
                        id="current"
                        name="current_amount"
                        className="label"
                      />
                      <div className="container">
                        <div className="skills css">100%</div> 
                      </div>
                      <div className="container">
                        <div className="skills css">100%</div> 
                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <button type="submit">
                      <strong>ENTER</strong>
                    </button>

                    <section>Click Here to take the Challenge!</section>
                  </div>
                </div>
            </>
    );
  }
}

export default Challenge;
