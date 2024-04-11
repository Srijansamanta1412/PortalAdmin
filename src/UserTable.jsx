import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from './Picture_MCT.jpg';
import Avatar from '@mui/material/Avatar';

function createData(id, name, calories, fat, carbs, protein,action) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
    action
  };
}

const rows = [
  createData(1, 1, 'Snow', '1snow@gmail.com', 67,'Active',20),
  createData(2, 2, 'Jamie Lannister', '1snow@gmail.com', 10,'Passive',30),
  createData(3, 3, 'Lannister', '1snow@gmail.com', 20,'Pending'),
  createData(4, 4, 'Stark', '1snow@gmail.com', 25,'Active'),
  createData(5, 5, 'Targaryen','3snow@gmail.com', 38,'Passive'),
  createData(6, 6, 'Melisandre','3snow@gmail.com', 51,'Active'),
  createData(7, 7, 'Clifford', '3snow@gmail.com', 45,'Passive'),
  createData(8, 8, 'Frances','3snow@gmail.com', 28,'Active'),
  createData(9, 9, 'Snow', '3snow@gmail.com', 32,'Passive'),
  createData(10, 10, 'Roxie', '6snow@gmail.com', 65,'Pending'),
  createData(11, 11, 'Lannister', '6snow@gmail.com', 69,'Active'),
  createData(12, 12, 'Clifford', '6snow@gmail.com', 37,'Active'),
  createData(13, 13, 'Srijan', '6snow@gmail.com', 45,'Pending', 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'User',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Age',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Add New User
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="">
         {/*} <IconButton>
            <DeleteIcon />
          </IconButton>*/}
        </Tooltip>
      ) : (
        <Tooltip title="Add New User">
          {/*<IconButton>
            <FilterListIcon />
      </IconButton>*/}
      <Button variant="" sx={{color:'green',backgroundColor:'rgba(0, 128, 0, 0.151)'}} ><NavLink to="/users/new" style={{textDecoration: 'none', color:'green'}}>Add</NavLink></Button>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

/*-------------------------- My Functions -----------------------------------*/
function deleteRow(event,rowId){
    const parentNode = event.target.parentNode.parentNode.parentNode;
    if (parentNode) {
        parentNode.remove();
    } else {
        console.error("Parent node not found");
    }
    console.log("My row Id is",rowId);
    const index = rows.findIndex(row => row.name == rowId);
    console.log('My Index',index);
    rows.splice(index, 1);
}
function eachUserView(){
    
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };


  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2,mt:3,boxShadow:10,ml:5 }}>
      <EnhancedTableToolbar numSelected={selected.length} />

        <TableContainer>
          <Table
            sx={{ minWidth: '75vw' }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left"><div style={{display:'flex',justifyContent:'',alignItems:'center'}}> <Avatar alt="Remy Sharp" src={logo}  sx={{ width: 35, height: 35,mr:3 }} />{row.calories}</div></TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell> 
                    <TableCell align="center">{row.protein === 'Pending' ? <Button variant="" sx={{color:'goldenrod',backgroundColor:'rgba(189, 189, 3 , 0.183)',padding:1}}>Pending</Button> :
                                    row.protein === 'Active' ?  <Button variant="" sx={{color:'green',backgroundColor:'rgba(0, 128, 0, 0.151)',padding:1}}>Approved</Button> :
                                    row.protein === 'Passive' ? <Button variant="" sx={{color:'crimson',backgroundColor:'rgba(255, 0, 0, 0.05)',padding:1}}>Reject</Button> : 'Unknown'}</TableCell>
                     <TableCell align="center"><div><Button variant="" sx={{color:'violet',backgroundColor:'',border:'1px dotted rgba(0, 0, 139, 0.596)',mr:2,padding: 0,}} onClick={eachUserView}><NavLink to="/user/test" style={{textDecoration: 'none', display: 'block', height: '100%', width: '100%'}}>View</NavLink></Button><Button variant="" sx={{color:'crimson',backgroundColor:'',border:'1px dotted rgba(220, 20, 60, 0.6)',padding:0}} onClick={(event) => deleteRow(event, row.name)}>Delete</Button></div></TableCell>
                  </TableRow>
                  
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      
    </Box>
  );
}