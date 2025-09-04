import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import AuctionHunter from '../assets/images/Auction Hunter.png';
import MotelSim from '../assets/images/Motel Simulator.png';
import ShoppingMall from '../assets/images/Shopping Mall.png';
import CookingWorld from '../assets/images/Cooking World.png';
import FruitClinic from '../assets/images/Fruit Clinic.png';
import Antistress from '../assets/images/Antistress.png';
import MergeBlocks from '../assets/images/Merge Blocks.png';
import Dentist from '../assets/images/Dentist.png';
import CozyRooms from '../assets/images/Cozy Rooms.png';
import Foodie from '../assets/images/Foodie.jpg';
import DreamyCooking from '../assets/images/DreamyCooking.jpg';
import CubeMerge from '../assets/images/Cube Merge.png';
import GoalKick from '../assets/images/Goal Kick.png';
import NinjaGun from '../assets/images/Ninja Gun.png';
import MixPotion from '../assets/images/Mix Potion.png';
import ScrewPuzzle from '../assets/images/Screw Puzzle.png';
import FindOut from '../assets/images/Find Out.png';
import ColorWhoper from '../assets/images/Color Whopper.png';
import Diorama from '../assets/images/Diorama.png';
import Ooze from '../assets/images/Ooze.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
            <div className="projects-grid">

            <div className="project">
                    <a href="https://apps.apple.com/us/app/shopping-mall-idle-supermarket/id6449736755" target="_blank" rel="noreferrer"><img src={ShoppingMall} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://apps.apple.com/us/app/shopping-mall-idle-supermarket/id6449736755" target="_blank" rel="noreferrer"><h2>Shopping Mall</h2></a>
                <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/cooking-world-restaurant-game/id6443723419" target="_blank" rel="noreferrer"><img src={CookingWorld} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/cooking-world-restaurant-game/id6443723419" target="_blank" rel="noreferrer"><h2>Cooking World</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/ua/app/fruit-clinic-doctor-surgeon/id6470895120" target="_blank" rel="noreferrer"><img src={FruitClinic} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/ua/app/fruit-clinic-doctor-surgeon/id6470895120" target="_blank" rel="noreferrer"><h2>Fruit Surgeon</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/cooking-world-restaurant-game/id6443723419" target="_blank" rel="noreferrer"><img src={Antistress} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/cooking-world-restaurant-game/id6443723419" target="_blank" rel="noreferrer"><h2>Antistress<br /> (Mini Games)</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/auction-hunter-simulator-bid/id6744613832" target="_blank" rel="noreferrer"><img src={AuctionHunter} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/auction-hunter-simulator-bid/id6744613832" target="_blank" rel="noreferrer"><h2>Auction Hunter</h2></a>
                    <p></p>
                </div>
                
                <div className="project">
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={MotelSim} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Motel Simulator</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/auction-hunter-simulator-bid/id6744613832" target="_blank" rel="noreferrer"><img src={MergeBlocks} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/auction-hunter-simulator-bid/id6744613832" target="_blank" rel="noreferrer"><h2>Merge Blocks</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/cozy-rooms-dream-home-puzzle/id6745123846" target="_blank" rel="noreferrer"><img src={CozyRooms} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/cozy-rooms-dream-home-puzzle/id6745123846" target="_blank" rel="noreferrer"><h2>Cozy Rooms</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://play.google.com/store/apps/details?id=com.artificialaesthetic.foodieskewersort" target="_blank" rel="noreferrer"><img src={Foodie} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.artificialaesthetic.foodieskewersort" target="_blank" rel="noreferrer"><h2>Foodie Skewer</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/2048-cube-merge/id1600039956" target="_blank" rel="noreferrer"><img src={CubeMerge} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/2048-cube-merge/id1600039956" target="_blank" rel="noreferrer"><h2>Cube Merge</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/goal-kick-soccer-football/id1626487606" target="_blank" rel="noreferrer"><img src={GoalKick} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/goal-kick-soccer-football/id1626487606" target="_blank" rel="noreferrer"><h2>Goal kick</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/ninja-gun-hitty-shoot/id1632262275" target="_blank" rel="noreferrer"><img src={NinjaGun} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/ninja-gun-hitty-shoot/id1632262275" target="_blank" rel="noreferrer"><h2>Ninja Gun</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/mix-potion/id1511505418" target="_blank" rel="noreferrer"><img src={MixPotion} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/mix-potion/id1511505418" target="_blank" rel="noreferrer"><h2>Mix Potion</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/nuts-and-screws/id6471582523" target="_blank" rel="noreferrer"><img src={ScrewPuzzle} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/nuts-and-screws/id6471582523" target="_blank" rel="noreferrer"><h2>Screw Puzzle</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/developer/eitezaz-ahmad/id1027303006?see-all=i-phonei-pad-apps" target="_blank" rel="noreferrer"><img src={FindOut} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/developer/eitezaz-ahmad/id1027303006?see-all=i-phonei-pad-apps" target="_blank" rel="noreferrer"><h2>Find Out</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/color-whopper-wrecking-tower/id1471554048" target="_blank" rel="noreferrer"><img src={ColorWhoper} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://apps.apple.com/us/app/color-whopper-wrecking-tower/id1471554048" target="_blank" rel="noreferrer"><h2>Color Whopper</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://play.google.com/store/apps/details?id=com.case7.HiddenObjects3D.Diorama" target="_blank" rel="noreferrer"><img src={Diorama} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.case7.HiddenObjects3D.Diorama" target="_blank" rel="noreferrer"><h2>Diorama</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://play.google.com/store/apps/details?id=com.case7.riseofgo" target="_blank" rel="noreferrer"><img src={Ooze} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.case7.riseofgo" target="_blank" rel="noreferrer"><h2>Rise Of Ooze</h2></a>
                    <p></p>
                </div>
                <div className="project">
                    <a href="https://play.google.com/store/apps/details?id=com.artificialaesthetic.dreamycooking" target="_blank" rel="noreferrer"><img src={DreamyCooking} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.artificialaesthetic.dreamycooking" target="_blank" rel="noreferrer"><h2>Dreamy Cooking</h2></a>
                    <p></p>
                </div>


                {/* }
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;