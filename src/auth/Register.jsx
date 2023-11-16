import { Button,  Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Register = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="row justify-content-center p-4">
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: '100%', width: '32rem' }}
        className="border border-success p-4 rounded"
      >
        <div className="text-center mb-4">
          <h1 className="mb-4 text-success">Create Account</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <FormControl type="text" name="email" placeholder="Enter Email.." />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Password
          </label>
          <FormControl type="password" name="password" placeholder="Enter Password.." />
        </div>
        <div className="d-grid my-4">
          <Button type="submit" variant="success">
            Create Account
          </Button>
        </div>
        <p className="mb-0">
          Already have an account?{' '}
          <Link to="/login" className="text-success text-decoration-none">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};
