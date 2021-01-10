let URL;
const maleurl = "https://teachablemachine.withgoogle.com/models/54YEkhrlK/"; //남자 모델
const femaleurl = "https://teachablemachine.withgoogle.com/models/xfsestsv3/"; //여자 모델
let model, webcam, labelContainer, maxPredictions;
async function init() {
    if ($('#gender').prop('checked') == false) {
        URL = femaleurl;
    } else if ($('#gender').prop('checked') == true) {
        URL = maleurl;
    }
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        // and class labels
        var make_div = labelContainer.appendChild(document.createElement('div'));
        make_div.setAttribute('id', 'result');
    }
}
async function predict() {
    var image = document.getElementById('face-image');
    const prediction = await model.predict(image, false);
    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
    console.log(prediction[0].className);
    var resultmessage;
    if ($('#gender').prop('checked') == false) {
        switch (prediction[0].className) {
            case '매력뿜뿜 각진형':
                resultmessage =
                    '단발 굵은 S컬펌, 미디엄 길이 레이어드 C컬펌,<br>애교머리에 자연스럽게 웨이브를 준 스타일이 잘 어울려요!<br><br>※ 피해야 할 스타일: 스트레이트 매직';
                break;
            case '동글동글 둥근형':
                resultmessage =
                    '시각적으로 갸름하게 보여주는 레이어드 C컬펌,<br>뿌리볼륨펌, 턱선까지 오거나 미디엄보다 긴 기장이 잘 어울려요!<br><br>※ 피해야 할 스타일: 미디엄 길이';
                break;
            case '축복받은 계란형':
                resultmessage =
                    '갸름한 얼굴형을 잘 보여줄 수 있는 포니테일,<br>컬이 들어간 레이어드 S컬펌이 잘 어울려요!<br><br>※ 피해야 할 스타일: 이마를 가리는 무거운 느낌의 뱅';
                break;
            case '갸름한 긴형':
                resultmessage =
                    '가로로 시선을 분산시켜주는 단발머리 C컬 볼륨펌,<br>8:2 혹은 7:3 가르마 단발이 잘 어울려요!<br><br>※ 피해야 할 스타일: 앞머리가 없는 스트레이트 헤어';
                break;
            case '시크한 역삼각형':
                resultmessage =
                    'C컬이 들어간 단발, 머리를 길게 길러 굵은 웨이브의<br>볼륨감을 주고 한쪽으로 넘긴 스타일이 잘 어울려요!<br><br>※ 피해야 할 스타일: 짧은 숏컷이나 얼굴 전체를 드러내는 헤어스타일';
            default:
                //code block
        }
    } else if ($('#gender').prop('checked') == true) {
        switch (prediction[0].className) {
            case '매력뿜뿜 각진형':
                resultmessage =
                    '부드러운 인상을 주는 소프트 투 블록, 가르마펌,<br>리젠트 펌이나 이마를 드러내는 스타일이 잘 어울려요!<br><br>※ 피해야 할 스타일: 옆머리를 길러 광대뼈를 가리는 스타일';
                break;
            case '동글동글 둥근형':
                resultmessage =
                    '이마를 가리는 것보다는 드러내는 것이 좋고 짧게 자르는게 좋아요!<br>가르마 펌, 리젠트 펌같은 펌도 잘 어울려요!<br><br>※ 피해야 할 스타일: 옆머리와 뒷머리의 길이가 어중간한 헤어';
                break;
            case '축복받은 계란형':
                resultmessage = '모든 헤어스타일이 잘 어울리는 만인의 워너비!<br><br>※ 피해야 할 스타일: 앞머리를 내리거나 컬이 너무 많이 들어간 헤어';
                break;
            case '갸름한 긴형':
                resultmessage =
                    '자연스러운 드라이 펌이나, 웨이브 펌을 해주는 게 좋으며<br>소프트 투 블록, 볼륨펌, 애즈 펌등이 잘 어울려요!<br><br>※ 피해야 할 스타일: 구렛나룻선을 너무 짧게 잘라 볼륨을 없앤 헤어';
                break;
            case '시크한 역삼각형':
                resultmessage =
                    '윗머리와 옆머리는 자연스러운 구김 느낌이 나도록 펌을 하는 것이 중요하며<br>쉼표 머리, 히피 펌, 쉐도우 펌등이 잘 어울려요!<br><br>※ 피해야 할 스타일: 너무 짧은 헤어스타일';
                resultimg = "<img src='image/upload.png' width='350' border='0'>"
            default:
                //code block
        }
    }

    $('.result-message').html(resultmessage);
    $('.image').html(resultimg);
    var result_div = document.getElementById('result')
    var percent_div = document.getElementById('percent')

    // for (let i = 0; i < maxPredictions; i++) {
    //     const classPrediction =
    //         prediction[i].className + ": " + Math.round(prediction[i].probability.toFixed(2) * 100) + "%";
    //     //const percent =
    //     //Math.round(prediction[i].probability.toFixed(2) * 100) + "%";
    //     labelContainer.childNodes[i].innerHTML = classPrediction;
    //     //labelContainer.childNodes[i+3].innerHTML = percent;
    // }
}