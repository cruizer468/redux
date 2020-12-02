import React, { Component } from 'react';
import { connect } from 'react-redux';

class datalist extends Component {
    state = { data:[''] }
    componentDidMount(){
     this.props.store.subscribe(()=>{
        this.setState({
            data: this.props.store.getState().Data
        })
     })
    this.setState({ data:this.props.Data })
    }
    render() {
        return (
            <>
            <div className="card text-white bg-primary mb-3">
            <div className="card-header">Data List</div>
            <div className="card-body">
            <h5 className="card-title">List Of Data</h5>
              
              {
                this.state.data.map(data => <p className='card-text' key={data}>
                    {data}
                </p>)
              }

            </div>
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    Data:state.Data
})

export default connect(mapStateToProps) (datalist);