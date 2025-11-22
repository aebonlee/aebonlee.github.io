# 페이지별 구조 및 내용 상세

## 1. 홈페이지 (About)

### 파일 위치
`_pages/about.md`

### 페이지 구조
```markdown
---
permalink: /
title: "이애본의 학술 포트폴리오"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
```

### 주요 섹션
1. **인사말 및 소개**
   - 현재 직책 및 소속
   - 주요 연구 분야

2. **학술 여정**
   - 2024-현재: 서울벤처대학원대학교 박사과정
   - 2017-2019: 경기대학교 박사과정 수료
   - 2007-2012: 한국방송통신대학교 석사
   - 2001-2007: 한국방송통신대학교 학사

3. **연구 관심 분야**
   - 정보관리 시스템
   - AI 활용 및 응용
   - 웹개발 및 디자인
   - 직업교육학
   - RFID 기술

4. **학술 성과**
   - 주요 논문 3편
   - 정부 포상 4회
   - 장학금 및 수상

5. **전문 경력**
   - 교육 및 연구
   - 산업체 경력
   - 주요 프로젝트

---

## 2. 이력서 (CV)

### 파일 위치
- 페이지: `_pages/cv.md`
- 데이터: `_data/cv.json`

### JSON 데이터 구조
```json
{
  "basics": {
    "name": "이애본",
    "email": "aebon@kyonggi.ac.kr",
    "summary": "한국직업능력개발센터장...",
    "location": { "city": "서울", "countryCode": "KR" }
  },
  "work": [...],
  "education": [...],
  "awards": [...],
  "publications": [...],
  "skills": [...],
  "certificates": [...],
  "projects": [...]
}
```

### 표시 섹션
- **기본 정보**: 이름, 연락처, 요약
- **경력**: 한신대, 직업능력개발센터, 한국기술대
- **학력**: 박사과정 2개, 석사, 학사
- **수상**: 장관상 3회, 대상 1회
- **논문**: 3편 (JCCT, IJACT, 석사논문)
- **기술**: 프로그래밍, 데이터분석, 웹개발, AI/ML
- **자격증**: 직업능력개발훈련교사, 평생교육사, 한국어교원
- **프로젝트**: AHP 플랫폼, HRDTMS, RFID 시스템

---

## 3. 논문 (Publications)

### 디렉토리 구조
```
_publications/
├── 2025-03-31-social-intelligence-study.md
├── 2022-09-01-household-variables-impact.md
└── 2012-02-01-rfid-navigation-system.md
```

### 논문 파일 형식
```markdown
---
title: "논문 제목"
collection: publications
permalink: /publication/파일명
excerpt: '논문 요약'
date: YYYY-MM-DD
venue: '학술지명'
paperurl: 'PDF 링크'
citation: '인용 형식'
---

## 논문 정보
- 제목:
- 저자:
- 발표기관:
- 출판정보:

## 초록
논문 초록 내용...
```

### 논문 목록
1. **2025년**: 사회적 지능이 학업열의와 학업만족도에 미치는 영향
2. **2022년**: 가구변수가 미취학 자녀 사교육비 지출에 미치는 영향
3. **2012년**: RFID 기술을 이용한 시각장애인용 길 안내 시스템

---

## 4. 포트폴리오 (Portfolio)

### 디렉토리 구조
```
_portfolio/
├── ahp-platform.md
├── hrd-tms.md
└── web-projects.md
```

### 포트폴리오 파일 형식
```markdown
---
title: "프로젝트명"
excerpt: "프로젝트 요약<br/><img src='/images/portfolio/이미지.png'>"
collection: portfolio
date: YYYY-MM-DD
---

## 프로젝트 개요
프로젝트 설명...

## 주요 기능
- 기능 1
- 기능 2

## 기술 스택
- 프론트엔드:
- 백엔드:

## 성과
- 성과 1
- 성과 2

## 링크
- GitHub:
- Live Demo:
```

---

## 5. 강의 (Teaching)

### 디렉토리 구조
```
_teaching/
├── 2025-ai-basics.md
├── 2024-bigdata-analysis.md
└── 2024-web-programming.md
```

### 강의 파일 형식
```markdown
---
title: "과목명"
collection: teaching
type: "과정 종류"
permalink: /teaching/과목코드
venue: "대학명"
date: YYYY-MM-DD
location: "위치"
---

## 과목 개요
과목 설명...

## 주요 학습 내용
### 1부: 
### 2부:
### 3부:

## 교육 방법
- 이론 강의: %
- 실습: %

## 평가 방법
- 중간고사: %
- 기말고사: %
```

---

## 6. 발표 (Talks)

### 디렉토리 구조
```
_talks/
├── 2024-ai-conference.md
├── 2023-education-seminar.md
└── 2022-tbt-presentation.md
```

### 발표 파일 형식
```markdown
---
title: "발표 제목"
collection: talks
type: "Conference/Workshop/Seminar"
permalink: /talks/연도-이벤트명
venue: "장소"
date: YYYY-MM-DD
location: "도시, 국가"
---

## 발표 요약
발표 내용 요약...

## 주요 내용
- 포인트 1
- 포인트 2

## 자료
[슬라이드 다운로드](링크)
```

---

## 7. 블로그 (Blog Posts)

### 디렉토리 구조
```
_posts/
├── 2025-01-15-ai-education-trends.md
├── 2024-12-20-ahp-platform-development.md
└── YYYY-MM-DD-title.md
```

### 블로그 포스트 형식
```markdown
---
title: '포스트 제목'
date: YYYY-MM-DD
permalink: /posts/YYYY/MM/url-slug/
tags:
  - 태그1
  - 태그2
---

## 소제목
내용...

### 부제목
내용...
```

### 카테고리
- AI 교육
- 웹 개발
- 연구 노트
- 기술 트렌드

---

## 8. 자격증 (Qualification)

### 파일 위치
`_pages/qualification.md`

### 페이지 구조
```markdown
---
permalink: /qualification/
title: "자격증 및 수료증"
author_profile: true
---

## 국가자격증
- 직업능력개발훈련교사 2급 (16개 분야)
- 평생교육사 2급
- 한국어교원 2급

## 전문교육과정
- 중앙대학교 표준고위과정
- 연세대학교 TBT 고위과정
- 강남대학교 사회적경제리더과정

## 기술자격
- 정보처리기사
- 웹디자인기능사
```

---

## 레이아웃 템플릿

### single 레이아웃
- 일반 페이지
- 블로그 포스트
- 논문, 포트폴리오 항목

### archive 레이아웃
- 목록 페이지
- 카테고리, 태그 페이지

### cv-layout
- CV 페이지 전용
- JSON 데이터 렌더링

### talk 레이아웃
- 발표 페이지 전용
- 슬라이드 링크 포함

---

## 데이터 파일 구조

### navigation.yml
```yaml
main:
  - title: "메뉴명"
    url: /경로/
```

### authors.yml
```yaml
이애본:
  name: "이애본"
  bio: "설명"
  avatar: "이미지경로"
  links:
    - label: "이메일"
      icon: "fas fa-fw fa-envelope"
      url: "mailto:이메일"
```

### ui-text.yml
```yaml
ko: &DEFAULT_KO
  page: "페이지"
  pagination_previous: "이전"
  pagination_next: "다음"
```