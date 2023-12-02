
// import React, { useState } from "react";
import React, { Component, useState } from "react";
import axios from 'axios'
// import Hello from './js/hello.js';
import './App.css'



// 실습1
// react api 기본형태
// const App = () =>{

//   const [data, setData]=useState(null)
//   const onClick = async() =>{
//    try{
//     await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response=>{
//       console.log(response.data)
//     })  
//    }catch(e){
//       console.log(e)
//       alert('Error데이터를 불러올 수 없습니다')
//    } 
//   }
  
//   return(
//     <div className="AppBox">
//       <button onClick={onClick}>불러오기</button>
//       {data && <textarea value={JSON.stringify(data)} readOnly={true}/>}
//     </div>
//   )

// }

// export default App;

// 개념1
// props의 개념
// function App() {
//   return (
//     <div>
//     <Hello name="react" color="red" />
//     <Hello color="red" />
//     </div>
//   );
// }

// export default App;

// 개념2
// super()
// 자식 클래스가 생성될 때, 부모 클래스의 생성자를 참조합니다.
// Class 컴포넌트에서 부모 클래스는 React.Component를 말합니다.

// 실습2
const App = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
  
    const searchBooks = async () => {
      try {
        const response = await axios.get(
            '/v1/search/book.json',
          {
            params: {
              query: query,
              display: 10, // 검색 결과 출력 건수 지정
            },
            headers: {
              'X-Naver-Client-Id': 'YOUR_NAVER_CLIENT_ID',
              'X-Naver-Client-Secret': 'YOUR_NAVER_CLIENT_SECRET',
            },
          }
        );
  
        setBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div>
        <h1>네이버 책 검색</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchBooks}>검색</button>
  
        <ul>
          {books.map((book) => (
            <li key={book.isbn}>
              <img src={book.image} alt={book.title} />
              <p>{book.title}</p>
              <p>{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default App;