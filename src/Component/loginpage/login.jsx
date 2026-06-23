import {Link} from "react-router-dom";
import {useState} from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    let navigate = useNavigate();
    let [logindata, setlogindata] = useState({});
    let [error, setError] = useState({});
    let handleChange = (e) => {     
        let {name, value} = e.target;
        setlogindata({...logindata, [name]: value})
    };
    
    let handleValidate = (logindata) => {
        const formError = {};
        if (!logindata.fullname) {
            formError.fullname = "fullname is required";
        } else if (!logindata.email) {
            formError.email = "email is required";
        } else if (!logindata.password) {
            formError.password = "password is required";
        } else if (!logindata.confirmPassword) {
            formError.confirmPassword = "confirm password is required";
        } else {
            console.log("api data", logindata);
            navigate("/admin");
        }
        setError(formError);
    };

    let handleClick = () => { 
        handleValidate(logindata);
    };

    console.log(error?.email)
    console.log(logindata)

  return (
    <>
     <div className="grid grid-cols-3 gap-4">
     <div className="..."></div>
     <div className="m-auto"> 
     <div className="card w-100 h-150 border-1 border-block-200 m-auto rounded-xl shadow-lg/30">
            <h1 className="card-header text-center font-bold text-2xl">login</h1>
            <div>
                <div className="card-body w-80 h-100 mx-auto mt-0 inline-block gap-1">
                    <div className="mt-5">
                    <label className="font-bold text-sm">Fullname</label>
                    <input name="fullname" className="w-full border-1 color-gray-200 h-8 rounded-lg" type="text" onChange={handleChange}/>
                    <p>{error.fullname}</p>
                    </div>
                    <div className="mt-5">
                    <label className="font-bold text-sm">email</label>
                    <input className="w-full border-1 color-gray-200 h-8 rounded-lg" type="email" onChange={handleChange}
                    name="email"
                    />
                    <p>{error.email}</p>
                    </div>
                    <div className="mt-5">
                    <label className="font-bold text-sm">password</label>
                    <input className="w-full border-1 color-gray-200 h-8 rounded-lg" type="password" onChange={handleChange}
                    name="password"
                    />
                    <p>{error.password}</p>
                    </div>
                    <div className="mt-5">
                    <label className="font-bold text-sm">confirm password</label>
                    <input className="w-full border-1 color-gray-200 h-8 rounded-lg" type="password" onChange={handleChange}
                    name="confirmPassword"
                    />
                    <p>{error.confirmPassword}</p>
                    </div>
                    <div> 
                        <button className="w-50 bg-blue-500 text-white h-8 rounded-lg mt-5" onClick={handleClick}>Login</button>
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
export default Login;