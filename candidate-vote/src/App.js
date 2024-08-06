// Problem statement - Candidate votes
// Time Limit (30 - 45 mins)


// ## Requirements

// Create a list of candidates, showing their name, vote count, and buttons to add/subtract votes
//  Create a small form which has an input box for candidate names and a SUBMIT button to add candidate names. 
// Writing a name in this box and clicking "SUBMIT" should add this candidate name in the list with vote count: 0
// Show the list in the order of descending number of votes




import React, { useEffect, useState } from 'react';
import './App.css';
import CandidateForm from './CandidateForm';
import CandidateList from './CandidateList';

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const newCandidate = localStorage.getItem('candidate');
    if (newCandidate) {
      setCandidates(newCandidate);
    }
  })

  useEffect(() => {
    localStorage.setItem('candidate', JSON.stringify(candidates));
  }, [candidates])

  const addCandidate = (name) => {
    setCandidates([...candidates, { name, votes: 0 }]);
  }

  const voting = (name, vote) => {
    setCandidates(
      candidates.map((candidate) => {
        return (

          (candidate.name === name) ? { ...candidate, votes: candidate.votes + vote } : candidate
        )
      }).sort((a, b) => b.votes - a.votes)
    )
  }

  return (
    <div className='App'>
      <h2>Voting of Candidate</h2>
      <CandidateForm addCandidate={addCandidate} />
      <CandidateList candidate={candidates} voting={voting} />
    </div>
  );
}

export default App;
