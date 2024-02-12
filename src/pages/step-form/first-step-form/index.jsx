import { FormControlContainer } from '../../../components';

const INPUT_ROWS = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter Name',
    autoFocus: true,
  },
  {
    label: 'Surname',
    name: 'surname',
    type: 'text',
    placeholder: 'Enter Surname',
  },
  {
    label: 'Birth',
    name: 'birth',
    type: 'date',
    placeholder: 'Enter Birthdate',
  },
];

export const FirstStepForm = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  gid,
}) => {
  return (
    <div>
      <h3>First Step Form</h3>
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
