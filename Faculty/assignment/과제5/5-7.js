let tds;
let prevIndex=0, index=0;
window.onload = function () { // 웹 페이지의 로딩 완료시 실행
    tds = document.getElementsByTagName("td");	
    tds[index].style.backgroundColor = "red";
}
window.onkeydown = function (e) {
    switch(e.key) {
        case "ArrowDown" : 
            if(index/3 >= 2) return; // 맨 위 셀의 경우
            index += 3;
            break;
        case "ArrowUp" : 
            if(index/3 < 1) return; // 맨 아래 셀의 경우
            index -= 3;
            break;
        case "ArrowLeft" : 
            if(index%3 == 0) return; // 맨 왼쪽 셀의 경우
            index--; 
            break;
        case "ArrowRight" : 
            if(index%3 == 2) return; // 맨 오른쪽 셀의 경우
            index++; 
            break;
    }
    tds[index].style.backgroundColor = "orchid";
    tds[prevIndex].style.backgroundColor = "white";
    prevIndex = index;
}