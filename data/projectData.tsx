import styled from 'styled-components';

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    -moz-osx-font-smoothing:grayscale;
    backface-visibility:hidden;
    transform:translateZ(0);
    transition: transform 0.25s ease-out;

    cursor: pointer;

    :hover,:focus{
        transform:scale(1.05);
    }

    :active{
       transform:scale(.90); 
    }
`;

const Img = styled.img`
    max-width: 16rem;
    height: auto;
`;

const ImgText = styled.div`
    background-color: rgba(0,0,0,0.3);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    border-radius: 0px 0px 0.5rem 0.5rem;

    text-align: center;

    padding: 0.3rem;
`;

/** 
* Project Images
* - array of project images with titles
*/
export const ProjectImages = [
    <ImgContainer key='proj_img_0'><Img src='/images/chore_demo2.png'      alt='demo of Chore app'  />         <ImgText>Chore App </ImgText>      </ImgContainer>,
    <ImgContainer key='proj_img_1'><Img src='/images/traderbot_demo.png'   alt='demo of TraderBot'  />         <ImgText>TraderBot </ImgText>      </ImgContainer>,
    <ImgContainer key='proj_img_2'><Img src='/images/mapnweather_demo.jpg' alt='demo of Map-N-Weather app'  /> <ImgText>Map-N-Weather</ImgText>   </ImgContainer>,
    <ImgContainer key='proj_img_3'><Img src='/images/face_recog_demo.png'  alt='demo of Face Recognition app'/><ImgText>Face Recognition</ImgText></ImgContainer>,
    <ImgContainer key='proj_img_4'><Img src='/images/chat_demo.png'        alt='demo of Chat app'  />          <ImgText>Chat </ImgText>           </ImgContainer>,
    <ImgContainer key='proj_img_5'><Img src='/images/alieninvasion2.gif'    alt='play thru of ALien Invasion javascript game' /><ImgText>Alien Invasion</ImgText>  </ImgContainer>
];

const ProjectContainer = styled.div`
    max-width: 100%;
    padding: 10px;
`;

const P = styled.p`
    margin: 0.25rem 0rem;
    color: #bbb;
`;

const Bold = styled(P)`
    font-weight: bold;
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    padding: 1rem 0.5rem;
`;

const ProjImg = styled.img`
    max-width: 100%;
    max-height: 300px;
`;

export const A = styled.a`
    text-decoration:none;
    transition: color .15s ease-in;

    color: #f4f4f4;

    cursor: pointer;

    :hover {
        color: hotpink;
    }
`;

const Yellow = styled(A)`
    color: yellow;
