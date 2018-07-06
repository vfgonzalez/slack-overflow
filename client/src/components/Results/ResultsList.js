import React from 'react'
import API from '../../utils/API'

const ResultsList =(props) =>

<div className="list-group">{props.children}<p>hello</p>

</div>


// this can be depricated, it is being handled on the app.js page via a click handler

export default ResultsList;