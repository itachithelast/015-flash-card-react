import react, { Component } from "react";
import QuestionsContext from "../assets/context";

class Card extends Component {
  static contextType = QuestionsContext;
  state = {
    id: 1,
    isQuestion: 1,
  };
  cardItem = () => {
    for (let i of this.context.questions) {
      if (i.id === this.state.id) {
        return i;
      }
    }
  };

  showHide = () => {
    if (this.state.isQuestion) {
      this.setState({ isQuestion: 0 });
    } else{
        this.setState({isQuestion:1})
    }
  };

  btnText = () => {
    return this.state.isQuestion ? "Show Answer" : "Show Question";
  };

  next = ()=>{this.setState({id: this.state.id+1 , isQuestion:1})}
  previous = ()=>{this.setState({id: this.state.id-1 , isQuestion:1})}
  render() {
    const card = this.cardItem();
    const showData = () => {
      if (this.state.isQuestion) {
        return card.question;
      } else {
        return card.answer;
      }
    };

    return (
      <div className="container m-5">
        <div className="card">
          <div className="header row justify-space-between p-2">
            <div className="header-left col-8 row mx-2">
              <div className="card progress-bar bg-secondary col-2"></div>
              <span className="percentage col-4">{card.progress}</span>
            </div>
            <div className="header-right col-3 text-end">
              <span className="card-count">
                {card.id} of {this.context.questions.length}
              </span>
            </div>
          </div>
        </div>
        <div className="card mt-2">
          <div className="card card-section mb-1 p-5 text-center justify-content-center">
            <h1 className="text-center">{showData()}</h1>
          </div>
          <div className="card bg-body-tertiary">
            <div className="justify-space-between justify-content-center row m-1">
              <div className="footer-left col-4 ">
                <button onClick={this.previous} className="btn">
                  <i className="fa-solid fa-caret-left"></i> Previous
                </button>
              </div>
              <div className="show-hide text-center col-4">
                <button onClick={this.showHide} className="btn">
                  {this.btnText()}
                </button>
              </div>
              <div className="footer-right text-end col-4 ">
                <button onClick={this.next} className="btn">
                  Next <i className="fa-solid fa-caret-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
