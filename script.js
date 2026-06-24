// Massive Database: 100 Movies (Hollywood + 70+ Bollywood)
const database = [
    // --- ORIGINAL HOLLYWOOD (1-30) ---
    { id: 1, title: "Inception", genres: ["Action", "Sci-Fi", "Thriller"], rating: 8.8, img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&q=80" },
    { id: 2, title: "The Matrix", genres: ["Action", "Sci-Fi"], rating: 8.7, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 3, title: "Interstellar", genres: ["Drama", "Sci-Fi"], rating: 8.6, img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80" },
    { id: 4, title: "The Hangover", genres: ["Comedy"], rating: 7.7, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 5, title: "Superbad", genres: ["Comedy"], rating: 7.6, img: "https://images.unsplash.com/photo-1527228114583-16efa1438d78?w=400&q=80" },
    { id: 6, title: "The Notebook", genres: ["Drama", "Romance"], rating: 7.8, img: "https://images.unsplash.com/photo-1518199268815-95a20684f551?w=400&q=80" },
    { id: 7, title: "Titanic", genres: ["Drama", "Romance"], rating: 7.9, img: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=400&q=80" },
    { id: 8, title: "Die Hard", genres: ["Action", "Thriller"], rating: 8.2, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 9, title: "La La Land", genres: ["Comedy", "Drama", "Romance"], rating: 8.0, img: "https://images.unsplash.com/photo-1516280440502-a7f411ceba3c?w=400&q=80" },
    { id: 10, title: "Mad Max: Fury Road", genres: ["Action", "Sci-Fi"], rating: 8.1, img: "https://images.unsplash.com/photo-1498889444388-e67ea62c464b?w=400&q=80" },
    { id: 11, title: "The Dark Knight", genres: ["Action", "Drama", "Thriller"], rating: 9.0, img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80" },
    { id: 12, title: "Blade Runner 2049", genres: ["Action", "Sci-Fi", "Thriller"], rating: 8.0, img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80" },
    { id: 13, title: "John Wick", genres: ["Action", "Thriller"], rating: 7.4, img: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&q=80" },
    { id: 14, title: "Jurassic Park", genres: ["Action", "Sci-Fi", "Thriller"], rating: 8.2, img: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=400&q=80" },
    { id: 15, title: "The Terminator", genres: ["Action", "Sci-Fi"], rating: 8.1, img: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=400&q=80" },
    { id: 16, title: "Alien", genres: ["Sci-Fi", "Thriller"], rating: 8.5, img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=400&q=80" },
    { id: 17, title: "Gladiator", genres: ["Action", "Drama"], rating: 8.5, img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=400&q=80" },
    { id: 18, title: "Avengers: Endgame", genres: ["Action", "Sci-Fi", "Drama"], rating: 8.4, img: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&q=80" },
    { id: 19, title: "Forrest Gump", genres: ["Drama", "Romance"], rating: 8.8, img: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=400&q=80" },
    { id: 20, title: "The Truman Show", genres: ["Comedy", "Drama", "Sci-Fi"], rating: 8.2, img: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?w=400&q=80" },
    { id: 21, title: "Good Will Hunting", genres: ["Drama", "Romance"], rating: 8.3, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" },
    { id: 22, title: "Pride & Prejudice", genres: ["Drama", "Romance"], rating: 7.8, img: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&q=80" },
    { id: 23, title: "Crazy, Stupid, Love", genres: ["Comedy", "Drama", "Romance"], rating: 7.4, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
    { id: 24, title: "Step Brothers", genres: ["Comedy"], rating: 6.9, img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80" },
    { id: 25, title: "Groundhog Day", genres: ["Comedy", "Romance", "Drama"], rating: 8.1, img: "https://images.unsplash.com/photo-1495364141860-b0d03eaecc28?w=400&q=80" },
    { id: 26, title: "The Pursuit of Happyness", genres: ["Drama"], rating: 8.0, img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80" },
    { id: 27, title: "Parasite", genres: ["Comedy", "Drama", "Thriller"], rating: 8.5, img: "https://images.unsplash.com/photo-1568819317551-31051b37f69f?w=400&q=80" },
    { id: 28, title: "Pulp Fiction", genres: ["Drama", "Thriller"], rating: 8.9, img: "https://images.unsplash.com/photo-1594498653386-a7dc4f3316e1?w=400&q=80" },
    { id: 29, title: "The Martian", genres: ["Sci-Fi", "Drama"], rating: 8.0, img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80" },
    { id: 30, title: "Everything Everywhere All at Once", genres: ["Action", "Comedy", "Sci-Fi"], rating: 7.8, img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80" },

    // --- BOLLYWOOD: COMEDY (31-45) ---
    { id: 31, title: "3 Idiots", genres: ["Comedy", "Drama"], rating: 8.4, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 32, title: "Hera Pheri", genres: ["Comedy"], rating: 8.1, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 33, title: "Munna Bhai M.B.B.S.", genres: ["Comedy", "Drama"], rating: 8.1, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 34, title: "Andaz Apna Apna", genres: ["Comedy", "Romance"], rating: 8.0, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 35, title: "PK", genres: ["Comedy", "Drama", "Sci-Fi"], rating: 8.1, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 36, title: "Lage Raho Munna Bhai", genres: ["Comedy", "Drama"], rating: 8.0, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 37, title: "Golmaal: Fun Unlimited", genres: ["Comedy"], rating: 7.5, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 38, title: "Dhamaal", genres: ["Comedy"], rating: 7.4, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 39, title: "Bhool Bhulaiyaa", genres: ["Comedy", "Thriller"], rating: 7.4, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 40, title: "Welcome", genres: ["Comedy", "Romance"], rating: 7.0, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 41, title: "Chup Chup Ke", genres: ["Comedy", "Romance"], rating: 6.9, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 42, title: "Phir Hera Pheri", genres: ["Comedy"], rating: 7.1, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 43, title: "Delhi Belly", genres: ["Comedy", "Action"], rating: 7.6, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 44, title: "Khosla Ka Ghosla!", genres: ["Comedy", "Drama"], rating: 8.3, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },
    { id: 45, title: "Badhaai Ho", genres: ["Comedy", "Drama"], rating: 7.9, img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80" },

    // --- BOLLYWOOD: ROMANCE & DRAMA (46-65) ---
    { id: 46, title: "Dilwale Dulhania Le Jayenge", genres: ["Romance", "Drama"], rating: 8.0, img: "https://images.unsplash.com/photo-1518199268815-95a20684f551?w=400&q=80" },
    { id: 47, title: "Jab We Met", genres: ["Romance", "Comedy"], rating: 7.9, img: "https://images.unsplash.com/photo-1518199268815-95a20684f551?w=400&q=80" },
    { id: 48, title: "Kabhi Khushi Kabhie Gham...", genres: ["Drama", "Romance"], rating: 7.4, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 49, title: "Kuch Kuch Hota Hai", genres: ["Romance", "Drama", "Comedy"], rating: 7.5, img: "https://images.unsplash.com/photo-1518199268815-95a20684f551?w=400&q=80" },
    { id: 50, title: "Veer-Zaara", genres: ["Drama", "Romance"], rating: 7.8, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 51, title: "Kal Ho Naa Ho", genres: ["Comedy", "Drama", "Romance"], rating: 7.9, img: "https://images.unsplash.com/photo-1518199268815-95a20684f551?w=400&q=80" },
    { id: 52, title: "Zindagi Na Milegi Dobara", genres: ["Comedy", "Drama", "Romance"], rating: 8.2, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 53, title: "Yeh Jawaani Hai Deewani", genres: ["Romance", "Drama", "Comedy"], rating: 7.2, img: "https://images.unsplash.com/photo-1518199268815-95a20684f551?w=400&q=80" },
    { id: 54, title: "Dil Chahta Hai", genres: ["Comedy", "Drama", "Romance"], rating: 8.1, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 55, title: "Barfi!", genres: ["Comedy", "Drama", "Romance"], rating: 8.1, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 56, title: "Aashiqui 2", genres: ["Romance", "Drama"], rating: 7.1, img: "https://images.unsplash.com/photo-1518199268815-95a20684f551?w=400&q=80" },
    { id: 57, title: "Kabir Singh", genres: ["Action", "Drama", "Romance"], rating: 7.0, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 58, title: "Rockstar", genres: ["Drama", "Romance"], rating: 7.7, img: "https://images.unsplash.com/photo-1518199268815-95a20684f551?w=400&q=80" },
    { id: 59, title: "My Name Is Khan", genres: ["Drama", "Romance"], rating: 7.9, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 60, title: "Swades", genres: ["Drama"], rating: 8.2, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 61, title: "Taare Zameen Par", genres: ["Drama"], rating: 8.3, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 62, title: "Chak De! India", genres: ["Drama", "Action"], rating: 8.1, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 63, title: "Bhaag Milkha Bhaag", genres: ["Drama", "Action"], rating: 8.2, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 64, title: "Dangal", genres: ["Action", "Drama"], rating: 8.3, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 65, title: "Gully Boy", genres: ["Drama"], rating: 7.9, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },

    // --- BOLLYWOOD: THRILLER & MYSTERY (66-80) ---
    { id: 66, title: "Andhadhun", genres: ["Comedy", "Thriller", "Drama"], rating: 8.2, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 67, title: "Drishyam", genres: ["Drama", "Thriller"], rating: 8.2, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 68, title: "Kahaani", genres: ["Thriller", "Drama"], rating: 8.1, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 69, title: "A Wednesday", genres: ["Action", "Drama", "Thriller"], rating: 8.1, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 70, title: "Special 26", genres: ["Action", "Comedy", "Thriller"], rating: 8.0, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 71, title: "Talaash", genres: ["Thriller", "Drama"], rating: 7.2, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 72, title: "Baby", genres: ["Action", "Thriller"], rating: 7.9, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 73, title: "Raazi", genres: ["Action", "Drama", "Thriller"], rating: 7.7, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 74, title: "Badla", genres: ["Thriller", "Drama"], rating: 7.8, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 75, title: "Ittefaq", genres: ["Thriller", "Mystery"], rating: 7.2, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 76, title: "Udaan", genres: ["Drama"], rating: 8.1, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { id: 77, title: "Haider", genres: ["Action", "Drama", "Thriller"], rating: 8.0, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 78, title: "Raman Raghav 2.0", genres: ["Thriller", "Drama"], rating: 7.3, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 79, title: "NH10", genres: ["Action", "Thriller", "Drama"], rating: 7.2, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },
    { id: 80, title: "Wazir", genres: ["Action", "Thriller", "Drama"], rating: 7.1, img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" },

    // --- BOLLYWOOD: ACTION & SCI-FI (81-100) ---
    { id: 81, title: "Sholay", genres: ["Action", "Comedy", "Drama"], rating: 8.1, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 82, title: "War", genres: ["Action", "Thriller"], rating: 6.5, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 83, title: "Pathaan", genres: ["Action", "Thriller"], rating: 5.9, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 84, title: "Jawan", genres: ["Action", "Thriller", "Drama"], rating: 7.0, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 85, title: "Don", genres: ["Action", "Thriller"], rating: 7.1, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 86, title: "Dhoom 2", genres: ["Action", "Thriller"], rating: 6.5, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 87, title: "Ek Tha Tiger", genres: ["Action", "Romance", "Thriller"], rating: 6.3, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 88, title: "Uri: The Surgical Strike", genres: ["Action", "Drama"], rating: 8.2, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 89, title: "Agneepath", genres: ["Action", "Drama"], rating: 6.9, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 90, title: "Gangs of Wasseypur", genres: ["Action", "Comedy", "Drama"], rating: 8.2, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { id: 91, title: "Koi... Mil Gaya", genres: ["Sci-Fi", "Romance", "Drama"], rating: 7.1, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 92, title: "Krrish", genres: ["Action", "Sci-Fi"], rating: 6.4, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 93, title: "Ra.One", genres: ["Action", "Sci-Fi"], rating: 4.8, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 94, title: "Enthiran (Robot Hindi)", genres: ["Action", "Sci-Fi"], rating: 7.1, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 95, title: "Brahmastra Part One: Shiva", genres: ["Action", "Sci-Fi", "Drama"], rating: 5.6, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 96, title: "Mr. India", genres: ["Action", "Comedy", "Sci-Fi"], rating: 7.7, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 97, title: "Bhavesh Joshi Superhero", genres: ["Action", "Drama", "Thriller"], rating: 7.6, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 98, title: "Attack", genres: ["Action", "Sci-Fi", "Thriller"], rating: 7.2, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 99, title: "Kalki 2898 AD (Hindi)", genres: ["Action", "Sci-Fi", "Drama"], rating: 7.6, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" },
    { id: 100, title: "Baahubali: The Conclusion (Hindi)", genres: ["Action", "Drama"], rating: 8.2, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" }
];

const recommendBtn = document.getElementById('recommend-btn');
const recommendationsContainer = document.getElementById('recommendations');
const evaluationContainer = document.getElementById('evaluation');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');

// Auto-run when user types in search or changes sort option
searchInput.addEventListener('input', runEngine);
sortSelect.addEventListener('change', runEngine);
recommendBtn.addEventListener('click', runEngine);

// Main Engine Function
function runEngine() {
    // 1. Get Inputs
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const userPreferences = Array.from(checkboxes).map(cb => cb.value);
    const searchQuery = searchInput.value.toLowerCase().trim();

    // Determine working set
    let workingDatabase = database;

    // 2. Apply Content-Based Filtering & Searching
    let recommendedMovies = workingDatabase.map(movie => {
        let matchCount = 0;
        movie.genres.forEach(genre => {
            if (userPreferences.includes(genre)) matchCount++;
        });
        return { ...movie, matchScore: matchCount };
    });

    // Filter out movies that don't match the selected genres (if any are selected)
    if (userPreferences.length > 0) {
        recommendedMovies = recommendedMovies.filter(movie => movie.matchScore > 0);
    }

    // Apply text search filter
    if (searchQuery !== "") {
        recommendedMovies = recommendedMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery)
        );
    }

    // 3. Apply Sorting
    const sortMethod = sortSelect.value;
    recommendedMovies.sort((a, b) => {
        if (sortMethod === 'match') {
            // Sort by match score first, then rating
            if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
            return b.rating - a.rating;
        } else {
            // Sort strictly by highest rating
            return b.rating - a.rating;
        }
    });

    // 4. Render UI
    displayRecommendations(recommendedMovies, userPreferences.length > 0);
    evaluateQuality(recommendedMovies);
}

// UI Rendering Function
function displayRecommendations(movies, isMatchingGenres) {
    recommendationsContainer.innerHTML = '';

    if (movies.length === 0) {
        recommendationsContainer.innerHTML = '<p style="color:#a0a0a0; grid-column: 1/-1; text-align:center; padding: 2rem;">No movies found matching your criteria. Try adjusting your filters.</p>';
        return;
    }

    // Only render the top 40 results to prevent massive page lag if they select "all"
    const moviesToRender = movies.slice(0, 40);

    moviesToRender.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.animationDelay = `${index * 0.05}s`; // Staggered fade in
        
        let matchBadgeHTML = '';
        if (isMatchingGenres && movie.matchScore > 0) {
            matchBadgeHTML = `<div class="match-badge">${movie.matchScore} Match</div>`;
        }

        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}" class="movie-img">
            <div class="movie-info">
                <div class="movie-title" title="${movie.title}">${movie.title}</div>
                <div class="movie-genres">${movie.genres.join(' • ')}</div>
                <div class="movie-meta">
                    <div class="movie-rating">⭐ ${movie.rating}</div>
                    ${matchBadgeHTML}
                </div>
            </div>
        `;
        recommendationsContainer.appendChild(card);
    });

    // Add a notice if we cut off results
    if (movies.length > 40) {
        const notice = document.createElement('p');
        notice.style = "color:#a0a0a0; grid-column: 1/-1; text-align:center; padding: 1rem; width: 100%;";
        notice.innerText = `...and ${movies.length - 40} more matches. Try adding more filters or searching to narrow down!`;
        recommendationsContainer.appendChild(notice);
    }
}

// Evaluation Function
function evaluateQuality(movies) {
    if (movies.length === 0) {
        evaluationContainer.classList.add('hidden');
        return;
    }
    
    evaluationContainer.classList.remove('hidden');

    const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
    const avgRating = (totalRating / movies.length).toFixed(1);
    const coverage = ((movies.length / database.length) * 100).toFixed(0);

    evaluationContainer.innerHTML = `
        <strong>📊 System Evaluation:</strong><br>
        <span style="color: var(--text-muted)">
            Found <strong>${movies.length}</strong> movies. 
            Average Rating of Results: <strong style="color: var(--accent)">⭐ ${avgRating}</strong>. 
            Showing <strong>${coverage}%</strong> of the total catalog.
        </span>
    `;
}

// Initialize on page load
runEngine();
