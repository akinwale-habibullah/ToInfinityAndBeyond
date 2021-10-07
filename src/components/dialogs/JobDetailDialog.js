import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function JobDetailDialog({onClose, open}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog open={open} onClose={onClose} maxWidth='lg' fullWidth={true} sx={{'.MuiDialog-paper': {
      height: '90vh'
    }}}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{display: 'flex', justifyContent:'space-between', borderBottom: 'solin thin black', bb: 'primary.main'}}>
              <Box sx={{
                'flex': 1,
                xs: {
                  width: '100%',
                  border: 'solid thin red'
                },
                display: 'flex',
                alignItems: 'center',
              }}>
                <Avatar>CM</Avatar>
                <Box sx={{display: 'flex', flexDirection: 'column', ml: 2}}>
                  <Typography variant='h6'>Job role</Typography>
                  <Typography variant='subtitle2'>Salary value or No Salary</Typography>
                </Box>
              </Box>
              <Box sx={{
                flex: {
                  xs: 0,
                  md: 1
                },
                textAlign: 'right',
                visibility: {
                  xs: 'hidden',
                  md: 'visible'
                },
              }}>
                <Button variant='contained' color='primary'>Apply</Button>
              </Box>
            </Box>
            <Divider fullWidth={true} sx={{mt: 1, mb: 1}}/>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={9}>
                <Card>
                  <CardContent>
                    <Typography variant='body1'>
                      {jobDescription}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card>
                    <CardContent>
                      <Box sx={{mb: 1}}>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Company</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <Avatar>IM</Avatar>
                          <Typography variant='body1' sx={{ml: 2}}>Company name</Typography>
                        </Box>
                      </Box>

                      <Box sx={{mb: 1}}>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Location</Typography>
                          <Typography variant='body1'>Earth - Mars</Typography>
                      </Box>

                      <Box sx={{mb: 1}}>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Job type</Typography>
                        <Typography variant='body1'>Full time</Typography>
                      </Box>

                      <Box sx={{mb: 1}}>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Experience</Typography>
                        <Typography variant='body1'>3 years</Typography>
                      </Box>

                      <Box sx={{mb: 1}}>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Skills</Typography>
                        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center'}}>
                          {['Python', 'Django', 'DevOps', 'Open Source Software', 'React.js'].map((skill) => (
                            <Chip label={skill} variant="outlined" key={skill} sx={{mb: 1, mr: 1}}/>
                          ))}
                        </Box>
                      </Box>

                      <Box sx={{mb: 1}}>
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Hiring contact</Typography>
                        <Box sx={{
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center', 
                          border: 'solid thin', 
                          borderColor: 'secondary.main', 
                          p: 2
                        }}>
                          <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>Xavier Morelle</Typography>
                            <Typography variant='body1' color='secondary'>CEO - 4 years</Typography>
                          </Box>
                          <Avatar>CO</Avatar>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{
        pr: 3
      }}>
        <Button variant='outlined' color='primary'>Close</Button>
        {matches && <Button variant='contained' color='primary'>Apply</Button>}
      </DialogActions>
    </Dialog>
  );
}

JobDetailDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const jobDescription = `
  About the job
  Do you care about contributing to open-source, and appreciate a good challenge? We do too! :)

  Open-source
  We are a team of veteran open-source developers, working on educational and community-based projects in an open-first environment – and we are looking for new members. By joining us, you will work full-time on open-source, pushing your changes to free software projects upstream through pull requests, contributing features, documentation, or help on public forums.

  We care deeply about contributing our work upstream. You will see the results of your work reused and recognized across the educational community, increasing access to quality education for everyone, everywhere.

  Remote-first
  Unlike companies who reluctantly started to accept remote workers recently, we have embraced it from day 1. For the past 7 years, we have based and refined our way of working around remote-friendly workflows, from the ground up. No day-long video meetings, mandatory work hours, or risk of being forced back into an office one day -- as long as you have a good internet connection, it’s none of our business when or where you work from. :)

  We are all working remotely, from all continents (except Antarctica, at least so far - applicants welcome!). We use remote-friendly and timezone-agnostic workflows based on asynchronous principles and good documentation practices.

  Online education
  We are one of the main contributors to the Open edX project, the main open-source MOOC platform created by MIT, Harvard and many other top universities. It powers sites like edX.org, the MIT Open Learning Library, and the national online learning platform for France. We provide development and hosting for institutions like Harvard Medical School, Harvard LabXchange, Cloudera, Autodesk, and several governments. We are not affiliated with edX.org, but we contribute and work with them on various projects.

  Technical stack
  The Open edX project is a large Python/Django codebase, with good code standards and architecture. Tasks are varied, from developing core platform features, custom exercises and tools for specific courses (XBlocks), customizing and deploying instances, working full-stack, operating our service infrastructure, improving our hosting platform, etc. You won't get bored here.

  Contracting terms
  This is a full-time, permanent contract position. We aim for long-term relationships -- once in, almost all team members stay for many years.

  We care about paying fairly:

  Team members set their own compensation level, which is paid based on hours worked (no unpaid overtime!).

  When determining your rate, we will expect you to factor in benefits (vacation, healthcare, purchase budgets, etc.) - the idea is to let you pick the benefits that are useful to you, rather than offer one-size-fits-all packages that aren’t always very valuable.

  We also proactively apply generous raises team-wide, based on the company results at the end of each year. See the details about how we approach compensation in our handbook.

  We also firmly believe in work-life balance: as long as you deliver what you commit to, there is a lot of latitude in how much work you can choose to accept. We are open to time commitments anywhere in the 30h to 40h/week range, and highly discourage working more than that. It’s important to have time to ourselves, as well as having some slack, and there are diminishing returns in working more anyway. We are currently recruiting precisely to preserve that balance, and ensure we have plenty of capacity to handle our projects.

  Culture and Work Style
  We are a highly collaborative development team working in an agile environment. We have built a mostly flat organization, composed of 30 senior developers with a handful of support staff. You will be working with highly competent individuals who take responsibility for their work, and the same will be expected of you.

  We belong to self-organized teams, so management doesn’t interfere with our day-to-day responsibilities and leadership is situational. You will lead some projects and join others. You will have a great deal of discretion in the work that you do and most of your work will be publicly viewable in the open-source community. Team members are continually learning from each other, and we place an emphasis on sustainable work practices and mental health. We help each other out when the unexpected happens and give kudos and recognition for work well done.

  Camaraderie is strong, standards are high, and so is the retention rate. We invest in documentation, tests, and automation so that redundant work is minimized and team members can focus on more interesting problems. The work is completely remote – the entire sprint planning process is done asynchronously, and the sprint process itself is iteratively improved. We focus on minimizing meetings so when they do happen it’s for productive reasons. In order to make sure we still get some face time, we schedule optional social events to talk, play games, and engage in other activities. We also meet yearly in person at the Open edX Conference (in non-Covid times!), and use the opportunity to meet everyone, along with the rest of the community, and do a team retreat.

  OpenCraft runs on the open first principle. Most of our conversations, code, and policies are publicly viewable.

  Our handbook, like much of our work, is publicly viewable and you can find it at https://handbook.opencraft.com/.

  You can also visit our forums at https://forum.opencraft.com/.

  We welcome applicants of all genders and ethnicities.

  Basic Requirements:
  Experience with contributing to free software projects - small contributions are completely fine, but you must have at least one patch or pull request merged in a third-party project, or been a maintainer of an open source project with significant adoption. (Note that you can contribute now to satisfy this requirement - see for example the Open edX release issues, fixing one of these issues guarantees an interview.)
  Senior developer with 3+ years working with Python
  Experience with Python web frameworks, specifically Django
  3+ years of HTML, Javascript, and CSS (experience with React and/or Typescript is a big plus!)
  Experience with unit testing
  Comfortable working in a Linux environment, specifically Debian or Ubuntu
  Experience with databases: MySQL, MongoDB, PostgreSQL
  Additional Skills:
  You will work on tasks from the following categories, but you can pick up the skills on the job if you haven't mastered these yet:

  DevOps experience, especially on Debian/Ubuntu servers, Terraform, Vault, Packer, Prometheus, ELK, Docker. We are building a modern infrastructure and having a strong DevOps presence on top of core software engineering skills is a big plus with us.
  Cloud computing, like AWS or OpenStack
  Configuration management tools such as Ansible, Consul
  RabbitMQ, Redis & Elasticsearch
  Mobile development (iOS and/or Android)
  Managing clients & projects from beginning to completion (senior developer)
  Public speaking at conferences (you would present a talk every year at the Open edX Con)
  Apply for this Position
  Our recruitment process differs from most other companies - we don’t believe resumes and the traditional interviews to be particularly effective. Often, they tell more about how good someone is at interviewing, rather than at the actual work. So, our initial interview is lighter and easier to pass than in other companies - but we then provide you with real (and paid!) work to see how it works out in reality.

  Step 1: You apply by filling out this form: https://opencraft.com/jobs/open-source-developer/
  Step 2: We do two interviews with candidates matching the requirements listed above. The first interview includes a (simple) coding exercise.
  Step 3: If this works out, we hire you! We start with a 2 months trial period, which allows both you and the rest of the team to fully evaluate how we work together, and is followed by a final review and confirmation.
Important: Applications need to be submitted on that form - applications submitted only on angel.co won’t be considered (we review applications all together, independently of the job board, as we post it in multiple places.)
`

export default JobDetailDialog;
