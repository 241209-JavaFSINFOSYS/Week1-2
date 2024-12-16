import { useEffect, useState } from "react"
import { CharacterInterface } from "../../Interfaces/CharacterInterface"
import { Character } from "./Character"

//This component will render multiple Character components 
export const CharacterContainer:React.FC = () => {

    //State variable that holds an Array of Character Interfaces
    //This Array will get populated when the component renders thanks to the useEffect hook below
    const [characters, setCharacters] = useState<CharacterInterface[]>([])

    /* useEffect can listen for events to trigger some functionality
    but usually, I just use it to execute some logic when the component renders 
    
    We'll use a useEffect to simulate a GET request that fills the Character Array
    Imagine that when this component renders, a GET is sent to the backend for relevant data*/
    useEffect(() => {

        //set the character state array to hold some GOT characters
        //This is where the GET request would happen - hardcoded here
        setCharacters(
            [
                {
                    name:"Jon Snow",
                    house:"Stark",
                    quote:"Winter is Coming",
                    weapon:"Sword"
                },
                {
                    name:"Arya Stark",
                    house:"Stark",
                    quote:"Not Today",
                    weapon:"Needle"
                },
                {
                    name:"Daenerys Targaryen",
                    house:"Targaryen",
                    quote:"Dracarys"
                }
            ]
        )
    }, []) //we added [] at the end, which means this useEffect will run once the component renders


    return(
        <>
            <h2>Character Container: </h2>

            {/* using map() to render a Character Component for every character in the Array */}
            <div>
                {characters.map((character:CharacterInterface) => {
                    return <Character {...character}/>
                })}
            </div>

            {/* All that's happening is:
                -Loop through the characters State Array
                -For every CharacterInterface object in the Array, render a Character component 
                -We can pass in an entire object using the "..." syntax AKA the spread operator 
                
                Why do we need the spread operator? (...)
                It "spreads" the object out into individually accessible values
                We wouldn't be able to send the data the the child component without it
                Basically it's a way to make values accessible*/}

        </>
    )


}