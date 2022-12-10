import Link from 'next/link'
import {Container, ContainerList, ContainerLi, ContainerItem} from '../../../styles/NavMenu.js'
import {AiOutlineHome, AiOutlineSolution, AiOutlineRadarChart, AiOutlineTool, AiOutlinePlus} from 'react-icons/ai'
import {useState} from "react"

function NavMenu(){

    const [active, setActive] = useState(0);


    return(
        <Container>
            <ContainerList>
                <ContainerLi onClick={()=>setActive(0)} ><Link href="/"><ContainerItem clicked = {active==0? "-10px" : "0px"}><AiOutlineHome color='#fff' size={30}/></ContainerItem >Home</Link></ContainerLi>
                <ContainerLi onClick={()=>setActive(1)}><Link href="/sobre"><ContainerItem clicked = {active==1? "-10px" : "0px"}><AiOutlineSolution color='#fff' size={30}/></ContainerItem >Sobre</Link></ContainerLi>
                <ContainerLi onClick={()=>setActive(2)} ><Link href=""><ContainerItem clicked = {active==2? "-10px" : "0px"}><AiOutlineRadarChart color='#fff' size={30}/></ContainerItem >Skills</Link></ContainerLi>
                <ContainerLi onClick={()=>setActive(3)} ><Link href=""><ContainerItem clicked = {active==3? "-10px" : "0px"}><AiOutlineTool color='#fff' size={30}/></ContainerItem >Serviços</Link></ContainerLi>
                <ContainerLi onClick={()=>setActive(4)} ><Link href=""><ContainerItem clicked = {active==4? "-10px" : "0px"}><AiOutlinePlus color='#fff' size={30}/></ContainerItem >Mais</Link></ContainerLi>
            </ContainerList>
        </Container>
    )
}

export default NavMenu