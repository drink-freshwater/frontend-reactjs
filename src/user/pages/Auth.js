import React from "react";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";

import "./Auth.css";

const Auth = () => {
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form>
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators
        />
      </form>
      ;
    </Card>
  );
};

export default Auth;
