import { FormControlContainer } from '../../../components';

const INPUT_ROWS = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter Email',
    autoFocus: true,
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter Password',
  },
];

export const SecondStepForm = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  gid,
}) => {
  return (
    <div>
      <h1>Second Step Form</h1>
      {INPUT_ROWS.map((row) => (
        <div className="mb-3" key={`${gid}__${row.name}`}>
          <FormControlContainer
            {...row}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[row.name]}
            errors={errors[row.name] && touched[row.name] && errors[row.name]}
          />
        </div>
      ))}
    </div>
  );
};
