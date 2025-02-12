import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            results: []
        };



        this.items = [
            "Fender Stratocaster",
            "Gibson Les Paul",
            "Ibanez RG550",
            "Yamaha P-45",
            "Roland FP-30",
            "Pearl Export Drum Kit",
            "Yamaha YTR-2330 Trumpet",
            "Stentor Violin",
            "Korg Kronos",
            "Alesis Nitro Mesh Kit"
        ];
    }

    handleInputChange = (event) => {
        const inputValue = event.target.value.toLowerCase();
        const filteredResults = this.items.filter(item =>
            item.toLowerCase().includes(inputValue)
        );

        this.setState({
            input: event.target.value,
            results: inputValue ? filteredResults : [] // Show results only if input is not empty
        });
    };

    clearSearch = () => {
        this.setState({ input: "", results: [] });
    };

    render() {
        return (
            <div className="search-container">
                {/* Search Bar */}
                <div className="input-wrapper">
                    <FaSearch id="search-icon" />
                    <input
                        type="text"
                        placeholder="Search "
                        value={this.state.input}
                        onChange={this.handleInputChange}
                    />
                    {this.state.input && (
                        <button className="clear-btn" onClick={this.clearSearch}>&times;</button>
                    )}
                </div>

                {/* Search Results */}
                {this.state.results.length > 0 && (
                    <div className="results-container">
                        <ul className="search-results">
                            {this.state.results.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default SearchBar;
