import { FormWrapper } from "./FormWrapper.tsx";

type UserData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = UserData & {
  updateFields: (
    fields: Partial<UserData>
  ) => void;
};

export function AddressForm({
  updateFields,
  street,
  city,
  state,
  zip,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) =>
          updateFields({
            street: e.target.value,
          })
        }
      />
      <label htmlFor="city">City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) =>
          updateFields({
            city: e.target.value,
          })
        }
      />
      <label htmlFor="state">State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) =>
          updateFields({
            state: e.target.value,
          })
        }
      />
      <label htmlFor="zip">Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) =>
          updateFields({
            zip: e.target.value,
          })
        }
      />
    </FormWrapper>
  );
}
