import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'
export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            OrderNo:'',
            Date:new Date().toLocaleString(),
            Name:'',
            AadharNo:null,
            Address:'',
            Tehsil:'',
            District:'',
            PinCode:null,
            State:'',
            Whatsapp :null,
            Contact:null,
            CompanyName:'',
            Order:[{
                Details:'',
                Qty:null,
                Rate:null,
                Amount:null
            }],
            TotalAmt:null,
            Advance:null, 
            BillAmt:null,
            TransportChrg:null,
            DueAmt:null,
            DeliveryDate:new Date(0),
            DeliveryPlace:'',
            Deposit:[{
                DDate:new Date(0),
                Amount:null,
                UTRNo:'',
                Bank:''
            }],
            Ac:'',
            AcHolder:'',
            AcNo:null,
            IFSC:'',
            DealerName:'',
            DealerContact:null,   
        
                show_personal:true,
                show_order:false,
                show_bank:false
            }
    }
    // state =
    
    //to show hide sub forms
    personal_next=(event)=>{
        event.preventDefault()
    this.setState({  show_personal:false,
        show_order:true,
        show_bank:false})
    }
    order_next=(event)=>{
        event.preventDefault()
        this.setState({  show_personal:false,
            show_order:false,
            show_bank:true})
    }
    order_previous=(event)=>{
        event.preventDefault()
        this.setState({  show_personal:true,
            show_order:false,
            show_bank:false})
    }
    bank_previous=(event)=>{
        event.preventDefault()
        this.setState({  show_personal:false,
            show_order:true,
            show_bank:false})
    }

    handle_input_change=(event)=>{

        this.setState({ [event.target.name] : event.target.value  })

    }
    add_order=(event)=>{
        event.preventDefault()    
        alert('add a form col')

    }
    submit_form=(event)=>{
        event.preventDefault()
        const payload = this.state
        axios.post( 'http://localhost:4000/order/add' ,payload)
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err)})
    
    }
    render() {
        return (
                <div className="container-fluid">
                                <div className="head-row">
                                    <div className="container-fluid  display-3 text-center main-head head-col">B-KISAN ORDER FORM</div>
                                </div>
                                 

                               {this.state.show_personal && <form id="personalDetails" className="card-body border rounded-sm border-warning bg-light">
                                    <div className="form-group">
                                        <label htmlFor="dat">Enter Date:</label>
                                        <input type="date" className="form" id="dat" name="dt" name="Date" onChange={this.handle_input_change} />
                                        <input type="text" className="form-control" placeholder="Name" id="uname" name="Name"  value={this.state.Name} onChange={this.handle_input_change}/>
                                        <input type="text" className="form-control" placeholder="AadharNo" id="adhno" name="AadharNo"  value={this.state.AadharNo} onChange={this.handle_input_change}/>
                                        <input type="text" className="form-control" placeholder="Address" id="addr" name="Address" value={this.state.Address}  onChange={this.handle_input_change}/>
                                        <input type="text" className="form-control" placeholder="Tehsil" id="tehsil" name="Tehsil" value={this.state.Tehsil}  onChange={this.handle_input_change}/>
                                        <input type="text" className="form-control" placeholder="District" id="dist" name="District" value={this.state.District}  onChange={this.handle_input_change}/>
                                        <input type="number" className="form-control" placeholder="Enter Pincode" id="pincode" name="PinCode"value={this.state.PinCode}  onChange={this.handle_input_change}/>
                                        <input type="text" className="form-control" placeholder="State" id="state" name="State" value={this.state.State}  onChange={this.handle_input_change}/>
                                        <input type="tel" className="form-control"  id="whatsApp" pattern="[0-9]{10}" placeholder="WhatsApp Number" name="Watsapp" value={this.state.Whatsapp}  onChange={this.handle_input_change}/>                            
                                        <input type="tel" className="form-control"  id="contNum" pattern="[0-9]{10}" placeholder="Contact Number" name="Contact" value={this.state.Contact}  onChange={this.handle_input_change}/>
                                        <input type="text" className="form-control" placeholder="Enter Company Name" id="Company_name" name="CompanyName" value={this.state.CompanyName}  onChange={this.handle_input_change}/>
                                        <button className="btn btn-primary" onClick={this.personal_next}>Next</button>
                                    </div>
                                </form>}
                           
                    
                  
                        {this.state.show_order && <form id="orderDetails" className="card-body border rounded-sm border-warning bg-light"> 
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col ">Details</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Rate</th>
                                            <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody id="ordr_body">
                                        <tr id="ordr_row">
                                            <th scope="col"><input type="text" className="form-control"  placeholder="Details 1" id="det1"  /></th>
                                            <th scope="col"><input type="number" className="form-control" placeholder="Quantity 1" id="qt1"/></th>
                                            <th scope="col"><input type="number" className="form-control" placeholder="Rate 1" id="rt1"/></th>
                                            <th scope="col"><input type="number" className="form-control" placeholder="Amount 1" id="at1"/></th>
                                        </tr>

                                        </tbody>
                                    </table>
                                    <button className="btn btn-info" onClick={this.add_order}>Add +</button>



                                    <div className="row">
                                        <div className="col">
                                        <input type="number"  step="0.01" className="form-control" id="transport" placeholder="Transport Charges" value={this.state.TransportChrg}/>
                                        </div>
                                        <div className="col">
                                        <input type="number" step="0.01" className="form-control" placeholder="Bill Amount" id="bill" value={this.state.BillAmt}/>
                                        </div>
                                        <div className="col">
                                        <input type="number" step="0.01"className="form-control" placeholder="Total Amount" id="total" value={this.state.TotalAmt}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                        <input type="number"  step="0.01" className="form-control" placeholder="Advance Payment" id="advPay" value={this.state.Advance}/>
                                        </div>
                                        <div className="col">
                                        <input type="number" step="0.01" className="form-control" placeholder="Due Amount" id="dueAmt" value={this.state.DueAmt}/>
                                        </div>
                                        <div className="col">       
                                        </div>
                                    </div>

                                    <div className="card">
                                    <label for="delDt" style={{marginLeft:0,borderLeft:0}}>Delivery Date:<input type="date" className="form" id="delDt" name="delDt"/></label> 
                                    <input type="text" className="form-control" placeholder="Delivery Address" id="deladdr"/>
                                    </div>
        
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">Deposite Date</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">UTR, IMPS, REF.NO</th>
                                            <th scope="col">Bank Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            
                                            <th scope="col"><input type="date" className="form-control" id="depdt1"/></th>
                                            <th scope="col"><input type="number" className="form-control"  id="famt1"/></th>
                                            <th scope="col"><input type="number" className="form-control"  id="ref1"/></th>
                                            <th scope="col"><input type="number" className="form-control"  id="bank1"/></th>
                                        
                                        </tr>
                                        <tr>
                                            <th scope="col"><input type="date" className="form-control" id="depdt1"/></th>
                                            <th scope="col"><input type="number" className="form-control"  id="famt2"/></th>
                                            <th scope="col"><input type="number" className="form-control"  id="ref2"/></th>
                                            <th scope="col"><input type="number" className="form-control"  id="bank2"/></th>
                                        
                                        </tr>
                                        <tr>
                                            <th scope="col"><input type="date" className="form-control" id="depdt1"/></th>
                                            <th scope="col"><input type="number" className="form-control"  id="famt3"/></th>
                                            <th scope="col"><input type="number" className="form-control"  id="ref3"/></th>
                                            <th scope="col"><input type="number" className="form-control"  id="bank3"/></th>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="container ">
                                           <div className="row text-center">
                                               <div className="col">
                                               <button className="btn btn-primary" onClick={this.order_previous}>Previous</button>
                                                </div>
                                               <div className="col">
                                               <button className="btn btn-primary" onClick={this.order_next}>Next</button>    
                                                </div>    
                                           </div>
                                     </div>
                                </form>}
                            
                    
                     { this.state.show_bank && <div className="card-body border rounded-sm border-warning bg-light">
                            <div className="card-body">

                                <div className="card-body floatLeft bg-dark ">
                                    <input type="radio" name = "credit_account1" value="SBI" name="Ac" onChange={this.handle_input_change}/> 
                                    <h4  className="text-info"><small>SBI BANK ACCOUNT DETAILS</small></h4>
                                    <h5><small className="text-muted">IFSC: SBIN0030509 <br/> A/c Number: 38279304216</small></h5>
                                </div>
                                <div className="card-body floatRight bg-dark" >
                                <input type="radio" name = "credit_account2" value="HDFC" name="Ac"  onChange={this.handle_input_change}/> 
                                    <h4 className="text-info"><small >HDFC BANK ACCOUNT DETAILS</small></h4>
                                    <h5><small className="text-muted">IFSC:HDFC0004042  <br/> A/c Number: 502000377762797</small></h5>
                                </div>
                                <form id="bankDetails">
                                    <input type="text" className="form-control" placeholder="A/c Holder Name" id="accName" name="AcHolder"  onChange={this.handle_input_change}/>
                                    <input type="number" className="form-control" placeholder="A/c Number" id="accNo" name="AcNo"  onChange={this.handle_input_change}/>
                                    <input type="text" className="form-control" placeholder="IFSC " id="ifsc" name="IFSC"  onChange={this.handle_input_change}/>
                                    <input type="text" className="form-control" placeholder="Dealer Name" id="dealer" name="DealerName"  onChange={this.handle_input_change}/>
                                    <input type="tel" className="form-control"  id="mobile" pattern="[0-9]{10}" placeholder="Mobile Number" name="DealerContact"  onChange={this.handle_input_change}/>
                            </form>
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col">
                                    <button className="btn btn-primary"onClick={this.bank_previous}>Previous</button>
                                    </div>
                                    <div className="col">
                                    <button className="btn btn-primary" onClick={this.submit_form} >Submit Form</button>
                                    </div>    
                                </div>
                            </div>
                            </div>  
                        </div>}
                  
                    
                    </div>

                
        )
    }
}
