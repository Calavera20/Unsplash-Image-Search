import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "", howManyImages: 10 };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term, this.state.howManyImages);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <button className="ui button"> Send</button>
            <div className="radio-container ">
              Number of images to display:{"  "}
              <label>
                <input
                  type="radio"
                  value="10"
                  name="option"
                  onChange={e => this.setState({ howManyImages: 10 })}
                  checked={this.state.howManyImages === 10}
                />
                10
              </label>
              <label>
                <input
                  type="radio"
                  value="20"
                  name="option"
                  onChange={e => this.setState({ howManyImages: 20 })}
                  checked={this.state.howManyImages === 20}
                />
                20
              </label>
              <label>
                <input
                  type="radio"
                  value="50"
                  name="option"
                  onChange={e => this.setState({ howManyImages: 50 })}
                  checked={this.state.howManyImages === 50}
                />
                50
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
