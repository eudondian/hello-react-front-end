import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { message, status } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [status, dispatch]);
  return (
    <div>

      <h1>Random Greeting Message.</h1>
      <h2>{message.message}</h2>
    </div>
  );
}

export default Greeting;
