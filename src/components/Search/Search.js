import React, { Component } from 'react';
import classnames from 'classnames';

// Component styles
import styles from './styles.scss';

export default class Search extends Component {
    
    // Handle form submission
    handleSubmit = (e) => {
        const { requestMovie } = this.props;
        e.preventDefault();
        requestMovie(encodeURIComponent(this.refs.searchInput.value));
    }

    render() {
        const containerClass = classnames({
            [styles.container]: true,
            'form-group': true,
            'has-error': this.props.formError,
        });

        const inputClass = classnames({
            'form-control': true,
            [styles.input]: true,
        });

        const buttonClass = classnames({
            'btn': true,
            'btn-primary': true,
            'btn-danger': this.props.formError,
        });

        return (
            <div className={containerClass}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        ref='searchInput'
                        placeholder='Enter a movie title'
                        className={inputClass}>
                    </input>
                    <button onClick={this.handleSubmit} className={buttonClass}>Submit</button>
                </form>
            </div>
        );
    }
}
