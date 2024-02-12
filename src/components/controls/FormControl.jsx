import { forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormFeedback } from './FormFeedback';

const FormControl = forwardRef((props, ref) => {
  const { type, id, ...restProps } = props;
  return (
    <input
      className="form-control shadow-none m-0"
      type={type || 'text'}
      ref={ref}
      id={id}
      {...restProps}
    />
  );
});
FormControl.displayName = 'FormControl';

const FormCheckbox = forwardRef((props, ref) => {
  const { id, ...restProps } = props;
  return (
    <input
      className="form-check-input"
      type={'checkbox'}
      ref={ref}
      id={id}
      {...restProps}
    />
  );
});
FormCheckbox.displayName = 'FormCheckbox'; // Add displayName property

const FormControlContainer = forwardRef(function (props, ref) {
  const id = props?.id || `${props?.name}-${uuidv4()}`;
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {props.label}
      </label>
      <FormControl ref={ref} {...props} id={id} />
      {props.errors && <FormFeedback>{props.errors}</FormFeedback>}
    </div>
  );
});
FormControlContainer.displayName = 'FormControlContainer';

const FormCheckboxContainer = forwardRef(function (props, ref) {
  const id = props?.id || `${props?.name}-${uuidv4()}`;
  return (
    <div className="form-check">
      <FormCheckbox ref={ref} {...props} id={id} />
      <label htmlFor={id} className="form-check-label">
        {props.label}
      </label>
      {props.errors && <FormFeedback>{props.errors}</FormFeedback>}
    </div>
  );
});
FormCheckboxContainer.displayName = 'FormCheckboxContainer';

export { FormControl, FormControlContainer, FormCheckbox, FormCheckboxContainer };
