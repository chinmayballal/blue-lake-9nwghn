const Login = () => {
  return (
    <div className='flex-container'>
      <div className="flex">
        <label className='label-login' htmlFor="username">Name </label>
        <input id="username" type="text" />
      </div>
      <br/>
      <div className="flex">
        <label className='label-password' htmlFor="password">Password </label>
        <input id="password" type="password" />
      </div>
      <br/>
      <div>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Login;