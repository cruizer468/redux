import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Increment, Decrement, AddNewData }  from '../store/actons';
class main extends Component {

    state = { textdata:'' }

    AddData() {
    this.props.AddNewData(this.state.textdata);
    }
    
    increment() {
      this.props.Increment();
    }

    decrement() {
        this.props.Decrement();
    }

    componentDidMount(){
        console.log('prop', this.props)
    }
    render() {
        return (
            <>
            <div className="card text-white bg-success mb-3" >
            <div className="card-header text-center">Main</div>
            <div className="card-body text-center">
            <h5 className="card-title">In&DE Crement Number</h5>
            <button 
            className='btn btn-sucsses m-2'
            onClick={() => {this.increment()}}
            >Increment
            </button>
            <button onClick={()=>{this.decrement()}}  
            className='btn btn-danger m-2'  >Decrement
            </button>
            <div className='text-center'>
            <input
             value={this.state.textdata}
             onChange={ e => this.setState({textdata: e.target.value}) }
             placeholder='add new data'
             className='btn btn-group m-2' />
            <button onClick={ () => {this.AddData()} } className='btn btn-primary m-2' >Add</button>
            </div>
            </div>
            </div>
            </>
        );
    }
}

main.propTypes = {
    Increment: PropTypes.func.isRequired,
    Decrement: PropTypes.func.isRequired,
    AddNewData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    Number: state.Number,
    Data: state.Data
})

export default connect(mapStateToProps ,{ Increment,Decrement,AddNewData })(main);