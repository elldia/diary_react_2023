import Button from "./Button";
import "../styles/Editor.css";
import { useState } from 'react';
import { emotionList, getFormattedDate } from "../util";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

const Editor = ({initDate, onSubmit}) => {
    //취소하기(뒤로)
    const navigate = useNavigate(); //('./path') 특정경로이동
    const handleOnGoBack = () => { navigate(-1); }
    const [state, setState] = useState({
        // 날짜, 감정이미지, 감정일기 초기값 상태설정
        date:getFormattedDate(new Date()),
        emotionId:3,
        content:'',
    });
    const handleChangeDate = (e) => {
        setState({
              ...state,
              date:e.target.value,
        });
    };
    //일기함수
    const handleChangeContent = (e) => {
        setState({
            ...state,
            content:e.target.value,
        })
    }
    //작성완료 버튼 함수
    const handleSubmit = () => {
        onSubmit(state);
    }
    //감정이미지 함수
    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId,
        })
    }
    return (
        <div className="Editor">
            <div className="editor_section">
                {/* 날짜 */}
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input type="date" value={state.date} onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor_section">
                {/* 감정 */}
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((it)=>(
                        <EmotionItem key={it.id} {...it} onClick={handleChangeEmotion}
                        isSelected={state.emotionId === it.id} />
                    ))}
                </div>
            </div>
            <div className="editor_section">
                {/* 일기 */}
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea placeholder="오늘은 어땠나요?" value={state.content} onChange={handleChangeContent}></textarea>
                </div>
            </div>
            <div className="editor_section bottom_section">
                {/* 취소하기, 작성완료 */}
                <Button text={"취소하기"} onClick={handleOnGoBack} />
                <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default Editor;