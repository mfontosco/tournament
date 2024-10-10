import React from 'react';
import { Bracket } from 'react-brackets';

const SingleBracket = ({ rounds }) => {
  return (
    <Bracket
      rounds={rounds}
      roundTitleComponent={(title, roundIndex) => (
        <div
          style={{
            textAlign: 'center',
            color: 'red',
            width: '50px',  // Customize the title box width here if needed
            height: '20px', // Customize the title box height here
          }}
        >
          {title}
        </div>
      )}
      teamComponent={(team) => (
        <div
          style={{
            textAlign: 'center',
            width: '60px !important',  // Force width
            height: '30px !important',  // Ensure text is vertically centered
            backgroundColor: '#f0f0f0', // Background color of the box
            border: '1px solid #ccc', // Border style
            borderRadius: '5px',      // Border radius for rounded corners
            fontSize: '10px', // Reduce font size for smaller boxes
          }}
        >
          {team.name || 'TBD'} {/* Displays team name or 'TBD' */}
        </div>
      )}
    />
  );
};

export default SingleBracket;
