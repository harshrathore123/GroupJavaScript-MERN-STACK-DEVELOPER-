let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let path = require("path");
let conn = require('./db_conn.js');
let session = require('express-session');

//Session
app.use(session({
	secret:"test123$@",
	resave:true,
	saveUninitialized:false
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));


app.get("/",function(req,res){
	res.send("<h1>Hello welcome to the express js</h1>")
});

app.get("/aboutus",function(req,res){
	res.send("<h1>About Us</h1>");
})

app.get("/service",function(req,res){
	res.send("<h1>Service</h1>");
})

app.get("/contactus",function(req,res){
	res.send('<form action="/contactus_submit"><table><tr><td>Enter name:</td><td><input type="text" name="name"/></td></tr><tr><td>Enter Email:</td><td><input type="text" name="email"/></td></tr><tr><td>Enter Question</td><td><input type="text" name="que"/></td></tr><tr><td><input type="submit" value="send"/></td></tr></table></form>');
});

app.get("/contactus_submit",function(req,res){
	res.send("<h2>Form Submmitted</h2><h3>Name:- "+req.query['name']+"<br/> Email:- "+req.query['email']+"</h3>");
})

app.get("/signup",function(req,res){
	res.sendFile(path.join(__dirname,"public/Signup.html"));
})

app.post("/signup_submit",function(req,res){
	// const {fullname,email,pass,cpass,dob} = req.body;
	// console.log(fullname);
	// res.send("name:-"+fullname+"<br/>"+email+"<br/>"+pass+"</br>)"+cpass+"<br/>"+dob+"<br/>");
	const {fname,mname,lname,email,mobile,gender,pass,addline1,addline2} = req.body;
	conn.query("insert into user (fname,mname,lname,addline1,addline2,email,pwd,mobile) values(?,?,?,?,?,?,?,?)",[fname,mname,lname,addline1,addline2,email,pass,mobile],function(err,result){
		if(err)
			return err;
		console.log(result);
		res.send("<h1>One user added userid :- "+result.insertId+"</h1>");
	})
	

})

app.get('/s1',function(req,res){
	req.session.msg="hello this is msg from session card";
	res.send('<a href="msgs2">Click to view msg</a>');
});

app.get('/msgs2',function(req,res){
	res.send('<h3>'+req.session.msg+'</h3>');
})

app.get('/login',function(req,res){
	res.sendFile(path.join(__dirname,"public/Login.html"));
})

app.post('/loginsubmit',function(req,res){
	const{EmailLogin,passLogin} = req.body;
	conn.query("select * from user where email=? and pwd=?",[EmailLogin,passLogin],function(err,result){
		if(err)
			throw err;
		if(result.length==1){
			req.session.userid = result[0].uid;
			res.redirect("/userhomepage");
		}
		else
			res.send('<h2>username or password did not match</h2><a href="/login">Try Again</a>')
	})
})

app.get('/userhomepage',function(req,res){
	if(req.session.userid!== undefined && req.session.userid>0){
		res.sendFile(path.join(__dirname,'public/home.html'));
	}
	else{
		res.sendFile(path.join(__dirname,'public/error.html'));
	}
})

app.get('/logout',function(req,res){
	req.session.destroy();
	res.redirect("/login");
})
app.listen(8080,()=>console.log("server running at port no 8080"));