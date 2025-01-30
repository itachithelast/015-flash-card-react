import react, { Component } from "react";
import QuestionsContext from "../assets/context";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="container m-5">
        <div className="card">
          <div className="header row justify-space-between p-2">
            <div className="header-left col-8 row mx-2">
              <div className="card progress-bar bg-secondary col-2"></div>
              <span className="percentage col-4">25%</span>
            </div>
            <div className="header-right col-3 text-end">
              <span className="card-count">5 of 20</span>
            </div>
          </div>
        </div>
        <div className="card mt-2">
          <div className="card card-section mb-1 p-5 text-center justify-content-center">
            <h1 className="text-center">Question</h1>
          </div>
          <div className="card bg-body-tertiary">
            <div className="justify-space-between justify-content-center row m-1">
              <div className="footer-left col-4 ">
              
                <button className="btn"><i class="fa-solid fa-caret-left"></i> Previous</button>
              </div>
              <div className="show-hide text-center col-4"><button className="btn">Show Answer</button></div>
              <div className="footer-right text-end col-4 ">
                <button className="btn">Next <i class="fa-solid fa-caret-right"></i></button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
