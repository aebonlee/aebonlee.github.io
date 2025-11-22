# 홈페이지 (Home/About) 구조 및 내용

## 페이지 정보
- **URL**: https://aebonlee.github.io/
- **파일 경로**: `_pages/about.md`
- **레이아웃**: `single`
- **permalink**: `/`

## 페이지 구성

### 1. 헤더 섹션
```yaml
layout: single
classes: wide
permalink: /
title: "이애본"
excerpt: "한국직업능력개발센터 센터장 | 한신대학교 시간강사"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
```

### 2. 프로필 사이드바 (author_profile)
- **프로필 이미지**: 200x200px 원형
- **이름**: 이애본 (Lee Ae-bon)
- **직책**: 
  - 한국직업능력개발센터 센터장
  - 한신대학교 시간강사
- **위치**: Seoul, Korea
- **이메일**: aebon@kyonggi.ac.kr
- **소셜 링크**:
  - GitHub
  - LinkedIn
  - Google Scholar
  - ORCID
  - ResearchGate

### 3. 메인 콘텐츠 구조

#### 3.1 인사말 (Introduction)
```markdown
안녕하세요! 저는 **한국직업능력개발센터**의 센터장이자 
**한신대학교** 시간강사로 활동하고 있는 이애본입니다.
```

#### 3.2 연구 분야 (Research Interests)
- **HRD(인적자원개발)**
  - 직업훈련 프로그램 개발
  - 교육과정 설계 및 평가
  - 성인학습자 지원 시스템

- **AI/머신러닝 교육**
  - 생성형 AI 활용 교육
  - 프롬프트 엔지니어링
  - AI 리터러시 교육

- **빅데이터 분석**
  - 교육 데이터 마이닝
  - 학습 분석(Learning Analytics)
  - 예측 모델링

- **웹/앱 개발**
  - 교육 플랫폼 개발
  - LMS(학습관리시스템) 구축
  - 반응형 웹 디자인

#### 3.3 현재 활동 (Current Activities)
```markdown
## 현재 진행 중인 프로젝트

### AHP 의사결정 지원 플랫폼
React와 Django 기반의 계층적 분석 프로세스 웹 애플리케이션 개발

### HRD 비대면 교육 시스템
직업훈련기관을 위한 통합 학습관리시스템 구축 및 운영

### AI 교육 커리큘럼 개발
대학생 및 직장인을 위한 AI 기초 교육과정 설계
```

#### 3.4 학술 여정 (Academic Journey)
```markdown
## 학술 여정

2025년 박사과정 진행 중
- 경기대학교 직업학과
- 연구주제: 사회적 지능과 학습 성과

2012년 석사 (공학석사)
- 경기대학교 전자계산학과
- 논문: RFID를 이용한 시각장애인 길안내 시스템

2005년 학사 (이학사)
- 경기대학교 전자계산학과
```

#### 3.5 주요 성과 (Key Achievements)
- **논문 게재**: 3편 (KCI 등재지)
- **프로젝트**: 10+ 웹/앱 개발 프로젝트 완료
- **강의 경력**: 5년+ (대학 및 직업훈련기관)
- **자격증**: 15+ IT 및 교육 관련 자격증 보유

#### 3.6 최근 소식 (Recent News)
```markdown
## 최근 소식

**2025.01** - 생성형 AI 활용 교육 혁신 블로그 포스트 게재
**2024.12** - AHP 플랫폼 개발 완료 및 배포
**2024.09** - 한신대학교 AI 기초와 활용 강의 시작
**2024.03** - 한국직업능력개발센터 센터장 취임
```

#### 3.7 연락처 (Contact)
```markdown
## 연락처

📧 이메일: aebon@kyonggi.ac.kr
🏢 사무실: 한국직업능력개발센터
📍 위치: 서울특별시
💼 LinkedIn: [프로필 바로가기]
```

### 4. 페이지 스타일링

#### CSS 클래스
```scss
.author__avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.page__content {
  h2 {
    border-bottom: 2px solid $primary-color;
    padding-bottom: 0.5em;
    margin-top: 2em;
  }
  
  .research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
}
```

### 5. 반응형 디자인
- **Desktop (1024px+)**: 사이드바 + 메인 콘텐츠
- **Tablet (768-1023px)**: 상단 프로필 + 전체 폭 콘텐츠
- **Mobile (<768px)**: 스택형 레이아웃

### 6. SEO 최적화
```html
<meta name="description" content="이애본 - 한국직업능력개발센터 센터장, 한신대학교 시간강사. HRD, AI 교육, 빅데이터 분석 전문가">
<meta name="keywords" content="이애본, Lee Ae-bon, HRD, AI 교육, 빅데이터, 웹개발">
```

### 7. 구조화된 데이터 (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "이애본",
  "alternateName": "Lee Ae-bon",
  "jobTitle": "센터장",
  "worksFor": {
    "@type": "Organization",
    "name": "한국직업능력개발센터"
  },
  "alumniOf": "경기대학교",
  "email": "aebon@kyonggi.ac.kr",
  "sameAs": [
    "https://github.com/aebonlee",
    "https://orcid.org/0000-0001-5655-1623"
  ]
}
```

## 개선 사항 및 TODO
- [ ] 프로필 이미지 최적화 (WebP 포맷)
- [ ] 애니메이션 효과 추가
- [ ] 다크모드 최적화
- [ ] 타임라인 형식의 경력 표시
- [ ] 실시간 GitHub 활동 피드
- [ ] 방문자 카운터 추가