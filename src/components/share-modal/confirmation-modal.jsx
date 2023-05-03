import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../containers/modal.jsx';
import Box from '../box/box.jsx';
import styles from './share-modal.css';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';

import qr from './padlet_qr.png';

const ConfirmationModal = props => (
    <Modal
        className={styles.modalContent}
        contentLabel={'Project Submitted'}
        overlayClassName={styles.modalOverlay}
        id="projectSubmitted"
        onRequestClose={props.onCancel}
    >
        <div>
            <Box className={styles.body}>
                <div>
                    <p className={styles.challengeTitle}>
                        <FormattedMessage
                            defaultMessage="Thanks for Submitting!"
                            description="Label for confirmation"
                            id="gui.shareProject.projectSubmitted"
                        />
                    </p>
                </div>

                <div>
                    <p className={styles.joinFlowInputTitle}>
                        <FormattedMessage
                            defaultMessage="We have received your project and will e-mail you the outcome."
                            description="Label for confirmation"
                            id="gui.shareProject.confirmationDesc"
                        />

                        <br />

                        <img
                            className={styles.centredImage}
                            src={qr}
                        />

                        <br />

                        <FormattedMessage
                            defaultMessage="Scan the QR code or click the button below to check out
                            the projects submitted to the challenge!"
                            description="Label for share agree"
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
