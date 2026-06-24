// Mock Database of Items
const database = [
    { id: 1, title: "Inception", genres: ["Action", "Sci-Fi", "Thriller"], rating: 8.8 },
    { id: 2, title: "The Matrix", genres: ["Action", "Sci-Fi"], rating: 8.7 },
    { id: 3, title: "Interstellar", genres: ["Drama", "Sci-Fi"], rating: 8.6 },
    { id: 4, title: "The Hangover", genres: ["Comedy"], rating: 7.7 },
    { id: 5, title: "Superbad", genres: ["Comedy"], rating: 7.6 },
    { id: 6, title: "The Notebook", genres: ["Drama", "Romance"], rating: 7.8 },
    { id: 7, title: "Titanic", genres: ["Drama", "Romance"], rating: 7.9 },
    { id: 8, title: "Die Hard", genres: ["Action", "Thriller"], rating: 8.2 },
    { id: 9, title: "La La Land", genres: ["Comedy", "Drama", "Romance"], rating: 8.0 },
    { id: 10, title: "Mad Max: Fury Road", genres: ["Action", "Sci-Fi"], rating: 8.1 }
];

const recommendBtn = document.getElementById('recommend-btn');
const recommendationsContainer = document.getElementById('recommendations');
const evaluationContainer = document.getElementById('evaluation');

// Main Engine Function
recommendBtn.addEventListener('click', () => {
    // 1. Get User Preferences
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const userPreferences = Array.from(checkboxes).map(cb => cb.value);

    if (userPreferences.length === 0) {
        alert("Please select at least one genre!");
        return;
    }

    // 2. Apply Content-Based Filtering
    let recommendedMovies = database.map(movie => {
        // Calculate a "match score" based on how many genres overlap
        let matchCount = 0;
        movie.genres.forEach(genre => {
            if (userPreferences.includes(genre)) {
                matchCount++;
            }
        });

        return { ...movie, matchScore: matchCount };
    })
    // Keep only movies that have at least one matching genre
    .filter(movie => movie.matchScore > 0);

    // Sort by Match Score (Primary) and Rating (Secondary)
    recommendedMovies.sort((a, b) => {
        if (b.matchScore !== a.matchScore) {
            return b.matchScore - a.matchScore;
        }
        return b.rating - a.rating;
    });

    // 3. Show Recommendations
    displayRecommendations(recommendedMovies);

    // 4. Evaluate Recommendation Quality
    evaluateQuality(recommendedMovies);
});

// UI Rendering Function
function displayRecommendations(movies) {
    recommendationsContainer.innerHTML = '';

    if (movies.length === 0) {
        recommendationsContainer.innerHTML = '<p>No movies found matching those genres.</p>';
        return;
    }

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        card.innerHTML = `
            <div class="movie-title">${movie.title}</div>
            <div class="movie-genres">${movie.genres.join(', ')}</div>
            <div class="movie-rating">⭐ ${movie.rating}</div>
            <div style="font-size: 0.8rem; margin-top: 5px; color: #2ecc71;">
                Match Score: ${movie.matchScore}
            </div>
        `;
        recommendationsContainer.appendChild(card);
    });
}

// Evaluation Function
function evaluateQuality(movies) {
    evaluationContainer.classList.remove('hidden');

    if (movies.length === 0) {
        evaluationContainer.textContent = "Quality Metric: N/A (No results)";
        return;
    }

    // Simple metric: Average rating of recommended items
    const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
    const avgRating = (totalRating / movies.length).toFixed(1);

    // Another metric: Catalog Coverage (How many items from DB were shown)
    const coverage = ((movies.length / database.length) * 100).toFixed(0);

    evaluationContainer.innerHTML = `
        📊 <strong>Recommendation Quality:</strong><br>
        Average Catalog Rating: <strong>${avgRating}/10</strong><br>
        Catalog Coverage: <strong>${coverage}%</strong> of database explored.
    `;
}
