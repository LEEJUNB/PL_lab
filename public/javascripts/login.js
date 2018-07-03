function Login()
{
	const id = document.getElementsByClassName('id')[0];
	const pw = document.getElementsByClassName('password')[0];

	$.ajax({
			type : "POST",
			url : "/auth/logIn",
			dataType : "json",
			postBody : "true",
			data : {
				"stud_id" : id.value,
				"password" : pw.value,
			},
			success: function(result) {
				const user = result.user;
				alert(result.message);
				if(user) {
					//로그인 세션 생성
					location.href="/";
				}
			}
	});
}
