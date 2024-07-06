import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Skeleton } from '@mui/material';

const CustomDashboard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Day School
                </Typography>
                <Grid container spacing={2}>
                    {Array.from(Array(4).keys()).map((index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Skeleton variant="rectangular" height={200} />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Waiting Approval
                </Typography>
                <Grid container spacing={2}>
                    {Array.from(Array(4).keys()).map((index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Skeleton variant="rectangular" height={200} />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CustomDashboard;