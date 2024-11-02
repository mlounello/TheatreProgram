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
        // ... (Other Creative Team Members)
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
        // ... (Other Crew Members)
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

        // Add click event to show modal with bio (only for cast members)
        if (member.image && category === 'cast') {
            memberDiv.addEventListener('click', () => {
                modal.style.display = "flex";
                modalName.textContent = member.name;
                modalRole.textContent = member.role;
                modalBio.textContent = member.bio;
                modalImage.src = member.image;
                modalImage.alt = member.name;
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
