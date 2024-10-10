import React from 'react';
import { Bracket, RoundProps } from 'react-brackets';
import './Bracket.css'; // For additional styling

const rounds: RoundProps[] = [
  {
    
    seeds: [
      { id: 1, teams: [{ name: 'Team A' }, { name: 'Team B' }] },
      { id: 2, teams: [{ name: 'Team C' }, { name: 'Team D' }] },
      { id: 3, teams: [{ name: 'Team E' }, { name: 'Team F' }] },
      { id: 4, teams: [{ name: 'Team G' }, { name: 'Team H' }] },
    ],
  },
  {
   
    seeds: [
      { id: 5, teams: [{ name: 'TBD' }, { name: 'TBD' }] },
      { id: 6, teams: [{ name: 'TBD' }, { name: 'TBD' }] },
    ],
  },
  {
    seeds: [
      { id: 7, teams: [{ name: 'TBD' }, { name: 'TBD' }] },
    ],
  },
];

const TournamentBracket = () => {
  return (
    <div className="tournament-container">
      {/* Left side bracket */}
      <div className="bracket-left">
        <Bracket rounds={rounds} />
      </div>
      
      {/* Center Trophy Icon */}
      <div className="center-trophy">
        <img
          src="https://img.icons8.com/color/96/000000/trophy.png"
          alt="Trophy"
        />
        <h2 style={{ color: 'white', textAlign: 'center' }}>Final</h2>
      </div>

      {/* Right side bracket (reversed) */}
      <div className="bracket-right">
        <Bracket rounds={rounds} />
      </div>
    </div>
  );
}

export default TournamentBracket;
