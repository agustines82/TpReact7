import React from "react";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
    const empleados = [
        {
            id: 1,
            nombre: "Laya Dueñas",
            titulo: "CEO",
            departamento: "Business",
            avatar: "https://emoji10.com/wp-content/uploads/emojis-en-los-contactos.jpg",
        },
        { id: 2, nombre: "Astryd Vallés", titulo: "CMO", departamento: "Marketing", avatar: "https://image.emojipng.com/391/3301391-small.png" },
        {
            id: 3,
            nombre: "Shantell Meza",
            titulo: "CFO",
            departamento: "Business",
            avatar: "https://zonadialer.com/wp-content/uploads/2021/05/1622376669_Copiar-y-pegar-truco-emoji.jpg",
        },
        {
            id: 4,
            nombre: "Sergio Ocampo",
            titulo: "CTO",
            departamento: "Engineering",
            avatar: "https://imagenesdeemojis.com/wp-content/uploads/2016/08/emoticon-carcajada-facebook.jpg",
        },
        {
            id: 5,
            nombre: "Ares Jiménez",
            titulo: "Art Director",
            departamento: "Marketing",
            avatar: "http://www.juntadeandalucia.es/averroes/centros-tic/18006959/myscrapbook/userimages/172d4ed9aba2.png",
        },
        {
            id: 6,
            nombre: "Marta Pérez",
            titulo: "Frontend Dev",
            departamento: "Engineering",
            avatar: "https://zonadialer.com/wp-content/uploads/2021/05/1622376667_222_Copiar-y-pegar-truco-emoji.jpg",
        },
        {
            id: 7,
            nombre: "Ellen Balderas",
            titulo: "Digital Strategist",
            departamento: "Marketing",
            avatar: "https://i.pinimg.com/474x/d6/d1/41/d6d1417da4a57c0c4c1ae06c9cdac142--emoji-faces-smiley-faces.jpg",
        },
        {
            id: 8,
            nombre: "Cynthia Valentín",
            titulo: "Backend Dev",
            departamento: "Engineering",
            avatar: "https://st2.depositphotos.com/1001911/9033/v/950/depositphotos_90335790-stock-illustration-cool-emoticon-pointing-at-you.jpg",
        },
        {
            id: 9,
            nombre: "Bernard Jung",
            titulo: "DevOps Engineer",
            departamento: "Engineering",
            avatar: "https://st2.depositphotos.com/1001911/10268/v/950/depositphotos_102685852-stock-illustration-fist-bump-emoticon.jpg",
        },
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
