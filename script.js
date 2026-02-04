// 데이터 구조
const dashboardData = {
    categories: [
        // 핵심지표 (6개)
        {
            id: 'cat1',
            type: 'core',
            title: '핵심 seg. MNP 순증',
            metrics: {
                current: '+18,542',
                unit: '명',
                target: '25,000',
                achievement: '74.2%'
            },
            subcategories: [
                {
                    id: 'sub1-1',
                    title: 'Win-back 마케팅 및 유무선 시너지를 통한 전체 가입자 순증 기조 강화',
                    tasks: [
                        {
                            id: 'task1-1-1',
                            title: 'Win-back 마케팅',
                            overview: '이탈 고객 재유치를 위한 맞춤형 마케팅 캠페인 전개',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '4,320', unit: '명', target: '5,000', achievement: '86.4%' }
                        },
                        {
                            id: 'task1-1-2',
                            title: 'S-MVNO 신규 수요 창출',
                            overview: 'S-MVNO 사업 확대를 통한 신규 가입자 확보',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '8,750', unit: '명', target: '10,000', achievement: '87.5%' }
                        },
                        {
                            id: 'task1-1-3',
                            title: '외국인/pet 등 성장 seg. 상품 출시',
                            overview: '신규 성장 세그먼트 대상 특화 상품 개발 및 출시',
                            organization: 'Product&Brand본부',
                            metrics: { current: '3', unit: '개', target: '5', achievement: '60.0%' }
                        },
                        {
                            id: 'task1-1-4',
                            title: '외국인 seg. 공략',
                            overview: '외국인 고객 대상 마케팅 및 서비스 강화',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '12,450', unit: '명', target: '15,000', achievement: '83.0%' }
                        },
                        {
                            id: 'task1-1-5',
                            title: 'T-B 유무선 시너지',
                            overview: '유무선 결합 상품 활성화를 통한 고객 가치 증대',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '28,600', unit: '건', target: '30,000', achievement: '95.3%' }
                        }
                    ]
                },
                {
                    id: 'sub1-2',
                    title: 'Mass 중심의 상품 및 Retention 목적의 멤버십을 2040 高 가치 고객 중심 & 신규 유치 가능 tool도 될 수 있도록 재설계',
                    tasks: [
                        {
                            id: 'task1-2-1',
                            title: '2040 向 신규 상품 출시 및 리패키징',
                            overview: '2040세대 선호도를 반영한 신규 요금제 및 상품 개발',
                            organization: 'Product&Brand본부',
                            metrics: { current: '7', unit: '개', target: '8', achievement: '87.5%' }
                        },
                        {
                            id: 'task1-2-2',
                            title: '2040 신규 유치용 club형 멤버십 준비',
                            overview: '젊은 세대 유입을 위한 클럽형 멤버십 프로그램 설계',
                            organization: 'Product&Brand본부',
                            metrics: { current: '75', unit: '%', target: '100', achievement: '75.0%' }
                        },
                        {
                            id: 'task1-2-3',
                            title: '高 ARPU 고객 대상 특화 멤버십 패키지 준비',
                            overview: '고가치 고객 유지를 위한 프리미엄 멤버십 개발',
                            organization: 'Product&Brand본부',
                            metrics: { current: '85', unit: '%', target: '100', achievement: '85.0%' }
                        }
                    ]
                },
                {
                    id: 'sub1-3',
                    title: '기존 Old 이미지를 탈피, Young & Reliable 브랜드로 再 포지셔닝',
                    tasks: [
                        {
                            id: 'task1-3-1',
                            title: 'Reliable 브랜드 이미지 구축',
                            overview: '신뢰성 중심의 브랜드 아이덴티티 재정립',
                            organization: 'Product&Brand본부',
                            metrics: { current: '68', unit: '점', target: '75', achievement: '90.7%' }
                        },
                        {
                            id: 'task1-3-2',
                            title: '2040 向 화제성 있는 캠페인 전개 (AI를 활용한 콘텐츠 제작)',
                            overview: 'AI 기술을 활용한 바이럴 마케팅 캠페인 실행',
                            organization: 'Product&Brand본부',
                            metrics: { current: '4', unit: '건', target: '6', achievement: '66.7%' }
                        },
                        {
                            id: 'task1-3-3',
                            title: 'AI 기반, seg.별 핀셋 공략하는 디지털 마케팅 시행 (SEO → GEO)',
                            overview: 'AI 알고리즘 기반 세그먼트별 맞춤 디지털 마케팅',
                            organization: 'Product&Brand본부',
                            metrics: { current: '92', unit: '%', target: '100', achievement: '92.0%' }
                        }
                    ]
                },
                {
                    id: 'sub1-4',
                    title: '2040 고객 구매 패턴에 맞게 sales mix 최적화',
                    tasks: [
                        {
                            id: 'task1-4-1',
                            title: '2040 특화 온라인 채널 강화',
                            overview: '젊은 세대 선호 온라인 채널 UI/UX 개선',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '42.5', unit: '%', target: '50', achievement: '85.0%' }
                        },
                        {
                            id: 'task1-4-2',
                            title: '2040 선호하는 방식으로 device 관련 가입 프로세스 개선',
                            overview: '모바일 중심의 간편한 가입 절차 구축',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '88', unit: '점', target: '95', achievement: '92.6%' }
                        },
                        {
                            id: 'task1-4-3',
                            title: '2040 고객이 찾는 소매매장 만들기',
                            overview: '젊은 고객 유입을 위한 매장 경험 혁신',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '15', unit: '개', target: '20', achievement: '75.0%' }
                        }
                    ]
                }
            ]
        },
        {
            id: 'cat2',
            type: 'core',
            title: 'LTV',
            metrics: {
                current: '₩924,300',
                unit: '원',
                target: '₩1,000,000',
                achievement: '92.4%'
            },
            subcategories: [
                {
                    id: 'sub2-1',
                    title: 'LTV/PLM 기반의 상품/서비스 체계 재설계',
                    tasks: [
                        {
                            id: 'task2-1-1',
                            title: '수익성 낮은 상품 과감히 정리 (수익성 제고 + 판매 부담 경감)',
                            overview: '저수익 상품 정리를 통한 포트폴리오 효율화',
                            organization: 'Product&Brand본부',
                            metrics: { current: '23', unit: '개', target: '30', achievement: '76.7%' }
                        },
                        {
                            id: 'task2-1-2',
                            title: '高 ARPU 창출 위한 최적 상품 mix 재설계',
                            overview: '고객당 평균 수익 증대를 위한 상품 구성 최적화',
                            organization: 'Product&Brand본부',
                            metrics: { current: '₩58,200', unit: '원', target: '₩60,000', achievement: '97.0%' }
                        },
                        {
                            id: 'task2-1-3',
                            title: '상품 제공을 위해 들어가는 비용 효율화 (비용구조/정산율 등)',
                            overview: '상품 운영 비용 구조 개선 및 정산 효율화',
                            organization: 'Product&Brand본부',
                            metrics: { current: '12.8', unit: '%', target: '15.0', achievement: '85.3%' }
                        }
                    ]
                },
                {
                    id: 'sub2-2',
                    title: 'LTV 모델에 상품/혜택 등 다양한 변수 input 및 개인화 수준까지 고도화',
                    tasks: [
                        {
                            id: 'task2-2-1',
                            title: 'LTV 모델 지속 고도화 (다회선/다상품까지 modeling 확대)',
                            overview: 'LTV 예측 모델의 정확도 및 범위 확대',
                            organization: 'AT/DT센터',
                            metrics: { current: '82', unit: '%', target: '90', achievement: '91.1%' }
                        },
                        {
                            id: 'task2-2-2',
                            title: '고객생애주기 data, 실시간 변화하는 고객상태 반영 및 개인화',
                            overview: '실시간 고객 데이터 분석 기반 개인화 서비스',
                            organization: 'AT/DT센터',
                            metrics: { current: '68', unit: '%', target: '80', achievement: '85.0%' }
                        }
                    ]
                },
                {
                    id: 'sub2-3',
                    title: 'AI LTV 모델 활용 상품 offering 全 단계에 AI 도입',
                    tasks: [
                        {
                            id: 'task2-3-1',
                            title: '정책, 시장운영, 유통망 관리 등 全 영역에서 LTV 기반 최적 운영 (지원금 비중, SIM, 소매 MNP 등)',
                            overview: 'LTV 중심의 전사 운영 체계 구축',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '72', unit: '%', target: '85', achievement: '84.7%' }
                        },
                        {
                            id: 'task2-3-2',
                            title: '고객 접점에 AI 접목, 최적 시점/최적 offering (온라인)',
                            overview: 'AI 기반 온라인 채널 최적 오퍼링 시스템',
                            organization: 'MNO AT/DT기획담당',
                            metrics: { current: '88', unit: '%', target: '95', achievement: '92.6%' }
                        },
                        {
                            id: 'task2-3-3',
                            title: '고객 접점에 AI 접목, 최적 시점/최적 offering (오프라인, 고객센터)',
                            overview: '오프라인 및 고객센터 AI 추천 시스템 도입',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '65', unit: '%', target: '85', achievement: '76.5%' }
                        },
                        {
                            id: 'task2-3-4',
                            title: '고객센터 상담(care) 우선순위 재설계 검토',
                            overview: 'LTV 기반 고객 응대 우선순위 체계 수립',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '80', unit: '%', target: '100', achievement: '80.0%' }
                        },
                        {
                            id: 'task2-3-5',
                            title: '全 고객 여정에 대한 AI 기반 상품/채널/오퍼링 mix 최적화',
                            overview: '고객 여정 전반의 AI 기반 최적화 추진',
                            organization: 'Product&Brand본부',
                            metrics: { current: '58', unit: '%', target: '75', achievement: '77.3%' }
                        }
                    ]
                },
                {
                    id: 'sub2-4',
                    title: '[Enterprise] 수익성 중심 포트폴리오 재편 및 高 ARPU Enterprise 시장 공략',
                    tasks: [
                        {
                            id: 'task2-4-1',
                            title: 'ROIC기반 단위 BM 수익성 개선 및 고수익 BM 발굴',
                            overview: '투자 대비 수익률 중심의 비즈니스 모델 혁신',
                            organization: 'Enterprise사업본부',
                            metrics: { current: '18.5', unit: '%', target: '20.0', achievement: '92.5%' }
                        },
                        {
                            id: 'task2-4-2',
                            title: '수익성 기준 강화를 통한 한계 BM 정리',
                            overview: '저수익 비즈니스 모델 정리 및 구조조정',
                            organization: 'Enterprise사업본부',
                            metrics: { current: '8', unit: '건', target: '12', achievement: '66.7%' }
                        },
                        {
                            id: 'task2-4-3',
                            title: 'Tech. 지원 조직 전진 배치/시너지 통한 솔루션 및 sales 경쟁력 강화',
                            overview: '기술 조직 재배치를 통한 영업 경쟁력 제고',
                            organization: 'Enterprise사업본부',
                            metrics: { current: '86', unit: '점', target: '90', achievement: '95.6%' }
                        }
                    ]
                }
            ]
        },
        {
            id: 'cat3',
            type: 'core',
            title: '마케팅 효율',
            metrics: {
                current: '87.3',
                unit: '%',
                target: '90.0',
                achievement: '97.0%'
            },
            subcategories: [
                {
                    id: 'sub3-1',
                    title: '기대 매출 대비 과한 비용이 투입되고 있는 결합고객의 비용구조 개선',
                    tasks: [
                        {
                            id: 'task3-1-1',
                            title: '결합 할인 revisit',
                            overview: '결합 상품 할인 정책 재검토 및 최적화',
                            organization: 'Product&Brand본부',
                            metrics: { current: '90', unit: '%', target: '100', achievement: '90.0%' }
                        },
                        {
                            id: 'task3-1-2',
                            title: '결합 할인까지 고려한 효율적인 비용 집행',
                            overview: '결합 할인을 포함한 통합 마케팅 비용 관리',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '₩24.5B', unit: '억원', target: '₩28.0B', achievement: '87.5%' }
                        }
                    ]
                },
                {
                    id: 'sub3-2',
                    title: '고객 그룹별 기여가치 고려한 RAC 차등',
                    tasks: [
                        {
                            id: 'task3-2-1',
                            title: 'AI LTV 모델 기반, 요금/단말/채널별 RAC 정교화',
                            overview: 'AI 기반 고객 획득 비용(RAC) 차등 체계 구축',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '78', unit: '%', target: '85', achievement: '91.8%' }
                        }
                    ]
                },
                {
                    id: 'sub3-3',
                    title: '단말 등 마케팅 SCM 최적화',
                    tasks: [
                        {
                            id: 'task3-3-1',
                            title: 'AI 기반 최적 단말 재고 관리 프로세스 고도화',
                            overview: 'AI 수요 예측을 통한 단말 재고 최적화',
                            organization: 'Sales&Marketing본부',
                            metrics: { current: '85', unit: '%', target: '92', achievement: '92.4%' }
                        }
                    ]
                },
                {
                    id: 'sub3-4',
                    title: '고객 LTV와 align하여 혜택/서비스의 차등 관리',
                    tasks: [
                        {
                            id: 'task3-4-1',
                            title: '요금제 혜택을 LTV를 높일 수 있는 방향으로 재설계',
                            overview: 'LTV 증대 중심의 요금제 혜택 구조 개편',
                            organization: 'Product&Brand본부',
                            metrics: { current: '72', unit: '%', target: '90', achievement: '80.0%' }
                        },
                        {
                            id: 'task3-4-2',
                            title: '고객 기여가치에 맞게, 비용 reallocation 및 멤버십 등급체계 개편',
                            overview: '고객 가치 기반 마케팅 비용 재배분 및 멤버십 개편',
                            organization: 'Product&Brand본부',
                            metrics: { current: '68', unit: '%', target: '85', achievement: '80.0%' }
                        }
                    ]
                },
                {
                    id: 'sub3-5',
                    title: '사람이 처리중인 고객 응대 업무를 AI로 단계적 자동화',
                    tasks: [
                        {
                            id: 'task3-5-1',
                            title: '[온라인] 고객 셀프 업무처리 비중 확대',
                            overview: '온라인 셀프서비스 기능 강화 및 이용률 제고',
                            organization: 'MNO AT/DT기획담당',
                            metrics: { current: '62', unit: '%', target: '75', achievement: '82.7%' }
                        },
                        {
                            id: 'task3-5-2',
                            title: '[오프라인] AI 기반 고객 응대 Process 고도화',
                            overview: '오프라인 매장의 AI 응대 시스템 도입',
                            organization: 'MNO AT/DT기획담당',
                            metrics: { current: '45', unit: '%', target: '70', achievement: '64.3%' }
                        },
                        {
                            id: 'task3-5-3',
                            title: '[고객센터] 상담 과정에서 AI 활용한 업무처리 활성화',
                            overview: '고객센터 AI 상담 지원 시스템 확대',
                            organization: 'AT/DT센터',
                            metrics: { current: '78', unit: '%', target: '85', achievement: '91.8%' }
                        }
                    ]
                }
            ]
        },
        {
            id: 'cat4',
            type: 'core',
            title: '인당 네트워크 운영 비용',
            metrics: {
                current: '₩14,250',
                unit: '원/인',
                target: '₩13,000',
                achievement: '91.2%'
            },
            subcategories: [
                {
                    id: 'sub4-1',
                    title: '생산성 고려한 Network 개선',
                    tasks: [
                        {
                            id: 'task4-1-1',
                            title: 'LTE modernization 추진',
                            overview: 'LTE 네트워크 현대화를 통한 운영 효율성 개선',
                            organization: 'Network센터',
                            metrics: { current: '82', unit: '%', target: '90', achievement: '91.1%' }
                        }
                    ]
                },
                {
                    id: 'sub4-2',
                    title: 'AI-based 비용 분석 기반 파트너십/임차료 관련 SCM 구조 개선',
                    tasks: [
                        {
                            id: 'task4-2-1',
                            title: '네트워크 주요 영역별 파트너십 최적화',
                            overview: '네트워크 파트너 관리 및 계약 조건 최적화',
                            organization: 'Network센터',
                            metrics: { current: '15', unit: '건', target: '20', achievement: '75.0%' }
                        },
                        {
                            id: 'task4-2-2',
                            title: '협정 임차료 및 중계기 사이트 임차료 구조적 개선',
                            overview: '임차료 구조 개선을 통한 네트워크 운영비 절감',
                            organization: 'Network센터',
                            metrics: { current: '₩8.2B', unit: '억원', target: '₩10.0B', achievement: '82.0%' }
                        }
                    ]
                },
                {
                    id: 'sub4-3',
                    title: 'AI 기반 분석을 통한 유지보수 관련 SCM 최적화',
                    tasks: [
                        {
                            id: 'task4-3-1',
                            title: '교환/OSS 장비 운용수량 최적화',
                            overview: '네트워크 장비 운용 효율화 및 수량 최적화',
                            organization: 'Network센터',
                            metrics: { current: '88', unit: '%', target: '95', achievement: '92.6%' }
                        },
                        {
                            id: 'task4-3-2',
                            title: '중계기 사이트 증분 최적화',
                            overview: '중계기 배치 최적화를 통한 비용 효율성 제고',
                            organization: 'Network센터',
                            metrics: { current: '92', unit: '%', target: '100', achievement: '92.0%' }
                        }
                    ]
                },
                {
                    id: 'sub4-4',
                    title: '네트워크 도메인 별 특화된 AI agent 활용 가속화로 생산성 혁신',
                    tasks: [
                        {
                            id: 'task4-4-1',
                            title: 'Network 도메인 특화 agent 기반 생산성 혁신',
                            overview: 'AI 에이전트 활용 네트워크 운영 자동화',
                            organization: 'Network센터',
                            metrics: { current: '58', unit: '%', target: '80', achievement: '72.5%' }
                        }
                    ]
                },
                {
                    id: 'sub4-5',
                    title: '주파수 자원의 최적 관리',
                    tasks: [
                        {
                            id: 'task4-5-1',
                            title: '5G SA 상용화 및 주파수 최적화',
                            overview: '5G 독립형 네트워크 구축 및 주파수 효율화',
                            organization: 'Network센터',
                            metrics: { current: '78', unit: '%', target: '90', achievement: '86.7%' }
                        },
                        {
                            id: 'task4-5-2',
                            title: '3G migration 준비',
                            overview: '3G 서비스 종료 및 4G/5G 전환 준비',
                            organization: 'Network센터',
                            metrics: { current: '65', unit: '%', target: '100', achievement: '65.0%' }
                        }
                    ]
                }
            ]
        },
        {
            id: 'cat5',
            type: 'core',
            title: '체감 품질 기준 만족률',
            metrics: {
                current: '89.7',
                unit: '%',
                target: '95.0',
                achievement: '94.4%'
            },
            subcategories: [
                {
                    id: 'sub5-1',
                    title: '권역 관리를 넘어, LTV와 AI 기반 체감 품질 기준 optimization',
                    tasks: [
                        {
                            id: 'task5-1-1',
                            title: 'AI 기반 투자 설계 및 품질 관리',
                            overview: 'AI 분석 기반 네트워크 투자 최적화',
                            organization: 'Network센터',
                            metrics: { current: '84', unit: '점', target: '90', achievement: '93.3%' }
                        },
                        {
                            id: 'task5-1-2',
                            title: 'AI LTV 모델 기반 N/W 투자/운영 효율화',
                            overview: 'LTV 중심의 네트워크 투자 우선순위 결정',
                            organization: 'MNO AT/DT기획담당',
                            metrics: { current: '72', unit: '%', target: '85', achievement: '84.7%' }
                        }
                    ]
                }
            ]
        },
        {
            id: 'cat6',
            type: 'core',
            title: '직원당 생산성',
            metrics: {
                current: '108.2',
                unit: '지수',
                target: '115.0',
                achievement: '94.1%'
            },
            subcategories: [
                {
                    id: 'sub6-1',
                    title: 'AI 자동화를 통한 업무 생산성 제고',
                    tasks: [
                        {
                            id: 'task6-1-1',
                            title: '[마케팅]특화 AI Agent 등 기반 업무 생산성 혁신',
                            overview: '마케팅 영역 AI 에이전트 활용 생산성 향상',
                            organization: 'Network센터',
                            metrics: { current: '112', unit: '지수', target: '120', achievement: '93.3%' }
                        },
                        {
                            id: 'task6-1-2',
                            title: '[Network] 특화 AI Agent 등 기반 업무 생산성 혁신',
                            overview: '네트워크 영역 AI 에이전트 활용 자동화',
                            organization: 'Product&Brand본부',
                            metrics: { current: '68', unit: '%', target: '80', achievement: '85.0%' }
                        }
                    ]
                },
                {
                    id: 'sub6-2',
                    title: '외주 용역 의존도 축소',
                    tasks: [
                        {
                            id: 'task6-2-1',
                            title: '내재화 가능한 상품 발굴/효율화 (VAS/소액결제)',
                            overview: 'VAS 및 소액결제 서비스 내재화를 통한 효율 제고',
                            organization: 'Network센터',
                            metrics: { current: '12', unit: '건', target: '15', achievement: '80.0%' }
                        }
                    ]
                }
            ]
        },
        // 기본기 지표 (4개)
        {
            id: 'cat7',
            type: 'basic',
            title: '보안',
            metrics: {
                current: '93.8',
                unit: '점',
                target: '95.0',
                achievement: '98.7%'
            },
            subcategories: [
                {
                    id: 'sub7-1',
                    title: '[N/W] 보안 투자 확대 및 보안에 강한 Network 구현',
                    tasks: [
                        {
                            id: 'task7-1-1',
                            title: '내부망까지 침투가 어려운 다단계 방어 network 구축',
                            overview: '다층 보안 아키텍처 구축을 통한 네트워크 방어',
                            organization: 'Network센터',
                            metrics: { current: '88', unit: '점', target: '95', achievement: '92.6%' }
                        },
                        {
                            id: 'task7-1-2',
                            title: '보호/탐지체계 (data 보호, 접근 통제, 침해 탐지) 강화를 위한 투자 확대',
                            overview: '보안 시스템 고도화를 위한 투자 확대',
                            organization: 'Network센터',
                            metrics: { current: '₩42B', unit: '억원', target: '₩45B', achievement: '93.3%' }
                        },
                        {
                            id: 'task7-1-3',
                            title: 'NW 보안 강화 과제 적기 실행',
                            overview: '네트워크 보안 강화 프로젝트 일정 관리',
                            organization: 'AT/DT센터',
                            metrics: { current: '9', unit: '건', target: '10', achievement: '90.0%' }
                        },
                        {
                            id: 'task7-1-4',
                            title: 'IT 보안 강화 과제 적기 실행',
                            overview: 'IT 시스템 보안 강화 과제 추진',
                            organization: 'Network센터',
                            metrics: { current: '11', unit: '건', target: '12', achievement: '91.7%' }
                        }
                    ]
                },
                {
                    id: 'sub7-2',
                    title: '[N/W] 보안 신뢰성 확보를 위한 외부 관점의 보안 점검/진단 강화',
                    tasks: [
                        {
                            id: 'task7-2-1',
                            title: '대외 인증, 외부 진단 강화 및 사각지대 제거',
                            overview: '제3자 보안 진단 및 인증 확대',
                            organization: 'AT/DT센터',
                            metrics: { current: '15', unit: '건', target: '18', achievement: '83.3%' }
                        }
                    ]
                },
                {
                    id: 'sub7-3',
                    title: '[IT, N/W] 자산 통합관리체계 구축으로 자산 투명성 확보 및 보안성 강화',
                    tasks: [
                        {
                            id: 'task7-3-1',
                            title: 'IT/NW 자산 통합 관리체계 구축',
                            overview: 'IT 및 네트워크 자산의 통합 관리 시스템 구축',
                            organization: 'AT/DT센터',
                            metrics: { current: '78', unit: '%', target: '90', achievement: '86.7%' }
                        },
                        {
                            id: 'task7-3-2',
                            title: '중요/민감 data 통합 관리체계 구축',
                            overview: '중요 데이터 통합 보호 체계 마련',
                            organization: '안전보건실',
                            metrics: { current: '72', unit: '%', target: '95', achievement: '75.8%' }
                        }
                    ]
                }
            ]
        },
        {
            id: 'cat8',
            type: 'basic',
            title: 'SHE',
            metrics: {
                current: '88.5',
                unit: '점',
                target: '92.0',
                achievement: '96.2%'
            },
            subcategories: [
                {
                    id: 'sub8-1',
                    title: '[N/W] 관리 사각지대 개선을 위한 통합 SHE 관리체계 upgrade (자회사, BP 포함)',
                    tasks: [
                        {
                            id: 'task8-1-1',
                            title: 'SHE 영역의 AT/DT 추진 가속화',
                            overview: '안전·보건·환경 영역의 자동화 및 디지털 전환',
                            organization: '안전보건실',
                            metrics: { current: '65', unit: '%', target: '80', achievement: '81.3%' }
                        },
                        {
                            id: 'task8-1-2',
                            title: '그룹 SHE 수준 측정체계를 자회사까지 적용 확대',
                            overview: 'SHE 관리 체계의 그룹사 확대 적용',
                            organization: '안전보건실',
                            metrics: { current: '8', unit: '개사', target: '10', achievement: '80.0%' }
                        },
                        {
                            id: 'task8-1-3',
                            title: 'BP 안전 관리 기준 상향 및 관리 역량 강화',
                            overview: '협력사 안전 관리 기준 강화 및 교육',
                            organization: 'Network센터',
                            metrics: { current: '82', unit: '점', target: '90', achievement: '91.1%' }
                        }
                    ]
                }
            ]
        },
        {
            id: 'cat9',
            type: 'basic',
            title: '안정운용',
            metrics: {
                current: '99.82',
                unit: '%',
                target: '99.95',
                achievement: '99.9%'
            },
            subcategories: [
                {
                    id: 'sub9-1',
                    title: '[N/W] 대형고장 원천 차단을 위한 네트워크 안정운용 체계 구축',
                    tasks: [
                        {
                            id: 'task9-1-1',
                            title: '네트워크 작업의 (변경/점검/장애조치) 표준화 및 검증 체계 강화',
                            overview: '네트워크 운영 작업의 표준화 및 검증 프로세스 구축',
                            organization: 'Network센터',
                            metrics: { current: '88', unit: '%', target: '95', achievement: '92.6%' }
                        },
                        {
                            id: 'task9-1-2',
                            title: 'AI 기반 재난·사회 이슈 감지 및 상황 전파',
                            overview: 'AI 기반 재난 상황 조기 감지 시스템 구축',
                            organization: 'Network센터',
                            metrics: { current: '78', unit: '%', target: '90', achievement: '86.7%' }
                        }
                    ]
                },
                {
                    id: 'sub9-2',
                    title: '[N/W] AT/DT를 활용한 안정운용 체계 고도화',
                    tasks: [
                        {
                            id: 'task9-2-1',
                            title: '운용 data의 AI readable 化 : 암묵지 → 시스템 化',
                            overview: '운영 노하우의 데이터화 및 시스템 자동화',
                            organization: 'Network센터',
                            metrics: { current: '58', unit: '%', target: '75', achievement: '77.3%' }
                        },
                        {
                            id: 'task9-2-2',
                            title: '네트워크 운용지원 AI agent 활용 확대',
                            overview: 'AI 에이전트를 활용한 네트워크 운용 지원',
                            organization: 'AT/DT센터',
                            metrics: { current: '48', unit: '%', target: '70', achievement: '68.6%' }
                        }
                    ]
                },
                {
                    id: 'sub9-3',
                    title: '[IT] 장애 대응력 강화를 위한 관리 시스템 고도화 추진',
                    tasks: [
                        {
                            id: 'task9-3-1',
                            title: 'MNO 쇄신 방향성 연계 BSS 시스템 성능 확보 및 장애 대응력 강화',
                            overview: 'BSS 시스템 안정성 및 장애 대응 역량 강화',
                            organization: 'AT/DT센터',
                            metrics: { current: '95', unit: '%', target: '98', achievement: '97.0%' }
                        },
                        {
                            id: 'task9-3-2',
                            title: 'MNO 온라인 채널 통합모니터링 체계 구축 및 과다 트래픽 대응 강화',
                            overview: '온라인 채널 통합 모니터링 및 트래픽 관리',
                            organization: 'AT/DT센터',
                            metrics: { current: '88', unit: '%', target: '95', achievement: '92.6%' }
                        },
                        {
                            id: 'task9-3-3',
                            title: 'AT/DT 기반 IT infra 안정운용 및 솔루션 고도화',
                            overview: 'IT 인프라 자동화 및 안정운용 체계 구축',
                            organization: 'AT/DT센터',
                            metrics: { current: '82', unit: '%', target: '90', achievement: '91.1%' }
                        }
                    ]
                }
            ]
        },
        {
            id: 'cat10',
            type: 'basic',
            title: 'AT/DT',
            metrics: {
                current: '76.4',
                unit: '%',
                target: '85.0',
                achievement: '89.9%'
            },
            subcategories: [
                {
                    id: 'sub10-1',
                    title: 'Next BSS (NOVA) 추진',
                    tasks: [
                        {
                            id: 'task10-1-1',
                            title: '기존 관행 탈피 및 근원적 혁신 관점에서 Next BSS 추진',
                            overview: '차세대 BSS 시스템 구축을 통한 근본적 혁신',
                            organization: 'AT/DT센터',
                            metrics: { current: '62', unit: '%', target: '80', achievement: '77.5%' }
                        }
                    ]
                },
                {
                    id: 'sub10-2',
                    title: 'AI readable data 구축',
                    tasks: [
                        {
                            id: 'task10-2-1',
                            title: '흩어진 data를 모으고 가공하여 AI가 쉽게 이해할 수 있는 data 구조로 변환',
                            overview: 'AI 활용을 위한 데이터 통합 및 표준화',
                            organization: 'AT/DT센터',
                            metrics: { current: '55', unit: '%', target: '75', achievement: '73.3%' }
                        }
                    ]
                }
            ]
        }
    ]
};

