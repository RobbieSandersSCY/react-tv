import { useState } from "react";

import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  // keeps selected ep as a state variable
  const [selectedEpisode, setSelectedEpisode] = useState();
  // if !show, show message encouraging selection
  if (!show) {
    return <p>Please select a show to learn more.</p>;
  }
  // else renders EpList and EpDeets
  return <div className="show-details">
    <EpisodeList 
      name={show.name}
      episodes={show.episodes}
      selectedEpisode={selectedEpisode}
      setSelectedEpisode={setSelectedEpisode}
    />
    <EpisodeDetails episode={selectedEpisode}/>
  </div>;
}
