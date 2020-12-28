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
            Watsapp:null,
            Contact:null,
            CompanyName:'',

            OrderTable:[],
            Order_Details:'',
            Order_Quantity:null,
            Order_Rate:null,
            Order_Amount:null,
            OrderCount:1, 

            TotalAmt:null,
            Advance:null, 
            BillAmt:null,
            TransportChrg:null,
            DueAmt:null,
            DeliveryDate:new Date(0),
            DeliveryPlace:'',

            DepositTable:[],
            Deposit_Date:new Date(0),
            Deposit_Amount:null,
            Deposit_UTRNo:'',
            Deposit_Bank:'',

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

    Set_BillAmt=()=>{
        var result=0
        result = this.state.OrderTable.map((i)=>{return result + i.Order_Amount})
        var sum = result.reduce(function(a, b){
            return a + b;
        }, 0);
        this.setState({BillAmt:sum})
    }
    add_order=(event)=>{
        event.preventDefault()    
        var payload = {
                       Order_Details:this.state.Order_Details,
                       Order_Quantity:this.state.Order_Quantity,
                       Order_Rate:this.state.Order_Rate,
                       Order_Amount:this.state.Order_Quantity * this.state.Order_Rate
                    }
        this.state.OrderTable.push(payload)
        this.Set_BillAmt()

        this.setState({ Order_Details:'',Order_Quantity:'',Order_Rate:'',Order_Amount:''})
    }

    delete_order=(e,indx)=>{
        e.preventDefault()
        var data = [...this.state.OrderTable];
        data.splice(indx, 1);
        this.setState({OrderTable:data});
        this.setState({BillAmt:this.state.BillAmt - this.state.OrderTable[indx].Order_Amount })
    }

    add_deposit=(e)=>{
        e.preventDefault()
        var payload = {
            Deposit_Date:this.state.Deposit_Date,
            Deposit_Amount:this.state.Deposit_Amount,
            Deposit_UTRNo:this.state.Deposit_UTRNo,
            Deposit_Bank:this.state.Deposit_Bank
        }
        var dat = [...this.state.DepositTable,payload]
        this.setState({DepositTable:dat})
    }
    delete_deposit=(e,indx)=>{
        e.preventDefault()
        var data = [...this.state.DepositTable];
        data.splice(indx, 1);
        this.setState({DepositTable:data});
    }
    submit_form=(event)=>{
        // event.preventDefault()
        const payload = this.state
        axios.post( 'http://localhost:4000/order/add' ,payload)
        .then((data)=>{
            console.log(data)
            alert("Successfully submitted form.")
        })
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
                                        <input type="text" className="form-control" id="Or_no" name="OrderNo" placeholder="Order No" value={this.state.OrderNo} onChange={this.handle_input_change} />
                                        <div className="row">
                                            <div className="col"><label htmlFor="dat"><h5>Enter Date:</h5></label></div>
                                            <div className="col"><input type="date" className="form-control" id="dat" name="Date"  value={this.state.Date} onChange={this.handle_input_change} /></div>
                                             <div className="col"></div>
                                             <div className="col"></div>
                                        </div>
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
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th scope="col">Srl No</th>
                                            <th scope="col ">Details</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Rate</th>
                                            <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody id="ordr_body">
                                        <tr id="ordr_row">
                                            <th scope="col"><tr><button className="btn btn-info" onClick={this.add_order} ><em>+</em>new </button></tr></th>
                                            <th scope="col"><input type="text" className="form-control" name="Order_Details" placeholder={`Details ${this.state.OrderCount}`}  value={this.state.Order_Details } onChange={this.handle_input_change}   id="det1"  /></th>
                                            <th scope="col"><input type="number" className="form-control" name="Order_Quantity" placeholder={`Quantity ${this.state.OrderCount}`} value={this.state.Order_Quantity } onChange={this.handle_input_change}  id="qt1"/></th>
                                            <th scope="col"><input type="number" className="form-control" name="Order_Rate" placeholder={`Rate  ${this.state.OrderCount}`}   value={this.state.Order_Rate } onChange={this.handle_input_change}  id="rt1"/></th>
                                            <th scope="col"><input type="number" className="form-control" name="Order_Amount" placeholder={`Amount  ${this.state.OrderCount}`} value={this.state.Order_Quantity * this.state.Order_Rate } onChange={this.handle_input_change}  id="at1"/></th>
                                        </tr>
                                        
                                        { this.state.OrderTable.map((onearr,idnexval)=>{
                                            return(<tr key={idnexval}>
                                            <td><button className="btn-sm btn-danger"onClick={(e)=>this.delete_order(e,idnexval)}>delete {idnexval+1}</button></td>
                                            <td>{onearr.Order_Details}</td>
                                            <td>{onearr.Order_Quantity}</td>
                                            <td>{onearr.Order_Rate}</td>
                                            <td>{onearr.Order_Amount}</td>
                                            </tr>)
                                        })
                                        }
                                        </tbody>
                                        </table>

<div className="row" >
<div className="col"></div>
<div className="col"></div>
<div className="col"><h5>Bill Amount:</h5></div>
                                        <div className="col">
                                        <input type="number"  className="form-control" placeholder="Bill Amount" id="bill" value={this.state.BillAmt} onChange={this.handle_input_change}/>
                                        </div>
                                    
</div>
<div className="row" >
<div className="col"></div>
<div className="col"><h6>Transport Charge:</h6></div>
                                        <div className="col">
                                        <input type="number"  className="form-control" id="transport" placeholder="Transport Charge" name="TransportChrg" value={this.state.TransportChrg} onChange={this.handle_input_change}/>
                                        </div>
                                    
<div className="col"></div>
<div className="col"><h6>Total Amount:</h6></div>
                                        <div className="col">
                                        <input type="number" className="form-control" placeholder="Total Amount" id="total" name="TotalAmt" value={ parseFloat(this.state.BillAmt) + parseFloat(this.state.TransportChrg)} onChange={this.handle_input_change}/>
                                        </div>                           
</div>

<div className="row" >
<div className="col"></div>
<div className="col"><h6>Advance :</h6></div>
                                        <div className="col">
                                        <input type="number"  className="form-control" placeholder="Advance Payment" id="advPay" name="Advance" value={this.state.Advance} onChange={this.handle_input_change} />
                                        </div>          
<div className="col"></div>
<div className="col"><h6>Due Amount:</h6></div>
                                        <div className="col">
                                        <input type="number"  className="form-control" placeholder="Due Amount" id="dueAmt" name="DueAmt" value={ parseFloat(this.state.BillAmt) + parseFloat(this.state.TransportChrg)  - parseFloat(this.state.Advance) } onChange={this.handle_input_change}/>
                                        </div>                                                            
</div>



                                    <div className="card">
                                    <label for="delDt" style={{marginLeft:0,borderLeft:0}}>Delivery Date:<input type="date" className="form" id="delDt" name="DeliveryDate" value={this.state.DeliveryDate} onChange={this.handle_input_change}/></label> 
                                    <input type="text" className="form-control" placeholder="Delivery Address" id="deladdr" name="DeliveryPlace" value={this.state.DeliveryPlace} onChange={this.handle_input_change}  />
                                    </div>
        
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Deposite Date</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">UTR, IMPS, REF.NO</th>
                                            <th scope="col">Bank Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="col"><button className="btn btn-info" onClick={this.add_deposit} >+</button></th>
                                            <th scope="col"><input type="date" className="form-control" name="Deposit_Date" value={this.state.Deposit_Date} onChange={this.handle_input_change}  id="depdt1"/></th>
                                            <th scope="col"><input type="number" className="form-control" name="Deposit_Amount" value={this.state.Deposit_Amount} onChange={this.handle_input_change}   id="famt1"/></th>
                                            <th scope="col"><input type="text" className="form-control" name="Deposit_UTRNo" value={this.state.Deposit_UTRNo} onChange={this.handle_input_change}   id="ref1"/></th>
                                            <th scope="col"><input type="text" className="form-control" name="Deposit_Bank" value={this.state.Deposit_Bank} onChange={this.handle_input_change}   id="bank1"/></th>
                                        </tr>
                                        { this.state.DepositTable.map((onearr,idnexval)=>{
                                            return(<tr key={idnexval}>
                                            <td><button className="btn-sm btn-danger"onClick={(e)=>this.delete_deposit(e,idnexval)}>delete {idnexval+1}</button></td>
                                            <td>{onearr.Deposit_Date}</td>
                                            <td>{onearr.Deposit_Amount}</td>
                                            <td>{onearr.Deposit_UTRNo}</td>
                                            <td>{onearr.Deposit_Bank}</td>
                                            </tr>)
                                        })
                                        }

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
                                    <input type="radio"  value="SBI" name="Ac" onChange={this.handle_input_change}/> 
                                    <h4  className="text-info"><small>SBI BANK ACCOUNT DETAILS</small></h4>
                                    <h5><small className="text-muted">IFSC: SBIN0030509 <br/> A/c Number: 38279304216</small></h5>
                                </div>
                                <div className="card-body floatRight bg-dark" >
                                <input type="radio" value="HDFC" name="Ac"  onChange={this.handle_input_change}/> 
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
