class WCARankingApp {
    constructor() {
        this.config = {
            countryToContinentMap: {
                // North America (NA)
                "US": "NA", "CA": "NA", "MX": "NA", "GT": "NA", "HN": "NA", "SV": "NA", 
                "NI": "NA", "CR": "NA", "PA": "NA", "BZ": "NA", "CU": "NA", "DO": "NA", 
                "HT": "NA", "JM": "NA", "TT": "NA", "BB": "NA", "BS": "NA", "LC": "NA", 
                "GD": "NA", "VC": "NA", "DM": "NA", "AG": "NA", "KN": "NA",
            
                // South America (SA)
                "BR": "SA", "AR": "SA", "CO": "SA", "CL": "SA", "PE": "SA", "VE": "SA", 
                "UY": "SA", "PY": "SA", "BO": "SA", "GY": "SA", "SR": "SA", "EC": "SA",
            
                // Europe (EU)
                "GB": "EU", "DE": "EU", "FR": "EU", "IT": "EU", "ES": "EU", "NL": "EU", 
                "SE": "EU", "PL": "EU", "PT": "EU", "IE": "EU", "FI": "EU", "NO": "EU", 
                "DK": "EU", "CH": "EU", "AT": "EU", "BE": "EU", "CZ": "EU", "HU": "EU", 
                "GR": "EU", "BG": "EU", "RO": "EU", "HR": "EU", "SI": "EU", "LV": "EU", 
                "LT": "EU", "EE": "EU", "LU": "EU", "SK": "EU", "MT": "EU", "CY": "EU",
            
                // Asia (AS)
                "CN": "AS", "JP": "AS", "KR": "AS", "IN": "AS", "SG": "AS", "TW": "AS", 
                "MY": "AS", "TH": "AS", "ID": "AS", "PH": "AS", "VN": "AS", "KH": "AS", 
                "LA": "AS", "MM": "AS", "BD": "AS", "PK": "AS", "LK": "AS", "MV": "AS", 
                "NP": "AS", "AF": "AS", "IR": "AS", "IQ": "AS", "SA": "AS", "YE": "AS", 
                "OM": "AS", "AE": "AS", "QA": "AS", "KW": "AS", "BH": "AS", "JO": "AS", 
                "SY": "AS", "LB": "AS", "IL": "AS", "TR": "AS", "RU": "AS", "KZ": "AS", 
                "UZ": "AS", "TJ": "AS", "TM": "AS", "KG": "AS", "MN": "AS", "GE": "AS", 
                "AM": "AS", "AZ": "AS",
            
                // Africa (AF)
                "ZA": "AF", "EG": "AF", "NG": "AF", "KE": "AF", "MA": "AF", "DZ": "AF", 
                "TN": "AF", "LY": "AF", "SD": "AF", "SS": "AF", "ET": "AF", "UG": "AF", 
                "TZ": "AF", "RW": "AF", "BI": "AF", "CG": "AF", "CD": "AF", "AO": "AF", 
                "ZM": "AF", "MW": "AF", "MZ": "AF", "ZW": "AF", "BW": "AF", "NA": "AF", 
                "GH": "AF", "CI": "AF", "SN": "AF", "ML": "AF", "BF": "AF", "NE": "AF", 
                "TG": "AF", "BJ": "AF", "SL": "AF", "LR": "AF", "GM": "AF", "GN": "AF", 
                "GW": "AF", "MR": "AF", "CV": "AF", "ST": "AF", "GQ": "AF", "CM": "AF", 
                "TD": "AF", "CF": "AF", "ER": "AF", "DJ": "AF", "SO": "AF", "SZ": "AF", 
                "LS": "AF", "MG": "AF", "SC": "AF", "MU": "AF", "KM": "AF",
            
                // Oceania (OC)
                "AU": "OC", "NZ": "OC", "PG": "OC", "FJ": "OC", "SB": "OC", "VU": "OC", 
                "WS": "OC", "TO": "OC", "KI": "OC", "FM": "OC", "MH": "OC", "PW": "OC", 
                "NR": "OC", "TV": "OC",
            },
            continents: {
                "NA": "North America",
                "SA": "South America", 
                "EU": "Europe",
                "AS": "Asia",
                "OC": "Oceania",
                "AF": "Africa"
            },
            totalCompetitors: {
                "333": 237229, "222": 156105, "444": 75061,
                "555": 36868, "pyram": 107879, "skewb": 61274,
                "sq1": 22018, "333oh": 64270, "clock": 23461,
                "minx": 31745, "333bf": 17171, "333fm": 13926, "666": 15368, "777": 12810,
                "333mbf": 5795, "444bf": 2976, "555bf": 1785
            },
            continentCompetitors: {
                "NA": {
                    "333": 237229, "222": 156105, "444": 75061,
                    "555": 36868, "pyram": 107879, "skewb": 61274,
                    "sq1": 22018, "333oh": 64270, "clock": 23461,
                    "minx": 31745, "333bf": 17171, "333fm": 13926, "666": 15368, "777": 12810,
                    "333mbf": 5795, "444bf": 2976, "555bf": 1785
                },
                "SA": {
                    "333": 24347, "222": 13780, "444": 5916,
                    "555": 2909, "pyram": 8773, "skewb": 3712,
                    "sq1": 1513, "333oh": 5523, "clock": 1320,
                    "minx": 2917, "333bf": 1245, "333fm": 1018, "666": 827, "777": 994,
                    "333mbf": 466, "444bf": 188, "555bf": 119
                },
                "EU": {
                    "333": 58772, "222": 43441, "444": 23509,
                    "555": 11957, "pyram": 32236, "skewb": 19941,
                    "sq1": 7836, "333oh": 18493, "clock": 8455,
                    "minx": 11057, "333bf": 6154, "333fm": 5695, "666": 4589, "777": 3307,
                    "333mbf": 2307, "444bf": 1194, "555bf": 703
                },
                "AS": {
                    "333": 75286, "222": 44743, "444": 20168,
                    "555": 9911, "pyram": 29526, "skewb": 14537,
                    "sq1": 4537, "333oh": 19298, "clock": 5093,
                    "minx": 6779, "333bf": 5308, "333fm": 3837, "666": 3661, "777": 3169,
                    "333mbf": 1623, "444bf": 845, "555bf": 547
                },
                "OC": {
                    "333": 13003, "222": 9505, "444": 4182,
                    "555": 1742, "pyram": 6699, "skewb": 4015,
                    "sq1": 1300, "333oh": 3479, "clock": 1271,
                    "minx": 1777, "333bf": 974, "333fm": 829, "666": 794, "777": 386,
                    "333mbf": 386, "444bf": 256, "555bf": 170
                },
                "AF": {
                    "333": 1151, "222": 867, "444": 397,
                    "555": 171, "pyram": 787, "skewb": 398,
                    "sq1": 182, "333oh": 406, "clock": 145,
                    "minx": 259, "333bf": 98, "333fm": 97, "666": 73, "777": 41,
                    "333mbf": 42, "444bf": 16, "555bf": 10  
                }
            },
            eventNames: {
                "333": "3x3x3 Cube", "222": "2x2x2 Cube",
                "444": "4x4x4 Cube", "555": "5x5x5 Cube",
                "pyram": "Pyraminx", "skewb": "Skewb",
                "sq1": "Square-1", "333oh": "3x3x3 One-Handed",
                "clock": "Clock", "minx": "Megaminx", "333bf": "3x3x3 Blindfolded",
                "333fm": "3x3x3 Fewest Moves", "666": "6x6x6 Cube", "777": "7x7x7 Cube",
                "333mbf": "3x3x3 Multi Blind", "444bf": "4x4x4 Blindfolded", "555bf": "5x5x5 Blindfolded" 
            }
        };
        this.chart = null;
        this.averagesChart = null;
        this.selectedContinent = 'AS';
        this.chartColors = {
            worldRank: '#ff6600',
            continentRank: '#4CAF50',
            worldPercentage: '#ffa500',
            continentPercentage: '#2196F3'
        };
        this.contributionColors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
        this.init();
    }

