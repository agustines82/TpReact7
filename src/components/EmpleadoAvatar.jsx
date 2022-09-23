import React from "react";
import empleado01 from "../assets/img/empleado01.jpg";
const EmpleadoAvatar = ({ persona }) => {
    return (
        <>
            <img className="img-fluid rounded-start" src={empleado01} alt="avatar" />
        </>
    );
};

export default EmpleadoAvatar;
