import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const button = ({ label, onClick }) => (
    <button onClick={e => onClick(e)}>{label}</button>
);

button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.isRequired
}

button.defaultProps = {
    label: '',
    onClick: () => {
        console.log('CLICK ON BUTTON')
    }
}

export default button;
