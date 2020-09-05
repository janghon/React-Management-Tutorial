import React from 'react';
import Customer from './components/Customer';
import './App.css';
//화면 내용출력 담당

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '이주형',
  'birthday' : '740806',
  'gender' : '남자',
  'job' : '사업가'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '박우정',
  'birthday' : '741210',
  'gender' : '여자',
  'job' : '직장인'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이재원',
  'birthday' : '040510',
  'gender' : '남자',
  'job' : '고등학생'
}]

function App() {
  return (
    <div>
      {
        customers.map(c => {return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);
        })
      }
      
    </div>
  );
}

export default App;
