import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const DataGridTable = ({ data }) => {
  const columns = [
    { field: 'id', headerName: 'Log ID', width: 200, sortingOrder: ['asc', 'desc'] },
    { field: 'applicationType', headerName: 'Application Type', width: 200, align: 'center', sortingOrder: ['asc', 'desc'] },
    { field: 'applicationId', headerName: 'Application ID', width: 200, align: 'center', sortingOrder: ['asc', 'desc'] },
    { field: 'actionType', headerName: 'Action', width: 200 , sortingOrder: ['asc', 'desc']},
    { field: 'actionDetails', headerName: 'Action Details', sortable: false, width: 200, align: 'center' },
    { field: 'creationTimestamp', headerName: 'Date: Time', width: 200 , sortingOrder: ['asc', 'desc']}
  ];

  function createData(id, applicationType, applicationId, actionType, actionDetails, creationTimestamp) {
    return {
      id: id,
      applicationType: applicationType && applicationType ? applicationType : '',
      applicationId: applicationId && applicationId ? applicationId : '',
      actionType: actionType && actionType ? actionType : '-',
      actionDetails: actionDetails && actionDetails ? actionDetails : '-',
      creationTimestamp: creationTimestamp && creationTimestamp ? creationTimestamp : '-'
    };
  }

  const rows =
    data?.map((item) => {
      return createData(item?.logId, item.applicationType, item.applicationId, item.actionType, item.actionDetails, item.creationTimestamp)
    })

  return (
    <div style={{ height: '680px', width: '100%' }}>
      <DataGrid
        rows={rows}
        direction='asc'
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
