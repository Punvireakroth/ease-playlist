import React from "react";
import { TrackList } from "TrackList/TrackList";
import "./Playlist.css";

function Playlist() {
  return (
    <div class="Playlist">
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}
      <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
