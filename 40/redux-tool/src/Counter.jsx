import React, { useState, useEffect } from 'react';

class Counter extends React.Component {
  // 1. stateの移行
  state = {
    count: 0,
  };

  // 2. 処理部分(関数)の移行
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  // 3. ライフサイクルの移行
  // UIがDOMに表示された直後
  componentDidMount() {
    console.log('componentDidMountのタイミング');
  }

  // コンポーネントが画面から消える直前
  componentWillUnmount() {
    console.log('componentWillUnMountのタイミング');
  }

  // 4. UIの移行
  render() {
    const { count } = this.state;
    return (
      <>
        <h1>{count}</h1>
        <button onClick={() => this.increment()}>増加</button>
        <button onClick={() => this.decrement()}>減少</button>
      </>
    );
  }
}

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log('componentDidMountのタイミング');

    return () => {
      // clean up処理
      console.log('componentWillUnMountのタイミング');
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>増加</button>
      <button onClick={decrement}>減少</button>
    </>
  );
};
export default Counter2;
