import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Box, Button, Typography } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { CardCategory, Section } from 'components/organisms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '12px'
  },
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  lastGrid: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '40%',
    },
  },
}));

const Description = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        titleVariant="h2"
        title={<span>Build accessible React<br /> apps <Typography color="primary" variant="inherit" component="span">with speed</Typography></span>}
        subtitle={<span>Build a beautiful, modern website with flexible, fully customizable, atomic <br />Material UI components.</span>}
        subtitleVariant="h6"
        align="center"
      />
      <Box display="flex" marginTop={2}>
        <Grid container className={classes.root} spacing={1}>
          <Grid item sm={4}>
            <CardCategory
              title="Built for developers"
              titleVariant="h6"
              iconProps={{justifyContent: "center", alignItems: "center"}}
              icon={<Icon fontIconClass="fas fa-layer-group" fontIconColor="rgb(63, 81, 181)" size="medium" />}
              subtitle="TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components."
              subtitleVariant="body1"
              subtitleColor="textSecondary"
              align="left">
            </CardCategory>
          </Grid>
          <Grid item sm={4}>
            <CardCategory
              title="Designed to be modern"
              titleVariant="h6"
              iconProps={{justifyContent: "center", alignItems: "center"}}
              icon={<Icon fontIconClass="fab fa-sketch" fontIconColor="rgb(63, 81, 181)" size="medium" />}
              subtitle="Designed with the latest design trends in mind. TheFront feels modern, minimal, and beautiful."
              subtitleVariant="body1"
              subtitleColor="textSecondary"
              align="left">
            </CardCategory>
          </Grid>
          <Grid item sm={4}>
            <CardCategory 
              title="Documentation for everything"
              titleVariant="h6"
              subtitleColor="textSecondary"
              iconProps={{justifyContent: "center", alignItems: "center"}}
              icon={<Icon fontIconClass="fas fa-code" fontIconColor="rgb(63, 81, 181)" size="medium" />}
              subtitle="We've written extensive documentation for components and tools, so you never have to reverse engineer anything."
              subtitleVariant="body1"
              subtitleColor="textSecondary"
              align="left">
            </CardCategory>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

Description.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Description;
