import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../containers/modal.jsx';
import Box from '../box/box.jsx';
import styles from './share-modal.css';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';

const ConfirmationModal = props => (
    <Modal
        className={styles.modalContent}
        contentLabel={'Project Shared'}
        overlayClassName={styles.modalOverlay}
        id="projectSubmitted"
        onRequestClose={props.onCancel}
    >
        <div>
            <Box className={styles.body}>
                <div>
                    <p className={styles.sharedTitle}>
                        <FormattedMessage
                            defaultMessage="Thanks for Sharing!"
                            description="Label for confirmation"
                            id="gui.shareProject.projectSubmitted"
                        />
                    </p>
                </div>

                <div>
                    <p className={styles.sharedDescription}>
                        <FormattedMessage
                            defaultMessage="Visit our website to see your project and
                            check out what everyone else is making."
                            description="Label for shared projects"
                            id="gui.shareProject.confirmation1"
                        />
                    </p>
                </div>
            </Box>
            <div>
                <button
                    className={styles.modalFlushBottomButton}
                    type="submit"
                    onClick={props.onRedirect}
                >
                    <FormattedMessage
                        defaultMessage="Take Me There!"
                        description="Label for close modal"
                        id="gui.shareProject.confirmationClose"
                    />
                </button>
            </div>
        </div>

    </Modal>
);

ConfirmationModal.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onRedirect: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmationModal);
