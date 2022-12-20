import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

export const Header = () => {
    return (
        <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link aria-label='home' underline="hover" key="1" color="primary" href="/"> Home</Link>,
            <Link aria-label='administration' underline="hover" key="1" color="primary" href="/">Administration</Link>,
            <Link aria-label='search' color='secondary' underline="hover">Logger Search</Link>
        </Breadcrumbs>
    )
}
