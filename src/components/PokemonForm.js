import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleSubmit }) {
const [formData, setFormData] = useState({
  name:"",
  hp:0,
  frontUrl:"",
  backUrl:""
  })

const handleChange = (event) => {
  setFormData({
  ...formData, [event.target.name] : (event.target.value)
  })}

const handleSubmitPokemon = (event) => {
  event.preventDefault()
  handleSubmit(formData)
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmitPokemon}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name" 
          placeholder="Name" 
          name="name" 
          onChange={handleChange} 
          value={formData.name}
          />
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          onChange={handleChange}
          value={formData.hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