// 현재 선택 상태
let currentState = {
    selectedCategory: null,
    selectedSubcategory: null,
    orgViewActive: false,
    selectedOrganization: null
};

// DOM 요소
const dashboardView = document.getElementById('dashboardView');
const taskView = document.getElementById('taskView');
const gridView = document.getElementById('gridView');
const columnView = document.getElementById('columnView');
const dashboardTitle = document.getElementById('dashboardTitle');
const orgViewButton = document.getElementById('orgViewButton');
const organizationSection = document.getElementById('organizationSection');

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    loadDataFromStorage();
    initializeSampleData(); // 7~10번 지표 샘플 데이터 초기화
    renderDashboardView(); // 새로운 Dashboard View 렌더링
    setupEventListeners();
});

// localStorage에서 데이터 로드
function loadDataFromStorage() {
    try {
        const storedData = localStorage.getItem('mno_dashboard_data');
        if (storedData) {
            const parsed = JSON.parse(storedData);
            if (parsed.categories && Array.isArray(parsed.categories)) {
                dashboardData.categories = parsed.categories;
                console.log('localStorage에서 데이터를 로드했습니다.');
            }
        }
    } catch (error) {
        console.warn('localStorage 데이터 로드 실패, 기본 데이터 사용:', error);
    }
}

