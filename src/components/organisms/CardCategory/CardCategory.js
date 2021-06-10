import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Icon, Typography } from '@material-ui/core';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  title: {
      fontWeight: '700',
  },
  subTitle: {

  },
  boxIcon: {
    backgroundColor: theme.palette.alternate.dark,
    width: '70px',
    height: '70px',
    borderRadius: theme.spacing(2)
  }
}));

/**
 * Component to display the job card
 *
 * @param {Object} props
 */

const CardCategory = props => {
  const {
    title,
    icon,
    align,
    className,
    subtitle
  } = props;
  const classes = useStyles();
  return (
    <Box noShadow align={align}>
      <Box display="flex" justifyContent="center" alignItems="center" margin={2} className={classes.boxIcon}>
        {icon}
      </Box>
      <Box margin={2}>
        <Typography className={classes.title} variant="h6">{title}</Typography>
      </Box>
      <Box margin={2}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className="card-pricing-standard__subtitle"
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};


export default CardCategory;