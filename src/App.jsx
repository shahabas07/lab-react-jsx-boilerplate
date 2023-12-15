import './App.css';
import elephant from "./images/elephant.jpeg";


const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let i_data=imageData()
  return(
     
     <div className='body'>
      <h2>Kalvium gallary</h2>
    {
      i_data.map((obj)=>{
        return(
          <img src={obj.img} alt="elephant"/>
        )
      })
    }

  </div>
  )
}

export default App;
