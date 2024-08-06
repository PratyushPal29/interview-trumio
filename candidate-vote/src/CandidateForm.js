import React, { useState } from "react";

const CandidateForm = ({addCandidate}) => {
    const [name,setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addCandidate(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <button type="Submit">Submit</button>
        </form>
    );
}

export default CandidateForm;