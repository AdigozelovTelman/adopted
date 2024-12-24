import React from 'react'
import Layout from '../../components/common/layout/Layout'
import Data from './components/data/Data'
import Featured from './components/featured/Featured'
import Needs from './components/needs/Needs'
import Steps from './components/steps/Steps'
import Waiting from './components/waiting/Waiting'


const Home = () => {
  return (
    <>
    <Layout>
        <Needs/>
        <Steps/>
        <Waiting/>
        <Data/>
        <Featured/>
    </Layout>
    </>
  )
}

export default Home