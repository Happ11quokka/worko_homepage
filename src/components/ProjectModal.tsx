// src/components/ProjectModal.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const defaultTemplate = `📝 아래 항목 중 작성 가능한 부분만 간단히 채워주세요!

✅ 회사명 / 브랜드명: (예: ABC F&B)

✅ 필요한 국가·언어권: (예: 일본 / 일본어 가능자 선호)

✅ 희망 프로젝트 내용: (예: 현지 식품 트렌드 조사, 브랜드 SNS 번역 및 댓글 모니터링 등)

✅ 진행 희망 기간: (예: 2주간 / 6월 말까지 / ASAP)

✅ 모집 기간: (예: 상시 모집, 6월 30일)

✅ 필요 인원 수 (선택): (예: 1~2명)

✅ 참고자료 / 참고링크 (선택): (예: 우리 브랜드 홈페이지 / 기존 마케팅 자료)

✅ 기타 요청사항: (예: 마케팅 전공 선호 / 디자인 툴 가능자 환영 등)

✅ 근무 형태 및 근무 장소 (대면/비대면): 

WORKO가 연락드릴 담당자 성함 및 연락처:
`;

export default function ProjectModal({ open, onClose, onSave, initialText }) {
  const [text, setText] = useState(defaultTemplate);

  useEffect(() => {
    if (initialText && initialText.trim() !== "") {
      setText(initialText);
    } else {
      setText(defaultTemplate);
    }
  }, [initialText]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로젝트 제안 양식</DialogTitle>
        </DialogHeader>
        <Textarea
          className="min-h-[300px]"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button
            onClick={() => {
              onSave(text);
              onClose();
            }}
          >
            입력 완료
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
