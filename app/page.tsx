"use client";

import { ChangeEvent, ReactNode, useEffect, useRef, useState } from "react";

type View = "inicio" | "camera" | "texto" | "voz" | "historico" | "ajustes";
type IconName = "home" | "camera" | "text" | "mic" | "history" | "settings" | "volume" | "stop" | "arrow" | "spark" | "shield" | "check" | "sun" | "plus" | "minus" | "upload" | "refresh";

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></>,
    camera: <><path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12.5" r="4"/></>,
    text: <><path d="M4 6h16"/><path d="M8 6v14M16 6v14M6 20h4M14 20h4"/></>,
    mic: <><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></>,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21H9.6v-.1A1.7 1.7 0 0 0 8.5 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.1 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H2V9.6h.4A1.7 1.7 0 0 0 4.1 8.5a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 8.5 4.1a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V2h4v.4A1.7 1.7 0 0 0 15 4.1a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 8.5a1.7 1.7 0 0 0 .6 1 1.7 1.7 0 0 0 1.1.4h.4v4h-.4A1.7 1.7 0 0 0 19.4 15Z"/></>,
    volume: <><path d="M11 5 6 9H3v6h3l5 4Z"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/></>,
    stop: <rect x="6" y="6" width="12" height="12" rx="2"/>,
    arrow: <path d="m9 18 6-6-6-6"/>,
    spark: <><path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9Z"/><path d="m19 15 .6 2.1L22 18l-2.4.9L19 21l-.6-2.1L16 18l2.4-.9Z"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.6 2.9 8 7 10 4.1-2 7-5.4 7-10V6Z"/><path d="m9 12 2 2 4-4"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    plus: <path d="M12 5v14M5 12h14"/>, minus: <path d="M5 12h14"/>,
    upload: <path d="M12 16V4m-5 5 5-5 5 5M4 15v4h16v-4"/>,
    refresh: <path d="M20 7v5h-5M4 17v-5h5M6.1 8a7 7 0 0 1 11.7-2L20 8M4 16l2.2 2a7 7 0 0 0 11.7-2"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Brand() {
  return <div className="brand" aria-label="ClariVoz"><span className="brand-mark"><span/><span/><span/><span/></span><span className="brand-name">Clari<span>Voz</span></span></div>;
}

const navItems: { view: View; label: string; icon: IconName }[] = [
  { view: "inicio", label: "Início", icon: "home" }, { view: "camera", label: "Câmera", icon: "camera" },
  { view: "texto", label: "Texto", icon: "text" }, { view: "historico", label: "Histórico", icon: "history" },
];

function ActionButton({ icon, title, text, tone, onClick }: { icon: IconName; title: string; text: string; tone: string; onClick: () => void }) {
  return <button className={`action-card ${tone}`} onClick={onClick}><span className="action-icon"><Icon name={icon} size={30}/></span><span className="action-copy"><strong>{title}</strong><small>{text}</small></span><span className="action-arrow"><Icon name="arrow" size={21}/></span></button>;
}

function PageHeader({ eyebrow, title, text, onBack }: { eyebrow: string; title: string; text: string; onBack: () => void }) {
  return <div className="page-heading"><button className="back-button" onClick={onBack} aria-label="Voltar para o início">‹</button><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></div>;
}

