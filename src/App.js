import React from 'react';
import logo from './logo.svg';
import './App.css';

// 같은 파일내에 component 생성
function Food(props){
  // App에서 전송한 property를 props 매개변수로 받아온다.
  console.log(props.fav); // fav오브젝트만 가져오기
  return <h1>감자 맛잇지</h1>;
}

// props 풀어헤쳐 값 가져오기
function Food2({ fav }){
  return <h1>I like {fav}</h1>;
}

function App() {
  // component로 data 보내기 'name'
  return (
    <div>
      <h1>Hello</h1>
      <Food2
        fav="kimchi"
        something={true}
        papa={["hello", 1, 2, 3, 4, true]}
      />
      <Food2 fav="ramen" />
      <Food2 fav="볶음밥" />
      <Food2 fav="쭈꾸미" />
      <Food2 fav="삼겹살" />
    </div>
  );
}

export default App;
