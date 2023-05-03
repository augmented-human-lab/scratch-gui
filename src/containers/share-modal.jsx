import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import ShareModalComponent from '../components/share-modal/share-modal.jsx';

import {
    closeShareModal, openLoadingShare
} from '../reducers/modals';

class ShareModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleCancel',
            'handleSubmit',
            'handleChangeTitle',
            'handleChangeAuthor',
            'handleChangeEmail',
            'handleChangeMobile'
        ]);

        this.state = {
            projectName: '',
            authorName: '',
            email: '',
            mobile: '',
            authorNameRequired: false,
            projectNameRequired: false,
            isSubmitDisabled: true
        };
    }

    handleCancel () {
        this.props.onClose();
    }

    handleChangeTitle (event) {
        this.setState({projectName: event.target.value}, () => {
            this.handleNonEmptyFields();
        });
    }

    handleChangeAuthor (event) {
        this.setState({authorName: event.target.value}, () => {
            this.handleNonEmptyFields();
        });
    }

    handleChangeEmail (event) {
        this.setState({email: event.target.value}, () => {
            this.handleNonEmptyFields();
        });
    }

    handleChangeMobile (event) {
        this.setState({mobile: event.target.value}, () => {
            this.handleNonEmptyFields();
        });
    }

    handleSubmit (uploadProjectCallback) {
        if (this.state.isSubmitDisabled) return;

        this.props.onShareLoading();
        uploadProjectCallback(this.state.projectName.trim(), JSON.stringify(this.state));
    }

    handleNonEmptyFields () {
        this.setState({isSubmitDisabled: this.state.projectName.trim() === '' || this.state.authorName.trim() === '' ||
                this.state.email.trim() === '' || this.state.mobile.trim() === ''});
    }

    render () {
        return (
            <ShareModalComponent
                projectName={this.state.projectName}
                authorName={this.state.authorName}
                email={this.state.email}
                mobile={this.state.mobile}
                projectNameRequired={this.state.projectNameRequired}
                authorNameRequired={this.state.authorNameRequired}
                isSubmitDisabled={this.state.isSubmitDisabled}
                onCancel={this.handleCancel}
                onSubmit={this.handleSubmit}
                onChangeTitle={this.handleChangeTitle}
                onChangeAuthor={this.handleChangeAuthor}
                onChangeEmail={this.handleChangeEmail}
                onChangeMobile={this.handleChangeMobile}
            />
        );
    }
}

ShareModal.propTypes = {
    onClose: PropTypes.func,
    onShareLoading: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onClose: () => {
        dispatch(closeShareModal());
    },
    onShareLoading: () => {
        dispatch(closeShareModal());
        dispatch(openLoadingShare());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareModal);
