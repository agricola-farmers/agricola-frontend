# 보드게임 <아그리콜라>

## 프로젝트 소개

- 본 문서는 BGK사로부터 의뢰받은 보드게임 <아그리콜라>의 온라인 서비스 개발의 설계 및 구현을 위한 것으로 이를 위한 요구사항을 바탕으로 시스템을 설계 및 구현한다.

- 문서는 전반적인 요구사항을 서술하여, 이에 충실한 웹 시스템을 개발하고, 사용자 중심의 온라인 서비스를 만드는 것을 최우선 목적으로 한다.

## 개발 기간

2024.03.04 ~ 2024.06.10

## 개발 환경

- Frontend : Next.js , React
- Server : Node.js
- Network Protocol : Web Socket

## 프로그램 주요 기능

1. 보드게임 아그리콜라의 게임 플레이 구현

   - 게임 시나리오 중 1, 14라운드의 게임 플레이를 재현했다.
   - 1, 14라운드의 일하기 단계와 수확 단계, 그리고 점수 결산 부분을 진행할 수 있다.

2. 방 만들기/참여하기 기능

   ![img](https://srs-agricola.web.app/img/f_02g.27167e06.gif)

   방장이 방 만들기 기능을 통해 방을 만들고 4명이 모이게 되면 게임을 시작한다.
   방마다 입장 코드가 주어지며, 나머지 사용자는 코드를 입력해 방에 입장할 수 있다.

3. 타이머 기능

   ![img](https://srs-agricola.web.app/img/f_03g.664c5b2d.gif)

   제한 시간 이내에 사용자가 입력을 하지 못한다면 해당 턴에서 아무런 행동도 하지 못하며, 턴이 자동으로 다음 플레이어에게 넘어간다.

## 프로젝트 실행

```bash
/* agricola-backend */
1. npm start

/* agricola-frontend */
2. npm run dev

/* Web */
3. http://localhost:3000/
```

## 저작권 및 사용권 정보

개인정보 보호 규정을 준수하였으며, 게임 콘텐츠와 관련된 모든 저작권 규정을 준수하였다.

## 참조

- [SRS 사이트](https://srs-agricola.web.app/main/tech/a)
- [Notion](https://www.notion.so/yu00hun/SW-8d0b39ff18254d2d8d1695d02d5e4cf0)
- [Jira](https://cse-agricola.atlassian.net/jira/software/projects/AGR/boards/2/timeline)
- [Figma](https://www.figma.com/design/egOTtVTjdaKnXZaQZIpJgf/Agricola?node-id=156-2&t=y3xtCewndb282uND-0)
- [GitHub](https://github.com/agricola-farmers/agricola-frontend)

본 문서를 작성하기 위해 인하대학교 컴퓨터공학과에서 진행한 ‘유튜브 채널 추천 어플리케이션 소프트웨어 요구사항 명세서' (2021.3.31) 의 형식을 참조하였다.

기능 요구사항 작성과 게임과 유사한 서비스 디자인을 위해 실제 아그리콜라의 설명이 서술된 규칙서를 참조하였다.
