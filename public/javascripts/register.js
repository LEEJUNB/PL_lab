let pw;
let confirm;

window.onload = function() {
	pw = document.getElementsByClassName('pw')[0];
	confirm = document.getElementsByClassName('confirmPW')[0];
}

function CheckPW()
{
	const lengthErr = document.getElementsByClassName('len_err')[0];
	confirm.value = '';

	if(pw.value.length < 6)	{
		lengthErr.innerText="비밀번호는 6글자 이상만 사용가능합니다.";
		lengthErr.style.color = "red";
	}else {
		lengthErr.innerText = '사용가능한 비밀번호입니다.';
		lengthErr.style.color = "blue";
	}

	CheckConfirm();
}

function CheckConfirm()
{
	const confirmErr = document.getElementsByClassName("confirm_err")[0];

	if(pw.value == confirm.value) {
		confirmErr.innerText = "비밀번호가 일치합니다.";
		confirmErr.style.color="blue"
	}else {
		confirmErr.innerText = '비밀번호가 일치하지 않습니다.';
		confirmErr.style.color="red";
	}
}

function Commit() {
	const name = document.getElementsByClassName('name')[0];
	const stud_id = document.getElementsByClassName('id')[0];
	const mail = document.getElementsByClassName('email')[0];
	const tel = document.getElementsByClassName('tel')[0];

	if(name.value == '') {
		name.focus();
		alert("이름을 입력해주세요");
	}else if(stud_id.value.length != 8) {
		stud_id.focus();
		alert("학번의 형식이 맞지않습니다.");
	}else if(pw.value.length < 6) {
		pw.focus();
		pw.value="";
		confirm.value="";
	}else if(pw.value != confirm.value) {
		confirm.focus();
		confirm.value="";
	}else if(!mail.checkValidity())
	{
		mail.focus();
		alert("이메일의 형식이 맞지않습니다");
	}else if(!tel.checkValidity()) {
		tel.focus();
		alert("전화번호 형식이 맞지않습니다.");
	}else {
		$.ajax({
			type : "POST",
			url : "/auth/signIn",
			dataType : "json",
			postBody : "true",
			data : {
				"name" : name.value,
				"password" : pw.value,
				"stud_id" : stud_id.value,
				"phone_number" : tel.value
			},
			success: function(result) {
				const msg = result.message;
				if(msg){
					alert(msg);
					stud_id.value ='';
					stud_id.focus();
				}else {
					alert('가입이 완료되었습니다.');
					location.href="/";
				}
			}
		});
	}
}
