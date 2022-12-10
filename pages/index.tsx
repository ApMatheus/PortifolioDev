import React from "react";
import BtnCurriculum from "../src/Components/BtnCurriculum";
import ImgPerfil from "../src/Components/ImgPerfil";
import { BtnPdf, Container, Header } from "../styles/Home.js";

function Home() {
    return (
        <>
            <Container>
                <Header><p>Seja bem vindo!</p></Header>
                <ImgPerfil/>
                <BtnCurriculum/>
            </Container>
        </>
    )
}

export default Home