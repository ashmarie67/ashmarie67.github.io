<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Academic Programs</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-accent: #8feff2;  /* Main teal color */
            --primary-dark: #00a8b5;    /* Darker teal for contrast */
            --primary-light: #d6f9fa;   /* Very light teal for backgrounds */
            --secondary-1: #8E44AD;     /* Purple */
            --secondary-2: #E74C3C;     /* Red */
            --secondary-3: #3498DB;     /* Blue */
            --secondary-4: #F39C12;     /* Orange */
            --secondary-5: #2C3E50;     /* Dark blue */
            --text-dark: #2C3E50;
            --text-medium: #5D6D7E;
            --text-light: #7F8C8D;
            --bg-light: #f8f9fa;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .header h1 {
            font-size: 2.5rem;
            color: var(--text-dark);
            margin-bottom: 1.5rem;
            position: relative;
            display: inline-block;
        }
        
        .header h1::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: var(--primary-accent);
            border-radius: 2px;
        }
        
        .header p {
            color: var(--text-medium);
            max-width: 700px;
            margin: 0 auto;
        }
        
        .filter-buttons {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-bottom: 2.5rem;
        }
        
        .filter-btn {
            padding: 0.5rem 1.25rem;
            border-radius: 2rem;
            background-color: var(--primary-light);
            color: var(--primary-dark);
            border: 2px solid var(--primary-accent);
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }
        
        .filter-btn:hover {
            background-color: var(--primary-accent);
            color: white;
        }
        
        .filter-btn.active {
            background-color: var(--primary-dark);
            color: white;
            border-color: var(--primary-dark);
        }
        
        .programs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 1.5rem;
        }
        
        .program-card {
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border-top: 4px solid var(--primary-accent);
        }
        
        .program-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }
        
        .card-content {
            padding: 1.75rem;
        }
        
        .card-header {
            display: flex;
            align-items: center;
            margin-bottom: 1.25rem;
        }
        
        .icon-container {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            background-color: var(--primary-light);
        }
        
        .icon-container i {
            font-size: 1.5rem;
            color: var(--primary-dark);
        }
        
        .card-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--text-dark);
            margin: 0;
        }
        
        .card-description {
            color: var(--text-medium);
            margin-bottom: 1.75rem;
        }
        
        .card-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.75rem;
        }
        
        .tag {
            padding: 0.35rem 0.85rem;
            border-radius: 2rem;
            font-size: 0.75rem;
            font-weight: 600;
            background-color: var(--primary-light);
            color: var(--primary-dark);
        }
        
        .card-link {
            display: inline-flex;
            align-items: center;
            font-weight: 600;
            text-decoration: none;
            color: var(--primary-dark);
            transition: all 0.3s ease;
        }
        
        .card-link i {
            margin-left: 0.5rem;
            transition: transform 0.3s ease;
        }
        
        .card-link:hover {
            color: var(--secondary-5);
        }
        
        .card-link:hover i {
            transform: translateX(3px);
        }
        
        /* Program-specific accent colors */
        .pa .icon-container { background-color: rgba(142, 68, 173, 0.1); }
        .pa .icon-container i { color: var(--secondary-1); }
        .pa .tag { background-color: rgba(142, 68, 173, 0.1); color: var(--secondary-1); }
        
        .cad .icon-container { background-color: rgba(231, 76, 60, 0.1); }
        .cad .icon-container i { color: var(--secondary-2); }
        .cad .tag { background-color: rgba(231, 76, 60, 0.1); color: var(--secondary-2); }
        
        .business .icon-container { background-color: rgba(52, 152, 219, 0.1); }
        .business .icon-container i { color: var(--secondary-3); }
        .business .tag { background-color: rgba(52, 152, 219, 0.1); color: var(--secondary-3); }
        
        .comm .icon-container { background-color: rgba(22, 160, 133, 0.1); }
        .comm .icon-container i { color: var(--secondary-4); }
        .comm .tag { background-color: rgba(22, 160, 133, 0.1); color: var(--secondary-4); }
        
        .leadership .icon-container { background-color: rgba(44, 62, 80, 0.1); }
        .leadership .icon-container i { color: var(--secondary-5); }
        .leadership .tag { background-color: rgba(44, 62, 80, 0.1); color: var(--secondary-5); }
        
        @media (max-width: 768px) {
            .programs-grid {
                grid-template-columns: 1fr;
            }
            
            .header h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Creative Academic Programs</h1>
            <p>Explore our innovative programs designed to foster creativity, leadership, and professional excellence in various industries.</p>
        </div>
        
        <div class="filter-buttons">
            <button class="filter-btn active" data-category="all">All Programs</button>
            <button class="filter-btn" data-category="arts">Arts & Media</button>
            <button class="filter-btn" data-category="business">Business</button>
            <button class="filter-btn" data-category="communication">Communication</button>
            <button class="filter-btn" data-category="leadership">Leadership</button>
        </div>
        
        <div class="programs-grid">
            <!-- Performing Arts and Media -->
            <div class="program-card pa" data-categories="arts media">
                <div class="card-content">
                    <div class="card-header">
                        <div class="icon-container">
                            <i class="fas fa-theater-masks"></i>
                        </div>
                        <h3 class="card-title">Performing Arts and Media</h3>
                    </div>
                    <p class="card-description">
                        Develop your artistic voice through theater, film, and digital media production with industry-standard facilities.
                    </p>
                    <div class="card-tags">
                        <span class="tag">Performance</span>
                        <span class="tag">Media Production</span>
                    </div>
                    <a href="#" class="card-link">
                        Explore program
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            
            <!-- Creative Arts and Design -->
            <div class="program-card cad" data-categories="arts design">
                <div class="card-content">
                    <div class="card-header">
                        <div class="icon-container">
                            <i class="fas fa-palette"></i>
                        </div>
                        <h3 class="card-title">Creative Arts and Design</h3>
                    </div>
                    <p class="card-description">
                        Master visual storytelling through graphic design, illustration, and digital arts with hands-on studio experience.
                    </p>
                    <div class="card-tags">
                        <span class="tag">Visual Arts</span>
                        <span class="tag">Design Thinking</span>
                    </div>
                    <a href="#" class="card-link">
                        Explore program
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            
            <!-- Business and Entrepreneurship -->
            <div class="program-card business" data-categories="business entrepreneurship">
                <div class="card-content">
                    <div class="card-header">
                        <div class="icon-container">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <h3 class="card-title">Business and Entrepreneurship</h3>
                    </div>
                    <p class="card-description">
                        Launch your creative venture with business fundamentals, innovation strategies, and startup incubation support.
                    </p>
                    <div class="card-tags">
                        <span class="tag">Startup Culture</span>
                        <span class="tag">Innovation</span>
                    </div>
                    <a href="#" class="card-link">
                        Explore program
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            
            <!-- Communication and PR -->
            <div class="program-card comm" data-categories="communication media">
                <div class="card-content">
                    <div class="card-header">
                        <div class="icon-container">
                            <i class="fas fa-bullhorn"></i>
                        </div>
                        <h3 class="card-title">Communication and PR</h3>
                    </div>
                    <p class="card-description">
                        Craft compelling narratives and strategic campaigns for brands, organizations, and media platforms.
                    </p>
                    <div class="card-tags">
                        <span class="tag">Public Relations</span>
                        <span class="tag">Digital Media</span>
                    </div>
                    <a href="#" class="card-link">
                        Explore program
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            
            <!-- Lifestyle and Wellness -->
            <div class="program-card wellness" data-categories="wellness health">
                <div class="card-content">
                    <div class="card-header">
                        <div class="icon-container">
                            <i class="fas fa-spa"></i>
                        </div>
                        <h3 class="card-title">Lifestyle and Wellness</h3>
                    </div>
                    <p class="card-description">
                        Explore holistic approaches to health, nutrition, and wellbeing in personal and professional settings.
                    </p>
                    <div class="card-tags">
                        <span class="tag">Holistic Health</span>
                        <span class="tag">Wellbeing</span>
                    </div>
                    <a href="#" class="card-link">
                        Explore program
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            
            <!-- Leadership and Social Impact -->
            <div class="program-card leadership" data-categories="leadership social">
                <div class="card-content">
                    <div class="card-header">
                        <div class="icon-container">
                            <i class="fas fa-hands-helping"></i>
                        </div>
                        <h3 class="card-title">Leadership and Social Impact</h3>
                    </div>
                    <p class="card-description">
                        Develop leadership skills to drive positive change in communities, organizations, and global initiatives.
                    </p>
                    <div class="card-tags">
                        <span class="tag">Social Change</span>
                        <span class="tag">Community Leadership</span>
                    </div>
                    <a href="#" class="card-link">
                        Explore program
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const programCards = document.querySelectorAll('.program-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const category = this.dataset.category;
                    
                    // Filter programs
                    programCards.forEach(card => {
                        if (category === 'all' || card.dataset.categories.includes(category)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });
    </script>
</body>
</html>
