import React, { useEffect, useState } from 'react'
import {Row} from 'react-bootstrap'
import './style/style.css'
import fetchJsonp from 'fetch-jsonp'
import FlightList from './FlightList'

 function Home() {
  const [data, setData] = useState([])

  const [categories, setCategories] = useState({
    OW:"",
    ST:"",
    SA:""
  })
  const checkboxHandler = (e) =>{
  
    const { name } = e.target;
    
        setCategories({
        ...categories,
            [name]: !categories[name]
          })
  }


  const fetchData = async () =>{
       const data = fetchJsonp('http://kayak.com/h/mobileapis/directory/airlines/homework', {
        jsonpCallbackFunction: 'invalidCallbackFunctionName'
      })
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        setData(json)
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
 }


useEffect(() =>{
   fetchData()
},[])

const checkedBox = Object.entries(categories).filter(category => category[1]
).map(category => category[0])

const filteredFlight = data.filter( category =>
      category.alliance.includes(checkedBox))
    console.log(filteredFlight)


  return (
    <>
    <div className='section'>
      <div className='home-header'>
          <p className='heading'>Airlines</p>
          <div>
            <p className='sub-heading'>Filter by Alliances</p>
          </div>
              <div className='d-flex filter-heading'>
                <div className='d-flex'>
                    <input type="checkbox" className='box' name="OW" checked={categories.OW} value="OW"  onChange={checkboxHandler} />
                    <label className='filter-option' htmlFor="oneworld">Oneworld</label>
                </div>
                <div className='d-flex'>
                    <input type="checkbox" className='box' name="ST"  checked={categories.ST} value="ST" onChange={checkboxHandler} />
                    <label className='filter-option' htmlFor="sky-team">Sky Team</label>
                </div>
                  <div className='d-flex'>
                    <input type="checkbox" className='box' name="SA"  checked={categories.SA} value="SA" onChange={checkboxHandler} />
                    <label className='filter-option' htmlFor="star-alliance">Star Alliance</label>
                  </div>
                 
              </div>
            
                <Row className='card-row'>
                    <FlightList data={filteredFlight.length === 0 ? data : filteredFlight} />
                </Row>
        </div>
    </div>
    </>
   
  )
}

export default Home