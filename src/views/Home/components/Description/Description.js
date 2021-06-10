import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { CardCategory, Section } from 'components/organisms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
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
        subtitle={<span>Build a beautiful, modern website with flexible, fully customizable, atomic <br/>Material UI components.</span>}
        subtitleVariant="h6"
        align="center"
        ctaGroup={[
          <CardCategory title="Built for developers" icon={ <Icon fontIconClass="fas fa-users" fontIconColor="pink" />} subtitle="TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components." align="left">
          </CardCategory>,
            <CardCategory title="Built for developers" icon={ <Icon fontIconClass="fas fa-users" fontIconColor="pink" />} subtitle="TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components." align="left">
          </CardCategory>,
            <CardCategory title="Built for developers" icon={ <Icon fontIconClass="fas fa-users" fontIconColor="pink" />} subtitle="TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components." align="left">
          </CardCategory>
        ]}
      />
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
