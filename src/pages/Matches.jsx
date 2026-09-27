import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on component load
  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    const { data, error } = await supabase
      .from("matches")
      .select("*");

    if (error) {
      console.log("Error fetching matches:", error);
    } else {
      setMatches(data);
    }
    setLoading(false);
  }

  if (loading) {
    return <p>Loading matches...</p>;
  }

  return (
    <div className="matches-page">
      <h1>Upcoming IPL Matches</h1>

      <div className="matches-grid">
        {matches.map((match) => (
          <div key={match.id} className="match-card">
            <h2>{match.team1} vs {match.team2}</h2>
            <p>📍 {match.venue}</p>
            <p>📅 {match.date}</p>
            <Link to="/booking">
              <button>Book Ticket</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matches;