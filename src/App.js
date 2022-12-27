import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChagne = event => setToDo(event.target.value);
  const onSubmit = event => {
    event.preventDefault(); // 새로고침되는 기본 이벤트 취소
    if (toDo === '') {
      return;
    }
    setToDo('');
    setToDos(currentArray => [toDo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChagne}
          value={toDo}
          type="text"
          placeholder="Wite you to do ..."
        ></input>
        <button>Add toDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// 여기 까지 연습

// // import Button from "./Button"
// // import styles from "./App.module.css"

// import { useEffect, useState } from 'react';

// function Hello() {
//   useEffect(() => {
//     console.log('hi :) ');
//     return () => console.log('bye : (');
//   }, []);

//   return <h1>Hello</h1>;
// }
// // cleanup function 내 component가 destroy 될 때 먼가 할 수 있게 해주는 것  이걸로 component가 언제 create, destroy가 됐는 지 알 수 있다.

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing(prev => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? 'Hide' : 'show'}</button>
//     </div>
//   );
// }

// export default App;

// // function App() {
// //   const [counter, setValue] = useState(0);
// //   const [keyword, setKeyword] = useState("")
// //   const onChange=(e)=>setKeyword(e.target.value)
// //   const onClick=()=>setValue(prev=>prev+1)
// //     console.log('i run all the time')

// //   useEffect(() => {
// //     console.log('i run only once')
// //   },[])
// //   useEffect(() => {
// //     console.log('I run when keyword changes')
// //   }, [keyword])
// //   useEffect(() => {
// //     console.log('I run when counter changes')
// //   },[counter])
// //   //keyword가 변화할 때 코드를 실행하고 싶다면 []에 keyword를 써준다.

// //   return (
// //     <div>
// //       <h1 className={styles.title}>Welcome back!!!!</h1> */}
// //       {/* <Button text={"Continue"} />
// //       <input value={keyword} onChange={onChange} type="text" placeholder="search here" />
// //       <h1>{counter}</h1>
// //       <button onClick={onClick}>click me </button>
// //    </div>
// //   );
// // }
