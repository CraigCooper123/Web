window.onload = function() {
    let titles = document.querySelectorAll('.title');
    titles.forEach((title, index) => {
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, index * 300);
    });
};

window.onscroll = function() {
    let backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initMap() {
    // Coordinates for Paradise Resort
    var paradiseResort = { lat: 37.7749, lng: -122.4194 };

    // Creating a map centered at Paradise Resort
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: paradiseResort
    });

    // Creating a marker at Paradise Resort
    var marker = new google.maps.Marker({
        position: paradiseResort,
        map: map
    });
}
