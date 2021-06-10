import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import { CardBase } from 'components/organisms';

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

    return (
        <CardBase align={props.align}>
            <span style={{backgroundColor: '#ccc'}}>{props.icon}</span>
            <Typography variant="h6">{props.title}</Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className="card-pricing-standard__subtitle"
            >
              {props.subtitle}
            </Typography>
        </CardBase>
    );
};


export default CardCategory;