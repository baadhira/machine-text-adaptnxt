import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Pending = () => {
  function createData(name, calories, orederno, orderdate, city,customername,ordevalue) {
    return { name, calories, orederno, orderdate, city,customername ,ordevalue};
  }

  const rows = [
    createData('Frozen yoghurt', 159, '#TKN234834390', '2022-05-04', 'Lucknow','Abhishet Dutt','0.0'),
    createData('Ice cream sandwich', 237,  '#TKN234834390', '2022-05-04', 'Lucknow','Abhishet Dutt','0.0'),
    createData('Eclair', 262,  '#TKN234834390', '2022-05-04', 'Lucknow','Abhishet Dutt','0.0'),
   
  ];
  return (
    <div className="container">
        <div className="row" style={{backgroundColor: 'white',padding:"20px 0px 5px 0px"}}>
            <div className="col-9 ">
                <div className="btn-tabs" style={{display: 'flex', flexDirection: 'row'}}>
                    <button className="btn btn-outline-secondary" style={{marginLeft:"10px",color:"black"}}><i class="fa-solid fa-upload"></i>Import Orders</button>
                    <button disabled className="btn btn-outline-secondary"style={{marginLeft:"10px"}}><i class="fa-solid fa-reply"></i>Accept</button>
                    <button disabled className="btn btn-outline-secondary"style={{marginLeft:"10px"}}><i class="fa-solid fa-upload"></i> Print</button>


                   
                </div>
            </div>
            <div className="col-3 ml-10 ">
            <button disabled style={{fontSize: '15px',backgroundColor: 'dodgerblue',border: 'none',padding:"5px",marginLeft:"10px",borderRadius:"5px",color: 'white'}}><i class="fa-solid fa-arrow-rotate-right"></i> Refresh</button>

            </div>
            <div className="col-12">
            <div style={{ height: 300,backgroundColor:"white",marginTop:"40px",rows:"red",fontSize:"6px"}}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{width: '50px'}}>
              <label class="container">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label></TableCell>
            <TableCell align="right" style={{fontWeight: 'bold'}}>Channel</TableCell>
            <TableCell align="right"style={{fontWeight: 'bold',width: '30px'}}>Order No</TableCell>
            <TableCell align="right"style={{fontWeight: 'bold',width: '150px'}}>Order Date</TableCell>
            <TableCell align="right"style={{fontWeight: 'bold'}}>City</TableCell>
            <TableCell align="right"style={{fontWeight: 'bold',width: '250px'}}>Customer Name</TableCell>
            <TableCell align="right"style={{fontWeight: 'bold'}}>Order Value</TableCell>
            <TableCell align="right"style={{fontWeight: 'bold'}}>Status</TableCell>
            <TableCell align="right"style={{fontWeight: 'bold'}}>Operation</TableCell>




          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <label class="container">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
              </TableCell>
              <TableCell align="right" style={{width: '30px'}}><img style={{width:"20px",height:"20px"}} src={require("../assets/images/shopifylogo.png")} alt="shopify-logo"/></TableCell>
              <TableCell align="right"style={{width: '30px',color:"dodgerblue"}}>{row.orederno}</TableCell>
              <TableCell align="right"style={{width: '100px'}}>{row.orderdate}</TableCell>

              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right"style={{width: '250px'}}>{row.customername}</TableCell>
              <TableCell align="right">{row.ordevalue}</TableCell>
              <TableCell align="right"><button  style={{color:"green"}}className="btn btn-outline-success">Pending</button></TableCell>
              <TableCell align="right"><div class="dropdown">
  <button style={{backgroundColor:"white",color:"black"}} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Actions
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
                
            </div>
            <div className="col-8">

            </div>
            <div className="col-4">
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
            </div>
        </div>
    </div>
  )
}










