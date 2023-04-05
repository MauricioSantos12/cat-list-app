import React, { useState, useEffect } from 'react'
import { getCats } from '../../actions/index'
import { ArrowLeft, ArrowRight } from 'feather-icons-react/build/IconComponents';

import './content.scss'

const Content = () => {

  const [cats, setCats] = useState([])
  const [pagination, setPagination] = useState(1)

  useEffect(()=> {
    const getCatsFn = async () => {
      let response = await getCats(pagination);
      setCats(response.data.data)
    }
    getCatsFn()
  }, [pagination])

  const leftPagination = () => {
    if(pagination != 1){
      window.scrollTo({top: 0, behavior: 'smooth'}); 
      setPagination(pagination - 1)
    }
  }

  return (
    <section className='general--container'>
      <h1>Our favorites Cats</h1>
      <div className='cats--container'> 
        {
          cats.map((cat)=> {
            return(
              <div className='cat--container'> 
                <div class="card front">
                  <img src={cat.images.downsized.url} alt={cat.id} key={cat.id} />
                </div>
                <div class="card back">
                  <h2>{cat.title}</h2>
                </div>
              </div>
            )
          })
        }
        
      </div>
      <div className='pagination'>
        <div className='icon--container'>
          <ArrowLeft className='left' onClick={()=> leftPagination()} />
        </div>
        <p>{pagination}</p>
        <div className='icon--container'>
          <ArrowRight className='right' onClick={()=>  { window.scrollTo({top: 0, behavior: 'smooth'}); setPagination(pagination + 1) }} />
        </div>
      </div>
    </section>
  )
}

export default Content