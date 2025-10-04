var chart = echarts.init(document.getElementById('word_cloud'));

var option = {
    tooltip: {},
    series: [ {
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
// The shape of the "cloud" to draw. Can be any polar equation represented as a
// callback function, or a keyword present. Available presents are circle (default),
// cardioid (apple or heart shape curve, the most known polar equation), diamond (
// alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
// Shapes: pentagon, star, random-light, random-dark, circle, cardioid, diamond, triangle-forward, triangle, triangle-upright, apple, heart shape curve
        shape: 'apple',
        width: 600,
        height: 400,
        drawOutOfBound: true,
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [
            {
                name: 'GenAI',
                value: 10000,
                textStyle: {
                    normal: {
                        color: 'black'
                    },
                    emphasis: {
                        color: 'red'
                    }
                }
            },
            {
                name: 'LLMs',
                value: 8000
            },
            {
                name: 'RAG',
                value: 6500
            },
            {
                name: 'Machine Learning',
                value: 6000
            },
            {
                name: 'Claude',
                value: 4500
            },
            {
                name: 'Fine-tuning',
                value: 4000
            },
            {
                name: 'LangGraph',
                value: 3500
            },
            {
                name: 'Computer Vision',
                value: 3200
            },
            {
                name: 'Transformers',
                value: 2800
            },
            {
                name: 'PyTorch',
                value: 2500
            },
            {
                name: 'Prompt Engineering',
                value: 2200
            },
            {
                name: 'AWS Bedrock',
                value: 2000
            },
            {
                name: 'Agentic AI',
                value: 1800
            },
            {
                name: 'Multi-modal',
                value: 1600
            },
            {
                name: 'LoRA',
                value: 1500
            },
            {
                name: 'GPT-4',
                value: 1400
            },
            {
                name: 'Embeddings',
                value: 1300
            },
            {
                name: 'Mistral',
                value: 1200
            },
            {
                name: 'HuggingFace',
                value: 1100
            },
            {
                name: 'PEFT',
                value: 1000
            },
            {
                name: 'Deep Learning',
                value: 950
            },
            {
                name: 'Automotive AI',
                value: 900
            },
            {
                name: 'Production ML',
                value: 850
            },
            {
                name: 'Edge Deployment',
                value: 800
            },
            {
                name: 'Semantic Search',
                value: 750
            },
            {
                name: 'Query Decomposition',
                value: 700
            },
            {
                name: 'Function Calling',
                value: 650
            },
            {
                name: 'Document Retrieval',
                value: 600
            },
            {
                name: 'Speech AI',
                value: 550
            },
            {
                name: 'Neural Networks',
                value: 500
            },
            {
                name: 'LSTM',
                value: 480
            },
            {
                name: 'Time-Series',
                value: 450
            },
            {
                name: 'Pose Estimation',
                value: 420
            },
            {
                name: 'GANs',
                value: 400
            },
            {
                name: 'Python',
                value: 380
            },
            {
                name: 'Docker',
                value: 350
            },
            {
                name: 'Flask',
                value: 330
            },
            {
                name: 'Airflow',
                value: 310
            },
            {
                name: 'OpenCV',
                value: 300
            },
            {
                name: 'MLOps',
                value: 280
            },
            {
                name: 'CI/CD',
                value: 260
            },
            {
                name: 'Redis',
                value: 240
            },
            {
                name: 'REST API',
                value: 220
            },
            {
                name: 'Quantization',
                value: 200
            },
            {
                name: 'Model Deployment',
                value: 180
            },
            {
                name: 'NLP',
                value: 160
            },
            {
                name: 'Anomaly Detection',
                value: 150
            },
            {
                name: 'Prophet',
                value: 130
            },
            {
                name: 'scikit-learn',
                value: 120
            },
            {
                name: 'SQL',
                value: 100
            },
            {
                name: 'C++',
                value: 90
            },
            {
                name: 'GitLab',
                value: 80
            },
            {
                name: 'Data Pipelines',
                value: 70
            }
        ]
    } ]
};

chart.setOption(option);

window.onresize = chart.resize;