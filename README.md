# Worko_Homepage

> **Lovable 기반으로 백엔드 추가 및 지속적인 기능 개발 중**

## 🚀 기술 스택

### Frontend
- **React 18** + **TypeScript** - 모던 프론트엔드 프레임워크
- **Vite** - 빠른 빌드 도구 및 개발 서버
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **shadcn/ui** - 고품질 React 컴포넌트 라이브러리
  - Accordion, Alert Dialog, Button, Card, Calendar, Chart 등 30+ 컴포넌트

### Backend & Database
- **Firebase** - 백엔드 서비스 플랫폼
  - **Firestore** - NoSQL 실시간 데이터베이스
  - **Firebase Hosting** - 웹 호스팅
  - **Firebase Authentication** (추정)

### 개발 도구
- **npm** - 패키지 매니저
- **ESLint** - 코드 린팅 및 품질 관리
- **PostCSS** - CSS 후처리 도구
- **TypeScript** - 타입 안전성 보장

### 주요 컴포넌트 구조
```
src/
├── components/
│   ├── ui/           # shadcn/ui 기반 재사용 가능한 UI 컴포넌트
│   └── ProjectModal/ # 커스텀 프로젝트 모달 컴포넌트
├── pages/           # 라우팅 페이지들
├── hooks/           # 커스텀 React 훅들
└── lib/             # 유틸리티 함수 및 설정
```

## 🛠️ 개발 현황

- ✅ **Lovable 기반 초기 설정** 완료
- 🔄 **Firebase 백엔드 통합** 진행 중
- 🔄 **추가 기능 개발** 지속적 업데이트
- ✅ **shadcn/ui 컴포넌트 시스템** 구축 완료

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# Firebase 배포
firebase deploy
```

## 🔧 설정 파일

| 파일 | 용도 |
|------|------|
| `vite.config.ts` | Vite 빌드 설정 |
| `tailwind.config.ts` | Tailwind CSS 설정 |
| `components.json` | shadcn/ui 컴포넌트 설정 |
| `firebase.json` | Firebase 프로젝트 설정 |
| `firestore.rules` | Firestore 보안 규칙 |

---

> 💡 **참고**: 프로젝트의 세부 파일 내용이 필요하시면 요청해 주세요!
