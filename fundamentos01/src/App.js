import React, {Component} from 'react'
import './App.css'

import IndiretaPai from './components/basic/IndiretaPai' 
import Estado from './components/basic/Estado'
import FamiliaClone from './components/basic/FamiliaClone'
import FamiliaMembroClone from './components/basic/MembroFamiliaClone'
import Familia from './components/basic/Familia'
import Card from './components/layout/Card'
import Propiedades from './components/basic/Propiedades'
import OlaMundo from './components/basic/OlaMundo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exemplos React</h1> 

        <div className="Cards">

            <Card titulo="Comunicação Indireta (de filho para pai)" cor="#ffb400">
                <IndiretaPai/>
            </Card>

            <Card titulo="Estado" cor="#ffb400">
                <Estado/>
            </Card>

            <Card titulo="Componentes aninhados (cloneElement)" cor="#82212e">
                <FamiliaClone sobrenome="Simpson">
                    <FamiliaMembroClone nome="Homer Jay"/>
                    <FamiliaMembroClone nome="Marjorie"/>
                    <FamiliaMembroClone nome="Bartholomew JoJo"/>
                    <FamiliaMembroClone nome="Lisa Marie"/>
                    <FamiliaMembroClone nome="Margareth"/>
                </FamiliaClone>
            </Card>

            <Card titulo="Componentes aninhados (Comunicação direta)" cor="#d1495b">
                <Familia sobrenome="Simpson"/>
            </Card>
            
            <Card titulo="Propiedades" cor="#91cb3e">
                <Propiedades nome="Homer" sobrenome="Jay Simpson" idade={38}/>
            </Card>

            <Card titulo="Olá mundo" cor="#226ce0">
                <OlaMundo />
            </Card>  

        </div>
      </div>
    )
  }
}

export default App;
