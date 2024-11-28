class WCARankingApp {
    constructor() {
        this.config = {
            totalCompetitors: {
                "333": 237229, "222": 156105, "444": 75061,
                "555": 36868, "pyram": 107879, "skewb": 61274,
                "sq1": 22018, "333oh": 64270, "clock": 23461,
                "minx": 31745, "333bf": 17171, "333fm": 13926, "666": 15368, "777": 12810,
                "333mbf": 5795, "444bf": 2976, "555bf": 1785
            },
            asiaCompetitors: {
                "333": 75286, "222": 44743, "444": 20168,
                "555": 9911, "pyram": 29526, "skewb": 14537,
                "sq1": 4537, "333oh": 19298, "clock": 5093,
                "minx": 6779, "333bf": 5308, "333fm": 3837, "666": 3661, "777": 3169,
                "333mbf": 1623, "444bf": 845, "555bf": 547
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
        this.init();
    }

    init() {
        document.getElementById('calculateBtn').addEventListener('click', () => {
            const wcaId = document.getElementById('wcaId').value.trim();
            if (wcaId) this.calculateRankings(wcaId);
        });

        document.getElementById('wcaId').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const wcaId = e.target.value.trim();
                if (wcaId) this.calculateRankings(wcaId);
            }
        });
    }

    async calculateRankings(wcaId) {
        const resultsDiv = document.getElementById('results');
        const asiaResultsDiv = document.getElementById('asia-results');
        const resultsCard = document.querySelector('.card:first-of-type');
        const asiaResultsCard = document.querySelector('.card:nth-of-type(2)');
        const chartContainer = document.querySelector('.chart-card');
        
        resultsDiv.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                Fetching data...
            </div>`;
        asiaResultsDiv.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                Fetching data...
            </div>`;
        
        resultsCard.style.display = 'block';
        asiaResultsCard.style.display = 'block';
        chartContainer.style.display = 'none';

        try {
            const response = await fetch(`https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/persons/${wcaId}.json`);
            if (!response.ok) throw new Error('WCA ID not found. Please check and try again.');
            
            const data = await response.json();
            this.displayResults(data);
            this.displayAsiaResults(data);
        } catch (error) {
            resultsDiv.innerHTML = `<div class="error">${error.message}</div>`;
            asiaResultsDiv.innerHTML = `<div class="error">${error.message}</div>`;
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

        resultsDiv.innerHTML = `<div class="results-grid">${results.join('')}</div>`;
    }

    displayAsiaResults(data) {
        const asiaResultsDiv = document.getElementById('asia-results');
        const rankData = [...data.rank.singles, ...data.rank.averages];
        
        const asiaResults = Object.keys(this.config.asiaCompetitors)
            .map(eventId => {
                const event = rankData.find(e => e.eventId === eventId);
                if (!event || !event.rank || !event.rank.continent) {
                    return this.createResultItem(eventId, null, 'asia');
                }
                return this.createResultItem(eventId, event.rank.continent, 'asia');
            });

        asiaResultsDiv.innerHTML = `<div class="results-grid">${asiaResults.join('')}</div>`;
        
        const chartData = this.getChartData(rankData);
        this.displayChart(chartData);
    }

    createResultItem(eventId, rank, type) {
        const eventName = this.config.eventNames[eventId];
        const totalCompetitors = type === 'world' 
            ? this.config.totalCompetitors[eventId] 
            : this.config.asiaCompetitors[eventId];

        if (!rank) {
            return `
                <div class="result-item">
                    <div class="event-name">${eventName}</div>
                    <div class="rank-info">Not participated</div>
                </div>
            `;
        }

        const percentage = ((rank / totalCompetitors) * 100).toFixed(2);
        const rankType = type === 'world' ? 'World' : 'Asia';
        
        return `
            <div class="result-item">
                <div class="event-name">${eventName}</div>
                <div class="rank-info">
                    ${rankType} Rank: ${rank.toLocaleString()}
                    <div class="percentage">Top ${percentage}%</div>
                </div>
            </div>
        `;
    }

    getChartData(rankData) {
        const labels = [];
        const worldRankings = [];
        const asiaRankings = [];
        const worldPercentages = [];
        const asiaPercentages = [];

        Object.keys(this.config.totalCompetitors).forEach(eventId => {
            const event = rankData.find(e => e.eventId === eventId);
            
            if (event && event.rank && event.rank.world && event.rank.continent) {
                const totalCompetitors = this.config.totalCompetitors[eventId];
                const asiaCompetitors = this.config.asiaCompetitors[eventId];

                labels.push(this.config.eventNames[eventId]);
                worldRankings.push(event.rank.world);
                asiaRankings.push(event.rank.continent);
                worldPercentages.push(((event.rank.world / totalCompetitors) * 100).toFixed(2));
                asiaPercentages.push(((event.rank.continent / asiaCompetitors) * 100).toFixed(2));
            }
        });

        return { labels, worldRankings, asiaRankings, worldPercentages, asiaPercentages };
    }

    displayChart({ labels, worldRankings, asiaRankings, worldPercentages, asiaPercentages }) {
        const chartContainer = document.querySelector('.chart-card');
        chartContainer.style.display = 'block';

        const ctx = document.getElementById('rankChart').getContext('2d');

        if (this.chart) this.chart.destroy();

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
                        label: 'Asia Rank',
                        data: asiaRankings,
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
                        label: 'Asia Top %',
                        data: asiaPercentages,
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