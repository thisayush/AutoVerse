import React from "react";
import styled from "styled-components";
import "../ExploreCars/carsDisplayCards.module.css";

const carSubs = [
  "Bangalore",
  "Hyderabad",
  "Mumbai",
  "Delhi-NCR",
  "Chennai",
  "Pune",
  "Kolkata",
];

const Section = styled.div`
  display: ${(props) =>
    props.outerLayout
      ? "flex"
      : props.firstRow
      ? "flex"
      : props.secondRow
      ? "flex"
      : null};
  flex-direction: ${(props) =>
    props.outerLayout
      ? "column"
      : props.firstRow
      ? "row"
      : props.secondRow
      ? "row"
      : null};
  background-color: ${(props) =>
    props.firstRow ? "#2A2B36" : props.secondRow ? "#F4F4F4" : null};
  height: ${(props) =>
    props.firstRow ? "60vh" : props.secondRow ? "50vh" : null};
  flex-basis: ${(props) =>
    props.column1
      ? "28%"
      : props.column2
      ? "28%"
      : props.column3
      ? "23%"
      : props.row2column1
      ? "40%"
      : props.row2column2
      ? "20%"
      : null};
  align-items: ${(props) => (props.firstRow ? "center" : null)};
  justify-content: ${(props) =>
    props.firstRow ? "center" : props.secondRow ? "center" : null};
  padding: ${(props) => (props.secondRow ? "50px 0px" : null)};
`;

const Text = styled.p`
  font-size: ${(props) =>
    props.columnTitle
      ? "16px"
      : props.subs
      ? "13px"
      : props.storebutton
      ? "14px"
      : props.menuLinks
      ? "14px"
      : null};
  color: ${(props) =>
    props.columnTitle
      ? "White"
      : props.subs
      ? "grey"
      : props.menuLinks
      ? "grey"
      : null};
  font-weight: ${(props) =>
    props.columnTitle ? "500" : props.subs ? "400" : null};
  line-height: ${(props) =>
    props.columnTitle ? "39px" : props.subs ? "35px" : null};
  font-family: Poppins;
  margin: ${(props) =>
    props.subs
      ? "0px"
      : props.columnTitle
      ? "10px 0px"
      : props.belowlogo
      ? "10px 0px"
      : null};
  &:hover {
    color: ${(props) =>
      props.subs
        ? "#00bab5"
        : props.storebutton
        ? "#00bab5"
        : props.menuLinks
        ? "#00bab5"
        : null};
    cursor: ${(props) =>
      props.subs
        ? "pointer"
        : props.storebutton
        ? "pointer"
        : props.menuLinks
        ? "pointer"
        : null};
  }
  padding-right: ${(props) => (props.belowlogo ? "150px" : null)};
`;

export default function Footer() {
  return (
    <div>
      <Section outerLayout>
        <Section firstRow>
          <Section column1>
            <Text columnTitle>Top 7 Hyundai Car Subscription Cities</Text>
            {carSubs.map((item) => {
              return <Text subs>Car subscriptions in {item}</Text>;
            })}
          </Section>
          <Section column2>
            <Text columnTitle>Top 7 Mahindra Car Subscription Cities</Text>
            {carSubs.map((item) => {
              return <Text subs>Car subscriptions in {item}</Text>;
            })}
          </Section>
          <Section column3>
            <Text columnTitle>Top 7 Revv Car Subscription Cities</Text>
            {carSubs.map((item) => {
              return <Text subs>Car subscriptions in {item}</Text>;
            })}
          </Section>
        </Section>
        <Section secondRow>
          <Section row2column1>
            <img src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" />
            <Text belowlogo>
              2021 Primemover Mobility Technologies Pvt Ltd. All rights reserved
            </Text>
          </Section>
          <Section row2column2>
            {[
              "Home",
              "FAQ'S",
              "Car Subscription",
              "About Us",
              "Policy",
              "Blog",
            ].map((item) => {
              return <Text menuLinks>{item}</Text>;
            })}
          </Section>
          <Section column3>
            <Text>Social</Text>
            <Text>Download the Revv App!</Text>
            <div
              style={{
                height: "60px",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                backgroundColor: "white",
                alignItems: "center",
                width: "230px",
                justifyContent: "center",
                border: "1px solid #d3d1d1",
                borderRadius: "4px",
              }}
            >
              <img
                width="20px"
                src="https://www.revv.co.in/grapheneImages/newopen/apple-icon.svg"
              />
              <Text
                storebutton
                style={{ paddingTop: "19px", paddingLeft: "10px" }}
              >
                Download{" "}
                <span>
                  <b>APP Store</b>
                </span>
              </Text>
            </div>
            <div
              style={{
                height: "60px",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                backgroundColor: "white",
                alignItems: "center",
                width: "230px",
                justifyContent: "center",
                border: "1px solid #d3d1d1",
                borderRadius: "4px",
                margin: "10px 0px",
              }}
            >
              <img
                width="20px"
                src="https://www.revv.co.in/grapheneImages/newopen/play-store.svg"
              />
              <Text
                storebutton
                style={{ paddingTop: "19px", paddingLeft: "10px" }}
              >
                Download{" "}
                <span>
                  <b>Google Play</b>
                </span>
              </Text>
            </div>
          </Section>
        </Section>
      </Section>
    </div>
  );
}
