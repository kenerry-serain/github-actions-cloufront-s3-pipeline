"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Calendar, Clock, Users, Gift, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950">
      {/* Main Thank You Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-600/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <CheckCircle className="h-24 w-24 text-green-400 animate-bounce" />
              <div className="absolute inset-0 h-24 w-24 bg-green-400/20 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Meus parabéns! 🎉</h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sua inscrição foi confirmada com sucesso! Em breve você receberá as informações de acesso a plataforma
            no seu e-mail e dentro da plataforma você encontrará todas informações do evento.
          </p>

          {/* Next Steps */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-sm">
              <Card className="bg-white/5 backdrop-blur-sm border-blue-300/20 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Verifique seu E-mail</h3>
                  <p className="text-blue-200 text-sm">Enviamos todas as informações para o e-mail cadastrado</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 bg-transparent"
              >
                Voltar ao Início
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">O que acontece agora?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-blue-300/30">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">1</Badge>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-3">Confirmação por E-mail</h3>
                    <p className="text-blue-200">
                      Você receberá um e-mail de confirmação da compra, acesse a plataforma e leia os detalhes do evento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-blue-300/30">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Badge className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">2</Badge>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-3">Preparação</h3>
                    <p className="text-blue-200">
                      Não precisa se preocupar com nada, apenas garanta acesso a uma conta AWS e o resto das configurações
                      faremos em aula.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-blue-300/30">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Badge className="bg-cyan-700 text-white px-3 py-1 rounded-full text-sm font-bold">3</Badge>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-3">Dia do Evento</h3>
                    <p className="text-blue-200">
                      No dia 28/07 às 19:30, acesse o link do Zoom dentro da plataforma e prepare-se para 
                      uma experiência incrível de aprendizado!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-4 bg-gradient-to-r from-black to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm">
            Estamos ansiosos para te ver nas aulas e ajudar você a dominar DevOps na nuvem.
          </p>
        </div>
      </section>
    </div>
  )
}
