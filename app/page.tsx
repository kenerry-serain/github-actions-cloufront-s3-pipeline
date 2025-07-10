"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Cloud,
  Container,
  GitBranch,
  Settings,
  Network,
  Server,
  Check,
  Shield,
  ChevronDown,
  Calendar,
} from "lucide-react"
import Image from "next/image"

export default function DevOpsLandingPage() {
  // Modal state
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState("")
  const [ddd, setDdd] = useState("+55")
  const [phone, setPhone] = useState("")

  const dddOptions = [
    { code: "+55", label: "Brasil (+55)" },
    { code: "+1", label: "EUA (+1)" },
    { code: "+351", label: "Portugal (+351)" },
    { code: "+34", label: "Espanha (+34)" },
    { code: "+44", label: "Reino Unido (+44)" },
    { code: "+49", label: "Alemanha (+49)" },
    { code: "+33", label: "França (+33)" },
  ]

  const handleCheckout = () => {
    // Optionally validate fields here
    if (!email || !phone) {
      alert("Por favor, preencha todos os campos")
      return
    }
    
    // Create the Hotmart URL with email and phone as query parameters
    const hotmartUrl = new URL("https://pay.hotmart.com/G100520469U")
    hotmartUrl.searchParams.set("off", "yytm9x8a")
    hotmartUrl.searchParams.set("checkoutMode", "10")
    hotmartUrl.searchParams.set("email", email)
    hotmartUrl.searchParams.set("phonenumber", `${phone}`)
    
    // Add UTM parameters from current URL if they exist
    const currentUrl = new URL(window.location.href)
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']
    
    utmParams.forEach(param => {
      const value = currentUrl.searchParams.get(param)
      if (value) {
        hotmartUrl.searchParams.set(param, value)
      }
    })
    
    window.location.href = hotmartUrl.toString()
  }

  const openModal = () => {
    // Clear modal fields when opening
    setEmail("")
    setPhone("")
    setDdd("+55")
    setShowModal(true)
  }

  const learningTopics = [
    {
      icon: <Cloud className="h-8 w-8 text-orange-500" />,
      title: "AWS",
      description:
        "Domine os serviços essenciais da Amazon Web Services para construir infraestruturas robustas na nuvem.",
    },
    {
      icon: <Container className="h-8 w-8 text-blue-500" />,
      title: "EKS",
      description: "Aprenda a gerenciar clusters Kubernetes na AWS com Amazon Elastic Kubernetes Service.",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-purple-500" />,
      title: "GitHub Actions",
      description: "Automatize seus workflows de CI/CD com GitHub Actions para deploy contínuo.",
    },
    {
      icon: <Settings className="h-8 w-8 text-green-500" />,
      title: "ArgoCD",
      description: "Implemente GitOps com ArgoCD para gerenciamento declarativo de aplicações Kubernetes.",
    },
    {
      icon: <Server className="h-8 w-8 text-indigo-500" />,
      title: "Terraform",
      description: "Crie e gerencie infraestrutura como código usando Terraform para provisionamento automatizado.",
    },
    {
      icon: <Network className="h-8 w-8 text-red-500" />,
      title: "Redes",
      description: "Entenda conceitos fundamentais de redes para arquiteturas cloud-native seguras.",
    },
  ]

  const faqItems = [
       {
      question: "O workshop é hands on mesmo ou encheção de linguiça?",
      answer:
        "O Workshop tem enfâse em um projeto 100% Hands On do começo ao fim, visando explorar as tecnologias mais relevantes do mercado de trabalho para DevOps e Nuvem: AWS, Terraform e Kubernetes.",
    },
    {
      question: "As aulas ficarão gravadas?",
      answer: "Sim! As gravações serão disponibilizadas para quem quiser adquirir na página de checkout.",
    },
    {
      question: "Haverá certificado no final?",
      answer:
        "Sim, todos os participantes que comparecerem aos 4 dias do evento fechado, receberão certificado de participação personalizado com seu nome.",
    },
    {
      question: "Posso fazer perguntas durante as aulas?",
      answer: "Claro! Haverá momentos dedicados para perguntas e interação com o instrutor durante cada aula.",
    },
    // {
    //   question: "Como funciona a garantia?",
    //   answer:
    //     "Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu investimento.",
    // },
  ]


  // Progress bar logic
  // Dates: today = 07/07/2025, end = 27/07/2025
  const startDate = new Date(2025, 6, 7) // months are 0-indexed
  const endDate = new Date(2025, 6, 27)
  const today = new Date()
  // Clamp today between start and end
  const clampedToday = today < startDate ? startDate : today > endDate ? endDate : today
  const totalDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  const daysPassed = (clampedToday.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  // Start at 27%, end at 100%
  const percent = Math.round(27 + ((100 - 27) * (daysPassed / totalDays)))

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950"
      style={{
        background: "linear-gradient(to bottom right, #000000, #0f172a, #1e3a8a)",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 pb-16 md:pb-0"
        style={{
          background: "linear-gradient(to bottom right, #000000, #0f172a, #1e3a8a)",
          minHeight: "100vh",
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mt-12">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Workshop</span>
            <br />
            <span className="text-white">DevOps na Nuvem</span>
          </h1>

          {/* Subtitle Question */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mt-2">
            Aprenda a trabalhar com as ferramentas mais relevantes do mercado em suas respectivas áreas
          </p>

          {/* Event Date */}
          <div className="mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-1">
              <Calendar className="h-5 w-5 text-cyan-400 mr-2" />
              <div className="flex flex-col justify-center">
                <span className="text-base font-semibold text-white leading-tight">28/07 à 31/07</span>
                <span className="text-xs text-blue-200 leading-tight">às 19:30 (Brasília)</span>
              </div>
            </div>
          </div>

          {/* Learning Box */}
          <div className="border border-gray-600 rounded-2xl p-8 md:p-12 mb-8 bg-black/50 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Você vai aprender:</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white text-lg">Trabalhar na maior Cloud do mundo (AWS)</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white text-lg">
                  Implementar um projeto com a ferramenta de IaC mais usada do mundo (Terraform)
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white text-lg">Hands On com Kubernetes (EKS) e orquestração de containers</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-white text-lg">GitHub Actions Pipelines com GitOps e ArgoCD</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 border-0"
            onClick={openModal}
          >
            Comprar Ingresso | 2º Lote
          </Button>

          {/* Progress Bar Section */}
          <div className="mt-8 flex flex-col items-center">
            <div className="w-full max-w-md">
              <div className="w-full bg-blue-900/40 rounded-full h-5 mb-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-5 rounded-full transition-all duration-700"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300 text-sm font-medium ml-1">{percent}% dos ingressos vendidos a R$ 29,00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Topics Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Tecnologias</h2>
          <p className="text-xl text-blue-200 text-center mb-12 max-w-3xl mx-auto">
            Domine as principais ferramentas do ecossistema DevOps e Cloud Computing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningTopics.map((topic, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-300 bg-white/10 backdrop-blur-sm border-blue-300/30"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{topic.icon}</div>
                  <CardTitle className="text-xl font-bold text-white">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200 text-center">{topic.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-slate-900 to-blue-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Cronograma do Evento</h2>
          <p className="text-xl text-blue-200 text-center mb-16 max-w-3xl mx-auto">
            4 dias intensivos de aprendizado prático com as principais ferramentas DevOps
          </p>

          <div className="space-y-8">
            {/* Aula 1 */}
            <Card className="bg-white/10 backdrop-blur-sm border-blue-300/30 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-lg text-center w-full lg:min-w-[120px] lg:w-auto">
                      <div className="text-2xl font-bold">28/07</div>
                      <div className="text-sm opacity-90">Aula 01</div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">Fundamentos de Terraform</h3>
                    <p className="text-blue-100 mb-4">Nesta aula você aprenderá:</p>
                    <ul className="space-y-2 text-blue-200">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Setup AWS</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Setup Terraform</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Fundamentos de Terraform</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Convenções de nomenclatura de Terraform</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Melhores práticas na hora de se autenticar o Terraform com AWS</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Trabalhar com Remote State no S3</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Trabalhar com State Locking no Dynamo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aula 2 */}
            <Card className="bg-white/10 backdrop-blur-sm border-blue-300/30 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-4 rounded-lg text-center w-full lg:min-w-[120px] lg:w-auto">
                      <div className="text-2xl font-bold">29/07</div>
                      <div className="text-sm opacity-90">Aula 02</div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">Fundamentos de Redes na AWS</h3>
                    <p className="text-blue-100 mb-4">Nesta aula você aprenderá:</p>
                    <ul className="space-y-2 text-blue-200">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Fundamentos de redes na AWS</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Montar uma rede real para ser utilizada por um Cluster Kubernetes (EKS) posteriormente</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Trabalhar com subnets públicas e privadas na AWS</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Trabalhar com os componentes: VPC, Subnets, Tabelas de Roteamento, NAT Gateway e Internet Gateway</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aula 3 */}
            <Card className="bg-white/10 backdrop-blur-sm border-blue-300/30 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <div className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white px-6 py-4 rounded-lg text-center w-full lg:min-w-[120px] lg:w-auto">
                      <div className="text-2xl font-bold">30/07</div>
                      <div className="text-sm opacity-90">Aula 03</div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">Criando Cluster EKS na Unha</h3>
                    <p className="text-blue-100 mb-4">Nesta aula você aprenderá:</p>
                    <ul className="space-y-2 text-blue-200">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Fundamentos de Kubernetes na AWS</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Criar um Cluster EKS do absoluto zero na unha com Terraform (sem módulos)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Encapsular aplicações para rodar dentro do Cluster Kubernetes (kubernetes workload)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Fazer o deployment de duas aplicações neste Cluster, uma frontend e outra backend</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aula 4 */}
            <Card className="bg-white/10 backdrop-blur-sm border-blue-300/30 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <div className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white px-6 py-4 rounded-lg text-center w-full lg:min-w-[120px] lg:w-auto">
                      <div className="text-2xl font-bold">31/07</div>
                      <div className="text-sm opacity-90">Aula 04</div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">GitHub Actions Pipeline com ArgoCD</h3>
                    <p className="text-blue-100 mb-4">Nesta aula você aprenderá:</p>
                    <ul className="space-y-2 text-blue-200">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Fundamentos de GitOps</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Como distribuir novas versões de uma aplicação (kubernetes) utilizando ArgoCD</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Como trabalhar com Kustomize para gerenciar manifestos Kubernetes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="block text-left">Como criar uma pipeline de deployment contínuo no GitHub Actions integrada com ArgoCD</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-200 text-lg mb-6">Todas as aulas vão acontecer às 19:30 (horário de Brasília)</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={openModal}
            >
              Comprar Ingresso | 2º Lote
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Quanto custa?</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card com o que está incluído */}
            <Card className="shadow-2xl border-2 border-blue-300/30 bg-white/10 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold">O que está incluído no workshop</CardTitle>
                <CardDescription className="text-blue-100">Tudo que você vai implementar ao vivo no zoom:</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 text-left">
                  <li className="flex items-start text-blue-200">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    Redes na AWS
                  </li>
                  <li className="flex items-start text-blue-200">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    Terraform Avançado na AWS
                  </li>
                  <li className="flex items-start text-blue-200">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    Cluster Kubernetes (EKS) do zero
                  </li>
                  <li className="flex items-start text-blue-200">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    GitHub Actions Pipelines
                  </li>
                    <li className="flex items-start text-blue-200">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    GitOps, ArgoCD e Kustomize
                  </li>
                  <li className="flex items-start text-blue-200">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    Bônus: Dois desafios extras de AWS
                  </li>
                  
                  <li className="flex items-start text-blue-200">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-bold text-white">Aulas 100% Hands On</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card principal com preço e botão */}
            <Card className="shadow-2xl border-2 border-blue-300/30 relative bg-white/10 backdrop-blur-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 text-sm font-bold">
                  VAGAS LIMITADAS
                </Badge>
              </div>
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl font-bold">Workshop DevOps na Nuvem</CardTitle>
                <CardDescription className="text-blue-100 text-lg">Acesso completo ao evento de 4 dias</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <div className="text-5xl font-bold text-cyan-400 mb-3">R$29,00</div>
                  <p className="text-blue-300 text-lg">ou 4x de R$ 7,89</p>
                </div>

                {/* Progress Bar Section */}
                <div className="mb-8 flex flex-col items-center">
                  <div className="w-full">
                    <div className="w-full bg-blue-900/40 rounded-full h-4 mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-4 rounded-full transition-all duration-700"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <span className="text-blue-300 text-sm font-medium">{percent}% dos ingressos a R$ 29,00</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-5 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                  onClick={openModal}
                >
                  Comprar Ingresso | 2º Lote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      {/**
      <section className="py-20 px-4 bg-gradient-to-br from-black via-slate-900 to-blue-950">
        <div className="max-w-4xl mx-auto text-center lg:text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-green-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Garantia de 7 dias</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto text-left lg:text-center">
            Estamos tão confiantes na qualidade do nosso conteúdo que oferecemos
            <strong className="text-cyan-400"> 7 dias de garantia incondicional</strong>. Se por qualquer motivo você
            não ficar satisfeito, devolvemos 100% do seu investimento.
          </p>
        </div>
      </section>
      */}

      {/* Porque tão barato? Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-slate-900 to-blue-950">
        <div className="max-w-4xl mx-auto text-center lg:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Por que tão barato?</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto text-left lg:text-left">
            Nós decidimos <strong className="text-cyan-400">inverter a lógica</strong>. Em um mercado onde se cobra muito para entregar pouco,
            nós decidimos cobrar pouco e entregar muito.
            A ideia é que você tenha acesso a um conteúdo de qualidade, por um preço acessível,
            e conheça o trabalho do <strong className="text-cyan-400">Kenerry Serain</strong>. O trabalho
            de alguém sério que entrega conteúdo denso, daí os próximos passos são com você.
          </p>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Seu Instrutor</h2>

          <Card className="max-w-5xl mx-auto shadow-lg bg-white/10 backdrop-blur-sm border-blue-300/30">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                
                <div className="text-left flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3">Kenerry Serain</h3>
                  <p className="text-xl text-cyan-400 mb-6">
                    Arquiteto Cloud e de Software c/ mais de 10 anos de experiência
                  </p>
                  <p className="text-blue-200 leading-relaxed mb-8 text-lg">
                    Kenerry hoje atua como Cloud and Software Architect remotamente para uma Consultoria AWS na
                    Califórnia. Graduado em Ciência da Computação, é apaixonado por Cloud, Linux, Containers e
                    Programação. Kenerry está sempre buscando entender as coisas no mais baixo nível possível e adora
                    contribuir com a comunidade através de projetos open-source, artigos, palestras e também
                    solucionando problemas desafiadores. Apesar da vasta experiência no desenvolvimento de software,
                    principalmente com C#, nos últimos anos, Kenerry tem se dedicado ao mundo de arquitetura cloud e
                    infraestruturas modernas em aplicações de médio e grande porte.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/Ads (4).png?height=400&width=300"
                    alt="Kenerry Serain - Instrutor"
                    width={300}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-slate-900 to-blue-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Perguntas Frequentes</h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-white/10 backdrop-blur-sm hover:bg-white/15 rounded-lg transition-colors duration-200 border border-blue-300/30">
                  <span className="text-left font-semibold text-white">{item.question}</span>
                  <ChevronDown className="h-5 w-5 text-blue-300" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 bg-white/5 backdrop-blur-sm border border-blue-300/20 rounded-b-lg">
                  <p className="text-blue-200 leading-relaxed">{item.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-black via-slate-900 to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Não perca esta oportunidade!</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Vagas limitadas. Garante a sua agora e transforme sua carreira em DevOps.
          </p>
          <Button
            size="lg"
            onClick={openModal}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Comprar Ingresso | 2º Lote
          </Button>
        </div>
      </section>

      {/* Modal for Checkout */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-black border border-blue-400/40 rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-blue-300 hover:text-cyan-400 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Preencha para continuar</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }} className="space-y-4">
              <div>
                <label className="block text-blue-200 mb-2 font-medium" htmlFor="form_email">E-mail</label>
                <input
                  id="form_email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 text-white border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                />
              </div>
              <div className="flex gap-3">
                <div className="w-2/5">
                  <label className="block text-blue-200 mb-2 font-medium" htmlFor="form_ddd">País</label>
                  <select
                    id="form_ddd"
                    className="w-full px-3 py-3 rounded-lg bg-slate-800/50 text-white border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                    value={ddd}
                    onChange={(e) => setDdd(e.target.value)}
                  >
                    {dddOptions.map(opt => (
                      <option key={opt.code} value={opt.code}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-blue-200 mb-2 font-medium" htmlFor="form_phone">Telefone</label>
                  <input
                    id="form_phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 text-white border border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="99999-9999"
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 mt-6"
              >
                IR PARA O CHECKOUT
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
