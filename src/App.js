/* eslint-disable no-unused-vars */
import './App.css';
import Header from './components/Header';
import Item from './components/Item';

//Importing Images

import Accessories from '../src/assets/Desktop-Accessories.jpg'
import ModelS from '../src/assets/Desktop-ModelS.jpeg'
import Model3 from '../src/assets/Desktop-Model3.jpeg'
import ModelX from '../src/assets/Desktop-ModelX.jpeg'
import ModelY from '../src/assets/Desktop-ModelY.jpeg'
import SolarPanels from '../src/assets/Desktop-SolarPanels.jpeg'
import SolarRoof from '../src/assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className="app__itemsContainer">

        <Item
          title="Lowest Cost Solar Panel In America"
          desc="Money-Back Guaratee"
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons = 'true'
          first
        />

        <Item
          title="Model S"
          desc="Starting at $69,420"
          descLink=''
          backgroundImg={ModelS}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons = 'true'
          
        />

        <Item
          title="Model 3"
          desc="Money-Back Guaratee"
          descLink=''
          backgroundImg={Model3}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons = 'true'
          
        />

        <Item
          title="Model X"
          desc="Money-Back Guaratee"
          descLink=''
          backgroundImg={ModelX}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons = 'true'
          
        />

        <Item
          title="Model Y"
          desc="Money-Back Guaratee"
          descLink=''
          backgroundImg={ModelY}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons = 'true'
          
        />

        <Item
          title="Solar for new Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons = 'true'
          
        />

        <Item
          title="Accessories"
          desc=""
          descLink=''
          backgroundImg={Accessories}
          leftBtnText='SHOP NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          //twoButtons= 'true'
          
          
        />

      </div>

    </div>
  );
}

export default App;