    init() {
        this.initSidebar();
        this.initEventListeners();
        this.showSection('all');
    }
    
    initSidebar() {
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebarToggle');

        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            this.adjustMainContentMargin();
        });

        // Close sidebar when clicking on a link (for mobile)
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                this.showSection(sectionId);
                this.setActiveLink(link);
                if (window.innerWidth <= 768) {
                    sidebar.classList.add('collapsed');
                }
            });
        });
    }

    initEventListeners() {
        document.getElementById('calculateBtn').addEventListener('click', () => this.handleSearch());
        document.getElementById('wcaId').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch();
            }
        });
        document.getElementById('downloadPdfBtn').addEventListener('click', () => this.generatePDF());
    }

    adjustMainContentMargin() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.querySelector('.main-content');
        mainContent.style.marginLeft = sidebar.classList.contains('collapsed') ? '60px' : '250px';
    }

    setActiveLink(clickedLink) {
        document.querySelectorAll('.sidebar-nav a').forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    }

    showSection(sectionId) {
        const sections = ['graphs', 'rankings', 'performance-history'];
        if (sectionId === 'all') {
            sections.forEach(section => {
                document.getElementById(section).style.display = 'block';
            });
        } else {
            sections.forEach(section => {
                document.getElementById(section).style.display = section === sectionId ? 'block' : 'none';
            });
        }
    }
    
    handleSearch() {
        const wcaId = document.getElementById('wcaId').value.trim();
        if (wcaId) {
            this.calculateRankings(wcaId);
            this.showSection('all');
            document.querySelector('.sidebar-nav a[href="#all"]').classList.add('active');
        }
    }
    
    displayResults(data) {
        // Display competitor info in separate card
        const competitorInfoDiv = document.getElementById('competitor-info');
        competitorInfoDiv.innerHTML = `
            <p>Name: ${data.person.name}</p>
            <p>Country: ${data.person.country.name}</p>
            <p>Continent: ${this.config.continents[this.selectedContinent]}</p>
        `;
    
        // Update global rankings title
        document.getElementById('global-single-title').textContent = 'World Rankings Single';
    
        // Display results
        const resultsDiv = document.getElementById('results');
        const personalRecords = data.personal_records;
        
        const results = Object.keys(this.config.totalCompetitors)
            .map(eventId => {
                const event = personalRecords[eventId];
                if (!event || !event.single || !event.single.world_rank) {
                    return this.createResultItem(eventId, null, 'world');
                }
                return this.createResultItem(eventId, event.single.world_rank, 'world');
            });
    
        resultsDiv.innerHTML = `<div class="results-grid">${results.join('')}</div>`;
    }
    
    displayContinentResults(data) {
        // Update continental rankings title
        document.getElementById('continental-single-title').textContent = 
            `${this.config.continents[this.selectedContinent]} Rankings Single`;
    
        const continentResultsDiv = document.getElementById('asia-results');
        const personalRecords = data.personal_records;
        
        const continentResults = Object.keys(this.config.continentCompetitors[this.selectedContinent])
            .map(eventId => {
                const event = personalRecords[eventId];
                if (!event || !event.single || !event.single.continent_rank) {
                    return this.createResultItem(eventId, null, 'continent');
                }
                return this.createResultItem(eventId, event.single.continent_rank, 'continent');
            });
    
        continentResultsDiv.innerHTML = `<div class="results-grid">${continentResults.join('')}</div>`;
    }
    
    displayAveragesResults(data, type) {
        // Update averages rankings titles
        if (type === 'world') {
            document.getElementById('world-average-title').textContent = 'World Rankings Average';
        } else {
            document.getElementById('continental-average-title').textContent = 
                `${this.config.continents[this.selectedContinent]} Rankings Average`;
        }
    
        const div = type === 'world' 
            ? document.getElementById('world-averages-results') 
            : document.getElementById('continent-averages-results');
        
        const personalRecords = data.personal_records;
        
        const averagesResults = Object.keys(this.config.totalCompetitors)
            .map(eventId => {
                const event = personalRecords[eventId];
                if (!event || !event.average || !event.average[type === 'world' ? 'world_rank' : 'continent_rank']) {
                    return this.createResultItem(eventId, null, type, 'average');
                }
                return this.createResultItem(
                    eventId, 
                    event.average[type === 'world' ? 'world_rank' : 'continent_rank'], 
                    type, 
                    'average'
                );
            });
    
        div.innerHTML = `<div class="results-grid">${averagesResults.join('')}</div>`;
    }
    
    createResultItem(eventId, rank, type, rankType = 'single') {
        const eventName = this.config.eventNames[eventId];
        const totalCompetitors = type === 'world' 
            ? this.config.totalCompetitors[eventId] 
            : this.config.continentCompetitors[this.selectedContinent][eventId];

        if (!rank) {
            return `
                <div class="result-item">
                    <div class="event-name">${eventName}</div>
                    <div class="rank-info">${rankType === 'single' ? 'No Single' : 'No Average'} Recorded</div>
                </div>
            `;
        }

        // Special handling for rank 1
        if (rank === 1) {
            const recordType = type === 'world' 
                ? `World ${rankType} Record Holder!` 
                : `${this.config.continents[this.selectedContinent]} ${rankType} Record Holder!`;
            
            return `
                <div class="result-item">
                    <div class="event-name">${eventName}</div>
                    <div class="rank-info">
                        Rank: 1
                        <div class="percentage">${recordType}</div>
                    </div>
                </div>
            `;
        }

        const percentage = ((rank / totalCompetitors) * 100).toFixed(2);
        
        return `
            <div class="result-item">
                <div class="event-name">${eventName}</div>
                <div class="rank-info">
                    Rank: ${rank.toLocaleString()}
                    <div class="percentage">Top ${percentage}%</div>
                </div>
            </div>
        `;
    }
    
    getContinentForCountry(countryCode) {
        return this.config.countryToContinentMap[countryCode] || null;
    }
    
    getChartData(personalRecords, continent, type = 'single') {
        const labels = [];
        const worldRankings = [];
        const continentRankings = [];
        const worldPercentages = [];
        const continentPercentages = [];
    
        Object.keys(this.config.totalCompetitors).forEach(eventId => {
            const event = personalRecords[eventId];
            if (event && event[type] && event[type].world_rank && event[type].continent_rank) {
                const totalCompetitors = this.config.totalCompetitors[eventId];
                const continentCompetitors = this.config.continentCompetitors[continent][eventId];
    
                labels.push(this.config.eventNames[eventId]);
                worldRankings.push(event[type].world_rank);
                continentRankings.push(event[type].continent_rank);
                
                // Special handling for rank 1 in chart percentages
                worldPercentages.push(
                    event[type].world_rank === 1 ? 1 : ((event[type].world_rank / totalCompetitors) * 100).toFixed(2)
                );
                continentPercentages.push(
                    event[type].continent_rank === 1 ? 1 : ((event[type].continent_rank / continentCompetitors) * 100).toFixed(2)
                );
            }
        });
    
        return { 
            labels, 
            worldRankings, 
            continentRankings, 
            worldPercentages, 
            continentPercentages,
            continentName: this.config.continents[continent]
        };
    }
    
    displayChart({ labels, worldRankings, continentRankings, worldPercentages, continentPercentages, continentName }) {
        const chartContainer = document.querySelector('.chart-card');
        chartContainer.style.display = 'block';
    
        const ctx = document.getElementById('rankChart').getContext('2d');
    
        if (this.chart) this.chart.destroy();
    
        // Check if we have data to plot
        if (labels.length === 0) {
            console.error('No data available for chart');
            return;
        }
    
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'World Rank',
                        data: worldRankings,
                        backgroundColor: this.chartColors.worldRank + 'CC',
                        borderColor: this.chartColors.worldRank,
                        borderWidth: 1,
                        order: 2
                    },
                    {
                        label: `${continentName} Rank`,
                        data: continentRankings,
                        backgroundColor: this.chartColors.continentRank + 'CC',
                        borderColor: this.chartColors.continentRank,
                        borderWidth: 1,
                        order: 3
                    },
                    {
                        label: 'World Top %',
                        data: worldPercentages,
                        backgroundColor: this.chartColors.worldPercentage + '99',
                        borderColor: this.chartColors.worldPercentage,
                        borderWidth: 1,
                        type: 'line',
                        order: 1,
                        yAxisID: 'percentage'
                    },
                    {
                        label: `${continentName} Top %`,
                        data: continentPercentages,
                        backgroundColor: this.chartColors.continentPercentage + 'CC',
                        borderColor: this.chartColors.continentPercentage,
                        borderWidth: 1,
                        type: 'line',
                        order: 4,
                        yAxisID: 'percentage'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 0 },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                },
                scales: {
                    x: { grid: { display: false } },
                    y: {
                        beginAtZero: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Ranking'
                        }
                    },
                    percentage: {
                        beginAtZero: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Top Percentage'
                        },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    displayAveragesChart({ labels, worldRankings, continentRankings, worldPercentages, continentPercentages, continentName }) {
        const chartContainer = document.querySelector('.chart-card');
        chartContainer.style.display = 'block';
    
        const ctx = document.getElementById('averagesChart').getContext('2d');
    
        if (this.averagesChart) this.averagesChart.destroy();
    
        // Check if we have data to plot
        if (labels.length === 0) {
            console.error('No averages data available for chart');
            return;
        }
    
        this.averagesChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'World Averages Rank',
                        data: worldRankings,
                        backgroundColor: this.chartColors.worldRank + 'CC',
                        borderColor: this.chartColors.worldRank,
                        borderWidth: 1,
                        order: 2
                    },
                    {
                        label: `${continentName} Averages Rank`,
                        data: continentRankings,
                        backgroundColor: this.chartColors.continentRank + 'CC',
                        borderColor: this.chartColors.continentRank,
                        borderWidth: 1,
                        order: 3
                    },
                    {
                        label: 'World Averages Top %',
                        data: worldPercentages,
                        backgroundColor: this.chartColors.worldPercentage + '99',
                        borderColor: this.chartColors.worldPercentage,
                        borderWidth: 1,
                        type: 'line',
                        order: 1,
                        yAxisID: 'percentage'
                    },
                    {
                        label: `${continentName} Averages Top %`,
                        data: continentPercentages,
                        backgroundColor: this.chartColors.continentPercentage + 'CC',
                        borderColor: this.chartColors.continentPercentage,
                        borderWidth: 1,
                        type: 'line',
                        order: 4,
                        yAxisID: 'percentage'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 0 },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                },
                scales: {
                    x: { grid: { display: false } },
                    y: {
                        beginAtZero: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Averages Ranking'
                        }
                    },
                    percentage: {
                        beginAtZero: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Averages Top Percentage'
                        },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    displayPerformanceHistory(data) {
        const graphContainer = document.getElementById('contributionGraph');
        const performanceSection = document.getElementById('performance-history');
        performanceSection.innerHTML = '';

        // Create year dropdown
        const yearDropdown = document.createElement('select');
        yearDropdown.id = 'yearDropdown';
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= 2003; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearDropdown.appendChild(option);
        }
        performanceSection.appendChild(yearDropdown);

        // Create performance card
        const performanceCard = document.createElement('div');
        performanceCard.className = 'card performance-card';
        performanceCard.appendChild(graphContainer);
        performanceSection.appendChild(performanceCard);

        const updateGraph = (selectedYear) => {
            graphContainer.innerHTML = '';

            const startDate = new Date(selectedYear, 0, 1);
            const endDate = new Date(selectedYear, 11, 31);

            const competitionsByDate = data.reduce((acc, comp) => {
                const date = new Date(comp.start_date);
                if (date >= startDate && date <= endDate) {
                    const dateString = date.toISOString().split('T')[0];
                    acc[dateString] = (acc[dateString] || 0) + 1;
                }
                return acc;
            }, {});

            const maxCompetitions = Math.max(...Object.values(competitionsByDate), 1);

            // Create month labels
            const monthLabels = document.createElement('div');
            monthLabels.className = 'month-labels';
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            months.forEach(month => {
                const label = document.createElement('div');
                label.textContent = month;
                monthLabels.appendChild(label);
            });
            graphContainer.appendChild(monthLabels);

            // Create contribution cells
            const cellsContainer = document.createElement('div');
            cellsContainer.className = 'cells-container';
            for (let month = 0; month < 12; month++) {
                const monthContainer = document.createElement('div');
                monthContainer.className = 'month-container';
                const daysInMonth = new Date(selectedYear, month + 1, 0).getDate();
                for (let day = 1; day <= daysInMonth; day++) {
                    const date = new Date(selectedYear, month, day);
                    const dateString = date.toISOString().split('T')[0];
                    const competitions = competitionsByDate[dateString] || 0;
                    const colorIndex = Math.min(Math.floor((competitions / maxCompetitions) * 4), 4);

                    const cell = document.createElement('div');
                    cell.className = 'contribution-cell';
                    cell.style.backgroundColor = this.contributionColors[colorIndex];
                    cell.title = `${dateString}: ${competitions} competition(s)`;
                    monthContainer.appendChild(cell);
                }
                cellsContainer.appendChild(monthContainer);
            }
            graphContainer.appendChild(cellsContainer);

            // Add legend
            const legend = document.createElement('div');
            legend.className = 'contribution-legend';
            legend.innerHTML = `
                <div class="legend-item">Less</div>
                ${this.contributionColors.map(color => `
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: ${color};"></div>
                    </div>
                `).join('')}
                <div class="legend-item">More</div>
            `;
            graphContainer.appendChild(legend);
        };

        yearDropdown.addEventListener('change', (e) => updateGraph(parseInt(e.target.value)));
        updateGraph(currentYear);
    }

    async calculateRankings(wcaId) {
        const resultsDiv = document.getElementById('results');
        const continentResultsDiv = document.getElementById('asia-results');
        const worldAveragesDiv = document.getElementById('world-averages-results');
        const continentAveragesDiv = document.getElementById('continent-averages-results');
        
        // Loading state for all divs
        const loadingHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                Fetching data...
            </div>`;
        
        resultsDiv.innerHTML = loadingHTML;
        continentResultsDiv.innerHTML = loadingHTML;
        worldAveragesDiv.innerHTML = loadingHTML;
        continentAveragesDiv.innerHTML = loadingHTML;
    
        try {
            // Fetch person details
            const personResponse = await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${wcaId}`);
            if (!personResponse.ok) throw new Error('WCA ID not found. Please check and try again.');
            
            const personData = await personResponse.json();
            
            // Determine continent based on country
            const country = personData.person.country_iso2;
            const continent = this.getContinentForCountry(country);
            
            if (!continent) {
                throw new Error(`Continent not found for country code: ${country}`);
            }
    
            // Store the detected continent
            this.selectedContinent = continent;
    
            // Display competitor details and singles rankings
            this.displayResults(personData);
            this.displayContinentResults(personData);
    
            // Display world and continent averages rankings
            this.displayAveragesResults(personData, 'world');
            this.displayAveragesResults(personData, 'continent');
    
            // Create charts based on singles and averages data
            const singlesChartData = this.getChartData(personData.personal_records, this.selectedContinent);
            const averagesChartData = this.getChartData(personData.personal_records, this.selectedContinent, 'average');
            this.displayChart(singlesChartData);
            this.displayAveragesChart(averagesChartData);
    
            // Fetch competition history and display performance history
            const competitionHistoryResponse = await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${wcaId}/competitions`);
            if (!competitionHistoryResponse.ok) throw new Error('Failed to fetch competition history');
            const competitionHistoryData = await competitionHistoryResponse.json();
            this.displayPerformanceHistory(competitionHistoryData);

        } catch (error) {
            const errorHTML = `<div class="error">${error.message}</div>`;
            resultsDiv.innerHTML = errorHTML;
            continentResultsDiv.innerHTML = errorHTML;
            worldAveragesDiv.innerHTML = errorHTML;
            continentAveragesDiv.innerHTML = errorHTML;
        }
    }

    async generatePDF() {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 10;
        const contentWidth = pageWidth - 2 * margin;

        const elements = [
            document.querySelector('.results-section'),
            document.getElementById('rankChart'),
            document.getElementById('averagesChart'),
            document.getElementById('contributionGraph')
        ];

        let yOffset = margin;

        // Add title
        pdf.setFontSize(18);
        pdf.text('WCA Rankings Report', pageWidth / 2, yOffset, { align: 'center' });
        yOffset += 10;

        for (const element of elements) {
            if (element) {
                const canvas = await html2canvas(element, { 
                    scale: 2,
                    logging: false,
                    useCORS: true
                });
                const imgData = canvas.toDataURL('image/png');
                
                const imgWidth = contentWidth;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                if (yOffset + imgHeight > pageHeight - margin) {
                    pdf.addPage();
                    yOffset = margin;
                }

                pdf.addImage(imgData, 'PNG', margin, yOffset, imgWidth, imgHeight);
                yOffset += imgHeight + 10;
            }
        }

        pdf.save('wca-rankings.pdf');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WCARankingApp();
});

