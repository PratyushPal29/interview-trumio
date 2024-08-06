import React, { useState } from "react";

const CandidateForm = ({ addCandidate }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            addCandidate(name);
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <button type="Submit">Submit</button>
        </form>
    );
}

export default CandidateForm;