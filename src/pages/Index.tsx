import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ProjectModal from "@/components/ProjectModal";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {
  Globe,
  Users,
  TrendingUp,
  Mail,
  Phone,
  ChevronRight,
  Star,
  Building2,
  MessageSquare,
  Zap,
  Heart,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    project: "",
    targetCountry: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 프로젝트 내용이 비어있는지 확인
    if (!formData.project.trim()) {
      toast({
        title: "프로젝트 내용을 입력해주세요",
        description: "프로젝트 내용은 필수 입력 항목입니다.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Firestore에 데이터 저장
      await addDoc(collection(db, "projectProposals"), {
        ...formData,
        createdAt: Timestamp.now(),
        status: "pending", // 제안서 상태 추가
      });

      toast({
        title: "프로젝트 제안이 접수되었습니다!",
        description: "24시간 내에 담당자가 연락드리겠습니다.",
      });

      // 폼 초기화
      setFormData({ company: "", email: "", project: "", targetCountry: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "제출 중 오류가 발생했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">WORKO</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              서비스
            </a>
            <a
              href="#cases"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              사례
            </a>
            <Button
              size="sm"
              onClick={() => (window.location.href = "#contact")}
            >
              프로젝트 등록
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 bg-white/80">
            🌍 글로벌 협업의 새로운 시작
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            외국인 유학생과 함께,
            <br />
            <span className="text-blue-600">당신의 브랜드를 세계로</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            무급 협업으로 해외 진출 준비를 더 똑똑하게.
            <br />
            검증된 외국인 유학생과 의미 있는 프로젝트를 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => (window.location.href = "#contact")}
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              프로젝트 등록하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "#contact")}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              문의하기
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 WORKO를 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              기업과 유학생 모두에게 의미 있는 기회를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  비용 부담 없는 글로벌 협업
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  비자 문제 없이 무급 참여 가능한 유학생과 실무 프로젝트로 바로
                  연결됩니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">
                  필요한 나라의 인재, 바로 매칭
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  일본·미국·베트남 등 해외 진출 타깃에 맞는 유학생과의 빠른
                  연결이 가능합니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">
                  모두에게 의미 있는 기회
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  기업은 글로벌 관점 강화, 유학생은 현지 이력 확보의 윈-윈
                  협업을 만들어갑니다.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              실제 기업들이 이렇게 활용했어요
            </h2>
            <p className="text-xl text-gray-600">
              다양한 분야에서 성공적인 협업 사례를 만들어가고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">일본 진출</Badge>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <CardTitle>뷰티 브랜드 A사</CardTitle>
                <CardDescription>
                  일본 유학생과 함께 현지 SNS 리뷰 분석
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "일본 진출을 준비하며 현지 소비자 트렌드를 파악하는 것이 가장
                  큰 과제였습니다. WORKO를 통해 만난 일본 유학생과 함께
                  인스타그램, 트위터 등 SNS 플랫폼의 뷰티 리뷰를 분석하여 현지
                  선호도를 정확히 파악할 수 있었습니다."
                </p>
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">
                    뷰티 스타트업 · 3주 프로젝트
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">글로벌 콘텐츠</Badge>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <CardTitle>에듀테크 스타트업 B</CardTitle>
                <CardDescription>
                  다국적 유학생과 글로벌 콘텐츠 아이디어 회의
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "해외 진출용 교육 콘텐츠를 기획하면서 각 나라별 교육 문화와
                  선호도를 이해하는 것이 중요했습니다. 미국, 베트남, 인도네시아
                  유학생들과의 정기 회의를 통해 현지 맞춤형 콘텐츠 전략을 수립할
                  수 있었습니다."
                </p>
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">
                    에듀테크 · 4주 프로젝트
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Form Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                지금 바로 프로젝트 제안해보세요
              </h2>
              <p className="text-xl text-blue-100">
                간단한 정보만 입력하면 24시간 내에 매칭이 시작됩니다
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  1분 프로젝트 제안서
                </CardTitle>
                <CardDescription className="text-center">
                  기본 정보를 입력해주시면 적합한 유학생을 매칭해드립니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        회사명 *
                      </label>
                      <Input
                        placeholder="회사명을 입력해주세요"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        이메일 *
                      </label>
                      <Input
                        type="email"
                        placeholder="contact@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      희망 진출 국가
                    </label>
                    <Input
                      placeholder="예: 일본, 미국, 베트남 등"
                      value={formData.targetCountry}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          targetCountry: e.target.value,
                        })
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      프로젝트 내용 *
                    </label>
                    <Textarea
                      placeholder="어떤 프로젝트를 함께 진행하고 싶으신지 간단히 설명해주세요"
                      value={formData.project}
                      readOnly
                      onClick={() => setShowModal(true)}
                      className="cursor-pointer bg-gray-50 min-h-[100px]"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>제출 중...</>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        프로젝트 제안서 제출하기
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
              <ProjectModal
                open={showModal}
                onClose={() => setShowModal(false)}
                initialText={formData.project}
                onSave={(text) => setFormData({ ...formData, project: text })}
              />
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                자주 묻는 질문
              </h2>
              <p className="text-xl text-gray-600">
                WORKO 서비스에 대해 궁금한 점들을 확인해보세요
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  유학생이 실제로 우리 회사에서 근무하나요?
                </AccordionTrigger>
                <AccordionContent>
                  아니요, 모든 협업은 무급 단기 프로젝트 형태로 진행됩니다.
                  유학생들은 본인의 학업과 병행하여 온라인/오프라인 회의 참여,
                  조사 및 분석 업무 등을 수행합니다. 정규 근무나 장기 고용
                  관계는 아닙니다.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  계약서나 보안 문제는 어떻게 처리하나요?
                </AccordionTrigger>
                <AccordionContent>
                  WORKO에서 기본 협업 계약서 양식을 제공해드리며, 필요시
                  NDA(비밀유지협약) 체결을 권장합니다. 민감한 정보가 포함된
                  프로젝트의 경우 사전에 보안 수준을 협의하여 진행합니다.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  프로젝트 기간은 보통 얼마나 되나요?
                </AccordionTrigger>
                <AccordionContent>
                  대부분의 프로젝트는 2-6주 정도 소요됩니다. 프로젝트 규모와
                  복잡도에 따라 조정 가능하며, 유학생들의 학기 일정을 고려하여
                  유연하게 진행됩니다.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  어떤 국가의 유학생과 매칭이 가능한가요?
                </AccordionTrigger>
                <AccordionContent>
                  현재 일본, 미국, 중국, 베트남, 인도네시아, 태국, 인도 등
                  다양한 국가 출신의 유학생들이 등록되어 있습니다. 특정 국가나
                  언어권이 필요하시면 매칭 시 우선적으로 고려해드립니다.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  서비스 이용 비용이 있나요?
                </AccordionTrigger>
                <AccordionContent>
                  기본 매칭 서비스는 무료로 제공됩니다. 다만, 전담 매니저
                  배정이나 추가 서포트가 필요한 경우 별도 상담을 통해 맞춤형
                  서비스를 제공할 수 있습니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">WORKO</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                외국인 유학생과 기업을 연결하여 글로벌 협업의 새로운 가능성을
                열어갑니다.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@WORKO.co.kr
                </Button>
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  02-1234-5678
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    프로젝트 매칭
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    기업 지원
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    유학생 등록
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">회사</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    회사 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    팀
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    채용
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    문의
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 WORKO. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                이용약관
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
