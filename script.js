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
        this.selectedContinent = 'AS'; // Default to Asia
        this.init();
    }

    init() {
        // Initially hide all cards except the first one
        const allCards = document.querySelectorAll('.card');
        const chartCard = document.querySelector('.chart-card');
        allCards.forEach((card, index) => {
            if (index !== 0) {
                card.style.display = 'none';
            }
        });
        chartCard.style.display = 'none';
    
        // Add event listener for the "Search" button
        document.getElementById('calculateBtn').addEventListener('click', () => {
            this.handleSearch();
        });
    
        // Add event listener for the "Enter" key
        document.getElementById('wcaId').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch();
            }
        });
    }
    
    handleSearch() {
        const wcaId = document.getElementById('wcaId').value.trim();
        if (wcaId) {
            this.calculateRankings(wcaId);
            // Make other cards visible after search
            const allCards = document.querySelectorAll('.card');
            allCards.forEach((card, index) => {
                if (index !== 0) {
                    card.style.display = 'block';
                }
            });
            const chartCard = document.querySelector('.chart-card');
            chartCard.style.display = 'block';
        }
    }
    
    
    displayResults(data) {
        const resultsDiv = document.getElementById('results');
        const rankData = [...data.rank.singles, ...data.rank.averages];
        
        const results = Object.keys(this.config.totalCompetitors)
            .map(eventId => {
                const event = rankData.find(e => e.eventId === eventId);
                if (!event || !event.rank || !event.rank.world) {
                    return this.createResultItem(eventId, null, 'world');
                }
                return this.createResultItem(eventId, event.rank.world, 'world');
            });
    
        resultsDiv.innerHTML = `
            <div class="competitor-info">
                <h3>Competitor Details</h3>
                <p>Name: ${data.name}</p>
                <p>Country: ${data.country}</p>
                <p>Continent: ${this.config.continents[this.selectedContinent]}</p>
            </div>
            <div class="results-grid">${results.join('')}</div>
        `;
    }
    
    displayContinentResults(data) {
        const continentResultsDiv = document.getElementById('asia-results');
        const rankData = [...data.rank.singles, ...data.rank.averages];
        
        const continentResults = Object.keys(this.config.continentCompetitors[this.selectedContinent])
            .map(eventId => {
                const event = rankData.find(e => e.eventId === eventId);
                if (!event || !event.rank || !event.rank.continent) {
                    return this.createResultItem(eventId, null, 'continent');
                }
                return this.createResultItem(eventId, event.rank.continent, 'continent');
            });
    
        continentResultsDiv.innerHTML = `
            <h3>${this.config.continents[this.selectedContinent]} Specific Rankings</h3>
            <div class="results-grid">${continentResults.join('')}</div>
        `;
    }

    async calculateRankings(wcaId) {
        const resultsDiv = document.getElementById('results');
        const continentResultsDiv = document.getElementById('asia-results');
        const worldAveragesDiv = document.getElementById('world-averages-results');
        const continentAveragesDiv = document.getElementById('continent-averages-results');
        const resultsCard = document.querySelector('.card:first-of-type');
        const continentResultsCard = document.querySelector('.card:nth-of-type(2)');
        const chartContainer = document.querySelector('.chart-card');
        
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
        
        resultsCard.style.display = 'block';
        continentResultsCard.style.display = 'block';
        chartContainer.style.display = 'none';
    
        try {
            // Fetch person details
            const personResponse = await fetch(`https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/persons/${wcaId}.json`);
            if (!personResponse.ok) throw new Error('WCA ID not found. Please check and try again.');
            
            const personData = await personResponse.json();
            
            // Determine continent based on country
            const country = personData.country;
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
    
            // Create chart based on singles data
            const chartData = this.getChartData([...personData.rank.singles, ...personData.rank.averages], this.selectedContinent);
            this.displayChart(chartData);
    
        } catch (error) {
            const errorHTML = `<div class="error">${error.message}</div>`;
            resultsDiv.innerHTML = errorHTML;
            continentResultsDiv.innerHTML = errorHTML;
            worldAveragesDiv.innerHTML = errorHTML;
            continentAveragesDiv.innerHTML = errorHTML;
        }
    }
    
    displayAveragesResults(data, type) {
        const div = type === 'world' 
            ? document.getElementById('world-averages-results') 
            : document.getElementById('continent-averages-results');
        
        const rankData = data.rank.averages;
        
        const averagesResults = Object.keys(this.config.totalCompetitors)
            .map(eventId => {
                const event = rankData.find(e => e.eventId === eventId);
                if (!event || !event.rank || !event.rank[type === 'world' ? 'world' : 'continent']) {
                    return this.createResultItem(eventId, null, type, 'average');
                }
                return this.createResultItem(
                    eventId, 
                    event.rank[type === 'world' ? 'world' : 'continent'], 
                    type, 
                    'average'
                );
            });
    
        div.innerHTML = `
            <h3>${type === 'world' ? 'World' : this.config.continents[this.selectedContinent]} Averages Rankings</h3>
            <div class="results-grid">${averagesResults.join('')}</div>
        `;
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
    
        const rankLocation = type === 'world' ? 'World' : `${this.config.continents[this.selectedContinent]}`;
        const rankDescription = rankType === 'single' ? 'Single' : 'Average';
        
        // Special handling for rank 1
        if (rank === 1) {
            const recordType = type === 'world' 
                ? `World ${rankDescription} Record Holder!` 
                : `${this.config.continents[this.selectedContinent]} ${rankDescription} Record Holder!`;
            
            return `
                <div class="result-item">
                    <div class="event-name">${eventName}</div>
                    <div class="rank-info">
                        ${rankLocation} ${rankDescription} Rank: 1
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
                    ${rankLocation} ${rankDescription} Rank: ${rank.toLocaleString()}
                    <div class="percentage">Top ${percentage}%</div>
                </div>
            </div>
        `;
    }
    
    getContinentForCountry(countryCode) {
        return this.config.countryToContinentMap[countryCode] || null;
    }
    
    getChartData(rankData, continent) {
        const labels = [];
        const worldRankings = [];
        const continentRankings = [];
        const worldPercentages = [];
        const continentPercentages = [];
    
        Object.keys(this.config.totalCompetitors).forEach(eventId => {
            // Find single and average rankings for the event
            const singleEvent = rankData.find(e => 
                e.eventId === eventId && 
                e.rank && 
                e.rank.world !== undefined && 
                e.rank.continent !== undefined
            );
            
            if (singleEvent) {
                const totalCompetitors = this.config.totalCompetitors[eventId];
                const continentCompetitors = this.config.continentCompetitors[continent][eventId];
    
                labels.push(this.config.eventNames[eventId]);
                worldRankings.push(singleEvent.rank.world);
                continentRankings.push(singleEvent.rank.continent);
                
                // Special handling for rank 1 in chart percentages
                worldPercentages.push(
                    singleEvent.rank.world === 1 ? 1 : ((singleEvent.rank.world / totalCompetitors) * 100).toFixed(2)
                );
                continentPercentages.push(
                    singleEvent.rank.continent === 1 ? 1 : ((singleEvent.rank.continent / continentCompetitors) * 100).toFixed(2)
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
    
    // Debugging method to log chart data
    logChartData(data) {
        console.log('Chart Data:', {
            labels: data.labels,
            worldRankings: data.worldRankings,
            continentRankings: data.continentRankings,
            worldPercentages: data.worldPercentages,
            continentPercentages: data.continentPercentages
        });
    }
    
    displayChart({ labels, worldRankings, continentRankings, worldPercentages, continentPercentages, continentName }) {
        // Add debugging log
        this.logChartData({ labels, worldRankings, continentRankings, worldPercentages, continentPercentages, continentName });
    
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
                        backgroundColor: '#FF6600CC',
                        borderColor: '#FF6600',
                        borderWidth: 1,
                        order: 2
                    },
                    {
                        label: `${continentName} Rank`,
                        data: continentRankings,
                        backgroundColor: '#4CAF50CC',
                        borderColor: '#4CAF50',
                        borderWidth: 1,
                        order: 3
                    },
                    {
                        label: 'World Top %',
                        data: worldPercentages,
                        backgroundColor: '#FFA50099',
                        borderColor: '#FFA500',
                        borderWidth: 1,
                        type: 'line',
                        order: 1,
                        yAxisID: 'percentage'
                    },
                    {
                        label: `${continentName} Top %`,
                        data: continentPercentages,
                        backgroundColor: '#2196F3CC',
                        borderColor: '#2196F3',
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
}

document.addEventListener('DOMContentLoaded', () => {
    new WCARankingApp();
});