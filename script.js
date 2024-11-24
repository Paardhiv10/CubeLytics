class WCARankingApp {
    constructor() {
        this.config = {
            totalCompetitors: {
                "333": 237229, "222": 192221, "444": 155981,
                "555": 98133, "pyram": 194444, "skewb": 167555,
                "sq1": 141133, "oh": 116642, "clock": 23429,
                "minx": 317239, "fm": 13910
            },
            eventNames: {
                "333": "3x3x3 Cube", "222": "2x2x2 Cube",
                "444": "4x4x4 Cube", "555": "5x5x5 Cube",
                "pyram": "Pyraminx", "skewb": "Skewb",
                "sq1": "Square-1", "oh": "3x3x3 One-Handed",
                "clock": "Clock", "minx": "Megaminx",
                "fm": "Fewest Moves"
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
        const chartContainer = document.getElementById('chartContainer');
        resultsDiv.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                Fetching data...
            </div>`;
        chartContainer.style.display = 'none';

        try {
            const response = await fetch(`https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/persons/${wcaId}.json`);
            if (!response.ok) throw new Error('WCA ID not found. Please check and try again.');
            
            const data = await response.json();
            this.displayResults(data);
        } catch (error) {
            resultsDiv.innerHTML = `<div class="error">${error.message}</div>`;
        }
    }

    displayResults(data) {
        const resultsDiv = document.getElementById('results');
        const rankData = [...data.rank.singles, ...data.rank.averages];
        
        const results = Object.keys(this.config.totalCompetitors)
            .map(eventId => {
                const event = rankData.find(e => e.eventId === eventId);
                if (!event || !event.rank || !event.rank.world) {
                    return this.createResultItem(eventId, null);
                }
                return this.createResultItem(eventId, event.rank.world);
            });

        resultsDiv.innerHTML = `<div class="results-grid">${results.join('')}</div>`;
        
        const chartData = this.getChartData(rankData);
        this.displayChart(chartData);
    }

    createResultItem(eventId, worldRank) {
        const eventName = this.config.eventNames[eventId];
        if (!worldRank) {
            return `
                <div class="result-item">
                    <div class="event-name">${eventName}</div>
                    <div class="rank-info">Not participated</div>
                </div>
            `;
        }

        const totalCompetitors = this.config.totalCompetitors[eventId];
        const percentage = ((worldRank / totalCompetitors) * 100).toFixed(2);
        
        return `
            <div class="result-item">
                <div class="event-name">${eventName}</div>
                <div class="rank-info">
                    World Rank: ${worldRank.toLocaleString()}
                    <div class="percentage">Top ${percentage}%</div>
                </div>
            </div>
        `;
    }

    getChartData(rankData) {
        const labels = [];
        const rankings = [];
        const percentages = [];

        Object.keys(this.config.totalCompetitors).forEach(eventId => {
            const event = rankData.find(e => e.eventId === eventId);
            const totalCompetitors = this.config.totalCompetitors[eventId];
            if (event && event.rank && event.rank.world) {
                labels.push(this.config.eventNames[eventId]);
                rankings.push(event.rank.world);
                percentages.push(((event.rank.world / totalCompetitors) * 100).toFixed(2));
            }
        });

        return { labels, rankings, percentages };
    }

    displayChart({ labels, rankings, percentages }) {
        const chartContainer = document.getElementById('chartContainer');
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
                        data: rankings,
                        backgroundColor: '#FF6600CC',
                        borderColor: '#FF6600',
                        borderWidth: 1,
                        order: 2
                    },
                    {
                        label: 'Top Percentage',
                        data: percentages,
                        backgroundColor: '#FFA50099',
                        borderColor: '#FFA500',
                        borderWidth: 1,
                        type: 'line',
                        order: 1,
                        yAxisID: 'percentage'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 0
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        position: 'nearest'
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'World Rank'
                        }
                    },
                    percentage: {
                        beginAtZero: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Top Percentage'
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WCARankingApp();
});