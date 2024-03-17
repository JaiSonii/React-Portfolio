import React from "react";

function SkillSet({skillName,link}) {
    return (
        <div className="item">
            <img src={link} alt="Image" />
            <h5>{skillName}</h5>
        </div>
    )
}

export default SkillSet;