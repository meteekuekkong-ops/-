// คำภาษาไทยพร้อมคำแปลภาษาอังกฤษ (รองรับหลายคำตอบ)
const wordList = [
  { thai: "แมว", english: ["cat"] },
  { thai: "สุนัข", english: ["dog"] },
  { thai: "บ้าน", english: ["home", "house"] },
  { thai: "โรงเรียน", english: ["school"] },
  { thai: "น้ำ", english: ["water"] },
  { thai: "หนังสือ", english: ["book"] },
  { thai: "เหตุผล", english: ["reason"] },
  { thai: "สบู่", english: ["soapy"] },
  { thai: "ลิง", english: ["monkey"] },
  { thai: "ฝัน", english: ["dream"] },
  { thai: "มืด", english: ["dark","black"] },
  { thai: "กรด", english: ["acid"] },
  { thai: "ฝน", english: ["rain"] },
  { thai: "คอมพิวเตอร์", english: ["computer"] },
  { thai: "พัดลม", english: ["fan"] },
];

let currentWord = null;

function nextWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  currentWord = wordList[randomIndex];
  document.getElementById("thai-word").textContent = currentWord.thai;
  document.getElementById("english-input").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("english-input").value.trim().toLowerCase();

  if (!currentWord) {
    document.getElementById("result").textContent = "กรุณากดสุ่มคำก่อน!";
    return;
  }

  const correctAnswers = currentWord.english.map(ans => ans.toLowerCase());

  if (correctAnswers.includes(userAnswer)) {
    document.getElementById("result").textContent = "✅ ถูกต้อง!";
  } else {
    document.getElementById("result").textContent = `❌ คำตอบที่ถูกคือ: ${currentWord.english.join(" หรือ ")}`;
  }
}
let score = 0;
function checkAnswer() {
  const userAnswer = document.getElementById("english-input").value.trim().toLowerCase();

  if (!currentWord) {
    document.getElementById("result").textContent = "กรุณากดสุ่มคำก่อน!";
    return;
  }

  const correctAnswers = currentWord.english.map(ans => ans.toLowerCase());

  if (correctAnswers.includes(userAnswer)) {
    score++;
    document.getElementById("result").textContent = "✅ ถูกต้อง!";
  } else {
    score--;
    document.getElementById("result").textContent = `❌ คำตอบที่ถูกคือ: ${currentWord.english.join(" หรือ ")}`;
  }
  document.getElementById("score-display").textContent = `คะแนน: ${score}`;
  if (score < 0) score = 0;

}
