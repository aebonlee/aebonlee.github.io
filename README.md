# 이애본의 학술 포트폴리오 웹사이트

이 웹사이트는 [Academic Pages template](https://github.com/academicpages/academicpages.github.io)을 기반으로 제작된 개인 학술 포트폴리오입니다.

![Academic Pages template example](images/homepage.png "Academic Pages template example")

## 사이트 정보

**학술 연구자**: 이애본  
**현재 상태**: 서울벤처대학원대학교 경영학박사과정 (정보관리전공)  
**연구분야**: AI 활용, 정보시스템 관리, 직업교육학  

## 주요 내용

- **About**: 개인 소개 및 연구 관심사
- **CV**: 상세한 학력 및 경력 사항
- **Publications**: 연구 논문 및 출판물
- **Research**: 연구 프로젝트 및 발표
- **Portfolio**: 학술 활동 포트폴리오

# 시작하기

1. GitHub 계정이 없다면 등록하고 이메일 확인 (필수!)
2. 우측 상단의 "Use this template" 버튼 클릭
3. "New repository" 페이지에서 "[your GitHub username].github.io"로 공개 저장소 이름 입력 (웹사이트 URL이 됩니다)
4. 사이트 전체 설정 및 콘텐츠 추가
5. PDF, .zip 파일 등을 `files/` 디렉토리에 업로드 (https://[your GitHub username].github.io/files/example.pdf로 접근 가능)
6. 저장소 설정의 "GitHub pages" 섹션에서 상태 확인
7. (선택사항) `markdown_generator` 폴더의 Jupyter 노트북이나 Python 스크립트를 사용하여 TSV 파일로부터 출판물과 발표에 대한 마크다운 파일 생성

자세한 정보: https://academicpages.github.io/

## 로컬에서 실행하기

웹사이트를 처음 작업할 때는 GitHub에 푸시하기 전에 로컬에서 변경사항을 미리보는 것이 매우 유용합니다.

### 다른 IDE 사용하기
1. ruby-dev, bundler, nodejs가 설치되어 있는지 확인
    
    대부분의 Linux 배포판과 [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/about)에서 명령어:
    ```bash
    sudo apt install ruby-dev ruby-bundler nodejs
    ```
    
    MacOS에서 명령어:
    ```bash
    brew install ruby
    brew install node
    gem install bundler
    ```

2. `bundle install`을 실행하여 ruby 종속성 설치. 오류가 발생하면 Gemfile.lock을 삭제하고 다시 시도.

3. `jekyll serve -l -H localhost`를 실행하여 HTML을 생성하고 `localhost:4000`에서 서빙. 로컬 서버는 변경사항을 자동으로 감지하여 페이지를 재빌드하고 새로고침합니다.

## Docker 사용하기

다른 OS에서 작업하거나 종속성 설치를 피하고 싶다면, [Docker](https://www.docker.com/)가 설치되어 있는 경우 제공된 `Dockerfile`을 사용할 수 있습니다.

```bash
chmod -R 777 .
docker compose up
```

이제 `localhost:4000`에서 웹사이트에 접근할 수 있습니다.

## 기술 스택

- Jekyll 기반 정적 사이트 생성기
- GitHub Pages 호스팅
- Minimal Mistakes Jekyll Theme 기반 (© 2016 Michael Rose, MIT License)
- Markdown 기반 콘텐츠 관리

---

이 저장소는 [Stuart Geiger](https://github.com/staeiou)가 [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/)에서 포크한 후 분리된 것으로, 현재 [Robert Zupko](https://github.com/rjzupkoii)가 유지보수하고 있습니다.

---
<div align="center">
    
![pages-build-deployment](https://github.com/academicpages/academicpages.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)
[![GitHub contributors](https://img.shields.io/github/contributors/academicpages/academicpages.github.io.svg)](https://github.com/academicpages/academicpages.github.io/graphs/contributors)
[![GitHub release](https://img.shields.io/github/v/release/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io/releases/latest)
[![GitHub license](https://img.shields.io/github/license/academicpages/academicpages.github.io?color=blue)](https://github.com/academicpages/academicpages.github.io/blob/master/LICENSE)

</div>