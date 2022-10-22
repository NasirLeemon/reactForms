import React, { useRef, useState } from "react";

function ControlledForm() {

  const initialData = {
    firstName: "",
    lastName: "",
    email: '',
    profession: "",
    gender: "male",
  }
  const [userData, setUserData] = useState(initialData);

const firstNameRef = useRef(null)

  const [errors, setErrors] = useState({
    firstName : '',
    lastName : '',
    email: '',
    profession : ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (evt) => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });

    setErrors({
      ...errors,
      [evt.target.name] : ''
    })
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(userData);
    const {firstName, lastName, email, profession} = userData

    firstNameRef.current.focus()

    let isError = false;

    const userErrors = {
      firstName : '',
      lastName : '',
      email : '',
      profession : '',
      
    }

    if (firstName === '') {
      isError = true;
      userErrors.firstName = 'First Name is Required'
    } 

    if (lastName === '') {
      isError = true;
      userErrors.lastName = 'Last Name is Required'
    } 

    if (email === '') {
      isError = true;
    userErrors.email = 'Email is Required'
    } 

    if (profession === '') {
      isError = true;
      userErrors.profession = 'Profession is Required'
    } 

  
  setErrors(userErrors)

  if (isError) return

  setSubmitted(true)

  setUserData(initialData)

  };


  const { firstName, lastName, email, profession, gender } = userData;

  return (
    <>
      <div>
        {submitted && <h3>Form is Submitted Successfully</h3>}
        <form onSubmit={handleSubmit}>
          <div className="firstname">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              ref={firstNameRef}
              onChange={handleChange}
              value={firstName}
            />
            
          </div>
          <p style={{color : 'red'}}>{errors.firstName}</p>
          <div className="lastName">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={lastName}
            />
          </div>
          <p style={{color : 'red'}}>{errors.lastName}</p>
          <div className="email">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <p style={{color : 'red'}}>{errors.email}</p>
          <div className="profession">
            <label htmlFor="profession">Profession: </label>
            <select
              name="profession"
              id="profession"
              value={profession}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="soft-Engineer">Software Engineer</option>
              <option value="web-developer">Web Developer</option>
              <option value="digital-marketer">Digital Marketer</option>
            </select>
          </div>
          <p style={{color : 'red'}}>{errors.profession}</p>
          <div className="gender">
            <label htmlFor="gender">Gender: </label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="male"
              onChange={handleChange}
              checked={gender === 'male'}
            />
            Male
            <input
              type="radio"
              name="gender"
              id="gender"
              value="female"
              onChange={handleChange}
              checked={gender === 'female'}
            />
            Female
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
        
      </div>
    </>
  );
}

export default ControlledForm;
