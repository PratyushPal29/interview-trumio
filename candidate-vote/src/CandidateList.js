import React from 'react'
import Candidate from './Candidate';

const CandidateList = ({ candidates, voting }) => {
    return (
        <div>
            {candidates?.map((candidate) => (
                <Candidate
                    key={candidate.name}
                    name={candidate.name}
                    votes={candidate.votes}
                    voting={voting}
                />
            ))}
        </div>
    )
}

export default CandidateList