`;

/**
 * Project Slides
 * - array of project slides
*/
export const ProjectSlides = [
    <ProjectContainer key={`ProjectSlide${0}`}>
        <Bold><A target='_blank' rel="noopener noreferrer" href='https://github.com/sfhemstreet/chore-app' >Chore</A></Bold>
        <P >
            Chore is a web app for organizing, assigning, and keeping track of chores in a household. 
            It allows users to create groups, invite their roommates, grant individual member permissions, and create / assign chores. 
        </P>
        <P >
            <A target='_blank' rel="noopener noreferrer" href='https://github.com/sfhemstreet/chore-app' title="Front-End GitHub repo">Front-End:</A> React, Redux, React-Router, Tachyons 
        </P>
        <P >
            <A target='_blank' rel="noopener noreferrer" href='https://github.com/sfhemstreet/chore-api' title="Back-End GitHub repo">Back-End: </A>Node.js, Express, Bcrypt, JSON Web Tokens, PostgreSQL.
        </P>
        <P >
            <A target='_blank' rel="noopener noreferrer" href='https://github.com/sfhemstreet/chore-email' title="Email GitHub repo">Email: </A>Node.js, Express, Twilio Send Grid
        </P>
        <Flex>
            <ProjImg src='/images/chore_demo.png' alt='demo of chore app' />    
        </Flex>
    </ProjectContainer>,
    <ProjectContainer key={`ProjectSlide${1}`}>
        <Bold><A target='_blank' rel="noopener noreferrer" href='https://github.com/sfhemstreet/traderbot' >TraderBot</A></Bold>
        <P >
            TraderBot is an automated CrytoCurrency trader that reads data off of multiple websockets to make trades 24/7.
        </P>
        <P >
            Written in Python, TraderBot uses Asyncio to constantly stream on-chain data from Token Analyst's websocket 
            as well as trade and price data from BitMEX's websocket. 
            Project was written for traders with little coding knowledge and contains abstractions for easiliy reading data 
            and trigger trades on the BitMEX exchange. 
        </P>
        <P >
            Utilizes: Asyncio, WebSockets
        </P>
        <Flex>
            <ProjImg src='/images/traderbot_demo.png' alt='demo of trader bot'/> 
        </Flex>    
    </ProjectContainer>,
    <ProjectContainer key={`ProjectSlide${2}`}>
        <Bold><A target='_blank' rel="noopener noreferrer" href='https://github.com/sfhemstreet/MapNWeather' >Map-N-Weather</A></Bold>
        <P >
            Map-N-Weather is responsive Map and Weather dashboard, used to get 5 day weather, and visualize wind, temperature, precipitation and cloud data for any given coordinates. 
            Side navigation displays list of saved coordinates, and can be searched by type of data point, and by name. 
            Currently features coordinates of my favorite camping and rock climbing areas. 
        </P>
        <P >
            Utilizes TypeScript, React, Leaflet.js
        </P>
        <Flex>
            <ProjImg src='/images/mapnweather_demo2.gif' alt='demo of Map-N-Weather'/>
        </Flex>   
    </ProjectContainer>,
    <ProjectContainer key={`ProjectSlide${3}`}>
        <Bold><A target='_blank' rel="noopener noreferrer" href='https://github.com/sfhemstreet/face-recognition-app' >Face Recognition</A></Bold>
        <P >
        A web application that utilizes Clarifai's facial recognition API to detect human faces in photos. Users enter 
        a URL to an image to see if the AI can recognize human faces. Faces detected in the photo are boxed and highlighted. 
        </P>
        <P >
        Utilizes: React, Node.js, Express, PostgreSQL
        </P>
        <Flex>
            <ProjImg src='/images/face_recog_demo.png' alt='demo of face recognition' />
        </Flex>
    </ProjectContainer>,
    <ProjectContainer key={`ProjectSlide${4}`}>
        <Bold><A target='_blank' rel="noopener noreferrer" href='https://github.com/sfhemstreet/chat' >Chat</A></Bold>
        <P >
            Chat is web app instant messager that utilizes WebSockets for fast messaging.  
        </P>
        <P >
            The demo front-end container asks the user for a username, then randomly assigns the user a dog avatar photo using Dog CEO Dog API.
            Demo back-end node server pushes messages to all clients connected to it. 
        </P>
        <P >
            Utilizes: TypeScript, React, Node, WebSockets
        </P>
        <Flex>
            <ProjImg src='/images/chat_demo.png'  alt='demo of chat messages' />
        </Flex>
    </ProjectContainer>,
    <ProjectContainer key={`ProjectSlide${5}`}>
        <Bold><A target='_blank' rel="noopener noreferrer" href='https://github.com/sfhemstreet/alien-invasion-js' >Alien invasion</A></Bold>
        <P>
            Alien Invasion is a web game that pays homage to the classic “Space Invaders” arcade game. 
            The game uses vanilla JavaScript for gameplay and logic, with HTML5 Canvas to render and manipulate the DOM. 
            <Yellow href='https://sfhemstreet.github.io/alien-invasion-js/' target='_blank' rel="noopener noreferrer" > Play it!</Yellow> 
        </P>
        <P className='mv0' >Don't believe it's possible to win? Watch me beat it <A href="https://www.youtube.com/embed/_u-ijAS8CWo" target='_blank' rel="noopener noreferrer" >here</A></P>
        <Flex>
            <ProjImg src='/images/alieninvasion2.gif' alt='play thru of ALien Invasion javascript game' />
        </Flex>
    </ProjectContainer>
];

// <iframe className='center' title='AlienInvasionPlayThru' min-width='370' width='370' max-width='370' height='550' src="https://sfhemstreet.github.io/alien-invasion-js/" frameBorder="0" ></iframe>