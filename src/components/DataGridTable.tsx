import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const DataGridTable = ({ data }) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Log ID', width: 200 },
    { field: 'applicationType', headerName: 'Application Type', width: 200, align: 'center' },
    { field: 'applicationId', headerName: 'Application ID', width: 200, align: 'center' },
    { field: 'actionType', headerName: 'Action', width: 200 },
    { field: 'actionDetails', headerName: 'Action Details', sortable: false, width: 200, align: 'center' },
    { field: 'creationTimestamp', headerName: 'Date: Time', width: 200 }
  ];

  function createData(id, applicationType, applicationId, actionType, actionDetails, creationTimestamp) {
    return {
      id: id,
      applicationType: applicationType && applicationType ? applicationType : '-',
      applicationId: applicationId && applicationId ? applicationId : '-',
      actionType: actionType && actionType ? actionType : '-',
      actionDetails: actionDetails && actionDetails ? actionDetails : '-',
      creationTimestamp: creationTimestamp && creationTimestamp ? creationTimestamp : '-'
    };
  }

  const rows =
    data?.map((item: any) => {
      return createData(item?.logId, item.applicationType, item.applicationId, item.actionType, item.actionDetails, item.creationTimestamp)
    })

  return (
    <div style={{ height: '680px', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
