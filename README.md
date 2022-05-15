# 원티드 프리온보딩 과제 01 영화 검색 앱

![May-15-2022 01-17-09](https://user-images.githubusercontent.com/37893979/168440145-0f6dc974-a65b-40b0-8a74-e18d24d971c7.gif)

## [배포 페이지](https://chichoon.github.io/wanted-movie-app)

## 사용방법

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/168455318-95ad86e6-da23-4794-b2a7-7751056dad28.png">

- '검색 탭' 과 '즐겨찾기 탭' 으로 분할되어 있습니다

### 검색하기

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/168455345-39162dfb-dc68-4936-9dff-db9b4e7dd813.png">

- '검색 탭' 에서는 영화 이름 및 키워드를 입력하고 검색할 수 있습니다.

- 검색 결과는 로딩 후 한번에 표시됩니다.

- 한 번에 10개의 검색 데이터를 받아오며 스크롤을 끝까지 내릴 때마다 추가 데이터를 불러옵니다.

### 즐겨찾기

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/168455410-7bf3fb31-e51d-4231-9a33-bb851ac25d90.png">

- 영화 블럭 우측의 별 아이콘을 누르면 즐겨찾기 선택 창으로 즐겨찾기 여부를 선택할 수 있습니다.

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/168455418-dd5190d1-6ead-44e7-bcd0-1c93c6936af3.png">

- 즐겨찾기한 영화는 별 아이콘이 색칠된 채로 렌더링됩니다.

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/168455423-3a9f7f19-1761-4c00-b9e4-1a2919c4291d.png">

- 즐겨찾기한 영화는 별 아이콘을 다시 눌러 즐겨찾기를 해제할 수 있습니다.

### 즐겨찾기 리스트

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/168455441-afe0af81-5cfe-44d2-84a0-5afc6276a132.png">

- 지금까지 즐겨찾기를 누른 영화들을 모아볼 수 있습니다.

- 영화 검색 페이지와 마찬가지로, 별 아이콘을 다시 눌러 즐겨찾기를 해제할 수 있습니다.

- 즐겨찾기는 로컬 스토리지에 저장되며, 페이지를 닫고 다시 열어도 즐겨찾기 정보를 불러올 수 있습니다.

- 즐겨찾기 리스트는 로딩 없이 한번에 렌더링됩니다.

![May-15-2022 12-12-24](https://user-images.githubusercontent.com/37893979/168455542-c8aeaaad-c1ad-4a48-bc17-32fc893c66b1.gif)

- 리스트 항목들은 드래그 앤 드롭으로 순서를 변경할 수 있습니다.

## 작업기

### [220509 (시작)](https://chichoon.tistory.com/498)

### [220510](https://chichoon.tistory.com/512)

### [220511](https://chichoon.tistory.com/515)

### [220512](https://chichoon.tistory.com/518)

### [220513](https://chichoon.tistory.com/521)

### [220514 (배포)](https://chichoon.tistory.com/524)

## 사용한 라이브러리와 기술 정리글 모음

### [무한스크롤 - intersectionObserver](https://chichoon.tistory.com/514)

### [로컬스토리지 저장 및 불러오기 - store](https://chichoon.tistory.com/516)

### [로컬스토리지와 세션스토리지](https://chichoon.tistory.com/517)

### [로딩창 구현 - Suspense](https://chichoon.tistory.com/519)

### [로딩창 구현 - 비동기 처리와 Promise](https://chichoon.tistory.com/520)

### [데이터 배열 파싱 및 조작 - lodash](https://chichoon.tistory.com/523)

### [(보너스) 드래그 앤 드롭 = react-beautiful-dnd](https://chichoon.tistory.com/525)

### [Github Pages로 배포 - gh-pages + 404 에러처리](https://chichoon.tistory.com/526)
