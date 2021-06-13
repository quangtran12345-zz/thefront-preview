import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button, Typography, Hidden, createMuiTheme } from '@material-ui/core';
import { SectionAnimation, SectionHeader } from 'components/molecules';
import { TypedText } from 'components/molecules/';


const newTheme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1110,
            lg: 1280,
            xl: 1920,
        },
    },
})

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        fontWeight: 900,
        [newTheme.breakpoints.down('xs')]: {
            fontSize: '2.1rem',
        },
    },
    typed: {
        [newTheme.breakpoints.down('xs')]: {
            fontSize: '2rem'
        },
    },
    leftSection: {
        [newTheme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '24px 16px'
        },
        [newTheme.breakpoints.down('xs')]: {
            width: '100%',
            padding: '12px 8px',
            fontSize: '2rem'
        },
    },
    rightSection: {
        clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
        background: '#ccc',
        overflow: 'hidden',
        width: '50vw',
        height: '100%',
        position: 'relative'
    },
    heroAnimationWrapper: {
        display: "flex",
        justifyContent: "end",
        maxWidth: "1236px",
        margin: "0 auto"
    }
}))

const HeroAnimation = props => {
    const { className, ...rest } = props;
    const classes = useStyles();
    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid
                    item
                    xs={12}>
                    <Box className={classes.heroAnimationWrapper}>
                        <Box className={classes.leftSection} paddingY={12} paddingX={8}>
                            <SectionHeader
                                title={
                                    <Box>
                                        <Typography
                                            variant="h2"
                                            className={
                                                'section-header__title',
                                                classes.title
                                            }
                                            color="textPrimary"
                                        >
                                            A modern design system for your new
                                        </Typography>
                                        <TypedText
                                            variant="h2"
                                            className={
                                                'section-header__typed',
                                                classes.typed
                                            }
                                            color="secondary"
                                            typedProps={{
                                                strings: ['e-commerce', 'expo', 'startup', 'job listing', 'online course', 'coworking space', 'and many more...'],
                                                typeSpeed: 20,
                                                loop: true
                                            }} />
                                    </Box>
                                }
                                subtitle={<Box>TheFront will make your product look modern and professional while saving you precious time</Box>}
                                ctaGroup={[
                                    <Button variant="contained" color="primary" size="large">
                                        Start now
                                    </Button>,
                                    <Button variant="outlined" color="primary" size="large">
                                        Learn more
                                    </Button>,
                                ]}
                                align="left"
                                disableGutter
                                titleVariant="h3"
                            />
                        </Box>
                        <Hidden smDown>
                            <Box width="50%">
                                <Box className={classes.rightSection}>
                                    <SectionAnimation
                                        background="url('https://images.unsplash.com/photo-1530099486328-e021101a494a')"
                                        keyFrames="{0% { transform: rotate(-13deg) translateY(-25%); opacity: 1} 100% { transform: rotate(-13deg) translateY(-80%);} }" />
                                </Box>
                            </Box>
                        </Hidden>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

HeroAnimation.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default HeroAnimation;