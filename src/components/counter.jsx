import React, { Component } from 'react';
import { connect } from 'react-redux';
class counter extends Component {
    state = { Num:1 }
    componentDidMount(){
    //   console.log('counterProps', this.props);
    this.props.store.subscribe(()=>{
    this.setState({ Num: this.props.store.getState().Number })
    })
      this.setState({ Num: this.props.Number })   
    }
    render() {
        return (
            <>
            <div className="card text-white bg-danger mb-3" >
            <div className="card-header">Counter</div>
            <div className="card-body">
        <h1 className="card-title">Number : {this.state.Num}</h1>
            </div>
            </div> 
            </>
        );
    }
}

const mapStateToProps = (state) => ({
 Number:state.Number
})

export default connect(mapStateToProps) (counter);