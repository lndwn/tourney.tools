import { useState } from "react";
import { Column } from "../../components/layout";
import { UIText } from "../../components/text";
import { Tourney, TourneyFormat } from "./tourney";
import { RadioField, TextField } from "../../components/form-field";

export const TourneyCreateView = () => {
  const [tourney, setTourney] = useState<Partial<Tourney>>({});
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    setTourney((t) => ({ ...t, [name]: value }));
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log({ tourney });
  };
  return (
    <Column as="form" onSubmit={handleSubmit} gap="3">
      <UIText>Create Tourney</UIText>
      <TextField
        id="display_name"
        label="Name"
        defaultValue={tourney.display_name}
        onChange={handleChange}
      />
      <RadioField
        id="format"
        label="Format"
        name="format"
        onChange={handleChange}
        options={[
          {
            label: "Single Elimination",
            value: TourneyFormat.SingleElim,
            defaultChecked: true,
          },
          {
            label: "Double Elimination",
            value: TourneyFormat.DoubleElim,
          },
          {
            label: "Round Robin",
            value: TourneyFormat.RoundRobin,
          },
        ]}
      />
    </Column>
  );
};
