function answer() {
    let err = 0;
    let Name = document.getElementById("name").value;
    let Rollno = document.getElementById("rollno").value;
    let DOB = document.getElementById("dob").value;
    let Phonenumber = document.getElementById("phonenumber").value;
    let gender = document.getElementsByName("gender");
    let email = document.getElementById("mail").value;
    let Password = document.getElementById("password").value;
    let Accomodation = document.getElementsByName("accomodation");
    let Address = document.getElementById("address").value;
    let Qualification = document.getElementById("stype1").value;
    let Course = document.getElementById("stype2").value;
    let Clubs = document.getElementsByName("clubs");
    let Checkbox = document.getElementsByName('select');
  
    // regex validation
    let Namecheck = /^[A-Za-z\s]{3,20}$/;
    let Rollnocheck = /^[A-Za-z0-9]{5,10}$/;
    let Phonenumbercheck = /^[6-9]{1}[0-9]{9}$/;
    let emailcheck = /^[A-Za-z0-9]{3,}@[A-Za-z]{2,}[.]{1}[A-Za-z]{2,8}$/;
    let Passwordcheck = /^[A-Za-z0-9!@#$%^&*()_+]{5,8}$/;
  let Addresscheck=/^[A-Za-z0-9 ,.-]{5,100}$/;
  
  
  // Name
   if (Name == '' || !Namecheck.test(Name)) {
      document.getElementById('errordisplay1').innerHTML = "*Enter your Name";
      document.getElementById('name').style.borderColor = 'red';
      ++err
    }
    else {
      document.getElementById('errordisplay1').innerHTML = "";
      document.getElementById('name').style.borderColor = 'green';
    }
   //rollno
    if (Rollno == '' || !Rollnocheck.test(Rollno)) {
      document.getElementById('errordisplay2').innerHTML = "*Enter your  Rollno";
      document.getElementById('rollno').style.borderColor = 'red';
      ++err
    }
    else {
      document.getElementById('errordisplay2').innerHTML = "";
      document.getElementById('rollno').style.borderColor = 'green';
    }
  //Date Of Birth
    if (DOB == '') {
      document.getElementById('errordisplay3').innerHTML = "*Enter your Date Of Birth";
      document.getElementById('dob').style.borderColor = 'red';
      ++err
    }
    else {
      document.getElementById('errordisplay3').innerHTML = "";
      document.getElementById('dob').style.borderColor = 'green';
    }
  
   // Phonenumber
    if (Phonenumber == '' || !Phonenumbercheck.test(Phonenumber)) {
      document.getElementById('errordisplay4').innerHTML = "*Enter your phonenumber";
      document.getElementById('phonenumber').style.borderColor = 'red';
      ++err
    }
    else {
      document.getElementById('errordisplay4').innerHTML = "";
      document.getElementById('phonenumber').style.borderColor = 'green';
    }
  
  // Gender
    if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
      document.getElementById("errordisplay5").innerHTML = "*select your gender";
      ++err
    }
    else {
      document.getElementById("errordisplay5").innerHTML = "";
    }
  
   //email
      if (email == '' || !emailcheck.test(email)) {
        document.getElementById('errordisplay6').innerHTML = "*Enter your mail";
        document.getElementById('mail').style.borderColor = 'red';
        ++err
      }
      else {
        document.getElementById('errordisplay6').innerHTML = "";
        document.getElementById('mail').style.borderColor = 'green';
      }
    
      
  //Password
  if (Password == '' || !Passwordcheck.test(Password)) {
    document.getElementById('errordisplay7').innerHTML = "*Enter your password";
    document.getElementById('password').style.borderColor = 'red';
    ++err
  }
  else {
    document.getElementById('errordisplay7').innerHTML = "";
    document.getElementById('password').style.borderColor = 'green';
  }
  
  
    //Accomodation
    if(!(Accomodation[0].checked || Accomodation[1].checked))
    {
      document.getElementById("errordisplay8").innerHTML = "select it";
      ++err
    }
    else
    {
      document.getElementById("errordisplay8").innerHTML = "";
    }
  
  
    //Address
    if (Address == '' || !Addresscheck.test(Address)) {
      document.getElementById('errordisplay9').innerHTML = "*Enter your Address";
      document.getElementById('address').style.borderColor = 'red';
      ++err
    }
    else {
      document.getElementById('errordisplay9').innerHTML = "";
      document.getElementById('address').style.borderColor = 'green';
    }
  
  //Qualification
    if (Qualification == "") {
      document.getElementById("errordisplay10").innerHTML = "*select your Qualification";
      ++err
  }
  else {
      document.getElementById("errordisplay10").innerHTML = "";
  }
  
  
  //Course
  if (Course == "") {
    document.getElementById("errordisplay11").innerHTML = "*Enter your Course";
    ++err
  }
  else {
    document.getElementById("errordisplay11").innerHTML = "";
  }
   
  
  //Clubs
  if(!(Clubs[0].checked   ||  Clubs[1].checked || Clubs[2].checked))
  {
    document.getElementById("errordisplay12").innerHTML = "select your club";
    ++err
  }
  else 
  {
    document.getElementById("errordisplay12").innerHTML = "";
  }
  
  
  if(!Checkbox[0].checked)
  {
    document.getElementById("errordisplay13").innerHTML = "select the box";
    ++err
  }
  else
  {
    document.getElementById("errordisplay13").innerHTML = "";
  }
    
  if (err == 0) { return true; } else { return false; }
    
  }
  const cancelBtn = document.querySelector('.backbtn');
    cancelBtn.addEventListener('click', () => {
      window.location.href = 'college.html';
    });
  
  //name
    function namevalidate() {
      let Name1 = document.getElementById("name").value;
      let Namecheck1 = /^[A-Za-z\s]{3,20}$/;
  
   if
        (Namecheck1.test(Name1))
         {
        document.getElementById('errordisplay1').innerHTML = "";
        document.getElementById('name').style.border = '2px solid green';
    
    
      }
      else {
        document.getElementById('errordisplay1').innerHTML = "*Enter your valid Name";
        document.getElementById('name').style.borderColor = 'red';
        return false;
      }
    }
  
    function Rollnovalidate(){
      let Rollno1 = document.getElementById("rollno").value;
      let Rollnocheck1 = /^[A-Za-z0-9]{5,10}$/;
      if
        (Rollnocheck1.test(Rollno1))
         {
          document.getElementById('errordisplay2').innerHTML = "";
        document.getElementById('rollno').style.border = '2px solid green';
    
    
      }
      else {
        document.getElementById('errordisplay2').innerHTML = "*Enter your rollno";
        document.getElementById('rollno').style.borderColor = 'red';
        return false;
      }
  
    }
    function dobvalidate(){
      let DOB1= document.getElementById("dob").value;
      if (DOB1 = "") {
        document.getElementById('errordisplay3').innerHTML = "* Enter the  Date Of Birth ";
        document.getElementById('dob').style.borderColor = 'red';
    
      }
      else {
        document.getElementById('errordisplay3').innerHTML = "";
        document.getElementById('dob').style.borderColor = 'green';
        return false;
    
      }
  
    }
  
    function phonenumbervalidate() {
      let Phonenumber1 = document.getElementById("phonenumber").value;
      let Phonenumbercheck1 = /^[6-9]{1}[0-9]{9}$/;
      if
        (Phonenumbercheck1.test(Phonenumber1)) {
        document.getElementById('errordisplay4').innerHTML = "";
        document.getElementById('phonenumber').style.borderColor = 'green';
      }
      else {
        document.getElementById('errordisplay4').innerHTML = "*Enter your valid phonenumber";
        document.getElementById('phonenumber').style.borderColor = 'red';
        return false;
      }
    }
  
    function gendervalidate(){
      let Gender1 = document.getElementsByName("gender");
      if((Gender1[0].checked || Gender1[1].checked ||  Gender1[2].checked)){
        document.getElementById("errordisplay5").innerHTML = "";
      }else{
        document.getElementById("errordisplay5").innerHTML = "select your gender";
        return false;
      }
     }
  
   function emailvalidate(){
    
    let email1 = document.getElementById("mail").value;
    let emailcheck1 = /^[A-Za-z0-9]{3,}@[A-Za-z]{2,}[.]{1}[A-Za-z]{2,8}$/;
    if
      (emailcheck1.test(email1)) {
      document.getElementById('errordisplay6').innerHTML = "";
      document.getElementById('mail').style.borderColor = 'green';
    }
    else {
      document.getElementById('errordisplay6').innerHTML = "*Enter valid mail id";
      document.getElementById('mail').style.borderColor = 'red';
      return false;
    }
  
  
   }
  
   
  //Password
  function passwordvalidate() {
    let Password = document.getElementById("password").value;
    let Passwordcheck = /^[A-Za-z0-9!@#$%^&*()_+]{5,8}$/;
  
    if
      (Passwordcheck.test(Password)) {
      document.getElementById('errordisplay7').innerHTML = "";
      document.getElementById('password').style.borderColor = 'green';
    }
    else {
      document.getElementById('errordisplay7').innerHTML = "*Enter valid password";
      document.getElementById('password').style.borderColor = 'red';
      return false;
    }
  }
  
  function accomodationvalidate(){
    let accomodation1 = document.getElementsByName("accomodation");
    if((accomodation1[0].checked || accomodation1[1].checked)){
      document.getElementById("errordisplay8").innerHTML = "";
    }else{
      document.getElementById("errordisplay8").innerHTML = "select your accomodation";
      return false;
    }
   }
  
  
   function addressvalidate(){
    let address1 = document.getElementById("address").value;
    let addresscheck1 =/^[A-Za-z0-9 ,.-]{5,100}$/;
  
    if
      (addresscheck1.test(address1)) {
      document.getElementById('errordisplay9').innerHTML = "";
      document.getElementById('address').style.borderColor = 'green';
    }
    else {
      document.getElementById('errordisplay9').innerHTML = "*Enter valid  Address";
      document.getElementById('address').style.borderColor = 'red';
      return false;
    }
  }
  
  function Qualificationvalidate(){
    let Qualification1= document.getElementById("stype1").value;
  if (Qualification1 == "") {
    document.getElementById("errordisplay10").innerHTML = "*select Qualification";
    
  }
  else {
    document.getElementById("errordisplay10").innerHTML = "";
    return false;
  }
  
  }
   function Coursevalidate(){
    let Course1= document.getElementById("stype2").value;
  if (Course1 == "") {
    document.getElementById("errordisplay11").innerHTML = "*select Course";
    
  }
  else {
    document.getElementById("errordisplay11").innerHTML = "";
    return false;
  }
  
  }
  
  function Clubsvalidate(){
    let Clubs1 = document.getElementsByName("clubs");
    if((Clubs1[0].checked   ||  Clubs1[1].checked || Clubs1[2].checked))
    {
      document.getElementById("errordisplay12").innerHTML = "";
  
    }
    else 
    {
      document.getElementById("errordisplay12").innerHTML = "*Select the Clubs";
      return false;
  
    }
  
  }
  
  function selectvalidate(){
    let checkbox1 = document.getElementsByName("select");
    
    if(checkbox1[0].checked)
    {
      document.getElementById("errordisplay13").innerHTML = "";
      
    }
      else{
        document.getElementById("errordisplay13").innerHTML = "select the box";
        return false;
      }
    }