// Admin 페이지 열기
function openAdmin() {
    window.open('admin.html', '_blank');
}

// 그리드 뷰 렌더링
function renderGridView() {
    const coreMetricsGrid = document.querySelector('.card-grid.core-metrics');
    const basicMetricsGrid = document.querySelector('.card-grid.basic-metrics');

    // 핵심지표 카드 렌더링
    const coreCategories = dashboardData.categories.filter(cat => cat.type === 'core');
    coreMetricsGrid.innerHTML = coreCategories.map((category, index) => `
        <div class="metric-card" data-category-id="${category.id}">
            <div class="card-header">
                <div class="card-number">핵심지표 ${index + 1}</div>
                <div class="card-title">${category.title}</div>
            </div>
            <div class="card-metrics">
                <div class="metric-row">
                    <div class="metric-label">실적</div>
                    <div class="metric-value">${category.metrics.current}<span class="metric-unit">${category.metrics.unit}</span></div>
                </div>
                <div class="metric-row">
                    <div class="metric-label">목표</div>
                    <div class="metric-value target">${category.metrics.target}<span class="metric-unit">${category.metrics.unit}</span></div>
                </div>
                <div class="metric-achievement">
                    <div class="achievement-label">달성률</div>
                    <div class="achievement-value">${category.metrics.achievement}</div>
                </div>
            </div>
        </div>
    `).join('');

    // 기본기 지표 카드 렌더링
    const basicCategories = dashboardData.categories.filter(cat => cat.type === 'basic');
    basicMetricsGrid.innerHTML = basicCategories.map((category, index) => `
        <div class="metric-card" data-category-id="${category.id}">
            <div class="card-header">
                <div class="card-number">기본기 지표 ${index + 1}</div>
                <div class="card-title">${category.title}</div>
            </div>
            <div class="card-metrics">
                <div class="metric-row">
                    <div class="metric-label">실적</div>
                    <div class="metric-value">${category.metrics.current}<span class="metric-unit">${category.metrics.unit}</span></div>
                </div>
                <div class="metric-row">
                    <div class="metric-label">목표</div>
                    <div class="metric-value target">${category.metrics.target}<span class="metric-unit">${category.metrics.unit}</span></div>
                </div>
                <div class="metric-achievement">
                    <div class="achievement-label">달성률</div>
                    <div class="achievement-value">${category.metrics.achievement}</div>
                </div>
            </div>
        </div>
    `).join('');

    // 카드 클릭 이벤트
    document.querySelectorAll('.metric-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.categoryId;
            showColumnView(categoryId);
        });
    });
}

