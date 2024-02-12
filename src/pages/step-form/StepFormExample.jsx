// I Need formik step form with state stepper
// with formik and bootstrap
// I Need to use formik and yup for validation
// I Need to use react-bootstrap for stepper

import { useId, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FirstStepForm } from './first-step-form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { SecondStepForm } from './second-step-form';

export function StepForm() {
  const gid = useId();
  const [step, setStep] = useState(1);

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(255, 'Name has to be shorter than 255 characters!')
      .required('Name is required!'),
  });

  return (
    <div className="row justify-content-center p-4">
      {/* formik */}
      <Formik
        initialValues={{ name: '', password: '', email: '', surname: '', birth: '' }}
        onSubmit={(values) => {
          onSubmitHandler(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} style={{ maxWidth: '100%', width: '32rem' }}>
            <div className="card">
              <div className="card-header py-4">
                <h1 className="text-primary text-center">Step-Form</h1>
              </div>

              <div className="card-body p-4">
                {step === 1 && (
                  <FirstStepForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    gid={gid}
                  />
                )}
                {step === 2 && (
                  <SecondStepForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    gid={gid}
                  />
                )}
              </div>

              <div className=" card-footer">
                <div className="d-flex flex-row justify-content-end gap-4">
                  <Button type="button" onClick={() => setStep(1)}>
                    Previous{' '}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setStep(2);
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
