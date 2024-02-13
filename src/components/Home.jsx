import {Button, FormControl} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {pingMethod, decrementPingMethod} from '../auth/core/slice';

export function Home() {
  const dispatch = useDispatch();

  const pingMeHandler = () => {
    dispatch(pingMethod());
  };
  const decrementPingHandler = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const number = data.get('number');
    dispatch(decrementPingMethod(number));
  };

  return (
    <div>
      <h1 className="text-center my-5">Home</h1>
      <Button variant="primary" onClick={pingMeHandler}>
        Ping me
      </Button>
      <form onSubmit={decrementPingHandler} className="my-4 border p-4" style={{width: '24rem'}}>
        <FormControl name="number" type="number" placeholder="Enter number" className="mb-2" />
        <Button type="submit" variant="secondary">
          Ping me
        </Button>
      </form>

      {/* <pre>{JSON.stringify(store, null, 2)}</pre> */}
    </div>
  );
}
