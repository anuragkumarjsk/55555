/* eslint-disable */
import React, { Component } from 'react'
import axios from 'axios'
import Del_Btn from './crudnav_deletebtn'
import Updt_Btn from './crudnav_updatebtn'
class crudnav extends Component {


    constructor(props) {
        super(props);
      
        this.initialState = {
            contact:null,
            order:null,
            adhaar:null,
            Active:0,
        };
        this.state = this.initialState;
      }

    contact_change=(e)=>{this.setState({contact:e.target.value,Active:1}) }
    order_change=(e)=>{this.setState({order:e.target.value,Active:2}) }
    adhaar_change=(e)=>{this.setState({adhaar:e.target.value,Active:3}) }

    

    render() {
        
        return (
            <div>
                <div className="row navbar navbar-light bg-light">
                  <div className="col"> <input class="form-control mr-sm-2" type="number" placeholder="Contact No"  name="ContactNo" value={this.state.contact} onChange={this.contact_change} /></div>
                  <div className="col"><input class="form-control mr-sm-2" type="number" placeholder="Order No" name="OrderNo" value={this.state.order}  onChange={this.order_change}/></div>
                  <div className="col"><input class="form-control mr-sm-2" type="number" placeholder="Adhaar No" name="AadharNo" value={this.state.adhaar}  onChange={this.adhaar_change} /></div>
                  <div className="col">
                    <Updt_Btn contact={this.state.contact} order={this.state.order} adhaar={this.state.adhaar} Active={this.state.Active}/> 
                    <Del_Btn contact={this.state.contact} order={this.state.order} adhaar={this.state.adhaar} Active={this.state.Active}/>        
                    </div>
                 </div>
            </div>
        )
    }
}
export default crudnav