---
title: "AHP 의사결정 지원 플랫폼"
excerpt: "React와 Django 기반 계층적 분석 프로세스 웹 애플리케이션<br/><img src='/images/portfolio/ahp-platform.png' width='500'>"
collection: portfolio
date: 2024-01-01
---

## 프로젝트 개요

박사과정 연구의 일환으로 개발한 **AHP(Analytic Hierarchy Process) 기반 의사결정 지원 시스템**입니다. 복잡한 의사결정 문제를 계층적으로 구조화하여 체계적으로 분석할 수 있는 웹 플랫폼입니다.

## 주요 기능

### 1. 계층 구조 설계
- 드래그 앤 드롭 인터페이스
- 실시간 유효성 검증
- 동적 요소 추가/삭제

### 2. 쌍대비교 매트릭스
- 직관적인 슬라이더 UI
- 일관성 비율(CR) 실시간 계산
- 자동 역수 계산

### 3. 가중치 계산 엔진
- 고유벡터 방법 구현
- 기하평균 방법 지원
- 민감도 분석 기능

### 4. 결과 시각화
- 대시보드 형태의 종합 결과
- 대안별 점수 차트
- 가중치 분포 그래프

## 기술 스택

**프론트엔드:**
- React 18
- TypeScript
- Material-UI
- Redux Toolkit
- Chart.js

**백엔드:**
- Django 4.2
- Django REST Framework
- PostgreSQL
- Redis (캐싱)
- Celery (비동기 처리)

## 성과

- 10개 이상의 연구 프로젝트에서 활용
- 평균 의사결정 시간 40% 단축
- 사용자 만족도 4.5/5.0

## 링크

- [GitHub Repository](https://github.com/aebonlee/ahp-platform)
- [Live Demo](https://ahp-platform.onrender.com)