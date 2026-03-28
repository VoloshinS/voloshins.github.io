import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
  ____            _     _ _ 
 / ___|  ___ _ __| |__ (_) )
 \\___ \\ / _ \\ '__| '_ \\| | |
  ___) |  __/ |  | | | | | |
 |____/ \\___|_|  |_| |_|_|_|

 __     __    _           _             
 \\ \\   / /__ | | ___  ___| |__  _   _ _ __
  \\ \\ / / _ \\| |/ _ \\/ __| '_ \\| | | | '_ \\
   \\ V / (_) | | (_) \\__ \\ | | | |_| | | | |
    \\_/ \\___/|_|\\___/|___/_| |_|\\__, |_| |_|
                                 |___/      
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
  ____            _     _ _ 
 / ___|  ___ _ __| |__ (_) )
 \\___ \\ / _ \\ '__| '_ \\| | |
  ___) |  __/ |  | | | | | |
 |____/ \\___|_|  |_| |_|_|_|

 __     __    _           _             
 \\ \\   / /__ | | ___  ___| |__  _   _ _ __
  \\ \\ / / _ \\| |/ _ \\/ __| '_ \\| | | | '_ \\
   \\ V / (_) | | (_) \\__ \\ | | | |_| | | | |
    \\_/ \\___/|_|\\___/|___/_| |_|\\__, |_| |_|
                                 |___/      
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome dear visitors. (Version 1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/voloshins/voloshins.github.io">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        {/* <img src="/serhii.png" style={{width: '300px', opacity: '0.5'}} /> */}
      </div>
    </HeroContainer>
  );
};

export default Welcome;
