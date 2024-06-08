import React,{useState} from 'react'
import "./styles.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from './Navbar'

const uniqueList=[
  ...new Set(Menu.map((currElement)=>{
  return currElement.category;
})
),
"All",
];
const Kitchen = () => {
  const [menuData,setMenuData]=useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList);


  const filterItem=(category)=>{

    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList=Menu.filter((currElement)=>{
        return currElement.category===category;
    });
    setMenuData(updatedList);
  };
  return (
    <>  
        <h1>Mumma's Recipes</h1> 
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData}/>
    </>   
  );
};

export default Kitchen