import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

export const Header = () => {
    return (
        <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" key="1" color="primary" href="/"> Home</Link>,
            <Link underline="hover" key="1" color="primary" href="/">Administration</Link>,
            <Link color='secondary' underline="hover">Logger Search</Link>
        </Breadcrumbs>
    )
}
