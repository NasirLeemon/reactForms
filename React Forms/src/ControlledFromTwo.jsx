import React, { useRef, useState } from "react";

function ControlledFromTwo() {

    const initialData = {
        firstName : '',
        lastName: '',
        profession: '',
    }
    const [userData,setUserData] = useState(initialData)

    const [errors,setErrors] = useState({
        firstName: '',
        lastName : '',
        profession : ''
    })

    const userErrors = {
        firstName : '',
        lastName : '',
        profession : ''
    }

    const firstNameRef = useRef(null)

    let isError = false;

    const [submit, setSubmit] = useState(false)

    const handleChange = (evt) => {
            setUserData({
                ...userData,
                [evt.target.name] : evt.target.value
            })
    }

    const handleSubmit = (evt) => {

        firstNameRef.current.focus()

        const {firstName, lastName, profession} = userData
        evt.preventDefault()
        // console.log(userData);

        if(firstName === ''){
            isError = true;
            userErrors.firstName = 'FirstName is Required'
        }

        if (lastName === '') {
            isError = true;
            userErrors.lastName = 'Last Name is Required'
        }

        if (profession === '') {
            isError = true;
            userErrors.profession = 'Profession is Required'
        }
        
        setErrors(userErrors)
        
        if(isError) return

        setSubmit(true)

        setUserData(initialData)


    }

const {firstName, lastName, profession} = userData

  return (
    <>
      <div>
        <h2>React Forms: Two</h2>
        {submit && <p>Form Submitted Successfully</p>}
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="firstName">
              <label htmlFor="firstName">First Name: </label>
              <input 
              type="text" 
              name="firstName" 
              id="firstName"
              value={firstName}
              onChange={handleChange}
              ref={firstNameRef}
               />
            </div>
            {errors && <small style={{color: 'red'}}>{errors.firstName}</small>}
            <div className="lastName">
              <label htmlFor="lastName">Last Name: </label>
              <input 
              type="text" 
              name="lastName" 
              id="lastName"
              value={lastName}
              onChange={handleChange} />
            </div>
            {errors && <small style={{color: 'red'}}>{errors.lastName}</small>}
            <div className="profession">
                <label htmlFor="profession">Profession: </label>
                <select name="profession" id="profession" onChange={handleChange} value={profession} >
                    <option disabled>Select</option>
                    <option value="web_dev">Web Developer</option>
                    <option value="soft_dev">Software Developer</option>
                    <option value="designer">Designer</option>
                </select>
            </div>
            {errors && <small style={{color: 'red'}}>{errors.profession}</small>}
            <div className="submit">
                <input type="submit" value="submit" />
            </div>
          </form>
        </div>
        
      </div>
    </>
  );
}

export default ControlledFromTwo;
