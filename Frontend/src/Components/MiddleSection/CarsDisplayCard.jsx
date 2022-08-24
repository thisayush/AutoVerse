import React from "react";
import { useHistory } from "react-router-dom"

import { Image, Section, Text } from "./exploreCarsStyledComponents";
import styles from "./carsDisplayCards.module.css"

export default function CarsDisplayCard({image_url,name,fuel_type,transmission_type,_id}) {

  const history = useHistory();

  const handleId = () => {
    history.push(`/open/:city/:car/:model/${_id}`)
  }

  return (
    <div onClick={handleId} className={styles.carsCard}>
      <Section cards>
        <Section imagesection>
          <Image src={image_url[0]} />
        </Section>
        <Section carinfo>
          <Text carName>{name}</Text>
          <Section specs>
            <Section icon>
              <Image
                icon
                src="https://www.revv.co.in/grapheneImages/CarsAndPricing/transmission-icon.svg"
              />
              <Text icon>{fuel_type}</Text>
            </Section>
            <Section icon>
              <Image
                icon
                src="https://www.revv.co.in/grapheneImages/CarsAndPricing/automatic-icon.svg"
              />
              <Text icon>{transmission_type}</Text>
            </Section>
          </Section>
        </Section>
        <Section price>
          <Text discountprice>$2500<span style={{fontSize:"18px", fontWeight:"400", color:"grey "}}>/month</span></Text>
          <Text baseprice>$2500</Text>
        </Section>
      </Section>
    </div>
  );
}