// 3열 레이아웃 뷰로 전환
function showColumnView(categoryId) {
    gridView.classList.remove('active');
    columnView.classList.add('active');

    currentState.selectedCategory = categoryId;
    currentState.selectedSubcategory = null;

    renderCategoryList();
    renderSubcategoryList(categoryId);
    clearTaskList();
}

// 초기 화면으로 돌아가기
function showGridView() {
    columnView.classList.remove('active');
    gridView.classList.add('active');

    // 조직 View도 초기화
    if (currentState.orgViewActive) {
        organizationSection.classList.remove('active');
        orgViewButton.textContent = '조직 View';
        currentState.orgViewActive = false;
    }

    currentState.selectedCategory = null;
    currentState.selectedSubcategory = null;
    currentState.selectedOrganization = null;
}

// 대분류 리스트 렌더링
function renderCategoryList() {
    const categoryList = document.getElementById('categoryList');
    const filteredCategories = getFilteredCategories();

    if (filteredCategories.length === 0) {
        categoryList.innerHTML = '<div class="placeholder">해당 조직의 과제가 없습니다</div>';
        return;
    }

    categoryList.innerHTML = filteredCategories.map((category) => {
        const isActive = category.id === currentState.selectedCategory;
        const allCategories = dashboardData.categories;
        const index = allCategories.findIndex(cat => cat.id === category.id);
        const label = category.type === 'core' ? '핵심지표' : '기본기 지표';
        const number = category.type === 'core' ? index + 1 : index - 5;

        return `
            <div class="list-card ${isActive ? 'active' : ''}" data-category-id="${category.id}">
                <div class="card-number">${label} ${number}</div>
                <div class="card-title">${category.title}</div>
            </div>
        `;
    }).join('');

    // 대분류 클릭 이벤트
    categoryList.querySelectorAll('.list-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.categoryId;
            currentState.selectedCategory = categoryId;
            currentState.selectedSubcategory = null;

            renderCategoryList();
            renderSubcategoryList(categoryId);
            clearTaskList();
        });
    });
}

