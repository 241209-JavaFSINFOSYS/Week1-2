//TODO: notes on props

interface ChildProps{
    color:string;
}

export const ChildComponent:React.FC<ChildProps> = ({color}) => {



    return(
        <>
            <h4>Hello from the Child Component!</h4>
            <p>My Parent's favorite color is: {color}</p>
        </>
    )

}