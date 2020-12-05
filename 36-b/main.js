// メソッド呼び出し
const obj = {
  name: 'taro',
  sayHello: function () {
    console.log(this);
  },
};

// 関数呼び出し

const fn = function () {
  this.console.log('da');
};

// 応用

const myObject = {
  value: 1,
  show: function () {
    console.log('show', this.value); // 注１

    function show2() {
      console.log('show2', this.value); // 注２
    }
    show2();
  },
};

// コンストラクタ

class MyClass {
  state = {
    age: 123,
    name: 'taro',
  };

  setState(newState) {
    this.state = newState;
  }

  constructor(inputName) {
    this.name = inputName;
    this.setState({ age: this.state.age });
  }
  sayHello = () => {
    console.log(`${this.name}さんの年齢は${this.state.age}です`);
  };
}

const taro = new MyClass('たろう');

taro.sayHello();
