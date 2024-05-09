

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-balham.css"
import useBook from "./api";
import {Button, Badge} from 'reactstrap'
import { useNavigate } from "react-router-dom";
// npm i ag-grid-react react-router-dom

// Render a table with placeholder data
// Add sorting
// Add filtering


// Swap the placeholder data with data from an external API ( use last week api.js)
// Add pagination

// Style with reactstrap components npm i bootstrap reactstrap

// Add routing


// const table = {
//   columns: [
//     { headerName: "Make", field: "make" },
//     { headerName: "Model", field: "model" },
//     { headerName: "Price", field: "price", sortable: true, filter: true},
//   ],
//   rowData: [
//     { make: "Toyota", model: "Camry", price: 28000 },
//     { make: "Ford", model: "Focus", price: 16700 },
//     { make: "Hyundai", model: "Kona", price: 23500 },
//   ]
// };



function App() {

  // const [rowData, setRowData] = useState([]);
  const  {loading, error,rowData} = useBook();
  const navigate=useNavigate();
  const columns = [
    { headerName: "Title", field: "title" },
    { headerName: "Author", field: "author" },
    { headerName: "Edition Count", field: "editionCount" },
    { headerName: "Book ID", field: "id" }
  ];

 

  return (
    <div className="container"> 
    <h1>Book Catalogue</h1>
    <p>
      <Badge color="success">{rowData.length}</Badge>
      Book published in 2000 in the Drama category 
    </p>

    
    <div
      className="ag-theme-balham"
      style={{ height: "300px", width: "800px" }}
    >
      <AgGridReact
        columnDefs={columns}
        rowData={rowData}
        onRowClicked={(row)=>navigate(`/book?title=${row.data.title}`)}
        pagination={true}
        paginationPageSize={7}
      />
    </div>
    <Button
    color="info"
    size="sm"
    className="mt-3"
    href='https://openlibrary.org/developers/api'
    target='_blank'
    >Go to Open Library API</Button>
    </div>
  );
}

export default App;
