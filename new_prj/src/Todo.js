import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import db from './Firebase';
import { TextField, InputAdornment, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, 
    Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions  } from '@material-ui/core'; 
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Todo = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  const [openDialog, setOpenDialog] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');

  const [branchOptions, setBranchOptions] = useState(['CS', 'IS', 'EC', 'MECH']);

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'Student'), {
        Name: name,
        Age:age,
        Branch:branch,
        Phone:phone,
        Address:address,
        Gender:gender
      });
      console.log('Document written with ID: ', docRef.id);
      setName('');
      setAddress('');
      setAge('');
      setBranch('');
      setPhone(''); 
      setGender('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handlePhoneKeyPress = (event) => 
  {
    const allowedPattern = /[^0-9]/;
    if (event.key.match(allowedPattern)) 
    {
    event.preventDefault();
    }
  };

  const handlePhonePaste = (e) =>
  {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text/plain');
    const allowedPattern = /^[0-9]*$/;
    if (pastedText.match(allowedPattern)) 
    {
      setPhone(pastedText);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddBranch = () => {
    setBranchOptions((prevOptions) => [...prevOptions, newBranchName]);
    setNewBranchName('');
    handleCloseDialog();
  };

  const phoneRegex = /^(\+\d{1,3})?\s?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  const isPhoneValid = phoneRegex.test(phone);
  return (
    <section className="App" style={{ display:"flex", alignItems:"center", justifyContent:"center", height: '100vh' }}>
      <div className="todo" style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h1 className="header">Todo-App</h1>
        <div >
          <div>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={name}
                onChange={(e) => setName(e.target.value)} style={{ width: '300px', marginBottom: '10px' }} /><br/>
            <TextField id="outlined-basic" label="Age" variant="outlined" value={age}
                onChange={(e) => setAge(e.target.value)} style={{ width: '300px', marginBottom: '10px' }} /><br/>

            <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
            </FormControl><br/>

            <br/>
            
            <TextField id="outlined-basic" label="Branch" variant="outlined" value={branch}
                onChange={(e) => setBranch(e.target.value)} select style={{ width: '265px', marginBottom: '10px' }} >
                {branchOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
            </TextField>
            <AddCircleIcon onClick={handleOpenDialog} style={{ cursor: 'pointer', fontSize: 34,color:'green'}} />
            <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Add New Branch</DialogTitle>
            <DialogContent>
                <TextField autoFocus variant="outlined" margin="dense" label="Branch Name" value={newBranchName}
                onChange={(e) => setNewBranchName(e.target.value)} style={{width:'200px'}} fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                Cancel
                </Button>
                <Button onClick={handleAddBranch} color="primary">
                Add
                </Button>
            </DialogActions>
            </Dialog><br/>

            <TextField id="outlined-basic" label="Phone" type="tel" placeholder="Phone" value={phone}
              variant="outlined" onChange={(e) => setPhone(e.target.value)} 
              onKeyPress={handlePhoneKeyPress} onPaste={handlePhonePaste} style={{ width: '300px', marginBottom: '10px' }}
              error={!isPhoneValid} helperText={isPhoneValid ? '' : 'Invalid phone number'}
              InputProps={{  startAdornment: 
                (
                    <InputAdornment position="start">
                        <PhoneIcon />
                    </InputAdornment>
                ),
              }} /> <br/>
            <TextField id="outlined-basic" label="Address" variant="outlined" value={address}
                onChange={(e) => setAddress(e.target.value)} style={{ width: '300px', marginBottom: '10px' }} /><br/>
          </div>

          <div className="btn-container" style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <Button type="submit" variant="contained" onClick={addTodo} style={{backgroundColor:'green', color:'white'}}> Submit </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todo;
