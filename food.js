document.addEventListener('DOMContentLoaded', () => {
    // Carousel Initialization
    const carousel = document.querySelector('#carouselExampleRide');
    if (carousel) {
        const bootstrapCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true
        });
    }

    // Form Submission Handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            // Collect form data
            const name = document.getElementById('name').value;
            const phoneNumber = document.getElementById('phone-number').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('msg').value;

            // Validate form data
            if (!name || !phoneNumber || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            // Simulate form submission
            console.log('Form submitted:', { name, phoneNumber, email, message });

            // Optionally, clear the form after submission
            form.reset();
            alert('Thank you for contacting us!');
        });
    }

    // Button Click Event Listeners
    const seeMoreButtons = document.querySelectorAll('input[type="button"]');
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked on ${button.previousElementSibling.textContent}`);
        });
    });

    // Order Now Button in Footer
    const orderNowButton = document.getElementById('a1bt1');
    if (orderNowButton) {
        orderNowButton.addEventListener('click', () => {
            alert('Redirecting to Order Page...');
            // You can replace this with actual redirection logic
            // window.location.href = '/order-page';
        });
    }

    // Read More Buttons
    const readMoreButtons = document.querySelectorAll('aside article button');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecting to Blog Post...');
            // You can replace this with actual redirection logic
            // window.location.href = '/blog-post';
        });
    });

    // Search Icon Click Event
    const searchIcon = document.querySelector('#s1n2d8 i');
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            const searchInput = document.querySelector('#ip2');
            searchInput.focus();
        });
    }

    // Login Button Click Event
    const loginButton = document.getElementById('s1n1d7');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            alert('Redirecting to Login Page...');
            // You can replace this with actual redirection logic
            // window.location.href = '/login';
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Carousel Initialization
    const carousel = document.querySelector('#carouselExampleRide');
    if (carousel) {
        const bootstrapCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true
        });
    }

    // Loader Element
    const loader = document.getElementById('loader');

    // Function to show loader
    function showLoader() {
        loader.classList.add('active');
    }

    // Function to hide loader
    function hideLoader() {
        loader.classList.remove('active');
    }

    // Function to fetch data from the API
    async function fetchDataFromAPI() {
        showLoader(); // Show loader before fetching data
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pizza');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            sessionStorage.setItem('foodData', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Error fetching data from API:', error);
            return null;
        } finally {
            hideLoader(); // Hide loader after fetching data
        }
    }

    // Function to get data from session storage
    function getDataFromSessionStorage() {
        const data = sessionStorage.getItem('foodData');
        return data ? JSON.parse(data) : null;
    }

    // Fetch data from API and store in session storage if not already present
    if (!getDataFromSessionStorage()) {
        fetchDataFromAPI();
    }

    // Form Submission Handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            // Collect form data
            const name = document.getElementById('name').value;
            const phoneNumber = document.getElementById('phone-number').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('msg').value;

            // Validate form data
            if (!name || !phoneNumber || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            // Simulate form submission
            console.log('Form submitted:', { name, phoneNumber, email, message });

            // Optionally, clear the form after submission
            form.reset();
            alert('Thank you for contacting us!');
        });
    }

    // Button Click Event Listeners
    const seeMoreButtons = document.querySelectorAll('input[type="button"]');
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked on ${button.previousElementSibling.textContent}`);
        });
    });

    // Order Now Button in Footer
    const orderNowButton = document.getElementById('a1bt1');
    if (orderNowButton) {
        orderNowButton.addEventListener('click', () => {
            alert('Redirecting to Order Page...');
            // You can replace this with actual redirection logic
            // window.location.href = '/order-page';
        });
    }

    // Read More Buttons
    const readMoreButtons = document.querySelectorAll('aside article button');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecting to Blog Post...');
            // You can replace this with actual redirection logic
            // window.location.href = '/blog-post';
        });
    });

    // Search Icon Click Event
    const searchIcon = document.querySelector('#s1n2d8 i');
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            const searchInput = document.querySelector('#ip2');
            searchInput.focus();
        });
    }

    // Login Button Click Event
    const loginButton = document.getElementById('s1n1d7');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            alert('Redirecting to Login Page...');
            // You can replace this with actual redirection logic
            // window.location.href = '/login';
        });
    }

    // Smooth Scroll Animation with Dynamic Transform
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav#s1n2 div');

    function smoothScroll(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = `#${event.target.textContent.toLowerCase().replace(/\s+/g, '-')}`;
            smoothScroll(targetId);
        });
    });

    // Dynamic Transform on Scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop - sectionHeight / 3) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });

    // Display Data from Session Storage
    function displayDataFromSessionStorage() {
        const data = getDataFromSessionStorage();
        if (data && data.meals) {
            const mealsContainer = document.createElement('div');
            mealsContainer.id = 'meals-container';
            mealsContainer.style.display = 'flex';
            mealsContainer.style.flexWrap = 'wrap';
            mealsContainer.style.gap = '20px';
            mealsContainer.style.marginTop = '20px';

            data.meals.forEach(meal => {
                const mealCard = document.createElement('div');
                mealCard.style.border = '1px solid #ccc';
                mealCard.style.padding = '10px';
                mealCard.style.width = '200px';
                mealCard.style.textAlign = 'center';
                mealCard.style.transition = 'transform 0.5s ease';

                const mealImage = document.createElement('img');
                mealImage.src = meal.strMealThumb;
                mealImage.alt = meal.strMeal;
                mealImage.style.maxWidth = '100%';
                mealImage.style.height = 'auto';

                const mealName = document.createElement('h3');
                mealName.textContent = meal.strMeal;

                mealCard.appendChild(mealImage);
                mealCard.appendChild(mealName);

                mealsContainer.appendChild(mealCard);
            });

            document.body.appendChild(mealsContainer);
        }
    }

    // Call the function to display data
    displayDataFromSessionStorage();
});
