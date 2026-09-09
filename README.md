# DK밸리뷰 용산 — 분양 랜딩 페이지

모바일 우선 원페이지 랜딩. 참고 사이트: http://dkvalleyview.taeboksolution.com/page/page39 (저작권 사용 허락 받음)

## 구성

```
index.html          레이아웃 · 스타일 · 렌더링 스크립트 (건드릴 일 거의 없음)
config.js           ★ 내용은 전부 여기서 수정 (문구/이미지/표/탭)
api/contact.js      방문예약 메일 발송 (Vercel 서버리스 + nodemailer)
assets/images/      원본 사이트에서 받아온 이미지
vercel.json         정적 파일 + 서버리스 함수 라우팅
```

## 메뉴 구성

| 메뉴 | 앵커 | 내용 |
|---|---|---|
| 사업개요 | `#overview` | 사업개요 표 + 투시도 |
| 브랜드 | `#brand` | DK밸리뷰 / DK건설 시공 이력 |
| 입지환경 | `#location` | 용산 지역도 + 특징 카드 4개 |
| 프리미엄 | `#premium` | 프리미엄 인포그래픽 |
| 상품특화 | `#special` | 특화설계 이미지 5장 |
| 조경 | `#landscape` | 조경 CG |
| 세대소개 | `#units` | 2단 탭 — 오피스텔 / 도시형생활주택 → A~E Type |
| 방문예약 | `#register` | 방문예약 폼 |

- 모바일 화면 하단에 **전화연결 / 방문예약 바로가기** 고정 바가 항상 노출됩니다 (PC 900px 이상에서는 숨김).
- 대표번호: **1666-9032** (`config.js`의 `callPhone` 한 곳만 바꾸면 하단 바·푸터·안내문구가 전부 따라 바뀝니다).
- 지역도 · 평면도 이미지는 탭하면 전체화면으로 확대됩니다.

## 내용 수정

`config.js`만 열어서 고치면 됩니다.

- 문구/전화번호/주소 → 상단 기본 정보 블록
- 사업개요 표 → `overviewTable`
- 각 섹션의 이미지·카드·탭 → `sections`
- 메뉴 이름/순서 → `nav` (각 항목의 `href`는 `sections`의 `id`와 1:1로 맞출 것)
- 세대소개 2단 탭 → `sections`의 `units` 항목 `groups`

### ⚠️ 이미지를 새로 추가할 때

`index.html`의 `IMG_SIZE` 표에 **원본 가로·세로 픽셀을 반드시 함께 등록**하세요.
빠뜨리면 `loading="lazy"` 이미지가 로드 전 높이 0으로 접혀 문서가 짧아지고,
메뉴 클릭 시 엉뚱한 위치로 스크롤됩니다.

## 로컬 실행

```bash
npx -y serve -l 5058 .
```

브라우저에서 http://localhost:5058 접속.

## 배포 (GitHub + Vercel)

1. 이 폴더를 GitHub 저장소로 push
2. Vercel에서 저장소 Import
3. **Settings > Environment Variables**에 아래 4개 등록

| 변수 | 설명 |
|---|---|
| `EMAIL_USER` | 발송용 Gmail 주소 |
| `EMAIL_PASS` | Gmail **앱 비밀번호** 16자리 (일반 비밀번호 아님) |
| `RECEIVER_EMAILS` | 수신 이메일. 콤마로 여러 개 지정 가능 |
| `SITE_NAME` | `DK밸리뷰 용산` |

4. 배포 후 실제 도메인을 `config.js`의 `seo.canonical`에 입력
