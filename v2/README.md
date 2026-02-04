# MNO Dashboard v2

이 디렉토리는 Back-office Admin 기능과 새로운 Dashboard UI가 추가된 v2 버전입니다.

## 버전 정보
- **생성일**: 2026-02-03
- **버전**: v2 (Admin + 새 Dashboard)
- **상태**: 개발 완료

## 포함된 파일

### 메인 Dashboard
- `index.html` - 기존 Dashboard (3열 레이아웃, 조직 View)
- `index-new.html` - 새 Dashboard (초기화면.png 기반, Chart.js 사용)
- `styles.css` - 기존 Dashboard 스타일
- `styles-new.css` - 새 Dashboard 스타일
- `script.js` - 기존 Dashboard 로직
- `dashboard-charts.js` - 새 Dashboard 차트 로직

### Admin Back-office
- `admin.html` - 관리자 페이지
- `admin-styles.css` - 관리자 스타일
- `admin-script.js` - 관리자 로직 (CRUD, 드래그&드롭, 이동/복사)
- `data-manager.js` - 데이터 관리 모듈 (localStorage)

### 상세 페이지
- `detail.html` - 과제 상세 페이지
- `detail-styles.css` - 상세 페이지 스타일
- `detail-script.js` - 상세 페이지 로직

### 유틸리티
- `load-initial-data.html` - v1 데이터 로드 유틸리티

### 기타
- `프롬프트.ini` - 프롬프트 기록
- `초기화면.png` - Dashboard 디자인 참고 이미지

## 주요 기능

### Admin Back-office (v2 신규)
1. **계층 구조 관리**
   - 핵심지표(Category) - 대분류(Subcategory) - 소분류(Task) 3단계
   - 통합 트리 뷰 (전체 펼치기/접기 토글)
   - 드래그&드롭으로 순서 변경

2. **CRUD 기능**
   - 생성: 각 레벨별 추가 기능
   - 편집: 모달 폼으로 편집 (편집 모달에 삭제 버튼 포함)
   - 이동/복사: Task를 다른 중분류로 이동/복사 (트리 선택 UI)

3. **데이터 관리**
   - localStorage 기반 저장
   - 자동 백업 (최근 5개)
   - 백업 관리 (복원 기능)

### Dashboard
1. **기존 Dashboard (index.html)**
   - 10개 핵심지표 카드 그리드 뷰
   - 3열 레이아웃 뷰 (핵심지표-대분류-과제)
   - 조직 View (7개 조직별 필터링)

2. **새 Dashboard (index-new.html)**
   - Chart.js 기반 10개 KPI 카드
   - 다양한 차트 유형 (Bar, Line, Multi-line, Horizontal Bar)
   - 일/주/월 기간 선택 기능
   - 과제 상태 표시 (초록/노랑/빨강)

## 실행 방법

### 1. 기존 Dashboard
```bash
open index.html
```

### 2. 새 Dashboard
```bash
open index-new.html
```

### 3. Admin 페이지
```bash
open admin.html
```

### 4. 초기 데이터 로드
```bash
open load-initial-data.html
```

## 특징

### v1 대비 개선사항
- ✅ 관리자 페이지 추가 (CRUD, 백업, 이동/복사)
- ✅ localStorage 기반 데이터 관리
- ✅ 드래그&드롭 순서 변경
- ✅ 새로운 Dashboard UI (Chart.js)
- ✅ 일/주/월 기간 선택 기능

### 데이터 구조
```javascript
{
  version: "1.0.0",
  lastModified: "ISO Date",
  categories: [
    {
      id: "cat1",
      type: "core" | "basic",
      title: "...",
      metrics: { current, unit, target, achievement },
      subcategories: [
        {
          id: "sub1-1",
          title: "...",
          tasks: [
            {
              id: "task1-1-1",
              title: "...",
              overview: "...",
              organization: "...",
              metrics: { ... }
            }
          ]
        }
      ]
    }
  ],
  taskDetails: { ... }
}
```

## 브라우저 호환성
- Chrome, Firefox, Safari, Edge (최신 버전)

## 개발 히스토리

### Phase 1: 기반 구조
- data-manager.js 생성
- localStorage 읽기/쓰기 구현

### Phase 2: Admin UI
- admin.html 레이아웃 구현
- 통합 트리 뷰 생성

### Phase 3: CRUD 기능
- Category, Subcategory, Task CRUD 구현
- 유효성 검증

### Phase 4: 고급 기능
- 드래그&드롭 순서 변경
- Task 이동/복사 기능
- 삭제 버튼을 편집 모달로 이동

### Phase 5: 새 Dashboard
- Chart.js 기반 Dashboard 구현
- 일/주/월 기간 선택 기능

## 다음 버전 계획 (v3)

### 백엔드 전환 (선택)
- Node.js + Express API
- MongoDB/PostgreSQL
- JWT 인증
- WebSocket 실시간 동기화

### 추가 기능
- 검색/필터 기능
- 벌크 작업 (다중 선택)
- 작업 히스토리 (Audit log)
- 엑셀 Import/Export

---

**참고**: 이 버전은 독립적으로 실행되며, v1 디렉토리의 파일들과 상호작용하지 않습니다.
