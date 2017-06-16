<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous">
<title>Insert title here</title>
</head>
<body>
	<h1>TRANG DANG KI</h1>

	<form action="login" method="post" class="form-horizontal">

		<div class="form-group">
			<label class="control-label col-sm-2" for="Username">Username:</label>
			<div class="col-sm-10">
				<input type="text" class="form-control col-sm-5" id="username"
					placeholder="Enter Username">
			</div>
		</div>

		<div class="form-group">
			<label class="control-label col-sm-2" for="Password">Password:</label>
			<div class="col-sm-10">
				<input type="password" class="form-control col-sm-5" id="password"
					placeholder="Enter Password">
			</div>
		</div>

		<div class="form-group">
			<label class="control-label col-sm-2" for="Email">Email:</label>
			<div class="col-sm-10">
				<input type="email" class="form-control col-sm-5" id="email"
					placeholder="Enter Email">
			</div>
		</div>

		<div class="form-group">
			<label class="control-label col-sm-2" for="Password">BirthDay:</label>
			<div class="col-sm-10">
				<input type="text" class="form-control col-sm-5" id="birthday"
					placeholder="Enter BirthDay (dd/mm/yyyy)">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<input type="submit" value="Register" class="btn btn-success" />
			</div>
		</div>
	</form>
</body>
</html>