import react, { Component } from "react";
import QuestionsContext from "../assets/context";
import DialogBox from "./Dialogbox";

class Card extends Component {
  static contextType = QuestionsContext;
  state = {
    id: 1,
    isQuestion: true,
    dialogBox: false,
    isConfirmed: false,
    pendingAction: null,
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
      this.setState({ isQuestion: false });
    } else {
      this.setState({ isQuestion: true });
    }
  };

  btnText = () => {
    return this.state.isQuestion ? "Show Answer" : "Show Question";
  };

  handleNext = () => {
    this.setState({ dialogBox: true, isQuestion: true, pendingAction: "next" });
  };

  HandlePrevious = () => {
    this.setState({
      dialogBox: true,
      isQuestion: true,
      pendingAction: "previous",
    });
  };

  progressStatus = () => {
    if (this.cardItem().progress < 100) {
      this.context.questions.map((i) =>
        i.id === this.state.id ? (this.cardItem().progress += 25) : i
      );
    }
  };

  progressBar = () => {
    const progress = this.cardItem().progress;
    switch (progress) {
      case 25:
        return "card progress-bar bg-secondary col-2";
      case 50:
        return "card progress-bar bg-secondary col-4";
      case 75:
        return "card progress-bar bg-secondary col-6";
      case 100:
        return "card progress-bar bg-secondary col-8";
      default:
        return "card progress-bar bg-secondary col-1";
    }
  };

  handleConfirm = () => {
    this.setState({ dialogBox: false, isConfirmed: true }, () => {
      this.progressStatus();
      this.updateCard();
    });
  };

  handleReject = () => {
    this.setState({ dialogBox: false, isConfirmed: false }, () => {
      this.updateCard();
    });
  };

  updateCard = () => {
    this.state.pendingAction === "next"
      ? this.setState({
          id:
            this.state.id === this.context.questions.length
              ? 1
              : (this.state.id += 1),
        })
      : this.setState({
          id:
            this.state.id === 1
              ? this.context.questions.length
              : (this.state.id -= 1),
        });
  };

  showDialog = () => {
    if (this.cardItem().progress !== 100) {
      return (
        <DialogBox
          onConfirm={this.handleConfirm}
          onReject={this.handleReject}
        />
      );
    } else {
      this.state.dialogBox = false;
      this.updateCard()
    }
  };

  showData = () => {
    if (this.state.isQuestion) {
      return <h1>{this.cardItem().question}</h1>;
    } else {
      return <h4>{this.cardItem().answer}</h4>;
    }
  };

  render() {
    return (
      <div className="container m-5">
        <div className="card">
          <div className="header row justify-space-between p-2">
            <div className="header-left col-8 row mx-2">
              <div className={this.progressBar()}></div>
              <span className="percentage col-4">
                {this.cardItem().progress}%
              </span>
            </div>
            <div className="header-right col-3 text-end">
              <span className="card-count">
                {this.cardItem().id} of {this.context.questions.length}
              </span>
            </div>
          </div>
        </div>
        <div className="card mt-2">
          <div className="card card-section mb-1 p-5 text-center justify-content-center">
            {this.state.dialogBox && this.showDialog()}
            {!this.state.dialogBox && this.showData()}
          </div>
          <div className="card bg-body-tertiary">
            <div className="justify-space-between justify-content-center row m-1">
              <div className="footer-left col-4 ">
                <button onClick={this.HandlePrevious} className="btn">
                  <i className="fa-solid fa-caret-left"></i> Previous
                </button>
              </div>
              <div className="show-hide text-center col-4">
                <button onClick={this.showHide} className="btn">
                  {this.btnText()}
                </button>
              </div>
              <div className="footer-right text-end col-4 ">
                <button onClick={this.handleNext} className="btn">
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
