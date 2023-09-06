import React, {useState} from 'react'

function Demo() {
    
    const[text, setText] = useState("");
    const [color, setColor] = useState("green");
    const [car, setCar] = useState({
        brand:"Ford",
        color: "black",
        price:"5 Lakh"
    })
    const changecolor = (c)=>{
        setColor(c);
    }
    // const handlecar =(cc)=>{
    //     setCar((car)=> {return {...car, color:cc}})
    //     alert(car.color);
    // }
    const handlecar =(cc)=>{
        const newcar = {...car, color:cc}
        setCar(newcar)
    }
    const seecolor = ()=>
    {
        alert(car.color);
    }
    const handlechange = (e)=>
    {
        setText(e.target.value);
        document.getElementById("ans").innerHTML = text;
    }
    const[books, setBooks] = useState([{id:5, title:"Friend", pages:450}, {id:6, title:"Enemies", pages:400}]);
    const changeb = (id)=>{
        const bookid = id;
        const newbook = JSON.parse(JSON.stringify(books));
        newbook.find((book)=>{
            if(book.id === bookid)
            {
                 book.pages = 500;
                }
                return 0;
        })
        setBooks(newbook);
        console.log(newbook);
    }
  return (
    <>
    <div className='container'><div style = {{backgroundColor:`${color}`, width:"200px", height: "200px"}}></div>
    <button onClick={()=>{changecolor("red")}}>Red</button><br />
    <button onClick={()=>{changecolor("blue")}}>blue</button><br />
    <button onClick={()=>{handlecar("red")}}>Change car color to red</button><br />
    <button onClick ={seecolor} >See Car details</button>
    <input type = "text" placeholder='Type here' value = {text} onChange={(e)=>{handlechange(e)}}></input>
    <div id = "ans">{text?text:"Your text will appear here."}</div>
    <button onClick ={()=>{changeb(5)}} >Book</button>
    </div>
    
    </>
  )
}

export default Demo