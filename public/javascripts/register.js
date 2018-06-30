function CheckPW()
{
	var pw = document.getElementsByClassName('pw')[0];
	var confirm = document.getElementsByClassName('confirmPW')[0];
	confirm.value='';

	if(pw.value.length < 6)
	{
		document.getElementsByClassName('len_err')[0].innerText="비밀번호는 6글자 이상만 사용가능합니다.";
	}
	else
	{
		document.getElementsByClassName("len_err")[0].innerText = '';
	}

	CheckConfirm();
}

function CheckConfirm()
{
	var pw = document.getElementsByClassName('pw')[0];
	var confirm = document.getElementsByClassName('confirmPW')[0];

	if(pw.value == confirm.value)
	{
		document.getElementsByClassName("confirm_err")[0].innerText = "비밀번호가 일치합니다.";
		document.getElementsByClassName("confirm_err")[0].style.color="blue"
	}
	else
	{
		document.getElementsByClassName("confirm_err")[0].innerText = '비밀번호가 일치하지 않습니다.';
		document.getElementsByClassName("confirm_err")[0].style.color="red";
	}
}

function Commit()
{
	var pw = document.getElementsByClassName('pw')[0];
	var confirm = document.getElementsByClassName('confirmPW')[0];

	if(pw.value.length < 6)
	{
		pw.focus();
		pw.value="";
		confrim.value="";
	}else if(pw.value != confirm.value)
	{
		confirm.focus();
		confirm.value="";
	}
	else
	{
		alert("회원가입이 완료되었습니다.");
		//통신
	}
}

function SIDCheck()
{
	var name = document.getElementsByClassName('name')[0];
	var SID = document.getElementsByClassName('SID')[0];

	if(name.value == '')
	{
		alert("이름을 입력해주십시오");
		name.focus();
	}
	else if(SID.value == '')
	{
		alert("학번을 입력해주십시오");
		SID.focus();
	}
	else
	{
		//통신
	}
}
