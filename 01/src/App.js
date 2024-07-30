import './App.css';

function App() {
  let a = 2; //it is like JS but we can not able to show it on web page directly. wee need to use '{coponent to show}'
  return (
    <div>{a+2} , 
        {a}+2, 
       a
      <h1 className='main'>Hello I am component</h1>
      <p style={{backgroundColor:"yellow",color:"black"}}>Practice the code</p>
    </div>//if using multipe tag need to wrap them in the one tag here it is div. Because in React we use jsx files which include javascript and html format in one so we have to do this things.
  );
}
export default App;
