import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Box, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { TypedText } from 'components/molecules/';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontWeight: 900
  },
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={5}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
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
                <TypedText variant="h2"
                  color="secondary"
                  typedProps={{
                    strings: ['e-commerce', 'expo', 'startup', 'job listing', 'online course', 'coworking space', 'and many more...'],
                    typeSpeed: 20,
                    loop: true
                  }} />
              </Box>
            }
            subtitle="TheFront will make your product look modern and professional while saving you precious time."
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
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="/images/illustrations/dashboard-screenshot.jpg"
            alt="TheFront Company"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
