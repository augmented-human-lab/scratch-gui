import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';

import styles from './share-button.css';

import {connect} from 'react-redux';

import {
    openShareModal
} from '../../reducers/modals.js';

const ShareButton = ({
    isShared,
    className,
    onOpenShareProject
}) => (
    <Button
        className={classNames(
            className,
            styles.shareButton,
            {[styles.shareButtonIsShared]: isShared}
        )}
        onClick={onOpenShareProject}
    >
        {isShared ? (
            <FormattedMessage
                defaultMessage="Shared"
                description="Label for shared project"
                id="gui.menuBar.isShared"
            />
        ) : (
            <FormattedMessage
                defaultMessage="Share"
                description="Label for project share button"
                id="gui.menuBar.share"
            />
        )}
    </Button>
);

ShareButton.propTypes = {
    className: PropTypes.string,
    isShared: PropTypes.bool,
    onOpenShareProject: PropTypes.func.isRequired
};

ShareButton.defaultProps = {
    className: ''
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onOpenShareProject: () => {
        dispatch(openShareModal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareButton);
