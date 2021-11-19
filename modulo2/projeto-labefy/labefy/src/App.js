import React from "react";
import Playlist from "./components/Playlist";
import MontaPlaylist from "./components/MontaPlaylist";


export default class App extends React.Component {


  render() {

    return (
      <div>
        <h1>Labefy</h1>
        <MontaPlaylist/>
      </div>
      
    )
  }
}
