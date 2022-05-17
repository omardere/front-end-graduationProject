import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

function UserProfile() {
  const [adm,setAdm]=useState({
    em:"",
    st:"",
    dep:"",
    sal:"",
    img:""
  })
  const [data,setData]=useState({
    fname:"",
    lname:"",
    email:"",
    img:""
  })
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value;
    if(e.target.id==="img"){
      newdata[e.target.id]=e.target.files[0].name;
     }
    setData(newdata);
    localStorage.setItem("image",e.target.files[0].name)
    console.log(e.target.files[0].name);

    console.log(newdata);
  }
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/employee/byUserName/${localStorage.getItem("username")}`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }).then(
      (res)=>
      {
        localStorage.setItem("image",res.data.image)

        console.log(res.data.user.email)
      setAdm({
      em:res.data.user.email,
      st:res.data.startingDate,
      dep:res.data.department.name,
      sal:res.data.salary,
      img:res.data.image
       
      })
      setData({
        img:res.data.image
      })
    }
    )
  }, []);
  console.log(adm.dep)
  function submit(e){
    e.preventDefault();
    var fname;
    var lname;
    var email;


    if(data.fname==="")
    {
      fname=null;
    }
    else{
      fname=data.fname;
    }
    if(data.lname==="")
    {
      lname=null;
    }
    else{
      lname=data.lname;
    }
    if(data.email==="")
    {
      email=null;
    }
    else{
      email=data.email;
    }
    axios.put(`http://localhost:8080/api/v1/user/update/${localStorage.getItem("username")}/?firstName=${fname}&lastName=${lname}&email=${email}`,null,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }
    }).then(
      res=>{
        if(res.status===200)
        {
          setData({
            fname:"",
            lname:"",
            email:"",            
            });  
            setTimeout(function(){
              window.location.reload(false); 
             },1000);	
            localStorage.setItem("name",data.fname+" "+data.lname)

        }
      }
    ).catch(e=>
      {
        if(e.response.status===500)
        {
          alert("user name or email are alredy found")
        }
      })
    axios.put(`http://localhost:8080/api/v1/employee/updateByUserName/${localStorage.getItem("username")}/?image=${data.img}`,null,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }
    }).then(res=>{
      if(res.status===200)
      {
        localStorage.setItem("image",data.img)

      }
    })


  }
  var sr;
   sr="assets/img/"+ localStorage.getItem("image");
 
   console.log(sr)

  return (
    <div>

<section id="user_profile">
  <main style={{
    marginTop: "0px"}}
 id="main" className="main">
    <div className="pagetitle">
      <h1>Profile</h1>
      <nav>
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
          <li className="breadcrumb-item">Users</li>
          <li className="breadcrumb-item">Profile</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section className="section profile">
      <div className="row">
        <div className="col-xl-4">

          <div className="card">
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src={sr} alt="Profile" className="rounded-circle"/>
              <h2>{localStorage.getItem("name")}</h2>
              <h3>{localStorage.getItem("role")}</h3>

            </div>
          </div>

        </div>

        <div className="col-xl-8">

          <div className="card">
            <div className="card-body pt-3">
              {/* <!-- Bordered Tabs --> */}
              <ul className="nav nav-tabs nav-tabs-bordered">

                <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>





              </ul>
              <div className="tab-content pt-2">

                <div className="tab-pane fade show active profile-overview" id="profile-overview">
                  <h5 className="card-title">About</h5>
                  <p className="small fst-italic">this page contain general information about you .</p>

                  <h5 className="card-title">Profile Details</h5>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Full Name</div>
                    <div className="col-lg-9 col-md-8">{localStorage.getItem("name")}</div>
                  </div>

                   <div className="row">
                    <div className="col-lg-3 col-md-4 label">Department</div>
                    <div className="col-lg-9 col-md-8">{adm.dep}</div>
                  </div>

                   <div className="row">
                    <div className="col-lg-3 col-md-4 label">salary</div>
                    <div className="col-lg-9 col-md-8">{adm.sal}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">starting Date</div>
                    <div className="col-lg-9 col-md-8">{adm.st}</div>
                  </div>  

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">userName</div>
                    <div className="col-lg-9 col-md-8">{localStorage.getItem("username")}</div>
                  </div>
                   <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">{adm.em}</div>
                  </div> 

                </div>

                <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                  {/* <!-- Profile Edit Form --> */}
                  <form onSubmit={(e)=>submit(e)} >
                    <div className="row mb-3">
                      <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div className="col-md-8 col-lg-9">
                        <img src={sr} alt="Profile"/>
                        <div className="pt-2">
                          <input onChange={(e)=>handle(e)} id="img"  type="file" className="btn btn-primary btn-sm" title="Upload new profile image"/>
                        </div>
                      </div>
                    </div>

                    <div  className="row mb-3">
                      <label for="fullName" className="col-md-4 col-lg-3 col-form-label">first Name</label>
                      <div className="col-md-8 col-lg-9">
                        <input onChange={(e)=>handle(e)} id="fname" value={data.fname} style={{backgroundColor: "rgb(216, 164, 21)"}} name="firstName" type="text" className="form-control"  />
                      </div>
                    </div>

                    <div  className="row mb-3">
                      <label for="fullName" className="col-md-4 col-lg-3 col-form-label">last Name</label>
                      <div className="col-md-8 col-lg-9">
                        <input onChange={(e)=>handle(e)} id="lname" value={data.lname} style={{backgroundColor: "rgb(216, 164, 21)"}} name="lastName" type="text" className="form-control"  />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div className="col-md-8 col-lg-9">
                        <input onChange={(e)=>handle(e)} id="email" value={data.email} style={{backgroundColor: "rgb(216, 164, 21)"}} name="email" type="email" className="form-control" />
                      </div>
                    </div>

                   

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>
                  {/* <!-- End Profile Edit Form --> */}

                </div>


              </div>
              {/* <!-- End Bordered Tabs --> */}

            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
  {/* <!-- End #!main --> */}



  <a href="#!" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

</section>



    </div>
  )
}

export default UserProfile
