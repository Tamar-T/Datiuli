
import React, { useState, useEffect } from 'react';
//import clsx from 'clsx'
import { HeadCell } from '../../interfaces/HeadCell.interface';
import { createStyles,/*lighten,*/ makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Save from '@material-ui/icons/Save';
import { CustomTableProps } from '../../interfaces/CustomTableProps.interface';
import { TextField, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headCells: HeadCell[];
    rows: any[];
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { classes, order, orderBy, rowCount, onRequestSort } = props;
    const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };
    const { headCells, rows } = props;
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='center'
                        padding={'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 1000,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    }),
);

export default function CustomTable(props: CustomTableProps) {
    const classes = useStyles();
    const permission = localStorage.getItem('permission');
    const [displayRows, setDisplayRows] = useState([...props.rows]);
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<string>('address');
    const [editIndex, setEditIndex] = useState(-1);
    // const [selected, setSelected] = React.useState<string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    //שינוי גודל הדף 
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    // 
    useEffect(() => {
        setDisplayRows([...props.rows])
    }, [props.rows]);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    // אפשור למנהל לשנות תוכן
    const textChanged = (val: string, rowIdx: any, cellIdx: string) => {
        let r = [...displayRows];
        let index = r.findIndex(row => row.id === rowIdx)
        r[index][cellIdx] = val;
        setDisplayRows(r)
    }
    // שמירת שינויי המנהל
    const saveChanges = (id: any) => {
        let r = [...displayRows];
        let index = r.findIndex(row => row.id === id)
        props.editRow && props.editRow(r[index])
    }
    //פתיחת דיאלוג בעת מחיקה 
    const handleClickOpen = () => {
        setOpen(true);
    };
    // סגירת דיאלוג
    const handleClose = () => {
        setOpen(false);
    };


    const emptyRows = rowsPerPage - Math.min(rowsPerPage, displayRows.length - page * rowsPerPage);

    return (
        <div className={classes.root} id="Table">

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Are you sure you want to delete?"}</DialogTitle>
                <DialogContent>
                    {/* { <DialogContentText>
                        Are you sure you want to delete?
            </DialogContentText> } */}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        No
            </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Yes
            </Button>
                </DialogActions>
            </Dialog>


            <Paper className={classes.paper} id="table">
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size='medium'
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={displayRows.length}
                            rows={displayRows}
                            headCells={props.headCells}
                        />
                        <TableBody>
                            {stableSort(displayRows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            key={row.name}
                                            onBlur={() => setEditIndex(-1)}

                                        >
                                            {
                                                props.headCells.map((h, idx) => {
                                                    return <TableCell key={idx} component="th" id={labelId} scope="row" >
                                                        {editIndex !== -1 && index === editIndex ?
                                                            <TextField value={row[h.id]} onChange={(e) => textChanged(e.target.value, row.id, h.id)} /> :
                                                            row[h.id]}
                                                    </TableCell>
                                                })
                                            }
                                            {
                                                permission === '1' && <TableCell>
                                                    <Edit onClick={() => setEditIndex(index)} />
                                                </TableCell>
                                            }
                                            {
                                                permission === '1' && <TableCell>
                                                    <Delete onClick={handleClickOpen} />
                                                </TableCell>
                                            }

                                            {
                                                permission === '1' && <TableCell>
                                                    < Save onClick={() => saveChanges(row.id)} />
                                                </TableCell>
                                            }
                                            {/* {  props.permission==1? props.managerCells.map((h, idx) => {
                                                    return <TableCell key={idx} component="th" id={labelId} scope="row" >
                                                        {row[h.id]}
                                                    </TableCell>
                                                }):null

                                            } */}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (100 * emptyRows) }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={displayRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>


            {/* <Button id="b" variant="contained" color="secondary" onClick={saveChanges}>
                Save
            </Button> */}
        </div >
    );
}

