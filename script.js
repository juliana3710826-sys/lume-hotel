(() => {

class Quarto {
    constructor(id, nome, preco, descricao, fotos) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.fotos = fotos;
    }

    calcularValor(noites) {
        return this.preco * noites;
    }
}


class Reserva {
    constructor(codigo, quarto, entrada, saida, noites, nome, cpf, email, hospedes, telefone) {
        this.codigo = codigo;
        this.quarto = quarto;
        this.entrada = entrada;
        this.saida = saida;
        this.noites = noites;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.hospedes = hospedes;
        this.telefone = telefone;
        this.criadaEm = new Date().toISOString();
    }

    calcularTotal(quarto) {
        return this.noites * quarto.preco;
    }
}

class GerenciadorReservas {
    constructor(chaveArmazenamento) {
        this.chave = chaveArmazenamento;
    }

    listar() {
        try {
            return JSON.parse(
                localStorage.getItem(this.chave) || "[]"
            );
        } catch {
            return [];
        }
    }

    salvar(reservas) {
        localStorage.setItem(
            this.chave,
            JSON.stringify(reservas)
        );
    }

    adicionar(reserva) {
        const reservas = this.listar();
        reservas.push(reserva);
        this.salvar(reservas);
    }

    cancelar(codigo) {
        const reservas = this.listar().filter(
            reserva => reserva.codigo !== codigo
        );

        this.salvar(reservas);
    }
}

// Mantém o cadastro de hóspedes sincronizado com as reservas confirmadas.
class Cliente {
    constructor(dados) {
        Object.assign(this, dados);
    }
}

class GerenciadorClientes {
    constructor(chaveArmazenamento) {
        this.chave = chaveArmazenamento;
    }

    listar() {
        try {
            const dados = JSON.parse(localStorage.getItem(this.chave) || "[]");
            return Array.isArray(dados) ? dados : [];
        } catch {
            return [];
        }
    }

    salvar(clientes) {
        localStorage.setItem(this.chave, JSON.stringify(clientes));
    }

    registrarReserva(reserva) {
        const clientes = this.listar();
        const cpfNormalizado = String(reserva.cpf || "").replace(/\D/g, "");
        const existente = clientes.find(cliente =>
            String(cliente.cpf || "").replace(/\D/g, "") === cpfNormalizado
        );

        const dadosAtualizados = {
            nome: reserva.nome,
            cpf: reserva.cpf,
            email: reserva.email,
            telefone: reserva.telefone || (existente && existente.telefone) || "",
            endereco: (existente && existente.endereco) || "",
            origem: existente && existente.origem ? existente.origem : "reserva"
        };

        if (existente) {
            Object.assign(existente, dadosAtualizados, { atualizadoEm: new Date().toISOString() });
        } else {
            clientes.push(new Cliente({
                id: (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : `cliente-${Date.now()}`,
                ...dadosAtualizados,
                criadoEm: new Date().toISOString()
            }));
        }

        this.salvar(clientes);
    }
}

const gerenciadorClientes = new GerenciadorClientes("lumeHotelClientes");

const quartosPadrao = [
    new Quarto("lume", "Quarto LUME", 350, "Conforto e tranquilidade para descansar bem.", [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
    ]),
    new Quarto("deluxe", "Quarto Deluxe", 480, "Mais espaço, detalhes especiais e uma atmosfera acolhedora.", [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85"
    ]),
    new Quarto("suite", "Suíte LUME", 650, "Uma estadia especial com amplitude e sofisticação.", [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85"
    ])
];

// O painel administrativo mantém o catálogo no mesmo navegador.
let quartosConfigurados = [];
try { quartosConfigurados = JSON.parse(localStorage.getItem("lumeHotelQuartos") || "[]"); } catch { quartosConfigurados = []; }
const quartos = quartosConfigurados.length
    ? quartosConfigurados.filter(q => q.ativo !== false).map(q => new Quarto(
        q.id, q.nome, Number(q.preco), q.descricao || "Acomodação LUME Hotel.",
        (q.fotos && q.fotos.length ? q.fotos : quartosPadrao.find(p => p.id === q.id)?.fotos) || quartosPadrao[0].fotos
      ))
    : quartosPadrao;

function buscarQuarto(id) {
    return quartos.find(quarto => quarto.id === id);
}

  const $ = id => document.getElementById(id);
  const form = $("formReserva");
  if (!form) return;

  // Máscara de telefone: (00) 0000-0000 ou (00) 00000-0000.
  const campoTelefoneReserva = $("telefone");
  function formatarTelefone(valor) {
    const numeros = String(valor || "").replace(/\D/g, "").slice(0, 11);
    if (!numeros) return "";
    if (numeros.length <= 2) return `(${numeros}`;
    if (numeros.length <= 6) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    if (numeros.length <= 10) return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  }
  if (campoTelefoneReserva) {
    campoTelefoneReserva.addEventListener("input", () => {
      campoTelefoneReserva.value = formatarTelefone(campoTelefoneReserva.value);
    });
  }

  const room = $("quarto"), checkin = $("entrada"), checkout = $("saida");
  const quartoInicial = room.value;
  room.replaceChildren();
  quartos.forEach(q => room.add(new Option(`${q.nome} — ${q.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}/noite`, q.id)));
  if (!quartos.some(q => q.id === quartoInicial)) room.value = quartos[0]?.id || "";
  if (!quartos.length) { setTimeout(() => { const msg = $("mensagem"); if (msg) msg.textContent = "No momento não há acomodações disponíveis para reserva."; }, 0); room.disabled = true; return; }
  const today = new Date(); today.setHours(0,0,0,0);
  const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  const adicionarUmDia = data => {
    const novaData = new Date(data + "T12:00:00");
    novaData.setDate(novaData.getDate() + 1);
    return iso(novaData);
};
  checkin.min = iso(today); checkout.min = iso(today);
  const params = new URLSearchParams(location.search);
  if (buscarQuarto(params.get("quarto"))) room.value = params.get("quarto");

  let viewMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  let selectedStart = null, selectedEnd = null;
  const storageKey = "lumeHotelReservasDemo";

  const gerenciadorReservas =
    new GerenciadorReservas(storageKey);
  
function getReservations() {
    return gerenciadorReservas.listar();
}

function saveReservations(items) {
    gerenciadorReservas.salvar(items);
}

  function formatDate(s) {
    if (!s) return "—";
    const [y,m,d] = s.split("-").map(Number);
    return new Date(y,m-1,d).toLocaleDateString(localidadeLume());
  }
  function nightsBetween(a,b) {
    if (!a || !b) return 0;
    return Math.round((new Date(b+"T12:00:00") - new Date(a+"T12:00:00")) / 86400000);
  }
  function overlaps(a,b,c,d) { return a < d && c < b; }
  function isBooked(date, roomValue = room.value) {
    return getReservations().some(r => r.quarto === roomValue && date >= r.entrada && date < r.saida);
  }
  function rangeAvailable(start,end,roomValue=room.value) {
    if (!start || !end || end <= start) return false;
    return !getReservations().some(r => r.quarto === roomValue && overlaps(start,end,r.entrada,r.saida));
  }
  function setMessage(msg,type="erro") {
    const el=$("mensagem"); el.textContent=msg; el.className="mensagem "+type;
  }
  function clearMessage() { const el=$("mensagem"); el.textContent=""; el.className="mensagem"; }

  function updateRoom() {
    const quartoAtual = buscarQuarto(room.value);
    if (!quartoAtual) return;

    $("nomeQuarto").textContent = quartoAtual.nome;
    $("descricaoQuarto").textContent = quartoAtual.descricao;
    $("precoQuarto").textContent = quartoAtual.preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    $("imagemQuarto").src = quartoAtual.fotos[0];
    $("imagemQuarto").alt = quartoAtual.nome;

    ["foto1", "foto2", "foto3"].forEach((id, i) => {
        $(id).src = quartoAtual.fotos[i];
        $(id).alt = `${quartoAtual.nome} — imagem ${i + 1}`;
    });
    updateTotal(); renderCalendar(); renderReservations();
  }
  function updateTotal() {
    const n=nightsBetween(checkin.value,checkout.value);
    $("noites").textContent=n>0?`${n} ${n===1?"noite":"noites"}`:"—";
    const quartoAtual = buscarQuarto(room.value);
    $("total").textContent = n > 0 && quartoAtual && rangeAvailable(checkin.value, checkout.value)
        ? (n * quartoAtual.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        : "Selecione datas livres";
  }
    function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;
    let digito1 = resto === 10 ? 0 : resto;

    if (digito1 !== Number(cpf[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;
    let digito2 = resto === 10 ? 0 : resto;

    return digito2 === Number(cpf[10]);
}


  function textoLume(chave, padrao) {
    return typeof window.lumeTraduzir === "function" ? window.lumeTraduzir(chave) : padrao;
  }
  function idiomaLume() {
    return localStorage.getItem("lumeIdioma") || "pt";
  }
  function localidadeLume() {
    const idioma = idiomaLume();
    return idioma === "en" ? "en-US" : idioma === "es" ? "es-ES" : "pt-BR";
  }

  function renderCalendar() {
    const cal=$("calendario"); if(!cal) return;
    cal.innerHTML="";


if (!cal.dataset.keyboardReady) {

    cal.addEventListener("keydown", (e) => {

        const movimentos = {
            ArrowRight: 1,
            ArrowLeft: -1,
            ArrowDown: 7,
            ArrowUp: -7
        };

        if (!Object.hasOwn(movimentos, e.key)) return;

        const botaoAtual = e.target.closest("button[data-date]");

        if (!botaoAtual) return;

        // Impede a rolagem da página
        e.preventDefault();

        const dataAtual = new Date(
            botaoAtual.dataset.date + "T12:00:00"
        );

        dataAtual.setDate(
            dataAtual.getDate() + movimentos[e.key]
        );

        const proximaData = iso(dataAtual);

        const proximoBotao = cal.querySelector(
            `[data-date="${proximaData}"]`
        );

        if (proximoBotao && !proximoBotao.disabled) {
            proximoBotao.focus();
        }
    });

    cal.dataset.keyboardReady = "true";
}
    $("mesAno").textContent=viewMonth.toLocaleDateString(localidadeLume(),{month:"long",year:"numeric"});
    (window.lumeTraduzir ? window.lumeTraduzir("diasSemana") : ["D","S","T","Q","Q","S","S"]).forEach(d=>{const el=document.createElement("div");el.className="cal-dia-semana";el.textContent=d;cal.appendChild(el);});
    const year=viewMonth.getFullYear(), month=viewMonth.getMonth();
    const firstDay=new Date(year,month,1).getDay(), total=new Date(year,month+1,0).getDate();
    for(let i=0;i<firstDay;i++){const e=document.createElement("div");e.className="dia vazio";cal.appendChild(e);}
    for(let day=1;day<=total;day++){
      const date=iso(new Date(year,month,day)), el=document.createElement("button");
      
el.type = "button";
el.className = "dia";
el.textContent = day;
el.dataset.date = date;

// Verificação de disponibilidade
const past = date < iso(today);
const booked = isBooked(date);

// Informações acessíveis
const dataCalendario = new Date(year, month, day);

const dataFormatada = dataCalendario.toLocaleDateString(
    localidadeLume(),
    {
        day: "numeric",
        month: "long",
        year: "numeric"
    }
);

const selecionado =
    date === checkin.value || date === checkout.value;

let descricaoAcessivel = "";

if (past) {
    descricaoAcessivel = textoLume("dataPassadaAcessivel", "Data passada, indisponível.");
} else if (booked) {
    descricaoAcessivel = textoLume("dataReservadaAcessivel", "Data reservada, indisponível.");
} else if (selecionado) {
    descricaoAcessivel = textoLume("dataSelecionadaAcessivel", "Data selecionada.");
} else {
    descricaoAcessivel = textoLume("dataLivreAcessivel", "Data livre. Disponível para seleção.");
}

el.setAttribute(
    "aria-label",
    `${dataFormatada}. ${descricaoAcessivel}`
);

el.setAttribute("aria-pressed", selecionado ? "true" : "false");

if (date === iso(today)) {
    el.setAttribute("aria-current", "date");
}
      if(past){el.classList.add("passado");el.disabled=true;el.title=textoLume("dataPassada", "Data passada");}
      if(booked){el.classList.add("ocupado");el.disabled=true;el.title=textoLume("dataReservada", "Data reservada para este quarto");}
      if(date===checkin.value || date===checkout.value) el.classList.add("selecionado");
      else if(checkin.value && checkout.value && date>checkin.value && date<checkout.value) el.classList.add("intervalo");
      
el.addEventListener("click", () => {

    if (!selectedStart || selectedEnd || date <= selectedStart) {

        selectedStart = date;
        selectedEnd = null;

        checkin.value = date;
        checkout.value = "";
        checkout.min = adicionarUmDia(date);

    } else {

        selectedEnd = date;
        checkout.value = date;

        if (!rangeAvailable(selectedStart, selectedEnd)) {
            setMessage(
                textoLume("periodoOcupado", "Esse período inclui dias já reservados. Escolha outras datas."),
                "erro"
            );

            selectedEnd = null;
            checkout.value = "";
            return;
        }

        clearMessage();
    }

    updateTotal();
    renderCalendar();
});

      cal.appendChild(el);
    }
  }
  function renderReservations() {
    const list=$("listaReservas"); if(!list)return;
    const items=getReservations().filter(r=>r.quarto===room.value).sort((a,b)=>a.entrada.localeCompare(b.entrada));
    list.innerHTML="";
    if(!items.length){list.innerHTML="";const vazio=document.createElement("p");vazio.className="sem-reservas";vazio.textContent=textoLume("semReservasQuarto", "Nenhuma reserva salva para este quarto neste navegador.");list.appendChild(vazio);return;}
    items.forEach(r=>{
      const el=document.createElement("div");el.className="reserva-item";
      const title=document.createElement("strong");title.textContent=`${r.nome} · ${r.codigo}`;
      const dates=document.createElement("span");dates.textContent=`${new Date(r.entrada + "T12:00:00").toLocaleDateString(localidadeLume())} – ${new Date(r.saida + "T12:00:00").toLocaleDateString(localidadeLume())} · ${r.noites} ${r.noites === 1 ? textoLume("noite", "noite") : textoLume("noitesReserva", "noites")}`;
      const quartoReservado = buscarQuarto(r.quarto);
      const value = document.createElement("span");
      value.textContent = (r.noites * (quartoReservado ? quartoReservado.preco : 0))
          .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      const cancel=document.createElement("button");cancel.className="cancelar-reserva";cancel.type="button";cancel.textContent=textoLume("cancelarReserva", "Cancelar reserva");
      
cancel.addEventListener("click", () => {
    if (confirm(`${textoLume("confirmarCancelamento", "Cancelar a reserva")} ${r.codigo}?`)) {

        gerenciadorReservas.cancelar(r.codigo);

        renderCalendar();
        renderReservations();
        updateTotal();

        setMessage(
            textoLume("reservaCancelada", "Reserva cancelada neste navegador."),
            "sucesso"
        );
    }
});

      el.append(title,dates,value,cancel);list.appendChild(el);
    });
  }
  room.addEventListener("change",()=>{selectedStart=null;selectedEnd=null;updateRoom();clearMessage();});
  checkin.addEventListener("change",()=>{
    selectedStart = checkin.value;
selectedEnd = null;
checkout.value = "";
checkout.min = checkin.value
    ? adicionarUmDia(checkin.value)
    : iso(today);
    if(checkin.value && isBooked(checkin.value)){setMessage("Essa data já está reservada para este quarto.","erro");checkin.value="";selectedStart=null;}
    updateTotal();renderCalendar();
  });
  checkout.addEventListener("change",()=>{
    selectedEnd=checkout.value;
    if(checkin.value && checkout.value && !rangeAvailable(checkin.value,checkout.value)){setMessage("Há conflito com uma reserva existente. Escolha outro período.","erro");checkout.value="";selectedEnd=null;}
    else clearMessage();
    updateTotal();renderCalendar();
  });
  $("mesAnterior").addEventListener("click",()=>{viewMonth=new Date(viewMonth.getFullYear(),viewMonth.getMonth()-1,1);renderCalendar();});
  $("proximoMes").addEventListener("click",()=>{viewMonth=new Date(viewMonth.getFullYear(),viewMonth.getMonth()+1,1);renderCalendar();});
  $("limparReservas").addEventListener("click",()=>{if(confirm("Apagar todas as reservas de demonstração salvas neste navegador?")){saveReservations([]);renderCalendar();renderReservations();updateTotal();setMessage("As reservas de demonstração foram removidas.","sucesso");}});
  form.addEventListener("submit",e=>{
    e.preventDefault();clearMessage();
    const start = checkin.value;
const end = checkout.value;
const name = $("nome").value.trim();
const cpf = $("cpf").value.trim();
const email = $("email").value.trim();
    if(!name||!cpf||!email||!start||!end){setMessage("Preencha o nome, e-mail e as datas de check-in e check-out.");return;}
    if(!cpf){setMessage("Informe o CPF para continuar.");return;}
    if (!validarCPF(cpf)) {setMessage("CPF inválido. Confira os números informados.");return;}
    if(start<iso(today)){setMessage("O check-in não pode ser uma data passada.");return;}
    const n=nightsBetween(start,end);
    if(n<1){setMessage("O check-out deve ser posterior ao check-in.");return;}
    if(!rangeAvailable(start,end)){setMessage("Esse período não está disponível para o quarto escolhido. Consulte o calendário.");renderCalendar();return;}
    const code="LUME-"+Math.random().toString(36).slice(2,8).toUpperCase();
    
const quartoSelecionado = buscarQuarto(room.value);

const item = new Reserva(
    code,
    room.value,
    start,
    end,
    n,
    name,
    cpf,
    email,
    $("hospedes").value,
    $("telefone").value.trim()
);

const total = item.calcularTotal(quartoSelecionado);

gerenciadorReservas.adicionar(item);

// A reserva foi validada e salva: cria ou atualiza o cadastro do hóspede.
gerenciadorClientes.registrarReserva(item);

setMessage(
    `Reserva de demonstração confirmada! Código: ${code}. Total estimado: ${total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}.`,
    "sucesso"
);

renderCalendar();
renderReservations();
updateTotal();
form.reset();

room.value = item.quarto;
checkin.value = "";
checkout.value = "";
checkout.min = iso(today);

$("hospedes").value = item.hospedes;


updateRoom();

});

// =====================================
// MÁSCARA AUTOMÁTICA DO CPF
// =====================================

const campoCPF = document.getElementById("cpf");

if (campoCPF) {
    campoCPF.addEventListener("input", () => {
        let valor = campoCPF.value.replace(/\D/g, "").slice(0, 11);

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        campoCPF.value = valor;
    });
}

// =====================================
// CONTROLE DO MODAL DE PRIVACIDADE
// =====================================

const modalPrivacidade = $("modalPrivacidade");
const abrirPrivacidade = $("abrirPrivacidade");
const fecharPrivacidade = $("fecharPrivacidade");
const entendiPrivacidade = $("entendiPrivacidade");

let elementoAnterior = null;

function abrirModalPrivacidade() {
    elementoAnterior = document.activeElement;

    modalPrivacidade.hidden = false;

    document.body.style.overflow = "hidden";

    fecharPrivacidade.focus();
}

function fecharModalPrivacidade() {
    modalPrivacidade.hidden = true;

    document.body.style.overflow = "";

    if (elementoAnterior) {
        elementoAnterior.focus();
    }
}

// Abrir janela
abrirPrivacidade.addEventListener("click", abrirModalPrivacidade);

// Fechar pelos botões
fecharPrivacidade.addEventListener("click", fecharModalPrivacidade);

entendiPrivacidade.addEventListener("click", fecharModalPrivacidade);

// Fechar clicando fora da janela
modalPrivacidade.addEventListener("click", (e) => {
    if (e.target === modalPrivacidade) {
        fecharModalPrivacidade();
    }
});

// Fechar com ESC e controlar foco pelo teclado
modalPrivacidade.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        fecharModalPrivacidade();
        return;
    }

    if (e.key === "Tab") {

        const elementos = modalPrivacidade.querySelectorAll(
            'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        const primeiro = elementos[0];
        const ultimo = elementos[elementos.length - 1];

        if (e.shiftKey && document.activeElement === primeiro) {
            e.preventDefault();
            ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
            e.preventDefault();
            primeiro.focus();
        }
    }
});

document.addEventListener("lume:idioma-alterado", () => {
    renderCalendar();
    renderReservations();
});

updateRoom();

})();



