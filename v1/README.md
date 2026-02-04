# MNO Dashboard v1 (원본 버전)

이 디렉토리는 Back-office Admin 기능이 추가되기 전의 원본 MNO Dashboard입니다.

## 포함된 파일

- `index.html` - 메인 대시보드 페이지
- `detail.html` - 과제 상세 페이지
- `styles.css` - 메인 대시보드 스타일
- `detail-styles.css` - 상세 페이지 스타일
- `script.js` - 메인 대시보드 로직
- `detail-script.js` - 상세 페이지 로직

## 실행 방법

1. 브라우저에서 `index.html` 파일을 엽니다.
2. 핵심지표 또는 기본기 지표 카드를 클릭하여 3열 뷰로 이동합니다.
3. 조직 View 버튼으로 조직별 필터링이 가능합니다.
4. 과제 카드를 클릭하면 상세 페이지(`detail.html`)가 새 탭에서 열립니다.

## 특징

- **순수 HTML/CSS/JavaScript** - 프레임워크 없음
- **정적 데이터** - `script.js`와 `detail-script.js`에 데이터 내장
- **localStorage 없음** - 데이터 편집 기능 없음
- **읽기 전용** - 데이터 조회 및 필터링만 가능

## 루트 디렉토리와의 차이

루트 디렉토리(`../`)에는 Back-office Admin 기능이 추가된 최신 버전이 있습니다:
- 관리자 페이지 (`admin.html`)
- 데이터 관리 모듈 (`data-manager.js`)
- localStorage 기반 데이터 저장
- CRUD 기능

## 버전 정보

- **생성일**: 2026-01-28
- **목적**: Back-office 추가 전 원본 버전 보존
- **상태**: 읽기 전용, 정적 데이터

---

**참고**: 이 버전은 독립적으로 실행되며, 루트 디렉토리의 파일들과 상호작용하지 않습니다.
