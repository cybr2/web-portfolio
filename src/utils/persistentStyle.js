const persistentStyle = () => {

    document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll("a:visited");
        links.forEach(link => {
            link.style.textDecoration = "none";
        });
    });

}

export default persistentStyle