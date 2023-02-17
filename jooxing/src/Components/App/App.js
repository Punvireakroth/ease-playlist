import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", alumn: "alumn1", id: "id1" },
        { name: "name2", artist: "artist2", alumn: "alumn2", id: "id2" },
        { name: "name3", artist: "artist3", alumn: "alumn3", id: "id3" },
      ],
    };
  }
  render() {
    return (
      <>
        <div class="App">
          <h1>
            Joo<span className="highlight">xing</span>
          </h1>
          {/* Add a SearchBar component */}
          <SearchBar />
          <div className="App-playlist">
            {/*  Add a SearchResults component */}
            <div class="result">
              <SearchResults searchResults={this.state.searchResults}/>
            </div>
            {/*  Add a Playlist component */}
            <div class="playlist">
              <Playlist />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
