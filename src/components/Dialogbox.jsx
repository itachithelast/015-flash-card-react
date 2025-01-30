import React, { Component } from 'react';


class DialogBox extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container-fluid">
                <h3 className='text-center m-3'>Did you learn this word?</h3>
                <div className='row justify-content-between'>
                    <button onClick = {this.props.onConfirm} className="btn btn-success m-2 col-5">Yes</button>
                    <button onClick = {this.props.onReject} className="btn btn-warning m-2 col-5">No</button>
                </div>
            </div>
        );
    }
}
 
export default DialogBox;