import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";

const Home =()=>{
    const [search, setSearch] = useSearchParams();
    console.log(search.get('sort'))
    return (
        <div>
            <Header
                title={'Home'}
                leftChild={<Button text={'긍정'} type="positive" onClick={()=>{alert('hi')}} />}
                rightChild={<Button text={'부정'} type="negative" onClick={()=>{alert('hi')}} />}
            />
            {/* <Button text={'기본'} onClick={()=>{alert('hi')}} />
            <Button text={'긍정'} type="positive" onClick={()=>{alert('hi')}} />
            <Button text={'부정'} type="negative" onClick={()=>{alert('hi')}} /> */}
            {/* <Button onClick={()=>{alert('hi react')}} /> */}
            {/* <br />
            Home {search.get('sort')} <br />
            Home2 {search.get('sort2')} */}
        </div>
    )
}

export default Home;