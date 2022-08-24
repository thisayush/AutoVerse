import React, { useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Checkbox, TextField, FormControlLabel } from "@material-ui/core";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";
import { useDispatch, useSelector } from "react-redux";

import { Section, Text } from "./exploreCars.styledComponent";
import CarsDisplayCard from "../../Components/ExploreCars/CarsDisplayCard";
import Testimonials from "../../Components/Dashboard/TestimonialsOpen";
import Footer from "../../Components/Footer/Footer";
import LoggedInNavbar from "../../Components/LoggedInNavbar";
import { getCars } from "../../Redux/ExploreCars/exploreCarsAction";

const GreenCheckbox = withStyles({
  root: {
    "&$checked": {
      color: teal[400],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const carBrands = [
  "Honda",
  "Hyundai",
  "Maruti",
  "Toyota",
  "Mahindra",
  "Renault",
];

const options = ["Honda", "Hyundai", "Maruti", "Toyota", "Mahindra", "Renault"];

export default function ExploreCars() {
  const cities = ["Mumbai", "Pune", "Chennai", "Delhi-NCR"];
  const [fuelselect, setFuelselect] = React.useState({});
  const [segmentSelect, setSegmentSelect] = React.useState({});
  const [transmission, setTransmission] = React.useState({});
  const [selectBrand, setSelectBrand] = React.useState({});

  const [searchBrand, setSearchBrand] = React.useState("");
  const [city, setCity] = React.useState("");

  const [filter, setFilter] = React.useState({});

  const cars = useSelector((state) => state.carExplore.carData);
  const isLoading = useSelector((state) => state.carExplore.isLoading);
  const isError = useSelector((state) => state.carExplore.isError);

  console.log(isLoading, cars);

  const handleFuelChange = (event) => {
    setFuelselect({ ...fuelselect, [event.target.name]: event.target.checked });
  };
  const handleSegmentChange = (event) => {
    setSegmentSelect({
      ...segmentSelect,
      [event.target.name]: event.target.checked,
    });
  };
  const handleTransmissionChange = (event) => {
    setTransmission({
      ...transmission,
      [event.target.name]: event.target.checked,
    });
  };
  const handleBrandChange = (event) => {
    setSelectBrand({
      ...selectBrand,
      [event.target.name]: event.target.checked,
    });
  };

  const dispatch = useDispatch();

  console.log(filter);

  useEffect(() => {
    const action = getCars(filter);
    dispatch(action);
  }, [filter]);

  useEffect(() => {
    setFilter({
      ...filter,
      location: city,
    });
  }, [city]);

  useEffect(() => {
    if (fuelselect.Petrol == true && fuelselect.Diesel == true) {
      setFilter({
        ...filter,
        fuel_type: "",
      });
    } else if (fuelselect.Petrol == true) {
      setFilter({
        ...filter,
        fuel_type: "petrol",
      });
    } else if (fuelselect.Diesel == true) {
      setFilter({
        ...filter,
        fuel_type: "Diesel",
      });
    } else {
      setFilter({
        ...filter,
        fuel_type: "",
      });
    }
  }, [fuelselect]);

  useEffect(() => {
    if (transmission.Automatic == true && transmission.Manual == true) {
      setFilter({
        ...filter,
        transmission_type: "",
      });
    } else if (transmission.Automatic == true) {
      setFilter({
        ...filter,
        transmission_type: "Automatic",
      });
    } else if (transmission.Manual == true) {
      setFilter({
        ...filter,
        transmission_type: "Manual",
      });
    } else {
      setFilter({
        ...filter,
        transmission_type: "",
      });
    }
  }, [transmission]);

  useEffect(() => {
    if (
      segmentSelect.Hatchback == true &&
      segmentSelect.Sedan == true &&
      segmentSelect.SUV == true
    ) {
      setFilter({
        ...filter,
        segment: "",
      });
    } else if (segmentSelect.Hatchback == true) {
      setFilter({
        ...filter,
        segment: "Hatchback",
      });
    } else if (segmentSelect.Sedan == true) {
      setFilter({
        ...filter,
        segment: "Sedan",
      });
    } else if (segmentSelect.SUV == true) {
      setFilter({
        ...filter,
        segment: "SUV",
      });
    } else {
      setFilter({
        ...filter,
        segment: "",
      });
    }
  }, [segmentSelect]);

  return !isLoading ? (
    <div>
      <LoggedInNavbar />
      <Section outerLayout>
        <Section searchColumn>
          <Text title>Filter By</Text>
          <Text city>City</Text>
          <Autocomplete
            value={city}
            onChange={(event, value) => setCity(value)}
            options={cities}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="cities" />}
          />
          <Text city>search</Text>
          <Autocomplete
            value={searchBrand}
            onChange={(event, newValue) => {
              setSearchBrand(newValue);
            }}
            id="controllable-states-demo"
            options={options}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search by car model or brand"
                variant="outlined"
              />
            )}
          />
          <Text city>segment</Text>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={segmentSelect.checkedG}
                onChange={handleSegmentChange}
                name="Hatchback"
              />
            }
            label="Hatchback"
          />{" "}
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={segmentSelect.checkedG}
                onChange={handleSegmentChange}
                name="Sedan"
              />
            }
            label="Sedan"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={segmentSelect.checkedG}
                onChange={handleSegmentChange}
                name="SUV"
              />
            }
            label="SUV/MUV"
          />
          <Text city>Fuel</Text>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={fuelselect.checkedG}
                onChange={handleFuelChange}
                name="Diesel"
              />
            }
            label="Diesel"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={fuelselect.checkedG}
                onChange={handleFuelChange}
                name="Petrol"
              />
            }
            label="Petrol"
          />
          <Text city>Transmission</Text>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={transmission.checkedG}
                onChange={handleTransmissionChange}
                name="Automatic"
              />
            }
            label="Automatic"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={transmission.checkedG}
                onChange={handleTransmissionChange}
                name="Manual"
              />
            }
            label="Manual"
          />
          <Text city>Brand</Text>
          {carBrands.map((item) => {
            return (
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={selectBrand.item}
                    onChange={handleBrandChange}
                    name={item}
                  />
                }
                label={item}
              />
            );
          })}
        </Section>
        <Section carsColumn>
          <Text titleColumn2>36 cars for subscription in Bangalore</Text>

          {cars.map((item) => {
            return (
              <div key={item.id}>
                <CarsDisplayCard {...item}/>
              </div>
            );
          })}
        </Section>
      </Section>
      <Testimonials />
      <Footer />
    </div>
  ) : (
    "loading"
  );
}
