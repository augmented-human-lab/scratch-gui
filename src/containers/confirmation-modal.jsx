import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import {
    closeConfirmationModal
} from '../reducers/modals';

import ConfirmationModalComponent from '../components/share-modal/confirmation-modal.jsx';

const PADLET_TARGET = (window?.configs?.['PADLET_TARGET'] || process.env.PADLET_TARGET);

class ConfirmationModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleCancel',
            'handleRedirect'
        ]);
    }

    handleCancel () {
        this.props.onClose();
    }

    handleRedirect () {
        window.open(PADLET_TARGET, '_blank');
    }

    render () {
        return (
            <ConfirmationModalComponent
                onCancel={this.handleCancel}
                onRedirect={this.handleRedirect}
            />
        );
    }
}

ConfirmationModal.propTypes = {
    onClose: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onClose: () => {
        dispatch(closeConfirmationModal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmationModal);
