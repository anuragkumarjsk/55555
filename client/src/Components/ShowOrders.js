import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import Crudnav from './crudnav'
import axios from 'axios'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const Showorders = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);  

    const [rowData, setRowData] = useState([]);

    useEffect(()=>{
       axios.get('http://localhost:4000/order/show')
         .then((resp) =>{
             console.log(resp)
             setRowData(resp.data)
            })
         .catch((err)=>{console.log(err)}) 
    })

    const onButtonClick = e => {
        const selectedNodes = gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
    
    return (
        <div className="ag-theme-alpine" style={ { "height": "100vh" , "width":"100vw"} }>
            <Crudnav/>
            {/* <button className="btn btn-primary" onClick={onButtonClick}>Get selected rows</button> */}
            <AgGridReact rowSelection="multiple"   enableCellTextSelection={true}
                rowData={rowData}>
                <AgGridColumn field="OrderNo" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
                <AgGridColumn field="Date" sortable={true}></AgGridColumn>
                <AgGridColumn field="Name"></AgGridColumn>
                <AgGridColumn field="AadharNo" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="Address"></AgGridColumn>
                <AgGridColumn field="Tehsil"></AgGridColumn>
                <AgGridColumn field="District" filter={true}></AgGridColumn>
                <AgGridColumn field="PinCode" filter={true}></AgGridColumn>
                <AgGridColumn field="State" filter={true}></AgGridColumn>
                <AgGridColumn field="Whatsapp" filter={true}></AgGridColumn>
                <AgGridColumn field="Contact"></AgGridColumn>
                <AgGridColumn field="CompanyName"></AgGridColumn>
                <AgGridColumn field="Order"></AgGridColumn>
                <AgGridColumn field="TotalAmt"></AgGridColumn>
                <AgGridColumn field="Advance"></AgGridColumn>
                <AgGridColumn field="DeliveryDate"></AgGridColumn>
                <AgGridColumn field="DeliveryPlace"></AgGridColumn>
                <AgGridColumn field="Deposit"></AgGridColumn>
                <AgGridColumn field="Ac"></AgGridColumn>
                <AgGridColumn field="AcHolder"  sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field="AcNo"></AgGridColumn>
                <AgGridColumn field="IFSC"></AgGridColumn>
                <AgGridColumn field="DealerName"></AgGridColumn>
                <AgGridColumn field="DealerContact"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};


export default Showorders