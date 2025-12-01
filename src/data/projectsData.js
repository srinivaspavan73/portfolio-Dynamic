// import eight from '../assets/svg/projects/eight.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import six from '../assets/svg/projects/six.svg'
// import face from '../assets/png/face.jpg'
// import land from '../assets/png/land.jpg'
import handloom from '../assets/png/handloom.jpg'
import Votingapp from '../assets/png/Votingapp.png'
import campushub from '../assets/png/campushub.png'
import secureaccess from '../assets/png/secureaccess.jpg'
import culture_trails_logo from '../assets/png/culture_trails_logo.jpg'

export const projectsData = [

        {
        id: 1,
        projectName: 'CampusHub',
        projectDesc: 'A web application that enables users to log in, browse and register for events, and collaborate on campus projects.',
        tags: ['React', 'Node', 'Express', 'SQL', 'JavaScript'],
        code: 'https://github.com/srinivaspavan73/campus-hub-main-cloud',
        demo: 'https://campus-hub-main-cloud.vercel.app/',
        image: campushub
    },
    {
        id: 2,
        projectName: 'Voting App',
        projectDesc: 'A secure web-based platform for conducting college elections, allowing students to log in, view candidates, and cast their votes online.',
        tags: ['React', 'JavaScript', 'CSS', 'HTML'],
        code: 'https://github.com/srinivaspavan73/VotingApp',
        demo: 'https://mru-votingapp.netlify.app/',
        image: Votingapp
    },
    {
        id: 3,
        projectName: 'WeaveQuest: Exclusive Handloom Saree Marketplace',
        projectDesc: 'A dedicated online platform celebrating the tradition of handloom sarees, connecting artisans and enthusiasts in a vibrant marketplace.',
        tags: ['React', 'CSS' , 'HTML'],
        code: 'https://github.com/srinivaspavan73/Weaver-s-Loom',
        demo: 'https://weavers-loom.netlify.app/',
        image: handloom
    },
{
    id: 4,
    projectName: 'SecureAccess Advanced Multilayer Authentication',
    projectDesc: 'A cutting-edge authentication platform that enhances security through facial and gesture recognition technologies.',
    tags: ['React', 'OpenCV', 'Flask', 'TensorFlow'],
    code: 'https://github.com/srinivaspavan73/Secure-Access',
    // demo: '',
    image: secureaccess
},

{
    id: 5,
    projectName: 'Culturist – Seasonal Indian Travel Guide',
    projectDesc: 'An interactive cultural exploration platform that helps users discover the best Indian cities to visit by season, featuring festivals, cuisine, monuments, lifestyle, likes, and user comments.',
    tags: ['React', 'JavaScript', 'LocalStorage', 'Responsive UI'],
    code: 'https://github.com/srinivaspavan73/Culturist/', // replace with actual repo
    demo: 'https://culturist.netlify.app/', // replace with actual live URL
    image: culture_trails_logo
},

]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/