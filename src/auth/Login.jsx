import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from './core/api';
import { FormControlContainer } from '../components';
import { useId } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

/*
"email": "admin@zone-edv.de",
"password": "1"
*/

const INPUTS = [
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Enter Email..',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter Password..',
  },
];

export const Login = () => {
  const gid = useId();
  const navigate = useNavigate();

  //* RTK-QUERY HOOK FOR LOGIN
  const [loginMethod, { isLoading }] = useLoginMutation();

  const onSubmitHandler = async (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    await loginMethod(user);
    navigate('/');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('E-mail is not valid!').required('E-mail is required!'),
    password: Yup.string()
      .min(4, 'Password has to be longer than 6 characters!')
      .max(12, 'Password has to be shorter than 50 characters!')
      .required('Password is required!')
  });

  return (
    <div className="row justify-content-center p-4">
      {/* formik */}
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => onSubmitHandler(values)}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: '100%', width: '32rem' }}
            className="border p-4 rounded"
          >
            <div className="text-center mb-4">
              <h2 className="text-primary">Login</h2>
              <p className="text-muted">Login to your account</p>
            </div>
            {INPUTS.map((row) => (
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
            <div className="d-grid my-4">
              <Button type="submit" disabled={isLoading}>
                Login
                {isLoading && (
                  <span
                    className="ms-2 spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
              </Button>
            </div>
            <p className="mb-0">
              Dont have an account?{' '}
              <Link to="/register" className="text-primary text-decoration-none">
                Register
              </Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};
