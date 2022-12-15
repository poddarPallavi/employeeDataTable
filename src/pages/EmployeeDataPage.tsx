import { Divider } from '@mui/material'
import React from 'react'
import { FilterNew } from '../components/filter/FilterNew.tsx';
import { Header } from '../components/Header.tsx';
import { DataGridTable } from '../components/DataGridTable.tsx';

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

    console.log('api data', data)

    const onSearch = (value) => {
        const newData = data.filter((item: any) => String(item.logId).includes(value))
        setFilterData(newData);
    }

    return (
        <div>
            <Header />
            <Divider style={{ marginTop: '10px' }} />
            <FilterNew data={data} onSearch={onSearch} />
            <DataGridTable data={filterData} />
        </div>
    )
}
