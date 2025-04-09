// Function to initialize all financial charts
function initAllFinancialCharts() {
    initFinancialIndicatorsChart();
    initRevenueProfitChart();
    initMarginChart();
    initLiabilityCashflowChart();
}

// Chart Initialization Functions (ECharts)
function initFinancialIndicatorsChart() {
    const chartDom = document.getElementById('financial-indicators-chart');
    const myChart = echarts.init(chartDom);
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [
            {
                type: 'value',
                name: 'EPS (元)',
                min: 0,
                max: 8,
                interval: 2,
                axisLabel: {
                    formatter: '{value} 元'
                }
            },
            {
                type: 'value',
                name: 'ROE (%)',
                min: 0,
                max: 40,
                interval: 10,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: 'EPS',
                type: 'line',
                data: [2.19, 2.48, 4.90, 7.14, 4.52],
                color: '#1e3a8a',
                tooltip: {
                    valueFormatter: '{value} 元'
                }
            },
            {
                name: 'ROE',
                type: 'line',
                yAxisIndex: 1,
                data: [12.5, 10.3, 16.4, 20.5, 15.7],
                color: '#a855f7',
                tooltip: {
                    valueFormatter: '{value} %'
                }
            }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Revenue and Profit Chart
function initRevenueProfitChart() {
    const chartDom = document.getElementById('revenue-profit-chart');
    const myChart = echarts.init(chartDom);
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['营业收入', '净利润']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['2019', '2020', '2021', '2022', '2023'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '金额 (亿元)',
                axisLabel: {
                    formatter: '{value} 亿元'
                }
            }
        ],
        series: [
            {
                name: '营业收入',
                type: 'bar',
                barWidth: '60%',
                data: [785, 863, 1959, 3289, 2195],
                color: '#34d399'
            },
            {
                name: '净利润',
                type: 'line',
                data: [81, 100, 285, 458, 292],
                color: '#fb923c'
            }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Margin Chart (Gross and Net Profit)
function initMarginChart() {
    const chartDom = document.getElementById('margin-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [
            {
                type: 'value',
                name: '百分比 (%)',
                min: 0,
                max: 60,
                interval: 10,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '毛利率',
                type: 'line',
                data: [29.5, 30.1, 20.0, 21.3, 27.2],
                color: '#06b6d4',
                tooltip: {
                    valueFormatter: '{value} %'
                }
            },
            {
                name: '净利率',
                type: 'line',
                data: [10.4, 11.6, 14.6, 13.9, 13.3],
                color: '#e11d48',
                tooltip: {
                    valueFormatter: '{value} %'
                }
            }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Liability and Cashflow Chart
function initLiabilityCashflowChart() {
    const chartDom = document.getElementById('liability-cashflow-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [
            {
                type: 'value',
                name: '资产负债率 (%)',
                min: 20,
                max: 70,
                interval: 10,
                axisLabel: {
                    formatter: '{value} %'
                }
            },
            {
                type: 'value',
                name: '现金流 (亿元)',
                min: -1000,
                max: 1000,
                interval: 200,
                axisLabel: {
                    formatter: '{value} 亿元'
                }
            }
        ],
        series: [
            {
                name: '资产负债率',
                type: 'line',
                data: [60.3, 62.6, 54.9, 48.2, 52.4],
                color: '#14b8a6',
                tooltip: {
                    valueFormatter: '{value} %'
                }
            },
            {
                name: '经营活动现金流',
                type: 'line',
                yAxisIndex: 1,
                data: [167, 194, 373, 480, 262],
                color: '#dc2626',
                tooltip: {
                    valueFormatter: '{value} 亿元'
                }
            }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Growth Metrics Chart
function initGrowthMetricsChart() {
    const chartDom = document.getElementById('growth-metrics-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['营收增长率', '净利润增长率', 'EPS增长率', '资产增长率']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['2019', '2020', '2021', '2022', '2023'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '增长率 (%)',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '营收增长率',
                type: 'bar',
                data: [41.8, 9.9, 127.0, 67.9, -33.2],
                color: '#10b981'
            },
            {
                name: '净利润增长率',
                type: 'bar',
                data: [28.6, 22.4, 185.3, 60.3, -36.2],
                color: '#f97316'
            },
            {
                name: 'EPS增长率',
                type: 'bar',
                data: [22.8, 13.2, 97.5, 45.7, -36.2],
                color: '#0ea5e9'
            },
            {
                name: '资产增长率',
                type: 'bar',
                data: [30.5, 34.3, 70.7, 51.2, 64.0],
                color: '#6366f1'
            }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Profit Margins Chart
function initProfitMarginsChart() {
    const chartDom = document.getElementById('gross-margin-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [
            {
                type: 'value',
                name: '利润率 (%)',
                min: 0,
                max: 50,
                interval: 10,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '毛利率',
                type: 'line',
                data: [29.5, 30.1, 20.0, 21.3, 27.2],
                color: '#06b6d4',
                tooltip: {
                    valueFormatter: '{value} %'
                }
            }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Expense Ratio Chart
function initExpenseRatioChart() {
    const chartDom = document.getElementById('expense-ratio-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [
            {
                type: 'value',
                name: '费用率 (%)',
                min: 0,
                max: 20,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '销售费用率',
                type: 'line',
                data: [6.3, 5.6, 5.1, 3.0, 3.6],
                color: '#a855f7',
                tooltip: {
                    valueFormatter: '{value} %'
                }
            },
            {
                name: '管理费用率',
                type: 'line',
                data: [3.4, 3.5, 3.1, 1.9, 2.6],
                color: '#e11d48',
                tooltip: {
                    valueFormatter: '{value} %'
                }
            },
            {
                name: '研发费用率',
                type: 'line',
                data: [12.3, 12.4, 7.6, 4.5, 7.7],
                color: '#fb923c',
                tooltip: {
                    valueFormatter: '{value} %'
                }
            }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Valuation Metrics Chart
function initValuationMetricsChart() {
    const chartDom = document.getElementById('valuation-metrics-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [
            {
                type: 'value',
                name: '市盈率 (PE)',
                min: 0,
                max: 150,
                interval: 25,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: '市盈率 (TTM)',
                type: 'line',
                data: [35.1, 62.5, 95.6, 50.2, 24.3],
                color: '#8b5cf6',
                tooltip: {
                    valueFormatter: '{value}'
                }
            }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// PE History Chart
function initPEHistoryChart() {
    const chartDom = document.getElementById('pe-history-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [
            {
                type: 'value',
                name: '市盈率 (PE)',
                min: 0,
                max: 150,
                interval: 25,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: 'PE历史',
                type: 'line',
                data: [35.1, 62.5, 95.6, 50.2, 24.3],
                color: '#8b5cf6',
                tooltip: {
                    valueFormatter: '{value}'
                }
            }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Valuation Range Chart
function initValuationRangeChart() {
    const chartDom = document.getElementById('valuation-range-chart');
    const myChart = echarts.init(chartDom);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [
            {
                type: 'value',
                name: '估值范围 (元)',
                min: 0,
                max: 800,
                interval: 100,
                axisLabel: {
                    formatter: '{value} 元'
                }
            }
        ],
        series: [
            {
                name: '估值范围',
                type: 'line',
                data: [180, 250, 400, 700, 240],
                color: '#2dd4bf',
                tooltip: {
                    valueFormatter: '{value} 元'
                }
            },
            {
                name: '合理估值区间上限',
                type: 'line',
                data: [250, 350, 500, 780, 300],
                color: '#a855f7',
                tooltip: {
                    valueFormatter: '{value} 元'
                }
            },
             {
                name: '合理估值区间下限',
                type: 'line',
                data: [100, 150, 250, 450, 150],
                color: '#dc2626',
                tooltip: {
                    valueFormatter: '{value} 元'
                }
            }

        ]
    };

    option && myChart.setOption(option);

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Tab switching logic
function initTabControl() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and hide all content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // Add active class to current button
            button.classList.add('active');
            
            // Show current content
            const tabId = `${button.dataset.tab}-tab`;
            const currentContent = document.getElementById(tabId);
            if (currentContent) {
                currentContent.classList.remove('hidden');
                currentContent.classList.add('active');
            }
        });
    });
}

// Initialize dropdown box events
function initSelectEvents() {
    document.getElementById('balance-sheet-period')?.addEventListener('change', function() {
        // Add logic to update balance sheet data here
        console.log('Selected balance sheet period:', this.value);
    });
    
    document.getElementById('income-statement-period')?.addEventListener('change', function() {
        // Add logic to update income statement data here
        console.log('Selected income statement period:', this.value);
    });
    
    document.getElementById('cash-flow-period')?.addEventListener('change', function() {
        // Add logic to update cash flow data here
        console.log('Selected cash flow period:', this.value);
    });
}

// Initialize the page when loaded
document.addEventListener('DOMContentLoaded', function() {
    initTabControl();
    initGrowthMetricsChart();
    initSelectEvents();
    
    // Load the initial financial chart by default
    window.setTimeout(() => {
        initAllFinancialCharts();
    }, 100);
});
