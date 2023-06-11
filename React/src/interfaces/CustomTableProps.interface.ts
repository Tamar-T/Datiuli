import { HeadCell } from './HeadCell.interface';
export interface CustomTableProps {
    rows: any[];
    headCells: HeadCell[];
    editRow?: Function;
    //  permission:number;
    //  managerCells:HeadCell[];
}