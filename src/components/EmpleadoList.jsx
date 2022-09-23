import React from "react";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
    const empleados = [
        { id: 1, nombre: "Laya Dueñas", titulo: "CEO", departamento: "Business", avatar: "empleado01.jpg" },
        { id: 2, nombre: "Astryd Vallés", titulo: "CMO", departamento: "Marketing", avatar: "empleado02.jpg" },
        { id: 3, nombre: "Shantell Meza", titulo: "CFO", departamento: "Business", avatar: "empleado03.jpg" },
        { id: 4, nombre: "Sergio Ocampo", titulo: "CTO", departamento: "Engineering", avatar: "empleado04.jpg" },
        { id: 5, nombre: "Ares Jiménez", titulo: "Art Director", departamento: "Marketing", avatar: "empleado05.jpg" },
        { id: 6, nombre: "Marta Pérez", titulo: "Frontend Dev", departamento: "Engineering", avatar: "empleado06.jpg" },
        { id: 7, nombre: "Ellen Balderas", titulo: "Digital Strategist", departamento: "Marketing", avatar: "empleado07.jpg" },
        { id: 8, nombre: "Cynthia Valentín", titulo: "Backend Dev", departamento: "Engineering", avatar: "empleado08.jpg" },
        { id: 9, nombre: "Bernard Jung", titulo: "DevOps Engineer", departamento: "Engineering", avatar: "empleado09.jpg" },
    ];

    return (
        <>
            <section className="container d-flex  justify-content-center  mt-5">
                <h3 className="display-5">Lista de empleados</h3>
            </section>
            <section className="container d-flex flex-column align-items-center mb-5">
                {empleados.map((persona, id) => (
                    <EmpleadoRow key={id} persona={persona} />
                ))}
            </section>
        </>
    );
};

export default EmpleadoList;
