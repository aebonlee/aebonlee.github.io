# 이력서 (CV) 페이지 구조 및 내용

## 페이지 정보
- **URL**: https://aebonlee.github.io/cv/
- **파일 경로**: `_pages/cv.md`
- **데이터 파일**: `_data/cv.json`
- **레이아웃**: `cv-layout` 또는 `single`
- **permalink**: `/cv/`

## 페이지 구성

### 1. 헤더 정보
```yaml
layout: single
classes: wide
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
toc: true
toc_label: "목차"
toc_icon: "file-alt"
```

### 2. 개인 정보 섹션
```markdown
## 이애본 (Lee Ae-bon)

**한국직업능력개발센터 센터장**  
**한신대학교 시간강사**

📧 aebon@kyonggi.ac.kr  
📱 010-XXXX-XXXX  
📍 서울특별시  
🔗 [GitHub](https://github.com/aebonlee) | [ORCID](https://orcid.org/0000-0001-5655-1623)
```

### 3. 교육 (Education)

#### 구조
```markdown
## 교육

### 박사과정 (Ph.D. Candidate)
**경기대학교** | 직업학과  
*2025.03 - 현재*  
- 연구 분야: 사회적 지능과 학습 성과의 관계
- 지도교수: XXX 교수

### 공학석사 (M.S. in Computer Science)
**경기대학교** | 전자계산학과  
*2010.03 - 2012.02*  
- 논문: RFID를 이용한 시각장애인을 위한 보행자 길안내 시스템에 관한 연구
- 지도교수: XXX 교수
- GPA: X.X/4.5

### 이학사 (B.S. in Computer Science)
**경기대학교** | 전자계산학과  
*2001.03 - 2005.02*  
- 졸업 논문: 웹 기반 학습관리시스템 설계 및 구현
- GPA: X.X/4.5
```

### 4. 경력 (Work Experience)

```markdown
## 경력

### 한국직업능력개발센터
**센터장** | *2024.03 - 현재*
- 직업훈련 프로그램 기획 및 운영
- HRD 컨설팅 및 교육과정 개발
- 비대면 교육 시스템 구축 및 관리
- 15개 협력기관 네트워크 관리

### 한신대학교
**시간강사** | *2024.09 - 현재*
- 담당 과목: AI 기초와 활용, 빅데이터 분석
- 수강생: 학기당 평균 120명
- 강의 평가: 4.5/5.0

### 프리랜서 개발자
**웹/앱 개발** | *2015.01 - 2024.02*
- 10개 이상의 웹 애플리케이션 개발
- React, Django, Node.js 풀스택 개발
- 고객사: 중소기업, 스타트업, 교육기관
```

### 5. 기술 스택 (Technical Skills)

```markdown
## 기술 스택

### 프로그래밍 언어
- **Expert**: Python, JavaScript, TypeScript
- **Proficient**: Java, C#, SQL
- **Familiar**: C++, Go, Rust

### 웹 개발
- **Frontend**: React, Vue.js, Angular, HTML5/CSS3/SCSS
- **Backend**: Django, Node.js, Express, FastAPI
- **Database**: PostgreSQL, MySQL, MongoDB, Redis
- **DevOps**: Docker, AWS, GitHub Actions, CI/CD

### 데이터 분석 & AI
- **분석 도구**: Pandas, NumPy, Scikit-learn
- **시각화**: Matplotlib, Seaborn, D3.js
- **AI/ML**: TensorFlow, PyTorch, Hugging Face
- **빅데이터**: Spark, Hadoop, Elasticsearch

### 교육 & 연구
- **LMS**: Moodle, Canvas, 자체 개발 시스템
- **통계 분석**: SPSS, R, SAS
- **연구 도구**: LaTeX, Mendeley, Zotero
```

### 6. 논문 (Publications)

