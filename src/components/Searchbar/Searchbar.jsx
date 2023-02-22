import { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
    state = {
        input: '',
    };

    search = e => {
        e.preventDefault();
        this.props.getInputValue(this.state.input);
        this.setState({ input: '' });
    };

    handleChange = e => {
        this.setState({ input: e.target.value });
    };

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={this.search}>
                    <button type="submit" className={css.button}>
                        <span className={css.label}>Search</span>
                    </button>

                    <input
                        name="input"
                        className={css.input}
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.input}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}