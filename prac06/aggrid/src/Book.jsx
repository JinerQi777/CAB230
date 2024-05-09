import React from 'react'
import { Button } from 'reactstrap'
import { useNavigate ,useSearchParams} from 'react-router-dom'

const Book = () => {
    const navigate = useNavigate()
    const [searchParams]=useSearchParams();
    const title=searchParams.get('title')
  return (
    <div className='container'> 
    <h1>Individual Book</h1>
    <p>The book that you selected was : {title}</p>

    <Button
    color='info'
    size='sm'
    className='mt-3'
    onClick={()=>navigate('/')}
    
    >
        Back
    </Button>


    </div>
  )
}

export default Book