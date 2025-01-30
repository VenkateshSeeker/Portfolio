async function loadResume() {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwgYdO11mZ3kw_pqnUqsdGt6VRumHkfrUrn7jjOYivH9qg1j_HE7mB58WPNW6janeyf/exec");
        const data = await response.json();

        document.getElementById("name").textContent = data.name;
        document.getElementById("email").textContent = data.email;
        document.getElementById("title").textContent = data.title;
        document.getElementById("skills-list").textContent = data.skills;
        document.getElementById("experience").textContent = data.experience;
        document.getElementById("resume-link").innerHTML = <a href="${data.resume}" target="_blank">Download Resume</a>;
    } catch (error) {
        console.error("Error fetching resume data:", error);
    }
}

window.onload = loadResume;