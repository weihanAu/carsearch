import React,{useEffect,useState,forwardRef, useImperativeHandle } from "react";
import styles from "./SearchResults.module.css";
import { fetchCars } from "../../utilities/functions";
import SingleCar from "./SingleCar/SingleCar";

const SearchResults =forwardRef(({formState,options},ref)=>{

  const [results,setResults]= useState(['']);
  const [page,setPage]=useState(1);
  const [totalPage,setTotalPage]=useState(0);
  
  const argumentMake =formState.make;
  const argumentModel =formState.model;
  const argumentYear =formState.year;
  const argumentGear =formState.transmission;

  console.log(argumentYear,argumentModel,argumentMake,argumentGear)

  useImperativeHandle(ref, () => ({
    sayHello() {
      alert("Hello from Child!");
    },
  }));

  useEffect(
     ()=>{
        fetchCars(`http://localhost:5000/api/cars?page=${page}&limit=5`)
        .then( results=>{
          setResults(results.cars);
          setTotalPage(results.totalPages)
        })
        .catch(e=>console.log(e))
        // .final(e)
    },[]
  );

  function handleLoadMore(){
    fetchCars(`http://localhost:5000/api/cars?page=${page+1}&limit=5`)
        .then( payload=>{
          setResults([...payload.cars,...results]);
          setPage(page+1)
        })
        .catch(e=>console.log(e))
  }

  return(
    <div className={styles.carResultListing}>
      <div className={styles.container}>
        <table className={styles.vehicleTable}>
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Engine</th>
              <th>Color</th>
              <th>Transmission</th>
              <th>Mileage</th>
              <th>Sale Price</th>
            </tr>
          </thead>
          <tbody>       
            { results.map((car)=>{
              if(!car._id){
                return null;
              }
              return (
                <SingleCar key={car._id} car={car} buttonClassName={styles.revealButton}/>
              )
              })
            }      
          </tbody>
        </table>
        {page==totalPage?
          '':
          <div className={styles.loadmoreWraper}>
            <button 
              className={styles.loadmore} 
              onClick={handleLoadMore}>
              load more
            </button>
          </div>}
      </div>
    </div>
  );
})

export default SearchResults;