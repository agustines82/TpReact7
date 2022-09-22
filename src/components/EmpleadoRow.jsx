import React from "react";
import { ListGroupItem } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
import "./EmpleadoRow.css";
const EmpleadoRow = () => {
    return (
        <ListGroupItem>
            <section className="card mb-3 width">
                <article className="row">
                    <aside className="col-md-4">
                        <EmpleadoAvatar />
                    </aside>
                    <aside className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">fullName</h5>
                            <p className="card-text">
                                title <span className="badge text-bg-info"> department</span>
                            </p>
                        </div>
                    </aside>
                </article>
            </section>
        </ListGroupItem>
    );
};

export default EmpleadoRow;
