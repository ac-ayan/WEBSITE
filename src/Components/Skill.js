import React from "react";

import skilldata from "../db/skilldata";
import Card from "../template/Card";
function Skill(){
    return (
        <div className="skill-section" name="skills">
            <h1>Skills</h1>
            <div className="skill-list">
                {skilldata.map(item => {
                    return <Card icon={item.icon} title={item.title} />
                })}
            </div>
        </div>
    );
}
export default Skill;