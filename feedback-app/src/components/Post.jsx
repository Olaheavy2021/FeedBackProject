import {Navigate,useParams, useNavigate,Routes, Route} from 'react-router-dom'

function Post() {
    const params = useParams()
    const status = 200
    const navigate = useNavigate()

    // redirect
    if(status === 404){
        return <Navigate to='/notFound'/>
    }

    const onClick = () =>{
        console.log('Hello')
        navigate('/about')
    }
  return (
    <div>
        <h1>Id : {params.id}</h1>
        <h1>Name : {params.name}</h1>
        <button onClick={onClick}>Navigate</button>
        <Routes>
            <Route path='/show' element={<h1>Hello</h1>} />
        </Routes>
    </div>
  )
}

export default Post