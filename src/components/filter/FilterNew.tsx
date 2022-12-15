import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, MenuItem, TextField, Typography } from '@mui/material';

export const FilterNew = ({ data, onSearch, requestFilter }) => {
    const [filterData, setFilterData] = React.useState([]);

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

    const uniqueApplication = [...new Set(applicationTypeArray)]
    const uniqueAction = [...new Set(actionTypeArray)]

    const filterHandler = (value: any, name: string) => {
        console.log('event', value, name)
        setSearchLog({ ...searchLog, logId: value })
        onSearch(value);
    }

    console.log('filterset', filterData)
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
                                {uniqueAction.map((option: any) =>
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                )}
                            </TextField>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography align='left'>Application Type</Typography>
                            <TextField name='applicationTYPE' size='small' select sx={{ width: 180 }}>
                                {uniqueApplication.map((option: any) =>
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                )}
                            </TextField>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography align='left'>From Date</Typography>
                            <TextField name='fromDate' type='date' size='small' placeholder="Select date" variant="outlined" sx={{ width: 180 }} />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography align='left'>To Date</Typography>
                            <TextField name='toDate' type='date' size='small' placeholder="Select date" variant="outlined" sx={{ width: 180 }} />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography align='left'>Application ID</Typography>
                            <TextField onChange={(e) => filterHandler(e.target.value, 'applicationID')} name='applicationID' size='small' id="outlined-basic" variant="outlined" placeholder='e.g. 21981/2022 ' />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={2} >
                    <Typography align='left'></Typography>
                    <Button style={{ width: '150px', marginTop: '25px' }} variant="contained" size="small">Search Logger</Button>
                </Grid>
            </Grid>
        </Box>
    );
}