import React from "react"
import './App.css';

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: false,
    employment: "",
    favColor: "",
  })

  console.log(formData)

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevName => {
      return{
        ...prevName,
        [name] : type === "checkbox" ? checked : value
      }
    })    
  }

function handleSubmit(event){
  event.preventDefault()
  //SubmitToApi(formData)
}

  return (
    <div className="">
       {/* <form onSubmit={handleSubmit}> */}
       <form>
            <input type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={formData.firstName} />
            <input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName}/>
            <input type="email" placeholder="Email Address" onChange={handleChange} name="email" value={formData.email} />
            <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Add Comments"/>
            <label htmlFor="isFriendly">Are you Friendly?</label>
            <input type="checkbox" id="isFriendly" checked={formData.isFriendly} onChange={handleChange}  name="isFriendly"/> 
         
            <br />

            <fieldset>
              <legend>Current Employment Status</legend>

              <input type="radio" id="umemployed" name="employment" value="unemployment" onChange={handleChange} checked={formData.employment === "unemployment"}/>
              <label>UnEmployed</label>

              <input type="radio" id="part-time" name="employment" value="part-time" onChange={handleChange} checked={formData.employment === "part-time"}/>
              <label>Part-time</label>

              <input type="radio" id="full-time" name="employment" value="full-time" onChange={handleChange} checked={formData.employment === "full-time"}/>
              <label>Full-time</label>
            </fieldset>
            <br/>

            <label>What is your favorite color</label><br />

            <select name="favColor" id="favColor" value={formData.favColor}  onChange={handleChange}>
            <option value="">--Choose-</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>      
              <option value="violent">Violent</option>        
            </select>
            <br />
            <br/>

          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
  );
}

export default App;
