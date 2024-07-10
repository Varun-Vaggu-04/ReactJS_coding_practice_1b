const element = (
    // Write your code here.
    <div className='background-container'>
      <h1 className='main-heading'>Congratulations</h1>
      <div className='profile-container'>
        <img
          className='profile-image'
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        />
        <h2 className='profile-heading'>Kiran V</h2>
        <p className='description'>
          Vishnu Institute of Science and Techology, Bhimavaram
        </p>
        <img
          className='watch-image'
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        />
      </div>
    </div>
  )
  
  ReactDOM.render(element, document.getElementById('root'))
  