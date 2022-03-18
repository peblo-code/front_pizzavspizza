import DummyData from './dummydata.json';
import PizzeriaDetail from './PizzeriaDetail';

export default function PizzeriasList() {
    return(
        <>
            {
                DummyData.map((data) => {
                    return <PizzeriaDetail item={data}/>
                })
            }
        </>
    )
}