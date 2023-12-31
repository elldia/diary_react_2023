// 이미지 import js
import emotion1 from './img/emoji_smiling.png';
import emotion2 from './img/emoji_slightly.png';
import emotion3 from './img/emoji_neutral.png';
import emotion4 from './img/emoji_frowning.png';
import emotion5 from './img/emoji_pouting.png';

export const getEmotionImgById = (emotionId)=>{
    const targetEmotionId = String(emotionId);
    switch(targetEmotionId){
        case '1':return emotion1;
        case '2':return emotion2;
        case '3':return emotion3;
        case '4':return emotion4;
        case '5':return emotion5;
        default : return null;
    }
}

function Util(){
    return (
        <>
            <img src={getEmotionImgById(1)} alt="" />    
            <img src={getEmotionImgById(2)} alt="" />    
            <img src={getEmotionImgById(3)} alt="" />    
            <img src={getEmotionImgById(4)} alt="" />    
            <img src={getEmotionImgById(5)} alt="" /> 
        </>
    )
}

//현재 날짜
export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
    if (month < 10) {month = `0${month}`}
    if (date < 10) {date = `0${date}`}
    return `${year}-${month}-${date}`;
}

//감정이미지 리스트
export const emotionList = [
    {
        id:1,
        name:'완전 좋음',
        img:getEmotionImgById(1),
    },
    {
        id:2,
        name:'좋음',
        img:getEmotionImgById(2),
    },
    {
        id:3,
        name:'그럭저럭',
        img:getEmotionImgById(3),
    },
    {
        id:4,
        name:'나쁨',
        img:getEmotionImgById(4),
    },
    {
        id:5,
        name:'끔찍함',
        img:getEmotionImgById(5),
    },
];

//일기 State 변경 시 일기 필터링
export const getMonthRangeByDate = (date) => {
    const beginTimeStamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    const endTimeStamp = new Date(
        date.getFullYear(),
        date.getMonth()+1,
        0,
        23,
        59,
        59
    ).getTime();
    return { beginTimeStamp, endTimeStamp };
}


export default Util;