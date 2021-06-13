import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Grid, Icon, Typography } from '@material-ui/core';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    border: 'none',
    boxShadow: "none"
  },
  title: {
    fontWeight: '700',
  },
  subTitle: {

  },
  boxIcon: {
    backgroundColor: theme.palette.alternate.dark,
    display: 'flex',
    width: 70,
    height: 70,
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
    titleVariant,
    titleColor,
    icon,
    iconProps,
    align,
    className,
    subtitle,
    subtitleColor,
    subtitleVariant,
    subtitleProps
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} align={align}>
      <CardContent>
        <Grid container direction="column"
          justify="space-between"
          alignItems="flex-start"
          spacing={2}>
          <Grid item>
            <Box className={classes.boxIcon} {...iconProps} >
              {icon}
            </Box>
          </Grid>
          <Grid item>
          <Typography className={classes.title} variant={titleVariant} color={titleColor || "textPrimary"}>{title}</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant={subtitleVariant}
              color={subtitleColor || "primary"}
              className="card-category__subtitle"
              {...subtitleProps}
            >
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};


export default CardCategory;