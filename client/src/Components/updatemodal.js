import React from 'react'

export default class updatemodal extends React.Component{

    // handle_input_change=(event)=>{

    //     this.setState({ [event.target.name] : event.target.value  })

    // }
    render(){
    return (
        <>
        
    <div>
           <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#update_form">
           Resubmit form
             </button>

            <div class="modal" id="update_form">
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
        <>
        <span>
            {this.props.val}
        </span>
        {/* <div className="form-group">
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
                                     </div> */}
        </>
       </div>
       <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>    
         </div>
    </>
    )
    }
}
