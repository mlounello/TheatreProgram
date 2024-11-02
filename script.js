document.addEventListener('DOMContentLoaded', () => {
    const castSection = document.querySelector('.cast-container');
    const contactForm = document.getElementById('contact-form');

    // Sample cast data
    const cast = [
        {
            name: "Nicely-Nicely Johnson",
            role: "Danny",
            bio: "Nicely-Nicely Johnson is the optimistic owner of the Paradise Club.",
            image: "assets/images/danny.jpg"
        },
        {
            name: "Sophie",
            role: "Sophie",
            bio: "Sophie is a devoted and caring character with a heart of gold.",
            image: "assets/images/sophie.jpg"
        },
        // Add more cast members here
    ];

    // Function to create cast profiles
    function displayCast() {
        cast.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('cast-member');

            memberDiv.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            `;

            // Add click event to show bio
            memberDiv.addEventListener('click', () => {
                alert(`${member.name} - ${member.role}\n\n${member.bio}`);
            });

            castSection.appendChild(memberDiv);
        });
    }

    displayCast();

    // Handle Contact Form Submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if(name && email && message){
            // For demonstration, we'll just alert the data.
            // In a real-world scenario, you'd send this data to a server.
            alert(`Thank you, ${name}! Your message has been received.`);
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
