import React,{useState} from 'react'
import axios from 'axios'

export default function Crudnav_Updatebtn(props) {

    const [upform,upformset]=useState({
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
    })



    function  handle_input_change(event){
        const {name , value} = event.target
        upformset( prevState => ({
            ...prevState,
            [name] : value
        }))
    }



    function show_record(){
        // alert('inside show'+props.Active)
            switch(props.Active)
                {
                case 1:axios.get(`http://localhost:4000/order/show/1/${props.contact}`).then((d)=>{console.log(d.data);localStorage.setItem('updateItem',JSON.stringify(d.data));upformset(d.data) }).catch((err)=>{console.log(err)})
                        break
                case 2:axios.get(`http://localhost:4000/order/show/2/${props.order}`).then((d)=>{console.log(d.data);localStorage.setItem('updateItem',JSON.stringify(d.data));upformset(d.data) }).catch((err)=>{console.log(err)})
                        break                
                case 3:axios.get(`http://localhost:4000/order/show/3/${props.adhaar}`).then((d)=>{console.log(d.data);localStorage.setItem('updateItem',JSON.stringify(d.data));upformset(d.data) }).catch((err)=>{console.log(err)})
                        break
                default: alert('uable to find the case for show record')
                    break
                    }
    }

    function update_record(e){
        // alert('inside update'+props.adhaar+JSON.stringify(upform))
        e.preventDefault();
        switch(props.Active){
            case 1:axios.put(`http://localhost:4000/order/update/1/${props.contact}`,upform).then((d)=>{console.log('updated record '+d)}).catch((err)=>{console.log(err)})
                   break
           case 2:axios.put(`http://localhost:4000/order/update/2/${props.order}`,upform).then((d)=>{console.log('updated record '+d)}).catch((err)=>{console.log(err)})
                   break                
           case 3:axios.put(`http://localhost:4000/order/update/3/${props.adhaar}`,upform).then((d)=>{console.log('updated record '+d)}).catch((err)=>{console.log(err)})
                   break
           default: alert('update case not available')        
                   }
    }

    return (<>
        <button class="btn btn-outline-success my-2 mr-sm-0" type="submit" onClick={show_record} data-toggle="modal" data-target="#update_form"><b>Update</b></button>
       
        <div class="modal" id="update_form">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" >Close</button>
                </div>
                <div class="modal-body"> 
                     <form>
                    <label htmlFor="dat_"> Date:</label>
                    <input type="date" className="form-control" id="dat_"  name="Date" value={upform.Date} onChange={handle_input_change} />
                    <label htmlFor="uname"> Name:</label>
                    <input type="text" className="form-control" placeholder="Name" id="uname" name="Name"  value={upform.Name} onChange={handle_input_change}/>
                    <label htmlFor="adhno">Adhaar No:</label>
                    <input type="text" className="form-control" placeholder="AadharNo" id="adhno" name="AadharNo"  value={upform.AadharNo} onChange={handle_input_change}/>
                    <label htmlFor="addr">Address:</label>
                    <input type="text" className="form-control" placeholder="Address" id="addr" name="Address" value={upform.Address}  onChange={handle_input_change}/>
                    <label htmlFor="tehsil">Tehsil:</label>
                    <input type="text" className="form-control" placeholder="Tehsil" id="tehsil" name="Tehsil" value={upform.Tehsil}  onChange={handle_input_change}/>
                    <label htmlFor="dist">District:</label>
                    <input type="text" className="form-control" placeholder="District" id="dist" name="District" value={upform.District}  onChange={handle_input_change}/>
                    <label htmlFor="pincode">Pincode:</label>
                    <input type="number" className="form-control" placeholder="Enter Pincode" id="pincode" name="PinCode"value={upform.PinCode}  onChange={handle_input_change}/>
                    <label htmlFor="state">State:</label>
                    <input type="text" className="form-control" placeholder="State" id="state" name="State" value={upform.State}  onChange={handle_input_change}/>
                    <label htmlFor="watsApp">Watsapp:</label>
                    <input type="tel" className="form-control"  id="whatsApp" pattern="[0-9]{10}" placeholder="WhatsApp Number" name="Watsapp" value={upform.Whatsapp}  onChange={handle_input_change}/>                            
                    <label htmlFor="contNum">Contact No:</label>
                    <input type="tel" className="form-control"  id="contNum" pattern="[0-9]{10}" placeholder="Contact Number" name="Contact" value={upform.Contact}  onChange={handle_input_change}/>
                    <label htmlFor="compNam">Company Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Company Name" id="compNam" name="CompanyName" value={upform.CompanyName}  onChange={handle_input_change}/>      

                
                    <label for="acc_nam">Account Name:</label>
        <select className="form-control" name="Ac" id="acc_nam">
                    <option value="HDFC">HDFC</option>
                    <option value="SBI">SBI</option>
                    </select><br/>   
                    <label htmlFor="accName">Account Holder Name:</label>
                    <input type="text" className="form-control" placeholder="A/c Holder Name" id="accName" name="AcHolder" value={upform.AcHolder}   onChange={handle_input_change}/>
                    <label htmlFor="accNo">Account Number:</label>
                    <input type="number" className="form-control" placeholder="A/c Number" id="accNo" name="AcNo" value={upform.AcNo}  onChange={handle_input_change}/>
                    <label htmlFor="ifsc">IFSC:</label>
                    <input type="text" className="form-control" placeholder="IFSC " id="ifsc" name="IFSC" value={upform.IFSC}  onChange={handle_input_change}/>
                    <label htmlFor="dealer">Dealer:</label>
                    <input type="text" className="form-control" placeholder="Dealer Name" id="dealer" name="DealerName" value={upform.DealerName}  onChange={handle_input_change}/>
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="tel" className="form-control"  id="mobile" pattern="[0-9]{10}" placeholder="Mobile Number" name="DealerContact" value={upform.DealerContact} onChange={handle_input_change}/>

                    <button className="btn btn-danger" onClick={update_record}>Re-submit</button>   
                    </form>      
                    <hr/>


                    {/* onClick={()=>{alert(JSON.stringify(upform))}} */}
                    {/* {localStorage.getItem("updateItem")}       */}
                </div>
                </div>
            </div>
            </div>    
         </>
        )
}
