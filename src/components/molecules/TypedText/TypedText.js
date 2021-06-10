import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Typed from 'react-typed';

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: '900',
    }
}));

/**
 * Component to display the section headers
 *
 * @param {Object} props
 */
const TypedText = props => {
    const {
        component,
        variant,
        color,
        title,
        typedProps,
        className,
        ...rest
    } = props;
    const classes = useStyles();
    return (
        <Typography className={clsx(
            classes.title,
            className
        )}
            component={component}
            variant={variant}
            color={color || 'primary'} {...rest}>
            {title}
            <Typed {...typedProps} />
        </Typography>
    )
}

export default TypedText;