import {Link} from "react-router-dom";
import {useState} from "react";

function Signup() {

    let [signupdata, setsignupdata] = useState()
    let handleChange = (e) => {     
        let {name, value} = e.target;
        setsignupdata({...signupdata, [name]: value})
    };
    let handleClick
    console.log(signupdata)

  return (
    <>
     <div class="grid grid-cols-3 gap-4">
     <div class="..."></div>
     <div class="m-auto"> 
     <div className="card w-100 h-150 border-1 border-block-200 m-auto rounded-xl shadow-lg/30">
            <h1 className="card-header text-center font-bold text-2xl">login</h1>
            <div>
                <div className="card-body w-80 h-100 mx-auto mt-0 inline-block gap-1">
                    <div className="mt-5">
                    <label className="font-bold text-sm">Fullname</label>
                    <input className="w-full border-1 color-gray-200 h-8 rounded-lg" type="text" onChange={handleChange}/>
                    </div>
                    <div className="mt-5">
                    <label className="font-bold text-sm">email</label>
                    <input className="w-full border-1 color-gray-200 h-8 rounded-lg" type="email" onChange={handleChange}
                    name="email"
                    />
                    </div>
                    <div className="mt-5">
                    <label className="font-bold text-sm">password</label>
                    <input className="w-full border-1 color-gray-200 h-8 rounded-lg" type="password" onChange={handleChange}
                    name="password"
                    />
                    </div>
                    <div className="mt-5">
                    <label className="font-bold text-sm">confirm password</label>
                    <input className="w-full border-1 color-gray-200 h-8 rounded-lg" type="password" onChange={handleChange}
                    name="confirmPassword"
                    />
                    </div>
                    <div> 
                        <button className="w-50 bg-blue-500 text-white h-8 rounded-lg mt-5">Login</button>
                    </div>
                        <Link to="/signuppage">don't have an account</Link>
                </div>
            </div>                
        </div>
    
      </div>
      </div>
    </>
  );
}
export default Signup;