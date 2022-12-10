import style from 'styled-components'

export const Container = style.nav`
    width: 90vw;
    height: 40px;
    display: flex;
    background: #B8BCBF;
    position: fixed;
    bottom: 10px;
    margin: 0 5%;
    padding: 5px;
    align-items: center;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    box-shadow: 5px 8px 15px black;
`;

export const ContainerList = style.ul`
    width: 100%;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -18px;
`;

export const ContainerLi = style.li`
    text-decoration: none;
    list-style: none;
    font-size: 14px;
    text-align: center;
    color: #023E73;
    font-weight: 600;
`;

export const ContainerItem =style.div`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #20A1E8;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    position: relative;
    box-shadow: 0 0 10px #24EAFF;
    top:${props=>props.clicked};
    transition: ease-in 0.15s;

`