function countWords(){
    const text=document.getElementById('textInput').value.trim();
    const word = text === " "? 0 : text.split(/\s+/).length;
    document.getElementById('wordCount').textContent=word;
}
document.getElementById('textInput').addEventListener('input',countWords);