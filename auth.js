const router = require('express'),Router();

router.post('/register', (req,res) => {
  const user = new user ({
      name: req.body.username,
      password: req.body.password,

    if (emailExist) {
      return res.status(400).send('"Username is already in used"');
    }

  
  });

  const hashpassword = await bcrypt.hash(req.body.password);


  try{
    const savedUser = await user.save();
    res.send(savedUser);
  }catch(error){
    res.status(400)
  }
});

router.post('/login', (req,res) => {

const validPass = await bcrypt.compare (res.body.password , user.password);
if(!validPass){
  return res.status(400).send('"Invalid username or password"');
    
}

});
module.exports = router;