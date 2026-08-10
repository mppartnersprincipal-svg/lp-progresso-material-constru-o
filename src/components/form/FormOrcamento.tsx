"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { pushEvent } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { TextAreaField, TextField } from "@/components/form/Field";

/**
 * Formulário de orçamento (COPY — Elementos globais; PRD §10.1/§11.1).
 * Sem backend disponível nesta fase: o envio compõe a mensagem e abre o
 * WhatsApp da loja com os dados, dispara envio_formulario (com slug da
 * categoria) e navega para /obrigado — decisão D9 em docs/decisoes-design.md.
 * TODO: trocar por endpoint de e-mail/CRM se o cliente fornecer um.
 * Mensagens de erro literais da copy; erros descritos em texto (PRD §12).
 */
export function FormOrcamento({
  categoriaSlug,
  mensagemWhatsApp,
}: {
  categoriaSlug: string;
  mensagemWhatsApp: string;
}) {
  const router = useRouter();
  const [erroNome, setErroNome] = useState<string>();
  const [erroWhatsApp, setErroWhatsApp] = useState<string>();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const nome = String(dados.get("nome") ?? "").trim();
    const whatsapp = String(dados.get("whatsapp") ?? "").trim();
    const mensagem = String(dados.get("mensagem") ?? "").trim();

    const nomeOk = nome.length > 0;
    // DDD + 9 dígitos = 11 dígitos (aceita 10 para fixo com DDD)
    const digitos = whatsapp.replace(/\D/g, "");
    const whatsappOk = digitos.length === 10 || digitos.length === 11;

    setErroNome(nomeOk ? undefined : "Preencha seu nome para continuarmos.");
    setErroWhatsApp(
      whatsappOk ? undefined : "Confira o número — precisa ter DDD e 9 dígitos.",
    );
    if (!nomeOk || !whatsappOk) return;

    pushEvent("envio_formulario", { categoria: categoriaSlug });
    const texto = `${mensagemWhatsApp} ${mensagem} — Nome: ${nome} · WhatsApp: ${whatsapp}`;
    window.open(whatsappUrl(texto), "_blank", "noopener");
    router.push("/obrigado");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-[var(--space-4)]">
      <TextField id="nome" label="Seu nome" name="nome" autoComplete="name" error={erroNome} />
      <TextField
        id="whatsapp"
        label="Seu WhatsApp"
        name="whatsapp"
        placeholder="(62) 90000-0000"
        inputMode="tel"
        autoComplete="tel"
        error={erroWhatsApp}
      />
      <TextAreaField
        id="mensagem"
        label="O que você precisa?"
        name="mensagem"
        placeholder="Liste os materiais ou descreva o serviço"
      />
      <Button type="submit" size="lg" fullWidth>
        Enviar pedido de orçamento
      </Button>
      <p className="font-body text-[length:var(--text-xs)] text-muted">
        Ao enviar, você concorda com nossa{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>
    </form>
  );
}
