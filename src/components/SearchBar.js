import React, { Component } from 'react'

class SearchBar extends Component {

    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui search-bar segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={this.state.term}
                        className="field"
                        onChange={this.onInputChange} />
                </form>
            </div>
        )
    }
}

export default SearchBar
