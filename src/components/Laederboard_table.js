import React from 'react'
import './datatable.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Laederboard_table = ({rows}) => {
    console.log(rows);
    let ct=1;
  return (
    <div className='headtable'>

       <TableContainer className='conttable' component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center' className='cell1'>Rank</StyledTableCell>
            <StyledTableCell align="center" className='cell'>Team Name</StyledTableCell>
            <StyledTableCell align="center" className='cell'>Category</StyledTableCell>
            <StyledTableCell align="center" className='cell'>Total Profit</StyledTableCell>
            {/* <StyledTableCell align='right'>Entered By</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" align='center' className='cell1'>
                {ct++}
              </StyledTableCell >
              <StyledTableCell align="center" className='cell'>{row.TeamName}</StyledTableCell>
              <StyledTableCell align="center" className='cell'>{row.Category}</StyledTableCell>
              <StyledTableCell align="center" className='cell'>{row.TotalProfit}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.name}</StyledTableCell> */}
            </StyledTableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Laederboard_table