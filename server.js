const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://ekanezemonday:Mondayfresh001@wickedcloster0.ihgd4gu.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('WICKED BACKEND IS ALIVE 👹🔥');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