```markdown
## 논문

1. **이애본** (2025). "사회적 지능이 학습 성과에 미치는 영향: 
   대학생을 중심으로." *융복합지식학회논문지 (JCCT)*, 11(3).

2. **이애본** (2022). "가구 구성원의 변수가 가계소득에 미치는 영향 분석." 
   *국제융합학회논문지 (IJACT)*, 13(9), 261-268.

3. **이애본** (2012). "RFID를 이용한 시각장애인을 위한 보행자 
   길안내 시스템에 관한 연구." 경기대학교 석사학위논문.
```

### 7. 프로젝트 (Selected Projects)

```markdown
## 주요 프로젝트

### AHP 의사결정 지원 플랫폼 (2024)
- **기술**: React, TypeScript, Django, PostgreSQL
- **역할**: 풀스택 개발, 프로젝트 관리
- **성과**: 10개 기관 도입, 의사결정 시간 40% 단축
- [GitHub](링크) | [Demo](링크)

### HRD 학습관리시스템 (2023)
- **기술**: Vue.js, Node.js, MongoDB, WebRTC
- **역할**: 시스템 설계, 백엔드 개발
- **성과**: 5,000명+ 사용자, 만족도 4.3/5.0

### 빅데이터 분석 대시보드 (2022)
- **기술**: Python, Dash, Plotly, PostgreSQL
- **역할**: 데이터 파이프라인 구축, 시각화
- **성과**: 실시간 데이터 처리, 의사결정 지원
```

### 8. 자격증 (Certifications)

```markdown
## 자격증

### IT 기술
- 정보처리기사 (2005)
- 리눅스마스터 2급 (2006)
- OCJP (Oracle Certified Java Programmer)
- AWS Solutions Architect Associate

### 교육 관련
- 평생교육사 2급
- 직업훈련교사 3급 (정보기술)
- 이러닝지도사
- CS강사 (Coding Specialist)

### 데이터 분석
- 데이터분석준전문가 (ADsP)
- SQL 개발자 (SQLD)
- 빅데이터분석기사 (준비중)
```

### 9. 수상 및 활동 (Awards & Activities)

```markdown
## 수상 및 활동

### 수상
- 2024 우수 강의상 (한신대학교)
- 2023 Best Paper Award (학회명)
- 2022 우수 프로젝트상 (기관명)

### 학회 활동
- 한국HRD학회 정회원
- 한국컴퓨터교육학회 회원
- 한국데이터과학회 회원

### 사회 활동
- IT 재능기부 멘토링 (2020-현재)
- 청소년 코딩 교육 봉사 (2019-현재)
```

### 10. 언어 능력 (Languages)

```markdown
## 언어 능력

- **한국어**: Native
- **영어**: Professional Working Proficiency
  - TOEIC: XXX
  - 기술 문서 작성 및 발표 가능
- **일본어**: Basic
```

## 페이지 스타일링

### 인쇄 최적화 CSS
```scss
@media print {
  .sidebar,
  .page__footer,
  .masthead {
    display: none;
  }
  
  .page__content {
    max-width: 100%;
    font-size: 11pt;
    line-height: 1.5;
  }
  
  h2 {
    page-break-after: avoid;
    margin-top: 20pt;
  }
  
  .cv-section {
    page-break-inside: avoid;
  }
}
```

### 타임라인 스타일
```scss
.cv-timeline {
  position: relative;
  padding-left: 30px;
  
  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: $primary-color;
  }
  
  .timeline-item {
    position: relative;
    padding-bottom: 2rem;
    
    &::before {
      content: '';
      position: absolute;
      left: -24px;
      top: 5px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: $primary-color;
    }
  }
}
```

## 기능 구현

### PDF 다운로드
```javascript
function downloadCV() {
  window.print();
  // 또는 jsPDF 라이브러리 사용
}
```

### 섹션 네비게이션
```javascript
// Smooth scroll to sections
document.querySelectorAll('.toc a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
```

## 개선 사항 및 TODO
- [ ] PDF 자동 생성 기능
- [ ] 다국어 버전 (영문 CV)
- [ ] 인터랙티브 스킬 차트
- [ ] 프로젝트 포트폴리오 연동
- [ ] LinkedIn 프로필 동기화
- [ ] QR 코드 명함 생성