//Remember, Interfaces in TS are like Model Classes in Java

//We're going to use this in Character and CharacterContainer, so it's nice write a globally accessible Interface that will basically act as a custom datatype

export interface CharacterInterface {

    name:string,
    house:string,
    quote:string,
    weapon?:string

    // "?" just means the value is optional, so we aren't required to provide one 
}