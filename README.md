# MNO Masterplan 통합 Dashboard

MNO(Mobile Network Operator) Masterplan의 핵심지표 및 O/I 과제를 관리하고 모니터링하는 통합 대시보드입니다.

## 주요 기능

### 1. Dashboard View (초기 화면)
- 10개 핵심지표 KPI 카드 시각화
- Chart.js 기반 실시간 차트 (일/주/월 단위)
- 지표별 상태 표시 (초록/노랑/빨강)
- 월별 데이터 수기 입력 기능 (7~10번 지표)

### 2. Task View (과제 View)
- 3열 레이아웃: 핵심지표 > 대분류 > 소분류
- 68개 세부 O/I 과제 관리
- 조직별 필터링 (7개 조직)
- 과제별 달성률 및 실적 모니터링

### 3. 관리자 페이지
- 계층 구조 데이터 관리 (핵심지표 > 대분류 > 소분류)
- CRUD 기능 (생성, 조회, 수정, 삭제)
- 소분류 과제의 복수 대분류 선택 기능
- 원천 시스템 연동 (불러오기 기능)
- 드래그 앤 드롭으로 순서 변경
- 데이터 백업 및 복원

## 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Charts**: Chart.js v4.4.1
- **Storage**: localStorage (브라우저 로컬 저장소)
- **Hosting**: Github Pages 호환

## 파일 구조

```
mno_dashboard/
├── index.html              # 메인 페이지 (Dashboard + Task View)
├── admin.html              # 관리자 페이지
├── detail.html             # 과제 상세 페이지
├── styles.css              # 메인 스타일
├── admin-styles.css        # 관리자 페이지 스타일
├── script.js               # 메인 로직
├── admin-script.js         # 관리자 페이지 로직
├── detail-script.js        # 상세 페이지 로직
├── data-manager.js         # 데이터 관리 모듈
├── initial-data.js         # 초기 데이터 (68개 과제)
└── README.md               # 이 파일
```

## 로컬 실행 방법

### 방법 1: 직접 파일 열기
1. `index.html` 파일을 더블클릭하여 브라우저에서 엽니다

### 방법 2: 로컬 서버 실행 (권장)
```bash
# Python 3 사용
python3 -m http.server 8000

# 또는 Python 2 사용
python -m SimpleHTTPServer 8000

# 또는 Node.js 사용
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

## Github Pages 배포 방법

### 1. Github Repository 생성
```bash
git init
git add .
git commit -m "Initial commit: MNO Dashboard"
git branch -M main
git remote add origin https://github.com/your-username/mno-dashboard.git
git push -u origin main
```

### 2. Github Pages 활성화
1. Github Repository 페이지로 이동
2. **Settings** > **Pages** 메뉴 선택
3. **Source**: `Deploy from a branch` 선택
4. **Branch**: `main` 선택, 폴더는 `/ (root)` 선택
5. **Save** 클릭

### 3. 배포 URL 확인
- 약 1-2분 후 `https://your-username.github.io/mno-dashboard/` 에서 접속 가능

### 4. 커스텀 도메인 (선택사항)
- **Settings** > **Pages** > **Custom domain**에서 설정 가능

## 데이터 관리

### 초기 데이터
- `initial-data.js` 파일에 68개 과제의 초기 데이터가 포함되어 있습니다
- 첫 방문 시 자동으로 localStorage에 저장됩니다

### 데이터 저장 방식
- 브라우저의 localStorage를 사용하여 데이터를 저장합니다
- 도메인별로 독립적으로 관리됩니다
- 관리자 페이지에서 수정한 내용은 즉시 저장됩니다

### 데이터 초기화
브라우저 개발자 도구 (F12) > Console에서:
```javascript
localStorage.clear();
location.reload();
```

### 데이터 백업
관리자 페이지 > **백업 관리** 버튼 클릭
- 최근 5개 자동 백업 확인 및 복원 가능

## 사용 가이드

### Dashboard 화면
1. 초기 화면에서 10개 핵심지표 확인
2. 각 KPI 카드 클릭 시 해당 지표의 과제 목록으로 이동
3. 7~10번 지표는 편집 버튼(✎)으로 월별 데이터 수기 입력 가능

### Task View 화면
1. 핵심지표 선택 → 대분류 선택 → 소분류 과제 확인
2. **조직 View** 버튼으로 조직별 필터링
3. 과제 클릭 시 상세 페이지 (새 탭)

### 관리자 페이지
1. **관리자** 버튼 클릭 (우측 상단)
2. 트리 구조로 전체 데이터 확인
3. 각 항목의 **편집** 버튼으로 수정
4. 소분류 과제는 복수 대분류 선택 가능
5. **불러오기** 버튼으로 원천 시스템 연동 (시뮬레이션)
6. 드래그로 순서 변경

## 브라우저 호환성

- Chrome/Edge (권장)
- Firefox
- Safari
- Opera

**최소 요구사항**: HTML5, ES6, localStorage 지원

## 주의사항

### localStorage 용량
- 브라우저별 localStorage 제한: 약 5-10MB
- 현재 데이터 크기: 약 40KB (여유 충분)

### 브라우저 캐시
- 코드 업데이트 후 브라우저 캐시를 지워야 할 수 있습니다
- Ctrl+Shift+R (Windows) 또는 Cmd+Shift+R (Mac)으로 강제 새로고침

### 데이터 동기화
- localStorage는 로컬 저장소이므로 다른 기기 간 동기화되지 않습니다
- 백엔드 API 연동 시 실시간 동기화 가능 (향후 확장)

## 라이선스

이 프로젝트는 내부 사용을 위한 것입니다.

## 문의

프로젝트 관련 문의사항은 담당자에게 연락해주세요.
