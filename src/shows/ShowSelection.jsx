import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  selectedShow,
  setSelectedShow,
}) {
  return (
  <nav className="shows">
    {shows.map((show) => (
      <a
        key={show.name}
        onClick={() => setSelectedShow(show)}
        className={"show" + (show === selectedShow ? " selected" : "")}
      >
        {show.name}
      </a>
    ))}
  </nav>
  );
}
