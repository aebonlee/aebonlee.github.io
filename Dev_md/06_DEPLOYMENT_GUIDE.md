# 배포 가이드 및 워크플로우

## 🚀 배포 개요
**플랫폼**: GitHub Pages  
**빌드 도구**: Jekyll  
**도메인**: https://aebonlee.github.io  
**배포 방식**: 자동 배포 (GitHub Actions)

## 📋 배포 전 체크리스트

### ✅ 필수 확인 사항
- [ ] 로컬에서 정상 빌드 확인
- [ ] 모든 링크 동작 확인
- [ ] 이미지 및 파일 경로 확인
- [ ] 반응형 디자인 테스트
- [ ] 브라우저 호환성 확인
- [ ] SEO 메타데이터 검증

### ✅ 콘텐츠 검증
- [ ] 새로운 글 내용 검토
- [ ] 문법 및 맞춤법 확인
- [ ] 이미지 alt 텍스트 추가
- [ ] 메타데이터 정확성 확인

## 🛠️ 로컬 개발 환경

### 1. 환경 설정
```bash
# Ruby 버전 확인 (2.7+ 권장)
ruby --version

# Jekyll 및 Bundler 설치
gem install bundler jekyll

# 프로젝트 의존성 설치
bundle install
```

### 2. 로컬 서버 실행
```bash
# 기본 서버 실행
bundle exec jekyll serve

# 라이브 리로드와 함께 실행
bundle exec jekyll serve --livereload

# 특정 포트에서 실행
bundle exec jekyll serve --port 4001

# 드래프트 포함하여 실행
bundle exec jekyll serve --drafts
```

### 3. 빌드 명령어
```bash
# 프로덕션 빌드
JEKYLL_ENV=production bundle exec jekyll build

# 개발용 빌드
bundle exec jekyll build

# 깔끔한 빌드 (캐시 제거)
bundle exec jekyll clean && bundle exec jekyll build
```

## 🔄 Git 워크플로우

### 1. 기본 워크플로우
```bash
# 현재 상태 확인
git status

# 변경사항 스테이징
git add .

# 커밋 메시지 작성 (의미있는 메시지)
git commit -m "feat: Year-Archive 페이지 디자인 개선

- 통계 카드 시스템 추가
- 카드 기반 레이아웃 적용
- 반응형 디자인 최적화
- 호버 애니메이션 효과 추가"

# GitHub에 푸시
git push origin main
```

### 2. 커밋 메시지 컨벤션
```
<type>(<scope>): <subject>

<body>

<footer>
```

**타입 예시**:
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 스타일 변경
- `refactor`: 리팩토링
- `test`: 테스트 추가
- `chore`: 빌드 도구, 설정 변경

**예시**:
```bash
git commit -m "feat(pages): Add year-archive page redesign

- Implement card-based layout
- Add statistics dashboard
- Optimize responsive design
- Include hover animations"
```

## 🌐 GitHub Pages 배포

### 1. 자동 배포 설정
GitHub Pages는 `main` 브랜치에 푸시할 때마다 자동으로 빌드하고 배포됩니다.

**설정 경로**: Repository → Settings → Pages
- **Source**: Deploy from a branch
- **Branch**: main / (root)

### 2. 배포 상태 확인
```bash
# GitHub Pages 빌드 상태 확인
https://github.com/aebonlee/aebonlee.github.io/deployments

# 라이브 사이트 확인
https://aebonlee.github.io
```

### 3. 빌드 에러 해결
```bash
# 로컬에서 에러 재현
bundle exec jekyll build --verbose

# 의존성 업데이트
bundle update

# 캐시 클리어
bundle exec jekyll clean
```

## 🔧 고급 배포 설정

### 1. GitHub Actions (선택사항)
`.github/workflows/pages.yml`:
```yaml
name: Build and deploy Jekyll site to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Ruby
      uses: ruby/setup-ruby@v1
      with:
        ruby-version: '3.0'
        bundler-cache: true
    
    - name: Build Jekyll site
      run: bundle exec jekyll build
      
    - name: Test HTML
      run: bundle exec htmlproofer _site --check-html --disable-external
      
    - name: Deploy to GitHub Pages
      if: github.ref == 'refs/heads/main'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./_site
```

### 2. 커스텀 도메인 설정
`CNAME` 파일:
```
your-domain.com
```

`_config.yml`:
```yaml
url: "https://your-domain.com"
enforce_ssl: true
```

### 3. 환경별 설정
`_config_production.yml`:
```yaml
environment: production
google_analytics: "GA-TRACKING-ID"
compress_html:
  clippings: all
  comments: all
  endings: all
```

