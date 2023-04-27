import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../containers/modal.jsx';
import Box from '../box/box.jsx';
import styles from './share-modal.css';
import {FormattedMessage} from 'react-intl';
import SB3Downloader from '../../containers/sb3-downloader.jsx';
import {connect} from 'react-redux';

const onClick = (onSubmit, uploadProjectCallback) => () => {
    onSubmit(uploadProjectCallback);
};

const ShareModal = props => (
    <Modal
        className={styles.modalContent}
        contentLabel={'Submit to Challenge'}
        overlayClassName={styles.modalOverlay}
        id="shareProject"
        onRequestClose={props.onCancel}
    >
        <div>
            <Box className={styles.body}>
                <div>
                    <div className={styles.challengeTitle}>
                        <FormattedMessage
                            defaultMessage="Get Coding and be in to Win!"
                            id="gui.shareProject.challenge"
                        />
                    </div>
                    <br />
                    <div className={styles.challengeDescription}>
                        <a
                            className={styles.challengeDescription}
                            href="https://challenge.ahlab.org"
                            target="_blank"
                            referrerPolicy="no-referrer"
                            rel="noreferrer"
                        >
                            <FormattedMessage
                                defaultMessage="Check out the Challenge"
                                id="gui.shareProject.readMore"
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.multiItemRow}>
                    <input
                        name="projectName"
                        className={styles.fieldShort}
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        id="projectName"
                        placeholder="Project Name"
                        spellCheck="false"
                        onChange={props.onChangeTitle}
                        value={props.projectName}
                    />
                </div>

                <div className={styles.multiItemRow}>
                    <input
                        name="authorName"
                        className={styles.fieldShort}
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        id="authorName"
                        placeholder="Author Name"
                        spellCheck="false"
                        onChange={props.onChangeAuthor}
                        value={props.authorName}
                    />
                </div>

                <div className={styles.multiItemRow}>
                    <input
                        name="email"
                        className={styles.fieldShort}
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        id="email"
                        placeholder="Parent's Email"
                        spellCheck="false"
                        onChange={props.onChangeEmail}
                        value={props.email}
                    />
                    <input
                        name="mobile"
                        className={styles.fieldShort}
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        id="mobile"
                        placeholder="Parent's Mobile"
                        spellCheck="false"
                        onChange={props.onChangeMobile}
                        value={props.mobile}
                    />
                </div>

            </Box>
            <div>
                <SB3Downloader>{(_, downloadProjectCallback, uploadProjectCallback) => (
                    <button
                        className={styles.modalFlushBottomButton}
                        disabled={props.isSubmitDisabled}
                        id="projectUpload"
                        type="submit"
                        onClick={onClick(props.onSubmit, uploadProjectCallback)}
                    >
                        <FormattedMessage
                            defaultMessage="Submit!"
                            description="Label for share project"
                            id="gui.shareProject.shareProjectFile"
                        />
                    </button>
                )}</SB3Downloader>
            </div>
        </div>

    </Modal>
);

ShareModal.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChangeTitle: PropTypes.func.isRequired,
    onChangeAuthor: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangeMobile: PropTypes.func.isRequired,
    projectName: PropTypes.string,
    authorName: PropTypes.string,
    email: PropTypes.string,
    mobile: PropTypes.string,
    isSubmitDisabled: PropTypes.bool
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareModal);
