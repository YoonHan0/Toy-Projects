
/* 
        - 조건 -
        id 길이 12자 이하
        pw 길이 8자 이상 / 특수문자 포함
        confirm_pw == pw 같아야 댐
        display_name 딱히 필요없을듯
*/

function signUp() {
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;
    var confirm_pw = document.getElementById("confirm-pw").value;
    var display_name = document.getElementById("display-name").value;

    var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;     // 특수문자
    var blank_pattern = /[\s]/g;                    // 공백
    console.log(`id: ${id}, pw: ${pw},  confirm_pw: ${confirm_pw}, display_name: ${display_name}`); // 확인

    if(id.length > 12 || blank_pattern.test(id)) {
        alert("아이디 길이 or 공백 포함!");          // 아이디 틀림
        return 0;
    }  
    else {
        if(pw.length < 8 || !(pattern_spc.test(pw))) {
            alert("비밀번호 길이 or 특수문자 미포함!");         // 비밀번호 틀림
            return 0;
        }
        else{
            if(pw != confirm_pw) {
                alert("비밀번호가 일치하지 않습니다!");         // 비밀번호 확인 틀림
            }
            else {
                alert("회원가입 완료!");
            }
        }
    }
}