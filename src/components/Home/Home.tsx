
import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';
import orangebus from '../../assets/images/orange-bus copy.jpg';




interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `url(${orangebus})`,
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'GoldenRod',
    },
    button_text: {
        color: 'Teal',
        textDecoration: 'none',
    },
})

export const Home = ( props: Props ) => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1>
                <Button>
                    <Link to='/carinventory' className={classes.button_text}>Take me to my Car Inventory!</Link>
                </Button>
            </div>
            </div>
        </>
    )
}