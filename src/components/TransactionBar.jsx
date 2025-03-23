import React from 'react';
import Grid from '@mui/material/Grid2';
import { DataGrid } from '@mui/x-data-grid';
import { mockTransactions } from '../data/mockData';

const columns = [{
    field: "user"
}, {
    field: "date"
}, {
    field: "cost"
}];

const TransactionBar = () => {
    const items = mockTransactions;

    function getRowId(row) {
        return row.txId
    };

  return (
    <Grid size={5} className="smallGrid">
    <DataGrid
    // hideFooter
    // loading={loading}
    getRowId={getRowId}
    rows={items}
    columns={columns}
    initialState={{
      ...items.initialState,
    }}
    />
    </Grid>
  );
};

export default TransactionBar;