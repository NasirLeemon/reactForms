import React from 'react'
import { useState } from 'react'


function ControlledForm() {

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    profession: '',
  })


  const handleChange = (evt) => {
    setUserData({
      ...userData,
      [evt.target.name] : evt.target.value
    }) 
  }


  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(userData);
  }
  
  
const {firstName, lastName, email,gender, profession} = userData

  return (
    <>
    <div>ControlledForm</div>
    <form onSubmit={handleSubmit}>
      <div>
    <label htmlFor="firstName">First Name: </label>
    <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleChange} />
      </div>
    <div>
    <label htmlFor="lastName">Last Name: </label>
    <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleChange} />
    </div>
    <div>
    <label htmlFor="email">Email: </label>
    <input type="text" name="email" id="email" value={email} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="gender">Gender:</label>
      <input type="radio" name="gender" id="gender" value='male' onChange={handleChange} checked={gender === 'male'}/>Male
      <input type="radio" name="gender" id="gender" value='female' onChange={handleChange} checked={gender === 'female'} />Female

    </div>
    
    <div>
    <label htmlFor="profession">Profession: </label>
    <select name='profession' id='profession' value={profession} onChange={handleChange}>
      <option value="" disabled>Select</option>
      <option value="web-dev">Web Developer</option>
      <option value="soft-dev">Software Developer</option>
      <option value="designer">Designer</option>
    </select>
    </div>
    <input type="submit" value='submit'/>
    </form>
    </>
  )
}

export default ControlledForm