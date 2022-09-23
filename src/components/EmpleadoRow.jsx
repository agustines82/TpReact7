import React from "react";
import { ListGroupItem } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
import "./EmpleadoRow.css";
const EmpleadoRow = ({ persona }) => {
    return (
        <ListGroupItem>
            <section className="card width">
                <article className="d-flex">
                    <aside>
                        <EmpleadoAvatar persona={persona} />
                    </aside>
                    <aside>
                        <div className="card-body">
                            <h5 className="card-title">{persona.nombre}</h5>
                            <p className="card-text">
                                {persona.titulo} <span className="badge text-bg-info"> {persona.departamento}</span>
                            </p>
                        </div>
                    </aside>
                </article>
            </section>
        </ListGroupItem>
    );
};

export default EmpleadoRow;
