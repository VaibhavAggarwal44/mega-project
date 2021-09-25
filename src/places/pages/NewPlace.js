import React from "react";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter Valid Title"
      />
    </form>
  );
};

export default NewPlace;
