import React from "react";
import { Container, Img, Spam, Name, SecordName, Profision, Welcome} from "../../../styles/ImgPerfil.js"
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'


function imgPerfil() {

    return (
        <Container>
            <Img src="/images/perfil.png" />
            <Welcome>Olá! Meu nome é</Welcome>
            <Spam><Name>&lt;Matheus </Name><br/>
                <SecordName> Aparecido /&gt;</SecordName></Spam>
                <Profision>Front end Developer</Profision>
        </Container>
    )
}

export default imgPerfil