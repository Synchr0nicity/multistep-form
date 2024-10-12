import { FormWrapper } from "./FormWrapper.tsx";

type UserData = {
  email: string;
  password: string;
};

type AccountFormProps = UserData & {
  updateFields: (
    fields: Partial<UserData>
  ) => void;
};

export function AccountForm({
  updateFields,
  email,
  password,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Info">
      <label htmlFor="Email">Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) =>
          updateFields({
            email: e.target.value,
          })
        }
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) =>
          updateFields({
            password: e.target.value,
          })
        }
      />
    </FormWrapper>
  );
}
