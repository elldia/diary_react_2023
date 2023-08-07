import { useParams } from "react-router-dom";

const Diary =()=>{
    const {id} = useParams();
    console.log(id);
    return (
        <>
            <div>{id}번 일기</div>
            <div>Diary</div>
        </>
    )
}

export default Diary;