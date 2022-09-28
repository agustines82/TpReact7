import React from "react";

const EmpleadoAvatar = ({ persona }) => {
    return (
        <div>
            <img className="mx-1 my-1 rounded-start cajaImg" src={persona.avatar} alt={persona.nombre} />
        </div>
    );
};

export default EmpleadoAvatar;
