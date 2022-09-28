import React from "react";
import { ListGroupItem } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ persona }) => {
    return (
        <ListGroupItem>
            <section className="card width">
                <article className="d-flex justify-content-start">
                    <aside>
                        <EmpleadoAvatar persona={persona} />
                    </aside>
                    <aside>
                        <div className="ms-2">
                            <h5>{persona.nombre}</h5>
                            <p>
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
