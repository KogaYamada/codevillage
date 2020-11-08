import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

const App = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  console.log(errors);

  return (
    <div className='ui container'>
      <form onSubmit={handleSubmit(onSubmit)} className='ui form'>
        <label>Email</label>
        <input
          name='email'
          ref={register({ required: true })}
          className='field'
        />
        {errors?.email && <p style={{ color: 'red' }}>入力必須です</p>}
        <label>password</label>
        <input
          name='password'
          type='password'
          ref={register({ required: true })}
          className='field'
        />
        {errors?.password && <p style={{ color: 'red' }}>入力必須です</p>}
        <button type='submit' className='ui button'>
          送信
        </button>
      </form>
    </div>
  );
};

const StateForm = () => {
  const [email, setEmail] = useState('');
  return (
    <div className='ui container'>
      <h1>state</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(email);
        }}
        className='ui form'
      >
        <label>Email</label>
        <input
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='field'
        />

        <button type='submit' className='ui button'>
          送信
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(
  <>
    <App />
    <StateForm />
  </>,
  document.getElementById('root')
);