## 📊 배포 후 검증

### 1. 기능 테스트
```bash
# 링크 검증 도구
gem install html-proofer
bundle exec htmlproofer _site

# 성능 측정
lighthouse https://aebonlee.github.io

# SEO 검증
curl -s https://aebonlee.github.io | grep -i "title\|description\|keywords"
```

### 2. 브라우저 테스트
- **Chrome**: 개발자 도구로 반응형 확인
- **Firefox**: 접근성 검사
- **Safari**: iOS Safari 호환성
- **Edge**: Windows 환경 확인

### 3. 모바일 테스트
- **iPhone**: iOS Safari
- **Android**: Chrome Mobile
- **태블릿**: iPad, Android Tablet

## 🔍 SEO 및 성능 최적화

### 1. Google Search Console
```bash
# 사이트맵 제출
https://aebonlee.github.io/sitemap.xml

# 크롤링 요청
Google Search Console → URL 검사 → 색인 생성 요청
```

### 2. Google Analytics
`_config.yml`:
```yaml
analytics:
  provider: "google-gtag"
  google:
    tracking_id: "G-XXXXXXXXXX"
```

### 3. 성능 모니터링
- **PageSpeed Insights**: 성능 점수 확인
- **GTmetrix**: 로딩 시간 분석
- **Pingdom**: 다양한 지역별 속도 테스트

## 🛡️ 보안 및 백업

### 1. 보안 설정
```yaml
# _config.yml
safe: true
strict_front_matter: true
```

### 2. 백업 전략
```bash
# 정기 백업 스크립트
#!/bin/bash
git archive --format=zip --output=backup_$(date +%Y%m%d).zip HEAD

# 중요 파일 별도 백업
tar -czf config_backup.tar.gz _config.yml _data/
```

### 3. 비상 복구
```bash
# 이전 커밋으로 롤백
git reset --hard HEAD~1
git push --force-with-lease origin main

# 특정 파일만 복구
git checkout HEAD~1 -- _pages/year-archive.html
```

## 📱 모바일 최적화 배포

### 1. 반응형 테스트
```bash
# Chrome DevTools 시뮬레이션
- iPhone 12 Pro: 390 x 844
- iPad Pro: 1024 x 1366
- Samsung Galaxy S20: 360 x 800
```

### 2. PWA 설정 (선택사항)
`manifest.json`:
```json
{
  "name": "이애본 포트폴리오",
  "short_name": "이애본",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0366d6",
  "icons": [
    {
      "src": "/images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## 🚨 트러블슈팅

### 1. 일반적인 문제들
```bash
# 빌드 실패
bundle update
bundle exec jekyll build --verbose

# 스타일 적용 안됨
bundle exec jekyll serve --force_polling

# 이미지 경로 문제
# 절대 경로 대신 상대 경로 사용
![이미지](/images/photo.jpg) → ![이미지]({{ site.baseurl }}/images/photo.jpg)
```

### 2. GitHub Pages 제한사항
- **저장소 크기**: 1GB 제한
- **빌드 시간**: 10분 제한
- **시간당 빌드**: 10회 제한
- **플러그인**: 화이트리스트 플러그인만 허용

### 3. 성능 이슈 해결
```bash
# 이미지 최적화
imageoptim-cli --directory images/

# CSS 압축
sass --style compressed main.scss main.min.css

# JavaScript 최소화
uglifyjs script.js -o script.min.js
```

## 📈 배포 통계 및 모니터링

### 1. GitHub Insights
- **Traffic**: 방문자 통계
- **Commits**: 커밋 활동
- **Issues**: 문제 추적

### 2. 성능 지표
- **First Contentful Paint**: < 2초
- **Largest Contentful Paint**: < 4초
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### 3. SEO 지표
- **Google 페이지 속도**: 90+ 점
- **모바일 친화성**: 통과
- **Core Web Vitals**: 모든 지표 "좋음"

## 📅 배포 스케줄

### 정기 배포
- **일일**: 콘텐츠 업데이트 (필요시)
- **주간**: 기능 개선 및 버그 수정
- **월간**: 대규모 업데이트 및 리팩토링
- **분기**: 성능 최적화 및 보안 업데이트

### 응급 배포
```bash
# 핫픽스 워크플로우
git checkout -b hotfix/critical-bug
# 수정 작업
git commit -m "hotfix: 중요 버그 수정"
git checkout main
git merge hotfix/critical-bug
git push origin main
```

---

**최종 업데이트**: 2025년 11월 22일  
**배포 버전**: 2.1.0  
**다음 예정 업데이트**: 다국어 지원 추가