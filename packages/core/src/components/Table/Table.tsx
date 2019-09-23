import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import Body from './Body';
import Head from './Head';
import { addSizeToColumnConfig } from './helpers';
import { maxColumnSizeReducer } from './maxColumnSizeReducer';
import SelectableColumns from './SelectableColumns';
import { TableStyled } from './Table.styled';
import { ColumnConfig, Props, StaticProps } from './types';
import useRowSelector from './useRowSelector';

const Table: React.SFC<Props> & WithStyle & StaticProps = props => {
    const { data, onRowClick, onSort, isSelectable, selectedRows, onRowSelection } = props,
        checkboxColumnConfig: ColumnConfig = { title: 'ch', field: 'medly-table-checkbox', formatter: 'checkbox', hide: !isSelectable };

    const [ids, selectedIds, toggleId] = useRowSelector(data.map(({ id }) => id), selectedRows),
        [maxColumnSizes, dispatch] = useReducer(maxColumnSizeReducer, {}),
        [columns, setColumns] = useState(addSizeToColumnConfig([checkboxColumnConfig, ...props.columns]));

    const addColumnMaxSize = (field: string, value: number) => dispatch({ field, value, type: 'ADD_SIZE' });

    useEffect(() => {
        setColumns(addSizeToColumnConfig([checkboxColumnConfig, ...props.columns]));
    }, [props.columns]);

    useEffect(() => {
        ids.setValue(data.map(({ id }) => id));
    }, [data]);

    useEffect(() => {
        selectedIds.setValue(selectedRows);
    }, [selectedRows]);

    useEffect(() => {
        onRowSelection && onRowSelection(selectedIds.value);
    }, [selectedIds.value]);

    const head = useMemo(
            () => (
                <Head
                    {...{
                        onSort,
                        columns,
                        setColumns,
                        maxColumnSizes,
                        onSelectAllClick: toggleId,
                        isAllRowSelected: ids.isAllSelected
                    }}
                />
            ),
            [columns, ids]
        ),
        body = useMemo(
            () => (
                <Body
                    {...{
                        columns,
                        data,
                        onRowClick,
                        addColumnMaxSize,
                        selectedRows: selectedIds.value,
                        onRowSelection: toggleId
                    }}
                />
            ),
            [columns, data, selectedIds]
        );

    return (
        <TableStyled isRowClickable={onRowClick ? true : false}>
            {head}
            {body}
        </TableStyled>
    );
};

Table.defaultProps = {
    data: [],
    selectedRows: [],
    isSelectable: false
};

Table.displayName = 'Table';
Table.SelectableColumns = SelectableColumns;
Table.Style = TableStyled;

export default Table;
