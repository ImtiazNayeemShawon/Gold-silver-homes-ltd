import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Project name ",'silver afia garden'),
  createData("Location",'doctor para ,badur tola ,sadar,cumilla'),
  createData("Appartment size",'A=1405sft,B=1240sft,c=1026sft,d=1000sft'),
  createData("Sort summary",'3 bed,3 baths,living,family living,dining,kitchen & 3 verndas'),
  createData("Project type",'residential'),
  createData("Storied/Building height",'Gf to 8th'),
  createData("Commercial",' '),
  createData("Number of apartment ",'32'),
  createData("number of units",'4'),
  createData("Land area",'12 decimal'),
  createData("facing",'west'),
  createData("lift",'1'),
  createData("Hand over year",'december 2012'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Description</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
