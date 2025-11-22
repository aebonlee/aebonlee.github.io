# 기술 스택 및 설정 상세 문서

## 1. Jekyll 환경 설정

### Ruby 및 Jekyll 설치
```bash
# Windows (Ruby Installer)
# https://rubyinstaller.org/ 에서 Ruby+Devkit 설치

# macOS
brew install ruby
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

# Jekyll 및 Bundler 설치
gem install bundler jekyll
```

### Gemfile 설정
```ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-feed"
gem "jekyll-sitemap"
gem "jekyll-gist"
gem "jekyll-paginate"
gem "jekyll-redirect-from"
gem "jemoji"

# Windows 환경
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
```

---

## 2. npm 패키지 설정

### package.json
```json
{
  "name": "aebonlee-portfolio",
  "version": "0.8.1.1",
  "description": "Ae Bon Lee's Academic Portfolio",
  "repository": {
    "type": "git",
    "url": "https://github.com/aebonlee/aebonlee.github.io"
  },
  "dependencies": {
    "fitvids": "^2.1.1",
    "jquery": "^3.7.1",
    "jquery-smooth-scroll": "^2.2.0"
  },
  "devDependencies": {
    "onchange": "^7.1.0",
    "uglify-js": "^3.17.4"
  },
  "scripts": {
    "uglify": "uglifyjs ... -o assets/js/main.min.js",
    "watch:js": "onchange \"assets/js/**/*.js\" -- npm run build:js",
    "build:js": "npm run uglify"
  }
}
```

### npm 설치 및 빌드
```bash
# 패키지 설치
npm install

# JavaScript 빌드
npm run build:js

# 파일 변경 감시
npm run watch:js
```

---

## 3. SCSS/CSS 구조

### 디렉토리 구조
```
_sass/
├── _themes.scss           # 테마 설정
├── _syntax.scss           # 코드 하이라이팅
├── include/
│   ├── _mixins.scss      # SCSS 믹스인
│   └── _utilities.scss   # 유틸리티 클래스
├── layout/
│   ├── _base.scss        # 기본 스타일
│   ├── _page.scss        # 페이지 레이아웃
│   ├── _archive.scss     # 아카이브 페이지
│   ├── _sidebar.scss     # 사이드바
│   ├── _masthead.scss    # 헤더
│   ├── _navigation.scss  # 네비게이션
│   ├── _footer.scss      # 푸터
│   ├── _responsive.scss  # 반응형 디자인
│   └── _json_cv.scss     # CV 페이지
├── theme/
│   ├── _default_light.scss
│   └── _default_dark.scss
└── vendor/               # 외부 라이브러리
```

### main.scss 설정
```scss
---
---

@import
    "vendor/breakpoint/breakpoint",
    "themes",
    "theme/default_light",
    "theme/default_dark",
    "include/mixins",
    "vendor/susy/susy",
    "layout/reset",
    "layout/base",
    "include/utilities",
    // ... 기타 imports
    "layout/responsive";

// 커스텀 변수
$sidebar-width: 300px;
$container-max-width: 1400px;
$content-padding: 40px;

// 커스텀 스타일
// ...
```

---

## 4. JavaScript 구조

### 파일 구조
```
assets/js/
├── _main.js                    # 메인 JavaScript
├── main.min.js                 # 압축된 파일
├── plugins/
│   └── jquery.greedy-navigation.js
├── theme.js                    # 테마 관련
├── wave-background.js          # 배경 애니메이션
└── collapse.js                 # 접기/펼치기
```

### 주요 기능
```javascript
// 네비게이션 초기화
$(document).ready(function() {
  // Greedy Navigation
  $('.greedy-nav').greedyNav();
  
  // Smooth Scroll
  $('a[href*="#"]:not([href="#"])').smoothScroll();
  
  // FitVids
  $(".page__content").fitVids();
});
```

---

## 5. Jekyll 설정 (_config.yml)

### 핵심 설정
```yaml
# 기본 설정
locale: "en-US"
title: "이애본 / Academic Profile"
name: "이애본"
description: "박사과정 연구자..."
url: https://aebonlee.github.io
baseurl: ""
repository: "aebonlee/aebonlee.github.io"

# 시간대
timezone: Asia/Seoul

# 마크다운 설정
markdown: kramdown
highlighter: rouge

# 컬렉션 설정
collections:
  teaching:
    output: true
    permalink: /:collection/:path/
  publications:
    output: true
    permalink: /:collection/:path/
  portfolio:
    output: true
    permalink: /:collection/:path/
  talks:
    output: true
    permalink: /:collection/:path/

# 플러그인
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-paginate
  - jekyll-redirect-from
  - jemoji

# Sass 설정
sass:
  sass_dir: _sass
  style: compressed
```