// 중분류 리스트 렌더링
function renderSubcategoryList(categoryId) {
    const subcategoryList = document.getElementById('subcategoryList');
    const filteredSubcategories = getFilteredSubcategories(categoryId);

    if (filteredSubcategories.length === 0) {
        subcategoryList.innerHTML = '<div class="placeholder">하위 대분류가 없습니다</div>';
        return;
    }

    const category = dashboardData.categories.find(cat => cat.id === categoryId);
    const allSubcategories = category.subcategories;

    subcategoryList.innerHTML = filteredSubcategories.map((subcategory) => {
        const isActive = subcategory.id === currentState.selectedSubcategory;
        const index = allSubcategories.findIndex(sub => sub.id === subcategory.id);

        // 하위 소분류의 달성률 분포 계산 (필터링된 과제 기준)
        let highCount = 0;
        let mediumCount = 0;
        let lowCount = 0;

        if (subcategory.tasks && subcategory.tasks.length > 0) {
            const tasksToCount = currentState.selectedOrganization
                ? subcategory.tasks.filter(task => task.organization === currentState.selectedOrganization)
                : subcategory.tasks;

            tasksToCount.forEach(task => {
                const achievementNum = parseFloat(task.metrics.achievement);
                if (achievementNum >= 91) {
                    highCount++;
                } else if (achievementNum >= 81) {
                    mediumCount++;
                } else {
                    lowCount++;
                }
            });
        }

        return `
            <div class="list-card ${isActive ? 'active' : ''}" data-subcategory-id="${subcategory.id}">
                <div class="card-number">대분류 ${index + 1}</div>
                <div class="card-title">${subcategory.title}</div>
                <div class="traffic-lights">
                    <div class="traffic-light-item">
                        <span class="traffic-light green"></span>
                        <span class="traffic-count">${highCount}</span>
                    </div>
                    <div class="traffic-light-item">
                        <span class="traffic-light yellow"></span>
                        <span class="traffic-count">${mediumCount}</span>
                    </div>
                    <div class="traffic-light-item">
                        <span class="traffic-light red"></span>
                        <span class="traffic-count">${lowCount}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 중분류 클릭 이벤트
    subcategoryList.querySelectorAll('.list-card').forEach(card => {
        card.addEventListener('click', () => {
            const subcategoryId = card.dataset.subcategoryId;
            currentState.selectedSubcategory = subcategoryId;

            renderSubcategoryList(categoryId);
            renderTaskList(subcategoryId);
        });
    });
}

// 소분류 리스트 렌더링
function renderTaskList(subcategoryId) {
    const taskList = document.getElementById('taskList');
    const filteredTasks = getFilteredTasks(subcategoryId);

    if (filteredTasks.length === 0) {
        taskList.innerHTML = '<div class="placeholder">하위 세부 과제가 없습니다</div>';
        return;
    }

    const category = dashboardData.categories.find(cat => cat.id === currentState.selectedCategory);
    const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
    const allTasks = subcategory.tasks;

    taskList.innerHTML = filteredTasks.map((task) => {
        const index = allTasks.findIndex(t => t.id === task.id);

        // 달성률에 따른 색상 클래스 결정
        const achievementNum = parseFloat(task.metrics.achievement);
        let achievementClass = 'low';
        if (achievementNum >= 91) {
            achievementClass = 'high';
        } else if (achievementNum >= 81) {
            achievementClass = 'medium';
        }

        return `
            <div class="task-card" data-task-id="${task.id}">
                <div class="task-card-header">
                    <div class="card-number">과제 ${index + 1}</div>
                    <div class="card-title">${task.title}</div>
                </div>
                <div class="task-overview">${task.overview}</div>
                <div class="task-card-footer">
                    <div class="task-organization">${task.organization || ''}</div>
                    <div class="task-metrics">
                        <div class="metrics-unified">
                            <div class="metrics-left">
                                <div class="metric-item">
                                    <span class="metric-label">목표</span>
                                    <span class="metric-value target">${task.metrics.target}<span class="metric-unit">${task.metrics.unit}</span></span>
                                </div>
                                <div class="metric-item">
                                    <span class="metric-label">실적</span>
                                    <span class="metric-value">${task.metrics.current}<span class="metric-unit">${task.metrics.unit}</span></span>
                                </div>
                            </div>
                            <div class="metrics-right">
                                <div class="achievement-value ${achievementClass}">${task.metrics.achievement}</div>
                                <div class="progress-bar-container">
                                    <div class="progress-bar ${achievementClass}" style="width: ${achievementNum}%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 소분류 클릭 이벤트 - 새 탭으로 상세 페이지 열기
    taskList.querySelectorAll('.task-card').forEach(card => {
        card.addEventListener('click', () => {
            const taskId = card.dataset.taskId;
            openTaskDetail(taskId);
        });
    });
}

// 소분류 리스트 초기화
function clearTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '<div class="placeholder">대분류를 선택해주세요</div>';
}

// 소분류 상세 페이지 열기
function openTaskDetail(taskId) {
    // 상세 페이지를 새 탭으로 열기
    window.open(`detail.html?taskId=${taskId}`, '_blank');
}

// 조직별 과제 수 계산
function getOrganizationCounts() {
    const orgCounts = {};

    dashboardData.categories.forEach(category => {
        category.subcategories.forEach(subcategory => {
            subcategory.tasks.forEach(task => {
                const org = task.organization;
                if (org) {
                    if (!orgCounts[org]) {
                        orgCounts[org] = 0;
                    }
                    orgCounts[org]++;
                }
            });
        });
    });

    return orgCounts;
}

// 조직 View 토글
function toggleOrganizationView() {
    currentState.orgViewActive = !currentState.orgViewActive;

    if (currentState.orgViewActive) {
        // 조직 View 활성화
        organizationSection.classList.add('active');
        orgViewButton.textContent = '전체 View';
        renderOrganizationCards();
    } else {
        // 조직 View 비활성화
        organizationSection.classList.remove('active');
        orgViewButton.textContent = '조직 View';
        currentState.selectedOrganization = null;

        // 필터 해제하고 다시 렌더링
        renderCategoryList();
        if (currentState.selectedCategory) {
            renderSubcategoryList(currentState.selectedCategory);
        }
        if (currentState.selectedSubcategory) {
            renderTaskList(currentState.selectedSubcategory);
        }
    }
}

// 조직별 달성률 분포 계산
function getOrganizationAchievementDistribution(org) {
    let highCount = 0;
    let mediumCount = 0;
    let lowCount = 0;

    dashboardData.categories.forEach(category => {
        category.subcategories.forEach(subcategory => {
            subcategory.tasks.forEach(task => {
                if (task.organization === org) {
                    const achievementNum = parseFloat(task.metrics.achievement);
                    if (achievementNum >= 91) {
                        highCount++;
                    } else if (achievementNum >= 81) {
                        mediumCount++;
                    } else {
                        lowCount++;
                    }
                }
            });
        });
    });

    return { highCount, mediumCount, lowCount };
}

// 조직 카드 렌더링
function renderOrganizationCards() {
    const organizationCards = document.getElementById('organizationCards');
    const orgCounts = getOrganizationCounts();

    // 조직 순서 고정
    const organizationOrder = [
        'MNO AT/DT기획담당',
        'Product&Brand본부',
        'Sales&Marketing본부',
        'Enterprise사업본부',
        'AT/DT센터',
        'Network센터',
        '안전보건실'
    ];

    organizationCards.innerHTML = organizationOrder.map(org => {
        const isActive = org === currentState.selectedOrganization;
        const count = orgCounts[org] || 0;
        const distribution = getOrganizationAchievementDistribution(org);

        return `
            <div class="organization-card ${isActive ? 'active' : ''}" data-organization="${org}">
                <div class="org-name">${org}</div>
                <div class="org-metrics">
                    <div class="org-count">${count}</div>
                    <div class="org-traffic-lights">
                        <div class="traffic-light-item">
                            <span class="traffic-light green"></span>
                            <span class="traffic-count">${distribution.highCount}</span>
                        </div>
                        <div class="traffic-light-item">
                            <span class="traffic-light yellow"></span>
                            <span class="traffic-count">${distribution.mediumCount}</span>
                        </div>
                        <div class="traffic-light-item">
                            <span class="traffic-light red"></span>
                            <span class="traffic-count">${distribution.lowCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 조직 카드 클릭 이벤트
    organizationCards.querySelectorAll('.organization-card').forEach(card => {
        card.addEventListener('click', () => {
            const organization = card.dataset.organization;
            selectOrganization(organization);
        });
    });
}

// 조직 선택 및 필터링
function selectOrganization(organization) {
    // 같은 조직을 다시 클릭하면 필터 해제
    if (currentState.selectedOrganization === organization) {
        currentState.selectedOrganization = null;
    } else {
        currentState.selectedOrganization = organization;
    }

    // 선택 상태 초기화
    currentState.selectedCategory = null;
    currentState.selectedSubcategory = null;

    // 다시 렌더링
    renderOrganizationCards();
    renderCategoryList();
    clearSubcategoryList();
    clearTaskList();
}

// 중분류 리스트 초기화
function clearSubcategoryList() {
    const subcategoryList = document.getElementById('subcategoryList');
    subcategoryList.innerHTML = '<div class="placeholder">핵심지표를 선택해주세요</div>';
}

// 필터링된 카테고리 가져오기
function getFilteredCategories() {
    if (!currentState.selectedOrganization) {
        return dashboardData.categories;
    }

    // 선택된 조직에 해당하는 과제가 있는 카테고리만 반환
    return dashboardData.categories.filter(category => {
        return category.subcategories.some(subcategory => {
            return subcategory.tasks.some(task => {
                return task.organization === currentState.selectedOrganization;
            });
        });
    });
}

// 필터링된 서브카테고리 가져오기
function getFilteredSubcategories(categoryId) {
    const category = dashboardData.categories.find(cat => cat.id === categoryId);
    if (!category || !currentState.selectedOrganization) {
        return category ? category.subcategories : [];
    }

    // 선택된 조직에 해당하는 과제가 있는 서브카테고리만 반환
    return category.subcategories.filter(subcategory => {
        return subcategory.tasks.some(task => {
            return task.organization === currentState.selectedOrganization;
        });
    });
}

// 필터링된 과제 가져오기
function getFilteredTasks(subcategoryId) {
    const category = dashboardData.categories.find(cat => cat.id === currentState.selectedCategory);
    if (!category) return [];

    const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
    if (!subcategory || !currentState.selectedOrganization) {
        return subcategory ? subcategory.tasks : [];
    }

    // 선택된 조직에 해당하는 과제만 반환
    return subcategory.tasks.filter(task => {
        return task.organization === currentState.selectedOrganization;
    });
}

// 이벤트 리스너 설정
function setupEventListeners() {
    if (dashboardTitle) {
        dashboardTitle.addEventListener('click', switchToDashboardView);
    }
    if (orgViewButton) {
        orgViewButton.addEventListener('click', toggleOrganizationView);
    }
}

// 데이터 업데이트 함수 (외부에서 호출 가능)
function updateDashboardData(newData) {
    if (newData && newData.categories) {
        dashboardData.categories = newData.categories;
        renderGridView();

        // 3열 뷰가 활성화되어 있으면 다시 렌더링
        if (columnView.classList.contains('active')) {
            renderCategoryList();
            if (currentState.selectedCategory) {
                renderSubcategoryList(currentState.selectedCategory);
            }
            if (currentState.selectedSubcategory) {
                renderTaskList(currentState.selectedSubcategory);
            }
        }
    }
}

// 전역에 노출
window.updateDashboardData = updateDashboardData;

// ===== Dashboard View 관련 코드 =====

// 차트 인스턴스 저장
const chartInstances = {};

// KPI 카드 데이터 정의
const kpiCards = [
    { id: 1, title: '1.핵심 seg. MNP 순증', current: '+42,500', target: '+50,000', unit: '', updateBadge: 'today', categoryId: 'cat1', status: { green: 11, yellow: 5, red: 3 } },
    { id: 2, title: '2.LTV', current: '2,450,000', target: '2,500,000', unit: '원', updateBadge: '3/15 Update', categoryId: 'cat2', status: { green: 8, yellow: 3 } },
    { id: 3, title: '3.마케팅 효율', current: '850,000', target: '800,000', unit: '원', updateBadge: 'today', categoryId: 'cat3', status: { green: 5, red: 1 } },
    { id: 4, title: '4.인당 네트워크 운영 비용', current: '125,000', target: '120,000', unit: '원', updateBadge: '3/15 Update', categoryId: 'cat4', status: { green: 8 } },
    { id: 5, title: '5.제갈 품질 기준 만족률', current: '92.5%', target: '95.0%', unit: '', updateBadge: '3/15 Update', categoryId: 'cat5', status: { green: 8, yellow: 3 } },
    { id: 6, title: '6.직원당 생산성', current: '1,250,000,000', target: null, unit: '원', updateBadge: '3/15 Update', categoryId: 'cat6', status: { green: 8 } },
    { id: 7, title: '7.보안', current: '2', target: null, unit: '건', updateBadge: '3/15 Update', categoryId: 'cat7', status: { green: 8, yellow: 2 } },
    { id: 8, title: '8.SHE', current: '1', target: null, unit: '건', updateBadge: 'today', categoryId: 'cat8', status: { green: 8, yellow: 2 } },
    { id: 9, title: '9.안전운용', current: '0', target: null, unit: '건', updateBadge: '3/15 Update', categoryId: 'cat9', status: { green: 8, yellow: 2 } },
    { id: 10, title: '10.AT/DT 기본 인프라', current: '51.00%', target: null, unit: '', updateBadge: '3/15 Update', categoryId: 'cat10', status: { green: 7 } }
];

// Dashboard View 렌더링
function renderDashboardView() {
    const kpiGrid = document.querySelector('.kpi-grid');
    if (!kpiGrid) return;

    kpiGrid.innerHTML = kpiCards.map(card => `
        <div class="kpi-card ${card.id >= 7 ? 'kpi-card-small' : ''}" onclick="switchToTaskView('${card.categoryId}')">
            <div class="card-header">
                <h3>
                    ${card.title}
                    ${card.id >= 7 && card.id <= 10 ? `<button class="edit-icon-btn" onclick="event.stopPropagation(); openMonthlyDataModal(${card.id}, '${card.title}', '${card.categoryId}')">✎</button>` : ''}
                </h3>
                <div class="card-status">
                    ${card.status.green ? `<span class="status-item"><span class="dot green"></span>${card.status.green}개</span>` : ''}
                    ${card.status.yellow ? `<span class="status-item"><span class="dot yellow"></span>${card.status.yellow}개</span>` : ''}
                    ${card.status.red ? `<span class="status-item"><span class="dot red"></span>${card.status.red}개</span>` : ''}
                </div>
            </div>
            <div class="card-value">
                <span class="current">${card.current}</span>${card.target ? ` / <span class="target">${card.target}</span>` : ''} ${card.unit}
                <span class="update-badge ${card.updateBadge === 'today' ? 'today' : ''}">${card.updateBadge}</span>
            </div>
            <div class="chart-container ${card.id === 10 ? 'chart-horizontal' : ''}">
                <canvas id="chart${card.id}"></canvas>
            </div>
            <div class="card-footer">
                <button class="period-btn active" data-card="${card.id}" data-period="day" onclick="event.stopPropagation(); changePeriod(${card.id}, 'day', event)">일</button>
                <button class="period-btn" data-card="${card.id}" data-period="week" onclick="event.stopPropagation(); changePeriod(${card.id}, 'week', event)">주</button>
                <button class="period-btn" data-card="${card.id}" data-period="month" onclick="event.stopPropagation(); changePeriod(${card.id}, 'month', event)">월</button>
            </div>
        </div>
    `).join('');

    // 모든 차트 초기화
    setTimeout(() => {
        for (let i = 1; i <= 10; i++) {
            initChart(`chart${i}`, 'day');
        }
    }, 100);
}

// Task View로 전환
function switchToTaskView(categoryId) {
    dashboardView.classList.remove('active');
    taskView.classList.add('active');

    // 해당 카테고리 선택하고 3열 뷰 렌더링
    currentState.selectedCategory = categoryId;
    currentState.selectedSubcategory = null;

    renderCategoryList();
    renderSubcategoryList(categoryId);
    renderTaskList(null);
}

// Dashboard View로 전환 (타이틀 클릭 시)
function switchToDashboardView() {
    taskView.classList.remove('active');
    dashboardView.classList.add('active');

    // 상태 초기화
    currentState.selectedCategory = null;
    currentState.selectedSubcategory = null;
    currentState.orgViewActive = false;
    currentState.selectedOrganization = null;

    if (organizationSection) {
        organizationSection.classList.remove('active');
    }
}

// 기간 변경
function changePeriod(cardNum, period, event) {
    // 같은 카드의 다른 버튼 비활성화
    document.querySelectorAll(`[data-card="${cardNum}"]`).forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // 차트 업데이트
    initChart(`chart${cardNum}`, period);
}

// 차트 초기화
function initChart(chartId, period = 'day') {
    const ctx = document.getElementById(chartId);
    if (!ctx) return;

    // 기존 차트 제거
    if (chartInstances[chartId]) {
        chartInstances[chartId].destroy();
    }

    // 차트 설정 가져오기
    const chartNum = parseInt(chartId.replace('chart', ''));
    const config = getChartConfig(chartNum, period);

    if (config) {
        chartInstances[chartId] = new Chart(ctx, config);
    }
}

// 차트 설정 가져오기
function getChartConfig(chartNum, period) {
    let data = generateChartData(period);

    // 7~10번 카드의 경우 저장된 월별 데이터 사용
    if (chartNum >= 7 && chartNum <= 10) {
        const categoryId = `cat${chartNum}`;
        const monthlyData = loadMonthlyData(categoryId);

        // 월별 데이터가 있으면 사용
        if (Object.keys(monthlyData).length > 0 && period === 'month') {
            data = Array.from({length: 12}, (_, i) => {
                const month = i + 1;
                return {
                    label: `${month}월`,
                    value: monthlyData[month] !== undefined ? monthlyData[month] : 0
                };
            });
        }
    }

    const configs = {
        1: { // Candlestick + Bar
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
            options: getDefaultChartOptions()
        },
        2: { // LTV - Line + Bar
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
                        backgroundColor: data.map((d, i) => i % 3 === 0 ? '#f56565' : '#4299e1'),
                        barThickness: 8
                    }
                ]
            },
            options: getDefaultChartOptions()
        },
        3: { // 마케팅 효율 - Bar
            type: 'bar',
            data: {
                labels: data.slice(0, 8).map(d => d.label),
                datasets: [{
                    label: '마케팅 효율',
                    data: data.slice(0, 8).map(d => d.value),
                    backgroundColor: data.slice(0, 8).map((d, i) => i === 7 ? '#f56565' : '#4299e1'),
                    barThickness: 12
                }]
            },
            options: getDefaultChartOptions()
        },
        4: { // 인당 네트워크 운영 비용 - 3개 막대
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
            options: getDefaultChartOptions()
        },
        5: { // 제갈 품질 기준 만족률 - Multi-line
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
                ...getDefaultChartOptions(),
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: { boxWidth: 20, font: { size: 10 } }
                    }
                }
            }
        },
        6: { // 직원당 생산성 - Bar
            type: 'bar',
            data: {
                labels: data.slice(0, 8).map(d => d.label),
                datasets: [{
                    label: '생산성',
                    data: data.slice(0, 8).map(d => d.value),
                    backgroundColor: '#4299e1',
                    barThickness: 15
                }]
            },
            options: getDefaultChartOptions()
        },
        7: { // 보안 - Bar
            type: 'bar',
            data: {
                labels: data.slice(0, 15).map(d => d.label),
                datasets: [{
                    label: '보안 사고',
                    data: data.slice(0, 15).map(() => {
                        const rand = Math.random();
                        if (rand > 0.92) return 2;  // 8% 확률로 2건
                        if (rand > 0.65) return 1;   // 27% 확률로 1건
                        return 0;                    // 65% 확률로 0건
                    }),
                    backgroundColor: '#4299e1',
                    barThickness: 12
                }]
            },
            options: getDefaultChartOptions()
        },
        8: { // SHE - Bar
            type: 'bar',
            data: {
                labels: data.slice(0, 15).map(d => d.label),
                datasets: [{
                    label: 'SHE 사고',
                    data: data.slice(0, 15).map(() => {
                        const rand = Math.random();
                        if (rand > 0.92) return 2;  // 8% 확률로 2건
                        if (rand > 0.65) return 1;   // 27% 확률로 1건
                        return 0;                    // 65% 확률로 0건
                    }),
                    backgroundColor: '#4299e1',
                    barThickness: 12
                }]
            },
            options: getDefaultChartOptions()
        },
        9: { // 안전운용 - Bar
            type: 'bar',
            data: {
                labels: data.slice(0, 15).map(d => d.label),
                datasets: [{
                    label: '안전운용 사고',
                    data: data.slice(0, 15).map(() => {
                        const rand = Math.random();
                        if (rand > 0.92) return 2;  // 8% 확률로 2건
                        if (rand > 0.65) return 1;   // 27% 확률로 1건
                        return 0;                    // 65% 확률로 0건
                    }),
                    backgroundColor: '#4299e1',
                    barThickness: 12
                }]
            },
            options: getDefaultChartOptions()
        },
        10: { // AT/DT 기본 인프라 - Horizontal Bar
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
                        ticks: { callback: (value) => value + '%' }
                    },
                    y: {
                        display: true,
                        ticks: { font: { size: 10 } }
                    }
                }
            }
        }
    };

    return configs[chartNum];
}

// 기본 차트 옵션
function getDefaultChartOptions() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { display: false },
            x: { display: false }
        }
    };
}

// 차트 데이터 생성
function generateChartData(period) {
    const lengths = { day: 30, week: 12, month: 12 };
    const length = lengths[period] || 12;

    return Array.from({length}, (_, i) => ({
        label: period === 'day' ? `${i+1}일` : period === 'week' ? `${i+1}주` : `${i+1}월`,
        value: Math.random() * 100 + 50
    }));
}

// ===== 월별 데이터 입력 기능 =====

// 초기 샘플 데이터 생성
function initializeSampleData() {
    const stored = localStorage.getItem('kpi_monthly_data');
    if (stored) return; // 이미 데이터가 있으면 초기화하지 않음

    const sampleData = {
        'cat7': { // 보안
            1: 1, 2: 0, 3: 2, 4: 1, 5: 0, 6: 1
        },
        'cat8': { // SHE
            1: 0, 2: 1, 3: 0, 4: 0, 5: 1, 6: 2
        },
        'cat9': { // 안전운용
            1: 1, 2: 1, 3: 0, 4: 2, 5: 0, 6: 0
        },
        'cat10': { // AT/DT 기본 인프라 (%)
            1: 42, 2: 44, 3: 46, 4: 48, 5: 50, 6: 51
        }
    };

    localStorage.setItem('kpi_monthly_data', JSON.stringify(sampleData));
}

// localStorage에서 월별 데이터 로드
function loadMonthlyData(categoryId) {
    const stored = localStorage.getItem('kpi_monthly_data');
    if (!stored) return {};
    try {
        const allData = JSON.parse(stored);
        return allData[categoryId] || {};
    } catch (e) {
        return {};
    }
}

// localStorage에 월별 데이터 저장
function saveMonthlyData(categoryId, monthlyData) {
    let allData = {};
    const stored = localStorage.getItem('kpi_monthly_data');
    if (stored) {
        try {
            allData = JSON.parse(stored);
        } catch (e) {
            allData = {};
        }
    }
    allData[categoryId] = monthlyData;
    localStorage.setItem('kpi_monthly_data', JSON.stringify(allData));
}

// 월별 데이터 입력 모달 열기
function openMonthlyDataModal(cardId, title, categoryId) {
    const existingData = loadMonthlyData(categoryId);
    const currentYear = new Date().getFullYear();

    const modalHTML = `
        <div id="monthlyDataModal" class="modal-overlay active" style="z-index: 2000;">
            <div class="modal-content" style="max-width: 700px; max-height: 80vh; overflow-y: auto;">
                <div class="modal-header">
                    <h2>${title} - 월별 데이터 입력</h2>
                    <button class="close-btn" onclick="closeMonthlyDataModal()">×</button>
                </div>
                <div class="modal-body">
                    <p style="color: #666; margin-bottom: 20px; font-size: 14px;">
                        ${currentYear}년 월별 데이터를 입력하세요. 입력하지 않은 월은 자동으로 계산됩니다.
                    </p>
                    <div class="monthly-data-grid">
                        ${Array.from({length: 12}, (_, i) => {
                            const month = i + 1;
                            const value = existingData[month] !== undefined ? existingData[month] : '';
                            return `
                                <div class="month-input-group">
                                    <label>${month}월</label>
                                    <input type="number"
                                           id="month_${month}"
                                           value="${value}"
                                           placeholder="값 입력"
                                           step="0.01">
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-secondary" onclick="closeMonthlyDataModal()">취소</button>
                    <button class="btn-primary" onclick="saveMonthlyDataFromModal(${cardId}, '${categoryId}')">저장</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// 월별 데이터 모달 닫기
function closeMonthlyDataModal() {
    const modal = document.getElementById('monthlyDataModal');
    if (modal) {
        modal.remove();
    }
}

// 모달에서 데이터 저장
function saveMonthlyDataFromModal(cardId, categoryId) {
    const monthlyData = {};

    for (let month = 1; month <= 12; month++) {
        const input = document.getElementById(`month_${month}`);
        if (input && input.value !== '') {
            monthlyData[month] = parseFloat(input.value);
        }
    }

    saveMonthlyData(categoryId, monthlyData);
    closeMonthlyDataModal();

    // 차트 업데이트
    const currentPeriod = getCurrentPeriod(cardId);
    initChart(`chart${cardId}`, currentPeriod);

    // 성공 메시지
    showToast('월별 데이터가 저장되었습니다.');
}

// 현재 선택된 period 가져오기
function getCurrentPeriod(cardId) {
    const activeBtn = document.querySelector(`.period-btn[data-card="${cardId}"].active`);
    return activeBtn ? activeBtn.dataset.period : 'day';
}

// Toast 알림 표시
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #48bb78;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        font-size: 14px;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
