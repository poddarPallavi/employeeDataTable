import { Divider } from '@mui/material'
import React from 'react'
import { FilterNew } from '../components/filter/FilterNew.js';
import { Header } from '../components/Header.js';
import { DataGridTable } from '../components/DataGridTable.js';

export const EmployeeDataPage = () => {
    const [data, setData] = React.useState([]);
    const [filterData, setFilterData] = React.useState([]);

    React.useEffect(() => {
        fetch(' https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f' )
            .then(response => response.json())
            .then(d => {
                setData(d?.result?.auditLog)
                setFilterData(d?.result?.auditLog)
            });
    }, [])

    const requestFilter = (value) => {
        const filterData = Object.entries(value).filter((item, index) => item[1] !== "");

        const newData = data.filter(item => {
            var count = 0;
            filterData.map(v => {
                if ((v[0] === "logID") && String(item.logId).includes(v[1])) { count++ } else
                    if ((v[0] === "actionTYPE") && v[1] === item.actionType) { count++ } else
                        if ((v[0] === "applicationTYPE") && v[1] === item.applicationType) { count++ } else
                            if ((v[0] === "applicationID") && String(item.applicationId).includes(v[1])) { count++ } else
                                if ((v[0] === "fromDate") && new Date(v[1]).getTime() <= new Date(item.creationTimestamp).getTime()) { count++ } else
                                    if ((v[0] === "toDate") && new Date(v[1]) >= new Date(item.creationTimestamp).getTime()) { count++ }
            })
            if(filterData.length === count) return item
        })
        setFilterData(newData);
    }

    return (
        <div style={{ margin: 5 }}>
            <Header />
            <Divider style={{ marginTop: '10px' }} />
            <FilterNew data={data} requestFilter={requestFilter} />
            <DataGridTable data={filterData} />
        </div>
    )
}
