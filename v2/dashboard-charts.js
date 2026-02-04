// MNO Masterplan Dashboard Charts

// 차트 인스턴스 저장
const chartInstances = {};

// 기간별 데이터 생성
const generateData = {
    day: (length = 30) => Array.from({length}, (_, i) => ({
        label: `${i+1}일`,
        value: Math.random() * 100 + 50
    })),
    week: (length = 12) => Array.from({length}, (_, i) => ({
        label: `${i+1}주`,
        value: Math.random() * 100 + 50
    })),
    month: (length = 12) => Array.from({length}, (_, i) => ({
        label: `${i+1}월`,
        value: Math.random() * 100 + 50
    }))
};

// 차트 설정
const chartConfigs = {
    // Card 1: Candlestick + Bar (복합 차트로 표현)
    chart1: (period = 'day') => {
        const data = generateData[period](12);
        return {
            type: 'bar',
            data: {
                labels: data.map(d => d.label),
                datasets: [
                    {
                        type: 'line',
                        label: '트렌드',
                        data: data.map(d => d.value),
                        borderColor: '#4299e1',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        borderWidth: 2,
                        pointRadius: 0
                    },
                    {
                        type: 'bar',
                        label: '순증',
                        data: data.map((d, i) => (i % 2 === 0 ? d.value * 0.8 : d.value * 1.2)),
                        backgroundColor: data.map((d, i) => {
                            const rand = Math.random();
                            return rand > 0.7 ? '#f56565' : rand > 0.4 ? '#4299e1' : '#667eea';
                        }),
                        barThickness: 8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        };
    },

    // Card 2: LTV - Line + Bar
    chart2: (period = 'day') => {
        const data = generateData[period](15);
        return {
            type: 'bar',
            data: {
                labels: data.map(d => d.label),
                datasets: [
                    {
                        type: 'line',
                        label: 'LTV 추세',
                        data: data.map(d => d.value + 20),
                        borderColor: '#4299e1',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        borderWidth: 2,
                        pointRadius: 0
                    },
                    {
                        type: 'bar',
                        label: '실적',
                        data: data.map(d => d.value * 0.6),
                        backgroundColor: data.map((d, i) =>
                            i % 3 === 0 ? '#f56565' : '#4299e1'
                        ),
                        barThickness: 8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        };
    },

    // Card 3: 마케팅 효율 - Bar
    chart3: (period = 'day') => {
        const data = generateData[period](8);
        return {
            type: 'bar',
            data: {
                labels: data.map(d => d.label),
                datasets: [{
                    label: '마케팅 효율',
                    data: data.map(d => d.value),
                    backgroundColor: data.map((d, i) =>
                        i === data.length - 1 ? '#f56565' : '#4299e1'
                    ),
                    barThickness: 12
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        };
    },

    // Card 4: 인당 네트워크 운영 비용 - 3개 막대
    chart4: (period = 'day') => {
        return {
            type: 'bar',
            data: {
                labels: ['항목1', '항목2', '항목3'],
                datasets: [{
                    label: '운영비용',
                    data: [85, 70, 120],
                    backgroundColor: ['#4299e1', '#90cdf4', '#f56565'],
                    barThickness: 30
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        };
    },

    // Card 5: 제갈 품질 기준 만족률 - Multi-line
    chart5: (period = 'day') => {
        const data = generateData[period](20);
        return {
            type: 'line',
            data: {
                labels: data.map(d => d.label),
                datasets: [
                    {
                        label: '통화품질 상담건수',
                        data: data.map(d => d.value * 0.8 + Math.random() * 20),
                        borderColor: '#4299e1',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        borderWidth: 2,
                        pointRadius: 0
                    },
                    {
                        label: '데이터품질 상담건수',
                        data: data.map(d => d.value * 1.2 + Math.random() * 15),
                        borderColor: '#48bb78',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        borderWidth: 2,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            boxWidth: 20,
                            font: { size: 10 }
                        }
                    }
                },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        };
    },

    // Card 6: 직원당 생산성 - Bar
    chart6: (period = 'day') => {
        const data = generateData[period](8);
        return {
            type: 'bar',
            data: {
                labels: data.map(d => d.label),
                datasets: [{
                    label: '생산성',
                    data: data.map(d => d.value),
                    backgroundColor: '#4299e1',
                    barThickness: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        };
    },

    // Card 7: 보안 - Line
    chart7: (period = 'day') => {
        const data = generateData[period](15);
        return {
            type: 'line',
            data: {
                labels: data.map(d => d.label),
                datasets: [{
                    label: '보안',
                    data: data.map(d => Math.random() * 10),
                    borderColor: '#4299e1',
                    backgroundColor: 'transparent',
                    tension: 0.1,
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        };
    },

    // Card 8: SHE - Line
    chart8: (period = 'day') => {
        const data = generateData[period](15);
        return {
            type: 'line',
            data: {
                labels: data.map(d => d.label),
                datasets: [{
                    label: 'SHE',
                    data: data.map(d => Math.random() * 5),
                    borderColor: '#4299e1',
                    backgroundColor: 'transparent',
                    tension: 0.1,
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        };
    },

    // Card 9: SHE - Line
    chart9: (period = 'day') => {
        const data = generateData[period](15);
        return {
            type: 'line',
            data: {
                labels: data.map(d => d.label),
                datasets: [{
                    label: 'SHE',
                    data: data.map(d => Math.random() * 3),
                    borderColor: '#4299e1',
                    backgroundColor: 'transparent',
                    tension: 0.1,
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { display: false }
                }
            }
        };
    },

    // Card 10: AT/DT 기본 인프라 - Horizontal Bar
    chart10: (period = 'day') => {
        return {
            type: 'bar',
            data: {
                labels: ['BSS 전환률', 'AI Readable 데이터 전환률'],
                datasets: [{
                    label: '진행률',
                    data: [51, 51],
                    backgroundColor: ['#4299e1', '#90cdf4'],
                    barThickness: 20
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.parsed.x}%`
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        max: 100,
                        ticks: {
                            callback: (value) => value + '%'
                        }
                    },
                    y: {
                        display: true,
                        ticks: {
                            font: { size: 10 }
                        }
                    }
                }
            }
        };
    }
};

// 차트 초기화
function initChart(chartId, period = 'day') {
    const ctx = document.getElementById(chartId);
    if (!ctx) return;

    // 기존 차트 제거
    if (chartInstances[chartId]) {
        chartInstances[chartId].destroy();
    }

    // 새 차트 생성
    const config = chartConfigs[chartId](period);
    chartInstances[chartId] = new Chart(ctx, config);
}

// 모든 차트 초기화
function initAllCharts() {
    for (let i = 1; i <= 10; i++) {
        initChart(`chart${i}`, 'day');
    }
}

// 기간 버튼 이벤트 처리
function setupPeriodButtons() {
    document.querySelectorAll('.period-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const button = e.target;
            const cardNum = button.dataset.card;
            const period = button.dataset.period;

            // 같은 카드의 다른 버튼 비활성화
            document.querySelectorAll(`[data-card="${cardNum}"]`).forEach(b => {
                b.classList.remove('active');
            });
            button.classList.add('active');

            // 차트 업데이트
            initChart(`chart${cardNum}`, period);
        });
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    initAllCharts();
    setupPeriodButtons();
});
