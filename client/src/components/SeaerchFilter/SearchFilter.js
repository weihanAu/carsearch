import React, { useState,useRef } from "react";
import Wraper from "../Wraper/Wraper";
import styles from "./SearchFilter.module.css"
import Button from "../Button/Button";
import Select from "../Select/Select";
import InfoBar from "./infoBar/infoBar";
import SearchResults from "../SearchResults/SearchResults"
import { fetchCars } from "../../utilities/functions";

const SearchFilter =()=>{
   const childRef = useRef();
   const [formState, setFormState] = useState({
    make: "", 
    model: "", 
    year: "", 
    transmission: "", 
   });

   const [options,setOptions]=useState({
    make: ['Toyota','audi','BMW'],
    model: [],
    year: [],
    transmission: ['auto','manual'],
   });

   const triggerChildFunction = () => {
     if (childRef.current) {
      childRef.current.sayHello(); // Call the child's function
     }
   };

   //narrow down filters based on make
   async function handleMakeChange(make){
    if(!make){
      setOptions(pre=>{
        return{...pre,model:[]}
      });
      return;
    }
    try{
      const response = await fetchCars(`http://localhost:5000/api/cars?make=${make}`);
      let modlesCollections=[]
      response.cars.map(car=>{modlesCollections.push(car.model);});
      modlesCollections = [...new Set(modlesCollections)];
      setOptions(pre=>{return{...pre,model:modlesCollections}});
    }catch(e){
      console.log(e)
    }
   }

   async function handleMakeModelChange(model){
    const make = formState.make;
    try{
      const response = await fetchCars(`http://localhost:5000/api/cars?make=${make}&model=${model}`);
      let yearCollections=[]
      response.cars.map(car=>{yearCollections.push(car.year);});
      yearCollections = [...new Set(yearCollections)];
      setOptions(pre=>{return{...pre,year:yearCollections}});
    }catch(e){
      console.log(e);
    }
    
   }

  return (
    <>
      <Wraper>
        <h1 className={styles.ngStarInserted}>Used car sales</h1>
        <div className={styles.filterWraper}>
          <div className={styles.newFiltersWraper}>
            <div className={styles.filtersWraper}>

              <Select name="make" options={options.make} 
                handleChange={(i)=>{
                  //narrow down filters based on make
                  handleMakeChange(i);
                  setFormState((prvState)=>{ return{...prvState,make:i}})}
                }
              />
              <Select name="model" options={options.model} 
                handleChange={(i)=>{
                  //narrow down filters based on make and year
                  handleMakeModelChange(i);
                  setFormState((prvState)=>{return{...prvState,model:i}})}
                } 
              />
              <Select name="year" options={options.year} handleChange={(i)=>{setFormState((prvState)=>{return{...prvState,year:i}})}} />
              <Select name="transmission" options={options.transmission} handleChange={(i)=>{setFormState((prvState)=>{return{...prvState,transmission:i}})}} />
            </div>
          <div className={styles.filterActions}>
            <a></a>
            <div className={styles.filtersButtons}>
              <Button bgBlack text="Apply" onClick={triggerChildFunction}/>
              <Button text="Clear" />
            </div>
          </div>
          </div>
        </div>
        <InfoBar />
      </Wraper>
      <SearchResults formState={formState} options={options} ref={childRef}/>
    </>
  )
}

export default SearchFilter;