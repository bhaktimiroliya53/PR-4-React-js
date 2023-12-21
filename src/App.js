import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [input, setInput] = useState([{
    name: '', phone: '',
  }])

  const handleChange = () => {
    let newRcord = {name : '',phone : ''};
    let add = [...input,newRcord];
    setInput(add);
  }

  const remove = (index) => {
    let old = [...input];
    old.splice(index,1);
    setInput(old)
  }


  return (
    <center>
      <h1>Dynamic Form</h1>
      <table border={1}>
        <tbody>
          {
            input.map((value, index) => {
              if(index == 0){
                return (
                  <tr key={index}>
                    <td style={{margin : "5px 10px" , fontSize : "18px"}}>Full Name</td>
                    <td><input type='text' style={{margin : "5px 10px" ,fontSize : "18px"}}/></td>
                    <td style={{margin : "5px 10px" , fontSize : "18px"}}>Email Address</td>
                    <td><input type='text' style={{margin : "5px 10px" ,fontSize : "18px"}}/></td>
                    <td style={{margin : "5px 10px" , fontSize : "18px"}}>Salary</td>
                    <td><input type='text' style={{margin : "5px 10px" ,fontSize : "18px"}}/></td>
                    <button onClick={() => handleChange()} style={{margin : "5px 10px" , fontSize : "18px"}}>Add</button>
                  </tr>
                )
              }else{
                return (
                  <tr key={index}>
                    <td style={{margin : "5px 10px" , fontSize : "18px"}}>Full Name</td>
                    <td><input type='text' style={{margin : "5px 10px" , fontSize : "18px"}}/></td>
                    <td style={{margin : "5px 10px" , fontSize : "18px"}}>Email Address</td>
                    <td><input type='text' style={{margin : "5px 10px" , fontSize : "18px"}}/></td>
                    <td style={{margin : "5px 10px" , fontSize : "18px"}}>Salary</td>
                    <td><input type='text' style={{margin : "5px 10px" , fontSize : "18px"}}/></td>
                    <td>
                      <button onClick={ () => remove(index)} style={{fontSize : "18px"}}>remove</button>
                    </td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </table>
    </center>
  );
}
export default App;
