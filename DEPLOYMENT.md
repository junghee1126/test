# 배포 가이드

## Github Pages 배포 (추천)

### 1단계: Git 초기화 및 커밋

```bash
# Git 저장소 초기화 (아직 안했다면)
git init

# 파일 추가
git add .

# 커밋
git commit -m "Initial commit: MNO Dashboard"

# 기본 브랜치를 main으로 변경
git branch -M main
```

### 2단계: Github Repository 생성 및 푸시

1. Github (https://github.com) 에 로그인
2. 우측 상단 '+' 버튼 > 'New repository' 클릭
3. Repository 이름 입력 (예: `mno-dashboard`)
4. Public 또는 Private 선택
5. **아무것도 추가하지 말고** 'Create repository' 클릭

```bash
# Remote 추가 (your-username을 본인 Github 계정으로 변경)
git remote add origin https://github.com/your-username/mno-dashboard.git

# 푸시
git push -u origin main
```

### 3단계: Github Pages 활성화

1. Repository 페이지에서 **Settings** 탭 클릭
2. 좌측 메뉴에서 **Pages** 클릭
3. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. **Save** 버튼 클릭
5. 약 1-2분 대기 후 상단에 배포 URL 표시됨

### 4단계: 접속 확인

- URL: `https://your-username.github.io/mno-dashboard/`
- 또는 Settings > Pages에서 확인 가능한 URL

---

## 다른 호스팅 서비스

### Netlify

1. Netlify (https://netlify.com) 가입
2. 'New site from Git' 클릭
3. Github 연동 후 Repository 선택
4. Build settings:
   - Build command: (비워둠)
   - Publish directory: `/`
5. 'Deploy site' 클릭

배포 URL: `https://random-name.netlify.app`

### Vercel

1. Vercel (https://vercel.com) 가입
2. 'New Project' 클릭
3. Github Repository 선택
4. Framework Preset: `Other` 선택
5. 'Deploy' 클릭

배포 URL: `https://mno-dashboard.vercel.app`

### Cloudflare Pages

1. Cloudflare Pages (https://pages.cloudflare.com) 접속
2. 'Create a project' 클릭
3. Github 연동 후 Repository 선택
4. Build settings:
   - Build command: (비워둠)
   - Build output directory: `/`
5. 'Save and Deploy' 클릭

배포 URL: `https://mno-dashboard.pages.dev`

---

## 코드 업데이트 후 재배포

### Github Pages

```bash
# 변경사항 커밋
git add .
git commit -m "Update: 설명"
git push

# 자동으로 재배포됨 (1-2분 소요)
```

### Netlify / Vercel / Cloudflare Pages

```bash
# 변경사항 푸시만 하면 자동 배포
git add .
git commit -m "Update: 설명"
git push
```

---

## 커스텀 도메인 설정

### Github Pages

1. Settings > Pages > Custom domain
2. 도메인 입력 (예: `dashboard.yourcompany.com`)
3. DNS 설정:
   - Type: CNAME
   - Name: dashboard (또는 원하는 서브도메인)
   - Value: your-username.github.io

### Netlify

1. Site settings > Domain management
2. 'Add custom domain' 클릭
3. 도메인 입력 및 DNS 설정 안내 따라하기

### Vercel

1. Project Settings > Domains
2. 'Add' 버튼 클릭
3. 도메인 입력 및 DNS 설정 안내 따라하기

---

## HTTPS 설정

모든 호스팅 서비스는 **무료 HTTPS**를 자동으로 제공합니다.
- Github Pages: Let's Encrypt
- Netlify: Let's Encrypt
- Vercel: Let's Encrypt
- Cloudflare Pages: Cloudflare SSL

커스텀 도메인 설정 후 자동으로 HTTPS 인증서가 발급됩니다.

---

## 문제 해결

### localStorage가 작동하지 않는 경우

- 브라우저의 쿠키/사이트 데이터 허용 확인
- 시크릿/프라이빗 모드에서는 localStorage가 제한될 수 있음

### 404 에러가 발생하는 경우

- Github Pages: Settings > Pages에서 배포 상태 확인
- URL이 정확한지 확인 (대소문자 구분)

### 페이지가 업데이트되지 않는 경우

1. 브라우저 캐시 강제 새로고침:
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R
2. localStorage 초기화:
   ```javascript
   localStorage.clear();
   location.reload();
   ```

### CORS 에러가 발생하는 경우

- 모든 파일이 같은 도메인에서 서빙되므로 CORS 문제 없음
- 로컬에서 `file://` 프로토콜로 열면 CORS 에러 발생 가능
- 해결: 로컬 서버 사용 (python -m http.server)

---

## 성능 최적화 (선택사항)

### 1. 이미지 최적화
현재 이미지가 없으므로 해당 없음

### 2. 압축 활성화
대부분의 호스팅 서비스는 자동으로 gzip 압축 제공

### 3. CDN 캐싱
Netlify, Vercel, Cloudflare는 자동으로 CDN 제공

### 4. lighthouse 점수 확인
```bash
# Chrome DevTools > Lighthouse 탭
# "Generate report" 클릭
```

---

## 백업 권장사항

1. **정기적인 Git 커밋**
   - 중요한 변경사항마다 커밋

2. **데이터 백업**
   - 관리자 페이지 > 백업 관리 > Export
   - JSON 파일을 안전한 곳에 보관

3. **브라우저 localStorage 백업**
   ```javascript
   // Console에서 실행
   const backup = localStorage.getItem('mno_dashboard_data');
   console.log(backup); // 복사하여 저장
   ```

---

## 지원

- 배포 문제: 각 호스팅 서비스의 공식 문서 참조
- 코드 문제: 개발 담당자에게 문의
