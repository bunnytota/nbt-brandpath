import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
 import { useDispatch,useSelector } from 'react-redux'
 import { useEffect } from 'react'
 import { fetchapilogin } from '../Redux/action/myaction'
 import { ScrollView } from 'react-native'
const Api = () => {

const dispatch = useDispatch()

const curr = useSelector(state=>state.curryy.curry)
const error = useSelector(state=>state.curryy.error)

useEffect(()=>{
    dispatch(fetchapilogin())
},[dispatch]
)

return (
    <ScrollView>
      {error && <Text>{error}</Text>}
      {curr && <Text>{JSON.stringify(curr,null,2)}</Text>}
    </ScrollView>
  )
}

export default Api

const styles = StyleSheet.create({})