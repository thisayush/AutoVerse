import "./exploreCars.module.css";
import styled from "styled-components";

const Section = styled.div`
  display: ${(props) =>
    props.outerLayout ? "flex" : props.searchColumn ? "flex" : "flex"};
  padding: ${(props) =>
    props.outerLayout
      ? "20px 100px"
      : props.carsColumn
      ? "20px"
      : props.searchColumn
      ? "20px 15px"
      : null};
  flex-direction: ${(props) =>
    props.searchColumn ? "column" : props.carsColumn ? "column" : "row"};
  flex-basis: ${(props) =>
    props.searchColumn ? "25%" : props.carsColumn ? "75%" : null};
`;
const Text = styled.p`
  font-family: ${(props) => (props.title ? "Poppins" : "poppins")};
  font-size: ${(props) =>
    props.title
      ? "16px"
      : props.titleColumn2
      ? "20px"
      : props.city
      ? "14px"
      : null};
  font-weight: ${(props) =>
    props.title
      ? "700"
      : props.titleColumn2
      ? "600"
      : props.city
      ? "600"
      : null};
  line-height: ${(props) =>
    props.title ? "24px" : props.city ? "21px" : null};
  color: ${(props) =>
    props.title
      ? "#868686"
      : props.titleColumn2
      ? "#7f8091"
      : props.city
      ? "rgba(27, 28, 36, 0.8)"
      : null};
  margin-top: 10px;
  margin-bottom: 0px;
`;

export { Section, Text };
