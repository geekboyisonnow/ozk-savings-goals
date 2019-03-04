import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Progress extends Component {

  // CODE PEN JAVASCRIPT FOR BARS
  // $('.horizontal .progress-fill span').each(function(){
  //   var percent = $(this).html();
  //   $(this).parent().css('width', percent);
  // });


  render() {
    return (
      <>
      
      <div className="content">
          <h2 className="progress">Savings Goals Progress</h2>        
        <div className="row">

          <div className="mobile-column" >
          <label for="name" className="input-label"><strong>Goal:</strong></label>
          <div type="text" id="name" name="goal_name" className="input-label" >Kid's College</div>
            <div type="text" id="name" name="goal_name" className="input-label" >Holiday Gifts</div>
            <div type="text" id="name" name="goal_name" className="input-label" >Vacation</div>
            <div type="text" id="name" name="goal_name" className="input-label" >New Kitchen</div>
            <div type="text" id="name" name="goal_name" className="input-label" >Retirement</div>
            </div>
            
            <div className="mobile-column" >
            <label for="target" className="input-label" ><strong>Amount:</strong></label>
            <div type="text" id="target" name="target_amount" className="input-label" >$100,000.00</div>
            <div type="text" id="target" name="target_amount" className="input-label" >$2,000.00</div>
            <div type="text" id="target" name="target_amount" className="input-label" >$1,000.00</div>
            <div type="text" id="target" name="target_amount" className="input-label" >$10,000.00</div>
            <div type="text" id="target" name="target_amount" className="input-label" >$4,000,000.00</div>
            </div>
          
            <div className="mobile-column" >
            <label for="current" className="input-label" ><strong>Balance:</strong></label>
            <div type="text" id="current" name="current_amount" className="input-label" >$9,500.00</div>
            <div type="text" id="current" name="current_amount" className="input-label" >$500.00</div>
            <div type="text" id="current" name="current_amount" className="input-label" >$100.00</div>
            <div type="text" id="current" name="current_amount" className="input-label" >$300.00</div>
            <div type="text" id="current" name="current_amount" className="input-label" >$45,000.00</div>
            </div>
          
            <div className="mobile-column" >
            <label for="date" className="input-label"><strong>Date:</strong></label>
            <div type="date" id="date" name="target_date" className="input-label" >01/01/2035</div>
            <div type="date" id="date" name="target_date" className="input-label" >10/01/2019</div>
            <div type="date" id="date" name="target_date" className="input-label" >05/01/2019</div>
            <div type="date" id="date" name="target_date" className="input-label" >01/01/2020</div>
            <div type="date" id="date" name="target_date" className="input-label" >06/01/2050</div>
            </div>

         <div className="mobile-column" >
          
          
          <label className="input-label" ><strong>Progress:</strong></label>
          <div class="progress-bar horizontal">
              <div class="progress-track" className="input-label" >
                  <div class="progress-fill">
                    <span >100%</span>
                  </div>
              </div>
          </div>
          <div class="progress-bar horizontal">
    <div class="progress-track" className="input-label" >
      <div class="progress-fill">
        <span>75%</span>
      </div>
    </div>
  </div>

  <div class="progress-bar horizontal">
    <div class="progress-track" className="input-label" >
      <div class="progress-fill">
        <span>60%</span>
      </div>
    </div>
  </div>

  <div class="progress-bar horizontal">
    <div class="progress-track" className="input-label" >
      <div class="progress-fill">
        <span>20%</span>
      </div>
    </div>
  </div>

  <div class="progress-bar horizontal">
    <div class="progress-track" className="input-label" >
      <div class="progress-fill">
        <span>82%</span>
      </div>
    </div>
  </div>
</div>
          </div>
          </div>
    
          
          <div className="content">
          <div className="buttons">
            <div className="button-column">
            <div class="button" classId="submit" className="button-label">
              <button type="edit"><strong>BACK</strong></button>
            </div>
            </div>
          <div className="button-column">
            <div class="button" classId="submit" className="button-label">
              <button type="submit"><strong>EDIT</strong></button>
          </div>
          </div>
            <div className="button-column">
            <div class="button" classId="submit" className="button-label">
              <button type="edit"><strong>NEXT</strong></button>
            </div>
            </div>
            </div>
            </div> 
    
    </>
      );
  }
}

export default Progress;