---

## 6. SEO 최적화

### 메타 태그 (head/custom.html)
```html
<!-- SEO 메타 태그 -->
<meta name="author" content="이애본">
<meta name="robots" content="index, follow">
<meta name="keywords" content="이애본, AI교육, ...">

<!-- Open Graph -->
<meta property="og:locale" content="ko_KR">
<meta property="og:site_name" content="이애본 학술 포트폴리오">
<meta property="og:title" content="{{ page.title }}">
<meta property="og:description" content="{{ page.excerpt }}">
<meta property="og:url" content="{{ page.url | absolute_url }}">
<meta property="og:image" content="{{ site.url }}/images/profile.png">

<!-- Twitter 카드 -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{{ page.title }}">

<!-- 구조화된 데이터 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "이애본",
  ...
}
</script>
```

### sitemap.xml 생성
- jekyll-sitemap 플러그인이 자동 생성
- robots.txt 파일 추가 권장

---

## 7. GitHub Pages 배포

### 저장소 설정
1. GitHub에서 `username.github.io` 저장소 생성
2. Settings > Pages 설정
3. Source: Deploy from a branch
4. Branch: master / root

### 배포 프로세스
```bash
# 로컬 빌드 테스트
bundle exec jekyll build

# Git 커밋 및 푸시
git add .
git commit -m "Update: 설명"
git push origin master

# GitHub Actions 자동 빌드 및 배포
```

### GitHub Actions 워크플로우 (선택적)
```yaml
name: Build and Deploy

on:
  push:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-ruby@v1
      with:
        ruby-version: '2.7'
    - run: |
        bundle install
        bundle exec jekyll build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./_site
```

---

## 8. 성능 최적화

### 이미지 최적화
```bash
# 이미지 압축
# TinyPNG API 또는 로컬 도구 사용
optipng -o5 images/*.png
jpegoptim --max=85 images/*.jpg
```

### CSS/JS 최적화
```bash
# CSS 압축 (Jekyll이 자동 처리)
sass:
  style: compressed

# JavaScript 압축
npm run build:js
```

### 캐싱 설정
```html
<!-- .htaccess 또는 _headers 파일 -->
Cache-Control: public, max-age=31536000
```

---

## 9. 로컬 개발 환경

### 개발 서버 실행
```bash
# 표준 실행
bundle exec jekyll serve

# 라이브 리로드 포함
bundle exec jekyll serve --livereload

# 초안 포함
bundle exec jekyll serve --drafts

# 포트 변경
bundle exec jekyll serve --port 4001
```

### 문제 해결
```bash
# 캐시 정리
bundle exec jekyll clean

# 의존성 업데이트
bundle update

# 특정 gem 재설치
gem uninstall jekyll
gem install jekyll
```

---

## 10. 백업 및 복구

### 백업 전략
1. GitHub 저장소 (자동)
2. 로컬 백업
3. 데이터베이스 내보내기 (cv.json 등)

### 복구 절차
```bash
# 저장소 클론
git clone https://github.com/aebonlee/aebonlee.github.io.git

# 의존성 설치
bundle install
npm install

# 빌드 및 실행
bundle exec jekyll build
bundle exec jekyll serve
```

---

## 11. 모니터링 및 분석

### Google Analytics 설정
```yaml
# _config.yml
analytics:
  provider: "google-analytics-4"
  google:
    tracking_id: "G-XXXXXXXXXX"
```

### Search Console 설정
1. 사이트 소유권 확인
2. sitemap.xml 제출
3. 색인 요청

---

## 12. 보안 고려사항

### 민감 정보 보호
- 이메일 주소 난독화
- API 키 환경 변수 처리
- 개인정보 최소화

### HTTPS 강제
- GitHub Pages는 기본 HTTPS 제공
- 커스텀 도메인도 HTTPS 지원

---

## 문의 및 지원
- Jekyll 문서: https://jekyllrb.com/docs/
- GitHub Pages: https://docs.github.com/pages
- 이슈 리포트: https://github.com/aebonlee/aebonlee.github.io/issues