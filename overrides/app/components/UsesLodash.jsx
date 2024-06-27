import React from 'react'
import {get} from 'lodash'

const UsesLodash = () => {
    return <h1>{get({a: 'Hello', b: 'World'}, 'a')}</h1>
}

export default UsesLodash
