import styled from "styled-components";

export const PrimaryCustomCard = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
font-family: "Fira Sans", sans-serif;
letter-spacing: 0.26px;
line-height: 17px;
font-size: 2vh;
max-width: 95%;
display: flex;
flex-direction: column;
gap: 5px;
text-align: left;
padding: 5% 3%;
padding-bottom: 10%;
background: white;
cursor: pointer;
:hover {
    border-color: grey;
    box-shadow: 0 0 10px grey;
}
& img:nth-child(1) {
    width: 150px;
    height: 40px;
}
& span {
    font-weight: 600;
    cursor: pointer;
}
& label > span:nth-child(2) {
    font-weight: unset;
    font-weight: 600;
    color: #35c3eb;
    font-size: 2vh;
}
@media (max-width: 768px) {
    & img:nth-child(1) {
        width: 150px;
        height: 40px;
    }
    & img:nth-child(4) {
        width: 99%;
    }
}
@media (max-width: 600px) {
    & img:nth-child(1) {
        width: 150px;
        height: 40px;
    }
}
`

export const SecondaryCustomCard = styled.div`
    margin-left:56.9%;
    width:31.5%;
    padding-bottom: 1.5%;
    border-radius:5px;
    background: white;
    margin-top:-0.5%;
    box-shadow: 0 4px 5px  grey;
    & label:nth-child(2) {
        font-weight: bold;
    }
    & label:nth-child(3) {
        color: #99a6c7;
    }
    @media (max-width: 768px) {
        display:none;
        padding: 2% 2%;
    }
`;

export const VerticalCustomCard = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
    font-family: "Fira Sans", sans-serif;
    font-size: 2vh;
    display: flex;
    flex-direction: column;
    background: white;
    /* letter-spacing: 0.26px;
    line-height: 17px; */
    & p {
        /* margin-top: 5%; */
        font-weight: 600;
        color: black;
        padding: 2% 8%;
    }
    & > div {
        /* border: solid black 1px; */
        padding: 2% 8%;
        padding-bottom: 25%;
        color: black;
    }
    & > div > div {
        cursor: pointer;
    }
    & div > div:hover {
        background: #f5f5f0;
    }
    & img {
        width: 100%;
    }
`;