import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Pasar Traditional",
    description: "Tempat Jual Beli",
    imageUrl:
      "https://asset.kompas.com/crops/CImo851tzUxQ2dYZyDxIhqyHj50=/0x0:1000x667/750x500/data/photo/2021/05/11/609a34322eb5e.jpg",
    address:
      "Jl. Ps. Baru No.136, Bojonggede, Kecamatan Bojonggede, Kabupaten Bogor, Jawa Barat 16923",
    location: {
      lat: -6.4895283,
      lng: 106.7923055,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Pasar Traditional",
    description: "Tempat Jual Beli",
    imageUrl:
      "https://asset.kompas.com/crops/CImo851tzUxQ2dYZyDxIhqyHj50=/0x0:1000x667/750x500/data/photo/2021/05/11/609a34322eb5e.jpg",
    address:
      "Jl. Ps. Baru No.136, Bojonggede, Kecamatan Bojonggede, Kabupaten Bogor, Jawa Barat 16923",
    location: {
      lat: -6.4895283,
      lng: 106.7923055,
    },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const idfyPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: idfyPlace.title,
        isValid: true,
      },
      description: {
        value: idfyPlace.description,
        isValid: true,
      },
    },
    true
  );

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!idfyPlace) {
    return (
      <div className="center">
        <h2>Tempat tidak ditemukan</h2>;
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        value={formState.inputs.title.value}
        valid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        value={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
