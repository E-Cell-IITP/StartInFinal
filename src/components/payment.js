import basicUpload from "../services/imageUploader";

// basicUpload({
//     accountId: "FW25awF",
//     apiKey: "public_FW25awFBhDZhMzVWBDYaRuPTs4ne",
//     requestBody: new Blob( // Or: pass a 'file' object from an input element.
//       [ "Example Data" ],
//       { type: "text/plain" }
//     ),
//   // - Optional -
//   // metadata: {
//   //  myCustomField1: true,
//   //  myCustomField2: {
//   //    hello: "world"
//   //  },
//   //  anotherCustomField: 42
//   //},
//   // querystring: {
//   //  fileName: "image.jpg",
//   //  fileNameVariablesEnabled: true,
//   //  filePath: "/uploads/image.jpg",
//   //  folderPath: "/uploads",
//   //  folderPathVariablesEnabled: true,
//   //  originalFileName: "example.jpg",
//   //  tag: ["images/profile"]
//   //}
//       querystring : {
//           fileName: `${"teamname_"}payment.jpg`,
//           fielNameVariablesEnabled: true,
//           tag: ["images/payment"]
//       }
//   }).then(
//     response => console.log(`Success: ${JSON.stringify(response)}`),
//     error => console.error(error)
//   );


  import React, { useState , useEffect} from 'react'
  // import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
  import './payment.css'
  // import AddMember from './AddMember'
  // import fetchFoByDis from './Asyncc';
  import axios from 'axios';
  import * as Loader from 'react-loader-spinner';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// var axios = require('axios');
var FormData = require('form-data');

// var config = {
//   method: 'post',
//   url: 'https://api.imgur.com/3/upload',
//   headers: { 
//     'Authorization': 'Bearer 5eeae49394cd929e299785c8805bd168fc675280', 
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

  
  
  const Payment = () => {
    let teamName = localStorage.getItem('teamName');
    const [category, setCategory] = useState(0);
    const [toggle,settoggle] = useState(true)
  
    const handleUpload = async (e) =>{
        // e.target.value
        console.log(e.target.files[0])
        const file = e.target.files[0];
        let data = new FormData();
        data.append('image', e.target.files[0]);

         const result =  await axios.post('https://api.imgur.com/3/upload',data, 
         {headers: { 
            'Authorization': 'Bearer 5eeae49394cd929e299785c8805bd168fc675280',
            'Content-Type' : 'multipart/form-data',

          }});
          console.log(result.data.data.link);
          let item = {token : localStorage.getItem('token'), link : result.data.data.link}
          const response = await axios.post('https://ecell-startin-backend.onrender.com/users/payment-detail',
          item,
          {headers:{
            "Content-Type":'application/json',
            "Accept":'application/json',
          }}
          )
          console.log(response);
        // basicUpload({
        //     accountId: "FW25awF",
        //     apiKey: "public_FW25awFBhDZhMzVWBDYaRuPTs4ne",
        //     requestBody: new Blob( // Or: pass a 'file' object from an input element.
        //       e.target.files
        //     ),
        //     querystring : {
        //         fileName: `${teamName}_payment.jpg`,
        //         fielNameVariablesEnabled: true,
        //         tag: ["images/payment"]
        //     }
        // }).then(
        //   response => {console.log(`Success: ${JSON.stringify(response)}`);
        //     console.log(response.fileUrl)},
        //   error => console.error(error)
        // );
    }

    const showToastMessage = (x) => {
      toast.success(`${x}`, {
          position: toast.POSITION.TOP_CENTER,
          className:'message_toast'
        });
  };
    const showToastMessage1 = (x) => {
      toast.error(`${x}`, {
          position: toast.POSITION.TOP_CENTER,
          className:'message_toast'
        });
  };
    return (
      <div className='loginhead'>
        <div className='navcontain1'>
         <div className="top1">
          <span onClick={()=>{window.location='/'}} className="headingis s1">Start-In</span>
         </div>
        </div>
        {toggle?
        <div className="teamnamebox1">
            <p>Total Amount: Rs. 200</p>
            <input type="file" onChange={(e)=>handleUpload(e)}></input>
        </div>
        :
    <div style={{ display: "flex", justifyContent: "center" }}>
    <Loader.Puff
      color="#00BFFF"
      height={50}
      width={50}
    /></div>
    }
  
      </div>
    )
  }
  
  export default Payment
  