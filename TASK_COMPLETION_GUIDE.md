# Task Detail Page Completion Guide

## Current Status
✅ **15 out of 68 tasks completed** (22%)
- Category 1: 14/14 tasks ✅ COMPLETE
- Category 2: 1/13 tasks (7%)
- Remaining categories: 0/41 tasks

## How to Complete Remaining Tasks

### Step 1: Locate the Task Data
All task information is in `script.js` under `dashboardData.categories[]`.

Each task has:
- `id`: Task identifier (e.g., 'task2-1-2')
- `title`: Task name
- `overview`: Task description
- `metrics`: { current, unit, target, achievement }

### Step 2: Add to detail-script.js

Open `/Users/1108541/Documents/Work/mno_dashboard/detail-script.js` and add new tasks to the `taskDetailsData` object.

#### Template for Each Task:

```javascript
'task-id-here': {
    title: 'Task title from script.js',
    category: 'Actual category name (e.g., "핵심 seg. MNP 순증", "LTV", "마케팅 효율", etc.)',
    subcategory: 'Subcategory title from script.js',
    task: 'Overview text from script.js (exact copy)',
    target: 'Write a definition of what this indicator measures. Include:
             - What is being measured
             - How it is calculated
             - What the target value means
             - Context about why this metric matters',
    milestone: {
        monthly: {
            target: [
                // 12 values, one for each month
                // Progressive growth from ~70% to 100% of annual target
                // Use same unit as in metrics (e.g., '명', '%', '점', '₩')
                'value1', 'value2', ..., 'value12'
            ],
            actual: [
                // 6 actual values (Jan-Jun), then 6 dashes
                'actual1', 'actual2', 'actual3', 'actual4', 'actual5', 'actual6',
                '-', '-', '-', '-', '-', '-'
            ]
        },
        roadmap: [
            {
                quarter: 'Q1',
                activities: 'Q1 specific activities (planning, analysis, initial execution)',
                goal: 'Q1 goal with specific target (e.g., "달성률 70% 목표")'
            },
            {
                quarter: 'Q2',
                activities: 'Q2 specific activities (main execution, refinement)',
                goal: 'Q2 goal with specific target (e.g., "달성률 80% 목표")'
            },
            {
                quarter: 'Q3',
                activities: 'Q3 specific activities (acceleration, optimization)',
                goal: 'Q3 goal with specific target (e.g., "달성률 90% 목표")'
            },
            {
                quarter: 'Q4',
                activities: 'Q4 specific activities (completion, evaluation)',
                goal: 'Q4 goal with specific target (e.g., "연간 목표 100% 달성")'
            }
        ]
    }
},
```

### Step 3: Generate Monthly Data

For the monthly targets and actuals:

1. **Targets**: Create 12 progressive values
   - Month 1: ~70% of annual target
   - Month 6: ~85% of annual target
   - Month 12: 100% of annual target
   - Fill in intermediate months with smooth progression

2. **Actuals**: Create 6 values (Jan-Jun only)
   - Generally 85-95% of monthly target
   - Show realistic performance (some months above, some below target)
   - Use '-' for months 7-12

Example for target of 90:
```javascript
target: ['65', '68', '71', '74', '77', '80', '83', '85', '87', '89', '90', '90']
actual: ['62', '69', '73', '76', '79', '82', '-', '-', '-', '-', '-', '-']
```

### Step 4: Category Names Reference

Use these actual category names in the `category` field:
- **핵심지표 1** → `'핵심 seg. MNP 순증'`
- **핵심지표 2** → `'LTV'`
- **핵심지표 3** → `'마케팅 효율'`
- **핵심지표 4** → `'인당 네트워크 운영 비용'`
- **핵심지표 5** → `'체감 품질 기준 만족률'`
- **핵심지표 6** → `'직원당 생산성'`
- **기본기 지표 1** → `'보안'`
- **기본기 지표 2** → `'SHE'`
- **기본기 지표 3** → `'안정운용'`
- **기본기 지표 4** → `'AT/DT'`

### Step 5: Quick Reference - Remaining Tasks

#### Category 2 (LTV) - 12 tasks remaining:
- task2-1-2, task2-1-3
- task2-2-1, task2-2-2
- task2-3-1, task2-3-2, task2-3-3, task2-3-4, task2-3-5
- task2-4-1, task2-4-2, task2-4-3

#### Category 3 (마케팅 효율) - 10 tasks:
- task3-1-1, task3-1-2
- task3-2-1
- task3-3-1
- task3-4-1, task3-4-2
- task3-5-1, task3-5-2, task3-5-3

#### Category 4 (인당 네트워크 운영 비용) - 8 tasks:
- task4-1-1
- task4-2-1, task4-2-2
- task4-3-1, task4-3-2
- task4-4-1
- task4-5-1, task4-5-2

#### Category 5 (체감 품질 기준 만족률) - 2 tasks:
- task5-1-1, task5-1-2

#### Category 6 (직원당 생산성) - 3 tasks:
- task6-1-1, task6-1-2
- task6-2-1

#### Category 7 (보안) - 7 tasks:
- task7-1-1, task7-1-2, task7-1-3, task7-1-4
- task7-2-1
- task7-3-1, task7-3-2

#### Category 8 (SHE) - 3 tasks:
- task8-1-1, task8-1-2, task8-1-3

#### Category 9 (안정운용) - 8 tasks:
- task9-1-1, task9-1-2
- task9-2-1, task9-2-2
- task9-3-1, task9-3-2, task9-3-3

#### Category 10 (AT/DT) - 2 tasks:
- task10-1-1, task10-2-1

### Step 6: Testing

After adding tasks:
1. Open `index.html` in browser
2. Navigate to the category
3. Click on a task card
4. Verify the detail page opens with correct data
5. Check all three sections: Task, Target, Milestone

### Tips

- Copy the structure from completed tasks (task1-1-1 through task1-4-3)
- Use the correct category name from Step 4 (e.g., 'LTV' not '핵심지표 2')
- Use consistent language and tone
- Make quarterly activities specific to the task
- Ensure monthly values show realistic progression
- Keep target definitions clear and measurable
