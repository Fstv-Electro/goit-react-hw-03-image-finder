import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    state = {}
    
    componentDidMount() {
        window.addEventListener('keydown', this.onEsc);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEsc);
    }

    onBackdrob = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }

    onEsc = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    render() {
        return (
            <div className={css.overlay} onClick={this.onBackdrob}>
                <div className={css.modal}>
                    <img src={this.props.url} alt="" />
                </div>
            </div>
        )
    }
}