import axios from "axios";
import { useEffect, useState } from "react";
import { IOneDogVote } from "../types";

interface ITopThreeDogs{
    topTenDogs: IOneDogVote[]|undefined
}
export function TopThreeDogs({topTenDogs}:ITopThreeDogs):JSX.Element{
    const [breedName, setBreedName]= useState<string>("")
    const [dogImageURL, setDogImageURL]= useState<string>("")
    async function getOneDogInfo(number:number){
        const response= await axios.get(`https://dog-breed-vote-sevgi-keadeish.herokuapp.com/${number}`)
        const dogName= response.data[0].breed_name
        setBreedName(dogName)
    }
    function modifyBreedName(name:string): string{
        return name.replace(" ", "/").toLowerCase()
    }
    async function getOneDogImage(name:string){
        const response= await axios.get(`https://dog.ceo/api/breed/${modifyBreedName(breedName)}/images/random`)
        const dogImageInfo = response.data.message
        setDogImageURL(dogImageInfo)
    }
    useEffect(()=>{
        getOneDogInfo(0);
        getOneDogImage(breedName);
    },[setBreedName])
    console.log(modifyBreedName(breedName))
    console.log("hello")
    return(
        <>
            <img src={dogImageURL} alt="most voted dog"></img>
        </>
    )
}