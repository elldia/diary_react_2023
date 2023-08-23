import Editor from "../component/Editor";

const Home = () => {
    return (
        <div>
            <Editor onSubmit={()=>{alert('작성완료 버튼을 클릭함')}} />
        </div>
    )
}

export default Home;