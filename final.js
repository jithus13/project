const express = require('express');
const bodyParser = require('body-parser');
const sql = require('msnodesqlv8')
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('form'));
app.set('view engine', 'ejs');

//route to bestcollege front page
app.get('/bestcollege',(req,res)=>{
  res.sendFile(__dirname + '/form/college.html');
});

//route to submit datas in sql
app.post('/submits', (req, res) => {
  const name = req.body.name;
  const rollno = req.body.rollno;
  const dob = req.body.dob;
  const phonenumber=req.body.phonenumber;
  const gender=req.body.gender;
  const email= req.body.mail;
  const password = req.body.password;
  const accomodation=req.body.accomodation;
  const address = req.body.address;
  const Qualification = req.body.stype1;
  const Course = req.body.stype2;
  const Clubs = req.body.clubs;
    
    //database details(sql)
    const config = 'Driver=SQL Server Native Client 11.0;Server=(local);Database=abhijith;UID=sa;PWD=WeLove9SA;Shared Memory=true;Trusted_Connection=yes;';

    //insert datas into sql
    const query = `INSERT INTO data (name,rollno,dob,phonenumber,gender,email,password,accomodation,address,Qualification,Course,Clubs) VALUES ('${name}', '${rollno}','${dob}','${phonenumber}','${gender}','${email}','${password}','${accomodation}','${address}','${Qualification}','${Course}','${Clubs}')`;
  
  
  sql.query(config, query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting data');
      return;
    }
    res.sendFile(__dirname + '/form/success.html');
  });
});

//route to display datas in ejs file
app.post('/students_details', (req, res) => {
  const rollno = req.body.rollno;
  const password = req.body.password;

  const config = 'Driver=SQL Server Native Client 11.0;Server=(local);Database=abhijith;UID=sa;PWD=WeLove9SA;Shared Memory=true;Trusted_Connection=yes;';
  const query = `SELECT * FROM data WHERE rollno = '${rollno}' AND password = '${password}'`;
  
  sql.query(config, query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data');
      return;
    }

    if (rows.length === 0) {
      res.status(404).send('No data found for the provided rollno and password');
      return;
    }
    const data = rows[0];
    res.render('studentsdetails',{data:data})
    });
});

//route to update datas in ejs file
app.post('/update_data', (req, res) => {
  const updateField = req.body.update_field;
  const newValue = req.body.new_value;
  const rollno = req.body.rollno;
  
  const config = 'Driver=SQL Server Native Client 11.0;Server=(local);Database=abhijith;UID=sa;PWD=WeLove9SA;Shared Memory=true;Trusted_Connection=yes;';
  const query = `UPDATE data SET ${updateField} = '${newValue}' WHERE rollno = '${rollno}'`;

  sql.query(config, query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data');
      return;
    }

    //select the table using rollno to update datas
    const selectQuery = `SELECT * FROM data WHERE rollno = '${rollno}'`;
    sql.query(config, selectQuery, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving data');
        return;
      }

      res.render('studentsdetails', { data: rows[0] });
      
    });
    });
  });

    
//route to login admin page
app.post('/login', (req, res) => {
  const { adminno, password } = req.body;
  if (adminno === 'faculty0' && password === 'asd123') {
    res.cookie('adminID', adminno);
    res.redirect('/admin2.html');
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

//route to display datas of students in ejs file of admin
app.post('/students', (req, res) => {
  const rollno = req.body.rollno;

  const config = 'Driver=SQL Server Native Client 11.0;Server=(local);Database=abhijith;UID=sa;PWD=WeLove9SA;Shared Memory=true;Trusted_Connection=yes;';
  const query = `SELECT * FROM data WHERE rollno = '${rollno}'`;

  sql.query(config, query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data');
      return;
    }
    if (rows.length === 0) {
      res.status(404).send('No data found for the provided rollno and password');
      return;
    }
     
      const data = rows[0];
    res.render('studentsdetails2',{data:data})
    });
  });

  //route to update datas in admin side.
  app.post('/update_data2', (req, res) => {
    const updateField = req.body.update_field;
    const newValue = req.body.new_value;
    const rollno = req.body.rollno;

    const config = 'Driver=SQL Server Native Client 11.0;Server=(local);Database=abhijith;UID=sa;PWD=WeLove9SA;Shared Memory=true;Trusted_Connection=yes;';
    const query = `UPDATE data SET ${updateField} = '${newValue}' WHERE rollno = '${rollno}'`;
  
    
    sql.query(config, query, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving data');
        return;
      }
      const selectQuery = `SELECT * FROM data WHERE rollno = '${rollno}'`;
      sql.query(config, selectQuery, (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error retrieving data');
          return;
        }
  
        res.render('studentsdetails2', { data: rows[0] });
        
      });
      });
    });
  


//Portal
app.listen(5413, () => {
  console.log('Server is running on port 5413');
});