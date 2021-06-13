import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styled, { keyframes } from 'styled-components';


const Animation = styled.div.attrs(props => ({
    className: props.className
}))`
    top: -25%;
    left: -100%;    
    background: ${props => props.background};
    background-repeat: ${props => props.backgroundRepeat};
    background-size: ${props => props.backgroundSize};
    width: 600%;
    height: 600%;
    position: absolute;
    animation: ${props => keyframes`${props.keyFrames}`} 50s linear infinite
`;

const SectionAnimation = props => {
    const { className, ...rest } = props
    return (
        <Animation as={props.component} {...rest} />
    );
};

SectionAnimation.defaultProps = {
    component: 'div',
    background: '#ccc',
    backgroundRepeat: 'repeat',
    backgroundSize: '800px auto'
}

SectionAnimation.propTypes = {
    /** 
    * External classes
    */
    className: PropTypes.string,
    /** 
    * DOM element for ImageAnimation
    */
    component: PropTypes.string,
    /** 
    * Contains links url of image or any colors 
    */
    background: PropTypes.string,
    /** 
    * Background repeat or not
    */
    backgroundRepeat: PropTypes.string,
    /** 
    * Background size for background
    */
    backgroundSize: PropTypes.string
}
export default SectionAnimation;