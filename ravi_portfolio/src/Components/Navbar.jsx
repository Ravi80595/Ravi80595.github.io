import React from 'react'

const Navbar = () => {
  return (
    <div style={{borderBottom:"2px solid black"}}>
    <div style={{display:"flex",gap:'500px',margin:'15px'}}>
      <div>Logo</div>
      <div style={{display:"flex",justifyContent:'space-evenly',width:'90%'}}>
        <div>Home</div>
        <div>About</div>
        <div>Skills</div>
        <div>Resume</div>
        <div>Contact</div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
