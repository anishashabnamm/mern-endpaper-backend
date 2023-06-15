const express = require('express');
const app = express();
const cors = require ('cors')
app.use(express.json());
const router = express.Router();
const PORT = 3000;

let jobs = 
[
    
            {
                ' id':'1',
                'CompanyName':'Amazon',
                'jobname': 'Software Developer',
                'jobdescription': '',
                'Expertiserequired': '3 Years min.',
                'Location':'Chennai',
                'Salary':'$2000'
            },
            {
                ' id':'2',
                'CompanyName':'Amazon',
                'jobname': 'Software Tester',
                'jobdescription': '',
                'Expertiserequired': '2 Years min.',
                'Location':'Bengaluru',
                'Salary':'$1500'
            },
            {
                ' id':'3',
                'CompanyName':'Amazon',
                'jobname': 'Product Manager',
                'jobdescription': '',
                'Expertiserequired': '4 Years min.',
                'Location':'Delhi',
                'Salary':'$4000'
            },
       
            {
                ' id':'4',
                'CompanyName':'Microsoft',
                'jobname': 'Software Developer',
                'jobdescription': '',
                'Expertiserequired': '2 Years min.',
                'Location':'Remote',
                'Salary':'$2500'
            },
            {
                ' id':'5',
                'CompanyName':'Microsoft',
                'jobname': 'Business Analyst',
                'jobdescription': '',
                'Expertiserequired': ' Freshers',
                'Location':'Bengaluru',
                'Salary':'$1000'
            },
            {
                ' id':'6',
                'CompanyName':'Microsoft',
                'jobname': 'Project Manager',
                'jobdescription': '',
                'Expertiserequired': '2 Years min.',
                'Location':'Chennai',
                'Salary':'$3000'
            },
         
        
            {
                'id':'7',
                'CompanyName':'HDFC Bank LTD.',
                'jobname': 'Assistant Manager',
                'jobdescription': '',
                'Expertiserequired': '1 Years min.',
                'Location':'Chennai',
                'Salary':'$800'
            },
            {
                ' id':'8',
                'CompanyName':'HDFC Bank LTD.',
                'jobname': 'Senior Analyst',
                'jobdescription': '',
                'Expertiserequired': ' 2',
                'Location':'Chennai',
                'Salary':'$1500'
            },
            {
                ' id':'9',
                'CompanyName':'HDFC Bank LTD.',
                'jobname': 'Accounts Manager',
                'jobdescription': '',
                'Expertiserequired': '2 Years min.',
                'Location':'Chennai',
                'Salary':'$1200'
            }
       
];

app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  const job = jobs.find((j) => j.id === jobId.toString());
  res.json(job);
});

app.post('/jobs', (req, res) => {
  const newJob = req.body;
  jobs.push(newJob);
  res.json(newJob);
});

app.use('/api', router);
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
