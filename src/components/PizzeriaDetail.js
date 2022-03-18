export default function PizzeriaDetail({ item }) {
    return(
        <>
            <h4>{item.id}</h4>
            <h4>{item.pizzeria}</h4>
            <h4>{item.city}</h4>        
        </>
    )
}