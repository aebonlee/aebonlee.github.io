# 이애본 학술 포트폴리오 사이트 개발 문서

## 📋 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [사이트 구조](#사이트-구조)
3. [기술 스택](#기술-스택)
4. [페이지별 상세 정보](#페이지별-상세-정보)
5. [설정 파일](#설정-파일)
6. [배포 및 관리](#배포-및-관리)

---

## 🎯 프로젝트 개요

### 사이트 정보
- **URL**: https://aebonlee.github.io
- **목적**: 학술 연구 활동, 교육 경력, 프로젝트 포트폴리오 공개
- **대상**: 연구 협력자, 학생, 채용 담당자, 일반 방문자

### 주요 특징
- Jekyll 기반 정적 사이트 생성
- GitHub Pages 호스팅
- 반응형 디자인 (모바일/태블릿/데스크톱)
- SEO 최적화
- 다국어 지원 준비 (현재 한국어)

---

## 🏗️ 사이트 구조

```
aebonlee.github.io/
├── 홈 (About) - 프로필 및 소개
├── 이력서 (CV) - 상세 경력 정보
├── 논문 (Publications) - 학술 논문 목록
├── 프로젝트 (Portfolio) - 개발 프로젝트
├── 강의 (Teaching) - 교육 활동
├── 블로그 (Blog) - 기술 블로그
└── 자격증 (Qualification) - 자격 및 수료증
```

### 디렉토리 구조
```
aebonlee.github.io/
├── _config.yml          # Jekyll 설정
├── _data/              # 데이터 파일
│   ├── cv.json         # 이력서 데이터
│   ├── navigation.yml  # 네비게이션 메뉴
│   └── authors.yml     # 저자 정보
├── _includes/          # 재사용 컴포넌트
├── _layouts/           # 페이지 레이아웃
├── _pages/             # 정적 페이지
├── _posts/             # 블로그 포스트
├── _portfolio/         # 포트폴리오 항목
├── _publications/      # 논문 정보
├── _teaching/          # 강의 정보
├── _sass/              # SCSS 스타일
├── assets/             # CSS, JS, 이미지
├── images/             # 이미지 파일
└── Dev_md/             # 개발 문서
```

---

## 💻 기술 스택

### 프론트엔드
- **Jekyll 3.9.0**: 정적 사이트 생성기
- **Liquid**: 템플릿 엔진
- **SCSS/Sass**: CSS 전처리기
- **JavaScript**: 인터랙티브 기능
- **jQuery 3.7.1**: DOM 조작 및 이벤트 처리

### 빌드 도구
- **Ruby 2.7+**: Jekyll 실행 환경
- **Bundler**: Ruby 의존성 관리
- **npm**: JavaScript 패키지 관리
- **UglifyJS**: JavaScript 압축

### 호스팅 & 배포
- **GitHub Pages**: 정적 사이트 호스팅
- **Git**: 버전 관리
- **GitHub Actions**: CI/CD (선택적)

### SEO & 성능
- **Google Analytics**: 방문자 분석
- **Schema.org**: 구조화된 데이터
- **Open Graph**: 소셜 미디어 최적화
- **Sitemap.xml**: 검색 엔진 크롤링

---

## 📄 페이지별 상세 정보

### 1. 홈페이지 (About)
- **파일**: `_pages/about.md`
- **레이아웃**: `single`
- **주요 내용**:
  - 개인 소개
  - 학술 여정
  - 연구 관심 분야
  - 주요 성과
  - 연락처 정보

### 2. 이력서 (CV)
- **파일**: `_pages/cv.md`, `_data/cv.json`
- **레이아웃**: `cv-layout`
- **섹션**:
  - 교육 (Education)
  - 경력 (Work Experience)
  - 수상 (Awards)
  - 논문 (Publications)
  - 기술 (Skills)
  - 프로젝트 (Projects)

### 3. 논문 (Publications)
- **디렉토리**: `_publications/`
- **레이아웃**: `single`
- **논문 목록**:
  - 2025년: 사회적 지능 연구 (JCCT)
  - 2022년: 가구 변수 영향 분석 (IJACT)
  - 2012년: RFID 시각장애인 시스템 (석사논문)

### 4. 포트폴리오 (Portfolio)
- **디렉토리**: `_portfolio/`
- **레이아웃**: `single`
- **프로젝트**:
  - AHP 의사결정 지원 플랫폼
  - HRD TMS 시스템
  - 기타 웹/앱 개발 프로젝트

### 5. 강의 (Teaching)
- **디렉토리**: `_teaching/`
- **레이아웃**: `single`
- **과목**:
  - AI 기초와 활용
  - 빅데이터 분석
  - 웹 프로그래밍

### 6. 블로그 (Blog)
- **디렉토리**: `_posts/`
- **레이아웃**: `single`
- **카테고리**:
  - AI 교육
  - 웹 개발
  - 연구 노트

---

## ⚙️ 설정 파일

### _config.yml 주요 설정
```yaml
# 사이트 기본 정보
title: "이애본 / Academic Profile"
name: "이애본"
url: https://aebonlee.github.io
repository: "aebonlee/aebonlee.github.io"

# 저자 정보
author:
  name: "이애본"
  bio: "한국직업능력개발센터장"
  location: "Seoul, Korea"
  email: "aebon@kyonggi.ac.kr"
  github: "aebonlee"

# 시간대 및 언어
timezone: Asia/Seoul
locale: "en-US"

# 플러그인
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-paginate
```

### navigation.yml 메뉴 구성
```yaml
main:
  - title: "소개"
    url: /
  - title: "이력서"
    url: /cv/
  - title: "논문"
    url: /publications/
  - title: "프로젝트"
    url: /portfolio/
  - title: "강의"
    url: /teaching/
  - title: "블로그"
    url: /year-archive/
  - title: "자격증"
    url: /qualification/
```

---

## 🚀 배포 및 관리

### 로컬 개발 환경 설정
```bash
# Ruby 및 Jekyll 설치
gem install bundler jekyll

# 의존성 설치
bundle install
npm install

# 로컬 서버 실행
bundle exec jekyll serve --livereload
```

### GitHub Pages 배포
```bash
# 변경사항 커밋
git add .
git commit -m "Update: 사이트 내용 업데이트"

# GitHub에 푸시 (자동 배포)
git push origin master
```

### 빌드 명령어
```bash
# Jekyll 빌드
bundle exec jekyll build

# JavaScript 빌드
npm run build:js

# 전체 빌드
npm run build
```

---

## 📝 유지보수 가이드

### 콘텐츠 업데이트
1. **블로그 포스트 추가**: `_posts/YYYY-MM-DD-title.md`
2. **논문 추가**: `_publications/YYYY-MM-DD-title.md`
3. **포트폴리오 추가**: `_portfolio/project-name.md`

### 스타일 수정
- 메인 스타일: `assets/css/main.scss`
- 레이아웃별 스타일: `_sass/layout/`
- 반응형 스타일: `_sass/layout/_responsive.scss`

### 이미지 관리
- 프로필 이미지: `images/profile.png`
- 포트폴리오 이미지: `images/portfolio/`
- 블로그 이미지: `images/posts/`

---

## 🔗 관련 링크
- **사이트**: https://aebonlee.github.io
- **GitHub 저장소**: https://github.com/aebonlee/aebonlee.github.io
- **Jekyll 문서**: https://jekyllrb.com/docs/
- **Academic Pages 테마**: https://github.com/academicpages/academicpages.github.io

---

## 📞 문의
- **이메일**: aebon@kyonggi.ac.kr
- **GitHub**: @aebonlee

---

*최종 업데이트: 2025년 11월 22일*

## 📈 최근 업데이트 (2025.11.22)

### Year-Archive 페이지 개선
- **새로운 디자인**: 포트폴리오/티칭 페이지와 일관된 디자인 적용
- **통계 카드**: 총 게시물, 활동 연도, 연구논문 수 표시
- **카드 레이아웃**: 각 게시물을 카드 형태로 표시하여 가독성 향상
- **호버 효과**: 부드러운 애니메이션과 그림자 효과 추가
- **모바일 최적화**: 반응형 그리드 레이아웃 적용

### 스타일 개선
- CSS 변수 활용으로 테마 일관성 확보
- 그라데이션 배경과 현대적 카드 디자인
- Font Awesome 아이콘 적극 활용
- 빈 상태(empty state) UI 추가

### 개발 문서화
- `Dev_md` 폴더 구조화 및 문서 정리
- 페이지별 상세 구조 문서화
- 배포 워크플로우 가이드 추가