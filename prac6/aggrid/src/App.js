

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-balham.css"
import useBook from "./api";
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
  const columns = [
    { headerName: "Title", field: "title" },
    { headerName: "Author", field: "author" },
    { headerName: "Edition Count", field: "editionCount" },
    { headerName: "Book ID", field: "id" }
  ];

 

  return (
    <div
      className="ag-theme-balham"
      style={{ height: "300px", width: "800px" }}
    >
      <AgGridReact
        columnDefs={columns}
        rowData={rowData}
        pagination={true}
        paginationPageSize={7}
      />
    </div>
  );
}

export default App;
