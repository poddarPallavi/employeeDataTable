import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, MenuItem, TextField, Typography } from '@mui/material';
import { useSearchParams } from "react-router-dom";

export const FilterNew = ({ data, requestFilter }) => {
    const [searchParams, setSearchParams] = useSearchParams(); 
    const [searchLog, setSearchLog] = React.useState(
        {
            logID: '',
            actionTYPE: '',
            applicationTYPE: '',
            fromDate: '',
            toDate: '',
            applicationID: ''
        }
    );

    let applicationTypeArray = data?.map(function (element) {
        return `${element?.applicationType}`;
    })
    let actionTypeArray = data?.map(function (element) {
        return `${element?.actionType}`;
    })

    const uniqueApplicationList = [...new Set(applicationTypeArray)]
    const uniqueActionList = [...new Set(actionTypeArray)]

    var uniqueApplication = uniqueApplicationList.filter(elements => {
        return elements !== "null";
       });

       var uniqueAction = uniqueActionList.filter(elements => {
        return elements !== "null";
       });

    const filterHandler = (value, name) => {
        if (name === 'logID') {
            setSearchLog({ ...searchLog, logID: value })
        } else if (name === 'actionTYPE') {
            setSearchLog({ ...searchLog, actionTYPE: value })
        } else if (name === 'applicationTYPE') {
            setSearchLog({ ...searchLog, applicationTYPE: value })
        } else if (name === 'fromDate') {
            setSearchLog({ ...searchLog, fromDate: value })
        } else if (name === 'toDate') {
            setSearchLog({ ...searchLog, toDate: value })
        } else if (name === 'applicationID') {
            setSearchLog({ ...searchLog, applicationID: value })
        }
    }

    const submitHandler = () => {
        requestFilter(searchLog)
        const filterParams = Object.entries(searchLog).filter((item) => item[1] !== "");
        const obj = Object.fromEntries(filterParams);
        setSearchParams(obj);
    }

    return (
        <Box sx={{ flexGrow: 1, margin: 2 }}>
            <Grid container spacing={2} >
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={2} style={{}}>
                            <Typography align='left'>Employee Log Id</Typography>
                            <TextField name='logID' onChange={(e) => filterHandler(e.target.value, 'logID')} type='number' size='small' id="outlined-basic" variant="outlined" placeholder='e.g. 1234567890' />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography align='left'>Action Type</Typography>
                            <TextField name='actionTYPE' onChange={(e) => filterHandler(e.target.value, 'actionTYPE')} size='small' select sx={{ width: 180 }}>
                                {uniqueAction.map((option) =>
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                )}
                            </TextField>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography align='left'>Application Type</Typography>
                            <TextField name='applicationTYPE' onChange={(e) => filterHandler(e.target.value, 'applicationTYPE')} size='small' select sx={{ width: 180 }}>
                                {uniqueApplication.map((option) =>
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                )}
                            </TextField>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography align='left'>From Date</Typography>
                            <TextField name='fromDate' onChange={(e) => filterHandler(e.target.value, 'fromDate')} type='date' size='small' placeholder="Select date" variant="outlined" sx={{ width: 180 }} />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography align='left'>To Date</Typography>
                            <TextField name='toDate' onChange={(e) => filterHandler(e.target.value, 'toDate')} type='date' size='small' placeholder="Select date" variant="outlined" sx={{ width: 180 }} />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography align='left'>Application ID</Typography>
                            <TextField onChange={(e) => filterHandler(e.target.value, 'applicationID')} name='applicationID' size='small' id="outlined-basic" variant="outlined" placeholder='e.g. 21981/2022 ' />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={2} >
                    <Typography align='left'></Typography>
                    <Button onClick={submitHandler} style={{ width: '150px', marginTop: '25px' }} variant="contained" size="small">Search Logger</Button>
                </Grid>
            </Grid>
        </Box>
    );
}