export default function Home() {
  const [view, setView] = useState<View>("inicio");
  const [largeText, setLargeText] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [scanReady, setScanReady] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [sourceText, setSourceText] = useState("O comparecimento para atualização cadastral deverá ocorrer no prazo máximo de 30 dias, mediante apresentação dos documentos comprobatórios.");
  const [simpleText, setSimpleText] = useState("");
  const [dictation, setDictation] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => { if (imageUrl) URL.revokeObjectURL(imageUrl); }, [imageUrl]);

  function speak(text: string) {
    if (!("speechSynthesis" in window)) return;
    if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); return; }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR"; utterance.rate = 0.88; utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance); setIsSpeaking(true);
  }
  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]; if (!file) return;
    if (imageUrl) URL.revokeObjectURL(imageUrl); setImageUrl(URL.createObjectURL(file)); setScanReady(false);
  }
  function processImage() { setIsProcessing(true); window.setTimeout(() => { setIsProcessing(false); setScanReady(true); }, 1100); }
  function simplify() { setIsProcessing(true); window.setTimeout(() => { setIsProcessing(false); setSimpleText("Você precisa atualizar seu cadastro em até 30 dias. Leve os documentos que comprovam suas informações."); }, 850); }
  function startDictation() {
    const SpeechRecognition = (window as typeof window & { webkitSpeechRecognition?: new () => { lang: string; interimResults: boolean; start: () => void; onresult: (e: { results: { 0: { transcript: string } }[] }) => void; onerror: () => void } }).webkitSpeechRecognition;
    if (!SpeechRecognition) { setDictation("O recurso de voz depende da permissão do navegador. Neste protótipo, você também pode digitar aqui."); return; }
    const recognition = new SpeechRecognition(); recognition.lang = "pt-BR"; recognition.interimResults = false;
    recognition.onresult = e => setDictation(e.results[0][0].transcript); recognition.onerror = () => setDictation("Não consegui ouvir. Toque no microfone e tente novamente."); recognition.start();
  }
  const scanText = "Consulta marcada para 22 de agosto, às 14h30. Chegue 20 minutos antes e leve um documento com foto e o cartão do SUS.";

  return <main className={`${largeText ? "large-text" : ""} ${contrast ? "high-contrast" : ""}`}>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <div className="site-shell">
      <aside className="desktop-sidebar">
        <Brand/>
        <div className="side-message"><span className="mini-label">TECNOLOGIA PARA TODOS</span><h2>Informação clara também é liberdade.</h2><p>Leia documentos, entenda mensagens e se comunique com mais autonomia.</p></div>
        <nav aria-label="Navegação principal">
          {navItems.map(item => <button key={item.view} className={view === item.view ? "active" : ""} onClick={() => setView(item.view)}><Icon name={item.icon}/><span>{item.label}</span></button>)}
          <button className={view === "ajustes" ? "active" : ""} onClick={() => setView("ajustes")}><Icon name="settings"/><span>Acessibilidade</span></button>
        </nav>
        <div className="privacy-note"><Icon name="shield" size={20}/><span>Seus dados ficam protegidos e sob seu controle.</span></div>
      </aside>

      <section className="app-window" aria-live="polite">
        <header className="mobile-header"><Brand/><button className="icon-button" onClick={() => setView("ajustes")} aria-label="Abrir preferências de acessibilidade"><Icon name="settings"/></button></header>
        <div className="screen-content">
          {view === "inicio" && <div className="home-screen">
            <div className="greeting-row"><div><span className="eyebrow">BEM-VINDA AO CLARIVOZ</span><h1>Como posso ajudar você hoje?</h1></div><span className="status-pill"><span/> Pronto para ouvir</span></div>
            <button className="hero-listen" onClick={() => speak("Olá! Escolha uma opção. Você pode ler um documento com a câmera, simplificar um texto ou falar para escrever.")}><span className="pulse-wrap"><span className="pulse-ring"/><span className="hero-icon"><Icon name={isSpeaking ? "stop" : "volume"} size={34}/></span></span><span><small>TOQUE PARA OUVIR</small><strong>{isSpeaking ? "Parar explicação" : "Ouvir esta tela"}</strong></span></button>
            <div className="section-title"><h2>O que você quer fazer?</h2><span>3 caminhos simples</span></div>
            <div className="action-list"><ActionButton icon="camera" title="Ler com a câmera" text="Fotografe cartas, placas ou receitas" tone="tone-teal" onClick={() => setView("camera")}/><ActionButton icon="text" title="Entender um texto" text="Troque palavras difíceis por linguagem clara" tone="tone-violet" onClick={() => setView("texto")}/><ActionButton icon="mic" title="Falar para escrever" text="Dite uma mensagem usando sua voz" tone="tone-coral" onClick={() => setView("voz")}/></div>
            <div className="tip-card"><span className="tip-icon"><Icon name="spark"/></span><div><strong>Dica do dia</strong><p>Toque no símbolo de som sempre que quiser ouvir uma explicação.</p></div></div>
          </div>}

          {view === "camera" && <div><PageHeader eyebrow="LEITURA POR IMAGEM" title="Aponte, fotografe e ouça" text="Use uma imagem legível e evite sombras sobre o papel." onBack={() => setView("inicio")}/>
            <div className={`camera-stage ${imageUrl ? "has-image" : ""}`}>{imageUrl ? <img src={imageUrl} alt="Documento selecionado para leitura"/> : <><div className="focus-corners"/><span className="camera-illustration"><Icon name="camera" size={48}/></span><strong>Posicione o documento aqui</strong><p>A foto será usada apenas para esta leitura.</p></>}<input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handleFile} className="sr-only"/></div>
            <div className="button-row"><button className="secondary-button" onClick={() => fileRef.current?.click()}><Icon name="upload" size={20}/>{imageUrl ? "Trocar imagem" : "Escolher imagem"}</button>{imageUrl && <button className="primary-button" onClick={processImage} disabled={isProcessing}>{isProcessing ? <span className="loader"/> : <Icon name="spark" size={20}/>} {isProcessing ? "Lendo..." : "Ler conteúdo"}</button>}</div>
            {scanReady && <div className="result-card"><span className="result-badge"><Icon name="check" size={17}/> Texto identificado</span><h2>Em palavras simples</h2><p>{scanText}</p><button className="listen-button" onClick={() => speak(scanText)}><Icon name={isSpeaking ? "stop" : "volume"}/>{isSpeaking ? "Parar leitura" : "Ouvir em voz alta"}</button></div>}</div>}

          {view === "texto" && <div><PageHeader eyebrow="LINGUAGEM SIMPLES" title="Entenda textos difíceis" text="Cole ou escreva a mensagem. O sentido será mantido com palavras mais claras." onBack={() => setView("inicio")}/><label className="field-label" htmlFor="source-text">Texto original</label><div className="textarea-wrap"><textarea id="source-text" value={sourceText} onChange={e => setSourceText(e.target.value)} maxLength={900}/><span>{sourceText.length}/900</span></div><button className="primary-button full-button" onClick={simplify} disabled={!sourceText.trim() || isProcessing}>{isProcessing ? <span className="loader"/> : <Icon name="spark"/>}{isProcessing ? "Simplificando..." : "Deixar mais fácil"}</button>{simpleText && <div className="result-card accent"><span className="result-badge"><Icon name="spark" size={17}/> Versão simplificada</span><h2>Agora ficou mais claro</h2><p>{simpleText}</p><div className="result-actions"><button className="listen-button" onClick={() => speak(simpleText)}><Icon name={isSpeaking ? "stop" : "volume"}/>{isSpeaking ? "Parar" : "Ouvir"}</button><button className="ghost-button" onClick={() => navigator.clipboard?.writeText(simpleText)}>Copiar texto</button></div></div>}</div>}

          {view === "voz" && <div><PageHeader eyebrow="DITADO POR VOZ" title="Fale. O ClariVoz escreve." text="Use para criar mensagens sem precisar digitar." onBack={() => setView("inicio")}/><div className="dictation-card"><button className="mic-button" onClick={startDictation} aria-label="Começar a falar"><span className="mic-wave"/><Icon name="mic" size={38}/></button><strong>Toque no microfone e fale</strong><p>Fale devagar e perto do aparelho.</p></div><label className="field-label" htmlFor="dictation">Sua mensagem</label><textarea id="dictation" className="dictation-text" value={dictation} onChange={e => setDictation(e.target.value)} placeholder="Sua fala aparecerá aqui..."/><div className="button-row"><button className="secondary-button" onClick={() => setDictation("")} disabled={!dictation}><Icon name="refresh" size={19}/> Limpar</button><button className="primary-button" onClick={() => speak(dictation)} disabled={!dictation}><Icon name="volume" size={20}/> Ouvir mensagem</button></div></div>}

          {view === "historico" && <div><PageHeader eyebrow="SUAS LEITURAS" title="Histórico recente" text="Acesse rapidamente informações que você já simplificou." onBack={() => setView("inicio")}/><div className="history-list">{[
            {date:"Hoje, 10:42",title:"Agendamento de consulta",text:"Consulta marcada para 22 de agosto...",type:"Câmera",icon:"camera" as IconName},
            {date:"Ontem, 18:15",title:"Atualização de cadastro",text:"Você precisa atualizar seu cadastro em...",type:"Texto",icon:"text" as IconName},
            {date:"15 ago, 14:08",title:"Mensagem para família",text:"Vou chegar em casa por volta das seis...",type:"Voz",icon:"mic" as IconName},
          ].map(item => <button className="history-item" key={item.title} onClick={() => speak(item.text)}><span className="history-icon"><Icon name={item.icon}/></span><span className="history-copy"><small>{item.date} · {item.type}</small><strong>{item.title}</strong><p>{item.text}</p></span><Icon name="volume" size={21}/></button>)}</div><div className="privacy-banner"><Icon name="shield"/><div><strong>Você decide o que fica salvo</strong><p>Apague o histórico a qualquer momento nas preferências.</p></div></div></div>}

          {view === "ajustes" && <div><PageHeader eyebrow="SEU JEITO DE USAR" title="Acessibilidade" text="Ajuste a experiência para ficar confortável para você." onBack={() => setView("inicio")}/><div className="settings-group"><div className="setting-row"><span className="setting-icon"><Icon name="text"/></span><div><strong>Tamanho do texto</strong><p>{largeText ? "Texto ampliado" : "Texto padrão"}</p></div><div className="stepper"><button onClick={() => setLargeText(false)} aria-label="Diminuir texto"><Icon name="minus" size={18}/></button><span>Aa</span><button onClick={() => setLargeText(true)} aria-label="Aumentar texto"><Icon name="plus" size={18}/></button></div></div><div className="setting-row"><span className="setting-icon"><Icon name="sun"/></span><div><strong>Alto contraste</strong><p>Cores mais fortes na tela</p></div><button className={`toggle ${contrast ? "on" : ""}`} onClick={() => setContrast(!contrast)} aria-pressed={contrast}><span/></button></div><div className="setting-row"><span className="setting-icon"><Icon name="volume"/></span><div><strong>Velocidade da voz</strong><p>Leitura mais lenta</p></div><span className="choice-pill">Calma</span></div></div><button className="voice-test" onClick={() => speak("Olá! Esta é a velocidade escolhida para a leitura.")}><Icon name="volume"/><span><small>TESTE DE ÁUDIO</small><strong>Ouvir uma frase de exemplo</strong></span></button><div className="access-note"><Icon name="check"/><p>Todos os controles possuem rótulos de áudio e funcionam pelo teclado.</p></div></div>}
        </div>
        <nav className="bottom-nav" aria-label="Navegação no celular">{navItems.map(item => <button key={item.view} className={view === item.view ? "active" : ""} onClick={() => setView(item.view)}><Icon name={item.icon}/><span>{item.label}</span></button>)}</nav>
      </section>
    </div>
    <p className="prototype-label">Protótipo funcional · Projeto de Geovanna Eduarda da Silva</p>
  </main>;
}
