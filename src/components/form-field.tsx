import { Column, Row } from "./layout";
import { UIText } from "./text";

export interface TextFieldProps<T> {
  id: keyof T;
  label: string;
  name?: string;
  defaultValue?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextField = <T extends Record<string, unknown>>(
  props: TextFieldProps<T>,
) => {
  return (
    <Column gap="2">
      <label htmlFor={props.id as string}>
        <UIText>{props.label}</UIText>
      </label>
      <input
        id={props.id as string}
        name={props.name}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </Column>
  );
};

export interface RadioFieldProps<T> {
  id: keyof T;
  label: string;
  name?: string;
  options: {
    label: string;
    defaultChecked?: boolean;
    value: string;
  }[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const RadioField = <T extends Record<string, unknown>>(
  props: RadioFieldProps<T>,
) => {
  return (
    <Column gap="2">
      <label>
        <UIText>{props.label}</UIText>
      </label>
      <Row as="ul" gap="2" p="0px" m="0px">
        {props.options.map((option, i) => (
          <Row as="li" key={option.value}>
            <Row
              as="label"
              htmlFor={`${props.id as string}-${i}`}
              alignItems="center"
              gap="1"
            >
              <input
                id={`${props.id as string}-${i}`}
                type="radio"
                name={props.name}
                value={option.value}
                defaultChecked={option.defaultChecked}
                onChange={props.onChange}
                style={{ margin: "0px" }}
              />
              <UIText>{option.label}</UIText>
            </Row>
          </Row>
        ))}
      </Row>
    </Column>
  );
};
