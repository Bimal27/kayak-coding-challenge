import React from 'react'
import {Col} from 'react-bootstrap'
import './style/style.css'

const FlightList = ({data}) => {
  return (
    <>
    {data.map((item,i) => (
                          <Col lg={3} md={4} sm={6} key={i} className='card-col'>
                            <div className="card">
                                <img className="card-logo" src="https://static.vecteezy.com/system/resources/thumbnails/000/620/372/small/aviation_logo-22.jpg" alt="logo" />
                                <p className='name'>{item.name}</p>
                                    <div id="DivForHoverItem">
                                      <p className='alience'>{item.alliance}</p>
                                      <p className='info'>{item.phone}</p>  
                                      <a href={item.site} className='site-info'>{item.site}</a>
                                  </div>
                              </div>
                        
                          </Col>
                
                    ))}
    </>
  )
}

export default FlightList