document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "E-commerce Website",
            imgSrc: "./assets/Ecommerce.png",
            description: "This e-commerce website is built using React and Firebase, incorporating modular UI components, Firebase Realtime Database, Authentication, and Cloud Functions. It features a responsive design and secure payment integration."
        },
        {
            title: "Food Search App",
            imgSrc: "./assets/food.png",
            description: "A React-based food search app that allows users to discover and explore various food items. Utilizing Axios for seamless API integration, the app provides real-time search suggestions, detailed information about each food item, and ensures a responsive design for a smooth user experience."
        }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project fade-in";
        
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.imgSrc}" alt="${project.title}">
            <p>${project.description}</p>
        `;
        
        projectList.appendChild(projectDiv);
    });
});
