import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { MCA } from "../../assets/Assets";
import axios from "axios";
const Bca = () => {

  useEffect(()=>{
    axios.get('http://localhost:3000/MCA')
    .then(res => console.log(res['data'][0]['papers'][0]['videos']))
    .catch(err=>console.log(err))
  },[])

  const [sem, setSem] = useState("");
  const [paper, setPaper] = useState("");
  const [video, setVideo] = useState("");
  const[link,setLink]=useState("");
  const [ak, setAk] = useState(MCA[0]['papers'][0]['videos']);
  const[values,setValues]=useState({name:'',link:''})
  const[ar,setAr]=useState([])
  console.log(ak)
  const add=(e)=>{
    e.preventDefault();
    setAr([...ar,values])
  }
  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/MCA',{"name":`sem-${sem}`,"papers":[{"name":paper,"videos":ar}]},)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))

    // const newEntry = {
    //   name:video,
    //   link:link,
      // name: sem,
      // papers: [
      //   {
      //     name: paper,
      //     videos: [
      //       {
      //         name: "Java Development Kit (JDK) Setup",
      //         link: "https://www.youtube.com/watch?v=WRISYpKhIrc",
      //       },
      //       {
      //         name: "First Code in Java",
      //         link: "https://www.youtube.com/watch?v=tSqNBjGacYk",
      //       },
      //     ],
      //   },
      // ],
    // };
    // setAk([...ak, newEntry]);
    // console.log(MCA);
  };
  return (
    <div>
      <Navbar />
      <form action="">
        <h1>add data</h1>
        <h1>sem</h1>
        <input
          className="bg-gray-400"
          type="text"
          name="sem"
          id="sem"
          value={sem}
          onChange={(e) => setSem(e.target.value)}
        />
        <h1>paper</h1>
        <input
          className="bg-gray-400"
          type="text"
          name="paper"
          id="paper"
          value={paper}
          onChange={(e) => setPaper(e.target.value)}
        />
        <h1>videos</h1>
        <input
          className="bg-gray-400"
          type="text"
          name="video"
          id="videos"
          
          onChange={(e) => setValues({...values,name: e.target.value})}
        />
        <h1>link</h1>
        <input
          className="bg-gray-400"
          type="text"
          name="link"
          id="link"
         
          onChange={(e) => setValues({...values,link: e.target.value})}
        />
        <button className=" bg-blue-400" onClick={add}>add</button>
        <button className="bg-black text-white" onClick={submit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Bca;
