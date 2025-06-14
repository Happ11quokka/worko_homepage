# WORKO 

> **외국인 유학생과 기업을 연결하는 글로벌 협업 플랫폼**  
> Lovable.dev 기반으로 백엔드 추가 및 지속적인 기능 개발 중

## 🚀 기술 스택

### Frontend
- **React 18** + **TypeScript** - 모던 프론트엔드 프레임워크
- **Vite** - 빠른 빌드 도구 및 개발 서버  
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **shadcn/ui** - 고품질 React 컴포넌트 라이브러리
  - Dialog, Card, Button, Input, Textarea, Badge, Accordion 등
- **Lucide React** - 아이콘 라이브러리
- **React Hook Form** - 폼 상태 관리
- **Toast 알림** - 사용자 피드백 시스템

### Backend & Database
- **Firebase** - 백엔드 서비스 플랫폼
  - **Firestore** - NoSQL 실시간 데이터베이스 (프로젝트 제안서 저장)
  - **Firebase Hosting** - 웹 호스팅
  - **Firestore Security Rules** - 데이터베이스 보안 규칙

### 개발 도구
- **npm** - 패키지 매니저
- **ESLint** - 코드 린팅 및 품질 관리
- **PostCSS** - CSS 후처리 도구
- **TypeScript** - 타입 안전성 보장

### 외부 연동
- **카카오톡 오픈채팅** - 실시간 문의 시스템
- **SEO 최적화** - OG 이미지, 메타태그, robots.txt

## 🛠️ 주요 기능

### ✅ 구현 완료
- **랜딩페이지** - 서비스 소개, 사례, FAQ
- **프로젝트 제안서 시스템** - Firebase 연동으로 실시간 저장
- **프로젝트 템플릿 모달** - 구조화된 제안서 작성 가이드
- **반응형 디자인** - 모바일/태블릿/데스크톱 최적화
- **실시간 알림** - Toast 시스템으로 사용자 피드백
- **SEO 최적화** - 검색엔진 최적화 및 소셜미디어 연동

### 🔄 진행 중
- Firebase 백엔드 고도화
- 추가 기능 개발 및 UI/UX 개선

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

## 🗂️ 프로젝트 구조

```
src/
├── components/
│   ├── ui/              # shadcn/ui 기반 재사용 가능한 UI 컴포넌트
│   └── ProjectModal.tsx # 프로젝트 제안서 템플릿 모달
├── pages/
│   └── Index.tsx        # 메인 랜딩페이지
├── hooks/
│   └── use-toast.ts     # Toast 알림 훅
├── lib/
│   └── firebase.ts      # Firebase 설정 및 초기화
└── styles/              # 전역 스타일
```

### 데이터 구조
```typescript
// Firestore - projectProposals 컬렉션
{
  company: string,           // 회사명
  email: string,            // 담당자 이메일
  project: string,          // 프로젝트 상세 내용
  targetCountry: string,    // 희망 진출 국가
  createdAt: Timestamp,     // 제출 시간
  status: "pending"         // 처리 상태
}
```

## 🌟 서비스 특징

**WORKO**는 외국인 유학생과 기업을 연결하여 무급 협업 프로젝트를 매칭하는 플랫폼입니다.

- 💰 **비용 부담 없는 글로벌 협업** - 무급 참여로 부담 없이 시작
- 🌍 **타겟 국가별 인재 매칭** - 일본, 미국, 베트남 등 원하는 국가의 유학생 연결  
- 🤝 **윈-윈 협업 구조** - 기업은 글로벌 관점 확보, 유학생은 현지 경력 쌓기
