import { Divider } from '@mui/material'
import React from 'react'
import { FilterNew } from '../components/filter/FilterNew.js';
import { Header } from '../components/Header.js';
import { DataGridTable } from '../components/DataGridTable.js';

export const EmployeeDataPage = () => {
    const [data, setData] = React.useState([]);
    const [filterData, setFilterData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f')
            .then(response => response.json())
            .then(d => {
                setData(d?.result?.auditLog)
                setFilterData(d?.result?.auditLog)
            });
    }, [])

    const onSearch = (value) => {
        const newData = data.filter((item) => String(item.logId).includes(value))
        setFilterData(newData);
    }

    const requestFilter = (value) => {
        const newData = data.filter(item => {
            if (
                ((value.logID !== '') && String(item.logId).includes(value.logID)) ||
                ((value.applicationID !== '') && String(item.applicationId).includes(value.applicationID))
            )  
            return item
        })
        setFilterData(newData);
    }

    return (
        <div>
            <Header />
            <Divider style={{ marginTop: '10px' }} />
            <FilterNew data={data} onSearch={onSearch} requestFilter={requestFilter}  />
            <DataGridTable data={filterData} />
        </div>
    )
}
