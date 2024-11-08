document.addEventListener('DOMContentLoaded', () => {
    const castSection = document.querySelector('#cast .cast-container');
    const creativeSection = document.querySelector('#creative .creative-container');
    const crewSection = document.querySelector('#crew .crew-container');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalBio = document.getElementById('modal-bio');
    const modalImage = document.getElementById('modal-image');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const backToTopBtn = document.getElementById('back-to-top');

    // Cast Data
    const cast = [
        {
            name: "Nathan Detroit",
            actor: "Hassan Laing",
            bio: "Hassan Lee Laing (Nathan Detroit) is a second-year Creative Arts and Theatre: Performance Track double major, with a Writing and Communications minor from Queens, New York. He is a budding Siena performer, this is his first time performing in a Siena theatre production. He’s recently worked behind the scenes as a designer for New Clean Energy in the Siena Climate Plays. He’s a seasoned performer in the capital region doing many local productions, shows with The Capital Repertory Theatre, and performing in the High School Musical Theatre Awards at Proctors. He bets you a thousand bucks, in cash, that you’ll enjoy the show!",
            role: "Nathan Detroit",
            image: "assets/images/hassan_laing.jpg"
        },
        {
            name: "Miss Adelaide",
            actor: "Ella Carter",
            bio: "Ella Carter (Miss Adelaide) is a fourth-year Visual Art and Design major from Plattsburgh, NY, and couldn’t be more excited to play Miss Adelaide in Guys and Dolls. Though this is her first time performing at Siena, theatre has always been a part of her life. When she’s not on stage, Ella enjoys expressing herself through art and sharing her love of good music. After graduation, she hopes to continue her creative journey by pursuing a degree in graphic design and furthering her studies. Working with this cast and crew has been an amazing and encouraging experience, and she’s grateful to everyone who made this production so special.",
            role: "Miss Adelaide",
            image: "assets/images/ella_carter.jpg"
        },
        {
            name: "Sarah Brown",
            actor: "Grey Hertz",
            bio: "Grey Hertz (Sarah Brown) is so excited to be a part of this show! This is their first year at Siena and they can’t wait to do more theater here! They want to thank everyone who made this show possible and hopes you enjoy the production!",
            role: "Sarah Brown",
            image: "assets/images/grey_hertz.jpg"
        },
        {
            name: "Sky Masterson",
            actor: "Daniel Ferrante",
            bio: "Daniel Ferrante (Sky Masterson) is a junior and is ecstatic to be back for his second production at Siena! Some of his favorite past roles include JD in Heathers, Seymour in Little Shop of Horrors, and Marius in Les Misérables. Thanks go out to the creative team, his family, and his grandpa, who continues to inspire him every day with his bravery and passion.",
            role: "Sky Masterson",
            image: "assets/images/daniel_ferrante.jpg"
        },
        {
            name: "Arvide Abernathy",
            actor: "Adriana Fatato",
            bio: "Adriana Fatato (Arvide Abernathy) (she/her) is a senior social work student from Schenectady, NY. She has been a part of multiple theater productions throughout her middle and high school years. Transferring to Siena last year, she immediately spiked an interest in Stage III. She is excited to be a part of Siena's production of Guys and Dolls this semester, playing the role of Arvide, and is extremely grateful for all the support she has received throughout the process of the production.",
            role: "Arvide Abernathy",
            image: "assets/images/adriana_fatato.jpg"
        },
        // ... (Other Cast Members)
        // Ensure all cast members are listed here with their respective details
    ];

    // Creative Team Data
    const creative = [
        {
            name: "AshleySimone Kirchner",
            role: "Director & Choreographer",
            bio: "AshleySimone Kirchner (Director & Choreographer) is a director, choreographer, and arts educator in New York's Capital Region. She began with Playhouse Stage Company (formerly Park Playhouse) in 2010 as Dance Captain in Annie Get Your Gun and has since performed in Cabaret, Spamalot, Avenue Q, and A Christmas Story. Now the Associate Artistic Director, Resident Choreographer, and Director of Education at PSC, her Broadway World Regional Award-winning work includes Something Rotten, Legally Blonde, In the Heights, Ragtime, Matilda, and Chicago. A lecturer at UAlbany, she teaches Master Classes and choreographs nationally. AshleySimone graduated Magna Cum Laude with a BFA in Dance from Marymount Manhattan College, performing works by Lar Lubovitch, Merce Cunningham, and Christopher d’Amboise. She is a proud member of the Stage Directors and Choreographers Society (SDC)."
        },
        {
            name: "Brian Axford",
            role: "Music Director",
            bio: "Brian Axford (Music Director) is excited to be working with Siena College for the first time. Brian has been Music Director for Park Playhouse and Playhouse Stage Company since 2013. Past favorite shows include Ain't Misbehavin', In the Heights, Sweeney Todd, Chicago, and Hands on a Hardbody. Additionally, Brian is the organist and music director at the Delmar Reformed Church, serves on the board of directors for the Empire State Youth Orchestra, and is a proud member of the AFM Local 14. Many thanks to Lauren, Isis Evangeline, James, and Eden for their love and support."
        },
        {
            name: "Michael Lounello",
            role: "Production Manager",
            bio: "Michael Lounello (Production Manager) is an experienced Designer & Innovator specializing in immersive experiences, audiovisual solutions, and entertainment design. Based in Albany, NY, he serves as the Production Manager, managing the college's designs and productions. With over a decade in the industry, Mike has built a diverse portfolio, including concerts, TV shows, and corporate events. In addition to his role at Siena, Mike is Co-Vice Chair of Design, Technology, and Management for Region 1 of the Kennedy Center American College Theatre Festival (KCACTF), and serves on the board of Shaker Ridge Country Club. Outside work, Mike is an avid golfer, skier, and boater, and brings a blend of formality and playfulness to all his endeavors."
        },
        {
            name: "Orin James",
            role: "Assistant Musical Director",
            bio: "Orin James '28 (Assistant Musical Director) is a Freshman with a currently Undecided major. He's a musician with 8 years of Trumpet experience, and he's been working on crews in musicals since High School and is very excited to continue his work through the Creative Arts Department. His favorite show has been Anything Goes through the Shenendehowa Musical Department, and he can't wait to dive into more shows during his time at Siena!"
        },
        {
            name: "Salem Smith",
            role: "Dramaturg",
            bio: "Salem Smith (Dramaturg) is thrilled to participate in a mainstage production in a new role as Dramaturgy. Salem is a junior History Education major who is also working towards a theatre certificate. Salem loves to participate in theatre here at Siena and at many other places. Salem would like to thank the cast and crew for making this production very fun."
        },
        {
            name: "Denise Massman",
            role: "Costume Designer",
            bio: "Denise R. Massman, MFA (Costume Designer) has been specializing in all aspects of theatrical design for over 45 years. She has presented work nationally and internationally with her latest work being a 10-episode “soap opera” in Norway. Currently, she is interested in sustainability and how that translates to costume design and technology. She designs sets and costumes and teaches theater design at Siena College."
        },
        {
            name: "Krista Rivers",
            role: "Assistant Costume Designer (Adelaide)",
            bio: "Krista Rivers (Krista Rivers) is a senior Creative Arts and Theatre (Performance Track) double major with a Writing and Communications minor here at Siena! Krista has loved being a part of the Siena Creative Arts department in her time here, her favorite productions being Can’t Pay, Won’t Pay? as Margherita and her later work with the devised Dr. Faustus. Along with being an actor, she is also a musician and playwright, loving to participate in all elements of theatre and performance art on campus! She would like to thank her family and friends for all their support, and the cast and crew for working hard to bring this show to life!"
        },
        {
            name: "Timothy McMath",
            role: "Scenic Designer",
            bio: "Tim McMath (Scenic Designer) is a Brooklyn-based scenic designer who has been designing plays at theaters around the country for the past 25 years. Previously at Siena, he designed the sets for The Pajama Game and Enemy of the People. He is surprisingly passionate about taking long walks. Broadway Associate Design: Diana, Funny Girl, The Humans, Fun Home, Once On This Island, Stereophonic, and Spring Awakening, among others. timmcmath.com instagram: @tdmcma"
        },
        {
            name: "Paul Hudson",
            role: "Lighting Designer",
            bio: "Paul Hudson (Lighting Designer) (he/him) is thrilled to return to Siena after lighting last season's The Enemy of the People. Mr. Hudson is a NYC-based lighting designer, working in live performance of all stripes, as well as studio television. Highlights and recent credits include: Ashes & Ink (Paper Birch Productions), This is Not a Time of Peace (New Light Theater Project), The Beat Goes On and Dancing in the Streets (Transcendence Theatre Co), Once and Little Women (Bristol Valley Theater), Lonely Planet (Keen Co), Lulu XX (WaxFactory), and over 20 opera, theater, and music productions at The Juilliard School. He served as Associate to Paul Gallo on Three Tall Women (Broadway), to Mimi Sherin on Judgment Day and The Hairy Ape (Park Avenue Armory), and to Betsy Adams on The Laramie Project Cycle (Tectonic). MFA: NYU, member USA829."
        },
        {
            name: "Jeffrey Salerno",
            role: "Sound Designer",
            bio: "Jeffrey Salerno (Sound Designer) (he/him) is a New York City-based Sound Designer. Most recently, Jeffrey sound designed THE FORD/HILL PROJECT with Waterwell at The Public Theater (NYC) and Woolly Mammoth Theater (DC). Jeffrey is thrilled to be returning to Siena, having last designed DR. FAUSTUS and COMPANY.\nRegional Credits: SEARED, BEAUTIFUL: THE CAROLE KING MUSICAL, SWEAT, MILLION DOLLAR QUARTET CHRISTMAS, WIZARD OF OZ, HONKY TONK ANGELS (Capital Repertory Theater)\nINDECENT, PIPPIN, INTO THE WOODS, THE AGITATORS, WEBSTER’S BITCH (Playhouse on Park), WHAT THE JEWS BELIEVE (Berkshire Theatre Group)\nAssociate Sound Design: DEAD OUTLAW (Minetta Lane Theatre/Audible), PENELOPE (Hudson Valley Shakespeare Festival), SPACE DOGS (MCC), GODSPELL (Berkshire Theatre Group)\nJeffrey is a Proud Member of IATSE Local USA 829 and TSDCA.\nFor more information about his current or past projects and what’s coming up next, visit www.jeffreysalerno.com."
        },
        {
            name: "Christian Leahy",
            role: "Props Designer",
            bio: "Christian Leahy '12 (Props Designer) (he/him) is a Residence Director at Siena College who is also currently enrolled in Northeastern University's Masters in Education in Higher Education Administration program. During his undergraduate time, Christian was active in multiple theatre productions ranging from acting, to stage management, and prop/set design. Christian has also been active in local community theatres, specifically with Creative License located out of Albany, NY wherein he has also acted and stage managed. Christian focuses his work on empowerment and motivation to help students achieve their goals and objectives alongside the vision that they have for themselves."
        },
        {
            name: "Yiheng Lu",
            role: "Follow-Spot Operator",
            bio: "Yiheng Lu (Follow-Spot Operator) is a senior at Siena College majoring in applied physics. He played the bank manager role at the Sanxin International Lecture Series: The Nobel Prizes 2022 in Zhongshan, China, to demonstrate the relationship between banks and economic crises. This is his first time working behind the scenes of a theatrical production."
        }
        // Add more creative team members here following the same structure
    ];

    // Crew Data
    const crew = [
        {
            name: "Jeff Sullivan",
            role: "Scene Shop Supervisor",
            bio: "Jeff Sullivan (Scene Shop Supervisor) oversees the scene shop, ensuring all set pieces are constructed to perfection. With over 15 years of experience in scenic design and construction, Jeff brings a wealth of knowledge and expertise to the production. He is passionate about creating immersive environments that enhance the storytelling of each performance."
        },
        {
            name: "Isaac DeMarchi",
            role: "Scenic Painter",
            bio: "Isaac DeMarchi (Scenic Painter) is responsible for bringing the scenic designs to life through meticulous painting and finishing. His attention to detail ensures that every set piece not only looks authentic but also withstands the rigors of live performances."
        },
        {
            name: "Evan Moore",
            role: "Lighting Supervisor & Sound Supervisor",
            bio: "Evan Moore (Lighting Supervisor & Sound Supervisor) manages all lighting and sound operations for the production. With a background in electrical engineering and a passion for live theatre, Evan ensures that the technical aspects of the show enhance the overall performance experience."
        },
        {
            name: "James Kelly",
            role: "Master Electrician / Programmer",
            bio: "James Kelly (Master Electrician / Programmer) is in his third year as a communications major from Guilderland, NY, and an active part of Siena theatre. Most recently he played Creon in Stage III's production of Antigone, and wrote and directed scenes for the Laudato Si' Center for Integral Ecology. He is currently serving as Stage III's treasurer, and would like to thank everyone involved with Guys and Dolls for their work on this project. He hopes you enjoy the show!"
        },
        {
            name: "Madison Crall",
            role: "Assistant Production Electrician",
            bio: "Madison Crall (Assistant Production Electrician) is a third-year business marketing major from Burnt Hills, NY. She is an Assistant Master Electrician with TV production experience as a set dresser and four years of live production experience as a stagehand. This is her first production with Siena and she hopes everyone enjoys the show."
        },
        {
            name: "Savannah Callinan",
            role: "Assistant Production Electrician",
            bio: "Savannah Callinan (Assistant Production Electrician) is a freshman from Stewartsville, NJ. She's partaking in the lighting crew for the Guys and Dolls show and she has done past plays like Vintage Hitchcock as a stagehand. She was in a play of Sound Of Music as a Nazi soldier. While attending Siena, she had interest in the art class and was looking forward to studying abroad in England during her Junior year. She would like to thank Jeff Sullivan for helping her with working with the lighting."
        },
        {
            name: "Sarah Vogt",
            role: "Audio Engineer (A1)",
            bio: "Sarah Vogt (Audio Engineer) is a senior theatre design and technology major from Westwood New Jersey. She is so excited to be a part of her final musical at Siena College. She has been a part of the theatre department since her freshman year. Some shows include; She Kills Monsters (Kalliope), Company (FOH Engineer), Dr. Faustus (Bad Angel, Frederick, Scholar 1, Servant, and Friar 1), Eurydice (Orpheus and AD) An Enemy of the People (Light Board Operator), A Maze (Hermione), Antigone (Ismene and Sound Technician). She is so excited to share this experience with all of her close friends. She would love to thank her parents and grandparents who give her so much support throughout her theatre career!"
        },
        {
            name: "Angelina Brandt",
            role: "Wardrobe Assistant",
            bio: "Angelina Brandt (Wardrobe Assistant) is a third-year social work major with a minor in education studies from Albany, NY. She has been passionate about theatre since middle school and is thrilled to assist in the wardrobe department for Guys and Dolls. Angelina enjoys sewing, designing, and helping bring characters to life through their costumes."
        },
        {
            name: "Caoimhe Tyrrell",
            role: "Wardrobe Assistant",
            bio: "Caoimhe Tyrrell (Wardrobe Assistant) is a second-year student majoring in psychology with a minor in theatre arts. She is excited to support the wardrobe team in this production and looks forward to contributing her skills in costume maintenance and design."
        },
        {
            name: "Dahlia White",
            role: "Stage Manager",
            bio: "Dahlia White (Stage Manager) (she/her) is a Senior Creative Arts major from Westchester, NY and is thrilled to be a part of her fourth production here at Siena! Despite growing up as a union actor, Dahlia’s past production team credits at Siena include Eurydice (Wardrobe), An Enemy of the People (Asst. Producer), A Maze (Asst. Director), and also the Troy Foundry Theatre’s City of Myth: Ilium Sings (Asst. Stage Manager). She would like to give huge thanks to the amazing and hardworking cast and crew, her lovely Asst. Stage Managers who she couldn’t have done this without, AshleySimone Kirchner and Brian Axford, and Mike Lounello and Christian Leahy who were always there for her as mentors and guides. Break legs everyone and enjoy the show!"
        },
        {
            name: "Leah Buono",
            role: "Assistant Stage Manager",
            bio: "Leah Buono (Assistant Stage Manager) (she/her) is a junior Social Work major with a Creative Arts minor. After taking part as ASM in Siena’s 2022 production of Company, she was eager to get back involved in theater production! She recently declared her creative arts minor after loving her involvement with the theater side of Siena Creative Arts and her experience in Drawing and Painting classes. She would like to thank her parents, for always pushing her to explore her creative side, and the cast and production team for working hard to make this show happen!"
        },
        {
            name: "Selyna Kalinowski",
            role: "Assistant Stage Manager",
            bio: "Selyna Kalinowski (Assistant Stage Manager) is a second-year Visual Arts and Design major and is ecstatic to become a part of Siena’s production of Guys and Dolls. This is her first time being on tech crew for a musical, having been an ensemble member for her high school production of Mamma Mia!"
        },
        {
            name: "Sam Rubinstein",
            role: "Assistant Stage Manager",
            bio: "Sam Rubinstein (Assistant Stage Manager) (she/they) is delighted to be part of this production of Guys and Dolls, which is not only her first show at Siena but her first time in stage management too. In their short time at Siena, Sam has also directed and designed shows for the Laudato Si' Climate Justice Symposium performance. She would like to congratulate and thank all who worked on this show, and she hopes you enjoy it!"
        },
        {
            name: "Allison Boyle",
            role: "Assistant Stage Manager",
            bio: "Allison Boyle (Assistant Stage Manager) (she/her) is a first-year student at Siena College. She is a chemistry major, but thoroughly enjoys spending her free time dedicated to the arts. This will be Allison’s first show at Siena and her first time assisting in stage management and the technical aspects of theater on a college level, though she has been involved in stage crew since middle school. She is incredibly excited to be involved!"
        }
        // Add more crew members here following the same structure
    ];

    // Function to create member cards
    function createMemberCard(member, category) {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add(`${category}-member`);

        let memberContent = `
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;

        // Only Cast members have images
        if (member.image && category === 'cast') {
            memberContent = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            `;
        }

        memberDiv.innerHTML = memberContent;

        // Add click event to show modal with bio
        if (member.bio) {
            memberDiv.style.cursor = 'pointer';
            memberDiv.addEventListener('click', () => {
                modal.style.display = "flex";
                modalName.textContent = member.name;
                modalRole.textContent = member.role;
                modalBio.textContent = member.bio;
                if (member.image && category === 'cast') {
                    modalImage.src = member.image;
                    modalImage.alt = member.name;
                    modalImage.style.display = 'block';
                } else {
                    modalImage.style.display = 'none';
                }
            });
        }

        return memberDiv;
    }

    // Sort Function for Alphabetical Order
    function sortMembersAlphabetically(members) {
        return members.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Populate Cast Section
    function populateCast() {
        const sortedCast = sortMembersAlphabetically(cast);
        sortedCast.forEach(member => {
            const card = createMemberCard(member, 'cast');
            castSection.appendChild(card);
        });
    }

    // Populate Creative Team Section
    function populateCreative() {
        const sortedCreative = sortMembersAlphabetically(creative);
        sortedCreative.forEach(member => {
            const card = createMemberCard(member, 'creative');
            creativeSection.appendChild(card);
        });
    }

    // Populate Crew Section
    function populateCrew() {
        const sortedCrew = sortMembersAlphabetically(crew);
        sortedCrew.forEach(member => {
            const card = createMemberCard(member, 'crew');
            crewSection.appendChild(card);
        });
    }

    populateCast();
    populateCreative();
    populateCrew();

    // Handle Modal Close
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Handle Lightbox for Gallery Images (if applicable)
    const galleryImages = document.querySelectorAll('.gallery-container img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
        });
    });

    // Close Lightbox
    const closeLightbox = document.querySelector('.close-lightbox');
    closeLightbox.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        const lightbox = document.getElementById('lightbox');
        if (event.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Hamburger Menu Toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close the menu when a link is clicked
    const navItems = document.querySelectorAll('#nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if(navLinks.classList.contains('show')){
                navLinks.classList.remove('show');
            }
        });
    });

    // Back to Top Button Functionality
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
