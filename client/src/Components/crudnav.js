/* eslint-disable */
import React, { Component } from 'react'
import axios from 'axios'
// import UpdateModal from './updatemodal'
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

    delete_record=()=>{
         switch(this.state.Active){
        case 1:axios.delete(`http://localhost:4000/order/delete/mob/${this.state.contact}`).then((d)=>{'deleted record '+d}).catch((err)=>{console.log(err)});
                break
        case 2: axios.delete(`http://localhost:4000/order/delete/ordr/${this.state.order}`).then((d)=>{'deleted record '+d}).catch((err)=>{console.log(err)})
                break                
        case 3: axios.delete(`http://localhost:4000/order/delete/adhr/${this.state.adhaar}`).then((d)=>{'deleted record '+d}).catch((err)=>{console.log(err)})
                break
                }            

    }
    show_record=()=>{
        let DATA={}
        alert('inside update'+this.state.Active)
            switch(this.state.Active)
                {
                case 1:axios.get(`http://localhost:4000/order/show/1/${this.state.contact}`).then((d)=>{console.log(d.data);alert(d.data.Name)}).catch((err)=>{console.log(err)})
                        break
                case 2:axios.get(`http://localhost:4000/order/show/2/${this.state.order}`).then((d)=>{console.log(d.data);alert(d.data.Name)}).catch((err)=>{console.log(err)})
                        break                
                case 3:axios.get(`http://localhost:4000/order/show/3/${this.state.adhaar}`).then((d)=>{console.log(d.data);alert(d.data.Name); DATA={...d.data}  }).catch((err)=>{console.log(err)})
                        break
                   }
                   console.log('my data'+ DATA)
    }
    update_record=()=>{
        switch(this.state.Active){
            case 1:axios.put(`http://localhost:4000/order/update/1/${this.state.contact}`).then((d)=>{'updated record '+d}).catch((err)=>{console.log(err)})
                   break
           case 2:axios.put(`http://localhost:4000/order/update/2/${this.state.order}`).then((d)=>{'updated record '+d}).catch((err)=>{console.log(err)})
                   break                
           case 3:axios.put(`http://localhost:4000/order/update/3/${this.state.adhaar}`).then((d)=>{'updated record '+d}).catch((err)=>{console.log(err)})
                   break
                   }
    }
    render() {
        
        return (
            <div>
                <div className="row navbar navbar-light bg-light">
                  <div className="col"> <input class="form-control mr-sm-2" type="number" placeholder="Contact No"  name="ContactNo" value={this.state.contact} onChange={this.contact_change} /></div>
                  <div className="col"><input class="form-control mr-sm-2" type="number" placeholder="Order No" name="OrderNo" value={this.state.order}  onChange={this.order_change}/></div>
                  <div className="col"><input class="form-control mr-sm-2" type="number" placeholder="Adhaar No" name="AadharNo" value={this.state.adhaar}  onChange={this.adhaar_change} /></div>
                  <div className="col">
                      <button class="btn btn-outline-danger my-2 mr-sm-2" type="submit" onClick={this.delete_record}><b>Delete</b></button>
                      <button class="btn btn-outline-success my-2 mr-sm-0" type="submit" onClick={this.show_record}><b>Update</b></button>
                    {/* <UpdateModal  val={this.state.Data}/> */}

                  </div>
                 </div>
            </div>
        )
    }
}
export default crudnav