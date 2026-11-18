document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const CHAVES = { reservas: "lumeHotelReservasDemo", clientes: "lumeHotelClientes", quartos: "lumeHotelQuartos", fornecedores: "lumeHotelFornecedores" };
  const $ = id => document.getElementById(id);
  const traducoesPainel = {"pt": {}, "en": {"MENU PRINCIPAL": "MAIN MENU", "Dashboard": "Dashboard", "Reservas": "Reservations", "Clientes": "Clients", "Quartos": "Rooms", "Fornecedores": "Suppliers", "Relatórios": "Reports", "← Voltar ao site": "← Back to website", "Visão geral da operação do LUME Hotel.": "Overview of LUME Hotel operations.", "Administrador": "Administrator", "Total de reservas": "Total reservations", "Reservas registradas": "Registered reservations", "Receita estimada": "Estimated revenue", "Valor bruto previsto": "Expected gross value", "Quartos ocupados hoje": "Rooms occupied today", "Unidades em uso hoje": "Units in use today", "Total de clientes": "Total clients", "Cadastros ativos": "Active records", "Reservas recentes": "Recent reservations", "Últimas movimentações registradas.": "Latest recorded activity.", "Ver reservas": "View reservations", "Consultar e atualizar hóspedes": "View and update guests", "Gerenciar acomodações e tarifas": "Manage rooms and rates", "Manter contatos e serviços": "Manage contacts and services", "Conferir indicadores e exportar dados": "Review metrics and export data", "Consulte as reservas feitas pelo formulário do site.": "View reservations made through the website form.", "Os dados são compartilhados com a página de reservas neste navegador.": "Data is shared with the booking page in this browser.", "Pesquisar reserva": "Search reservation", "Código, hóspede, e-mail ou quarto": "Code, guest, email or room", "Situação": "Status", "Todas": "All", "Próximas": "Upcoming", "Em hospedagem": "Checked in", "Finalizadas": "Completed", "Nenhuma reserva cadastrada.": "No reservations registered.", "Gerencie os hóspedes cadastrados no LUME Hotel.": "Manage guests registered at LUME Hotel.", "Novo cliente": "New client", "Preencha os dados para cadastrar ou atualizar um hóspede.": "Enter the details to add or update a guest.", "Nome completo *": "Full name *", "E-mail *": "Email *", "Telefone": "Phone", "Informe o DDD e o número do telefone.": "Enter the area code and phone number.", "Endereço": "Address", "Salvar cliente": "Save client", "Limpar": "Clear", "Clientes cadastrados": "Registered clients", "Consulte, edite ou exclua os registros.": "View, edit or delete records.", "Pesquisar cliente": "Search client", "Nome, CPF ou e-mail": "Name, CPF or email", "Nenhum cliente cadastrado.": "No clients registered.", "Gerencie acomodações, tarifas e disponibilidade para reservas.": "Manage rooms, rates and booking availability.", "Cadastrar acomodação": "Add room", "Quartos ativos aparecem na página pública de reservas.": "Active rooms appear on the public booking page.", "Nome da acomodação *": "Room name *", "Categoria": "Category", "Diária (R$) *": "Daily rate (R$) *", "Capacidade de hóspedes *": "Guest capacity *", "Descrição": "Description", "Descreva os diferenciais da acomodação": "Describe the room features", "URL da imagem (opcional)": "Image URL (optional)", "Ativo para reservas": "Available for booking", "Inativo": "Inactive", "Salvar acomodação": "Save room", "Acomodações cadastradas": "Registered rooms", "Altere tarifas, capacidade ou situação.": "Change rates, capacity or status.", "Pesquisar acomodação": "Search room", "Organize os contatos e serviços que apoiam a operação do hotel.": "Organize contacts and services that support hotel operations.", "Cadastrar fornecedor": "Add supplier", "Registre os dados comerciais e de contato.": "Enter business and contact details.", "Nome / Razão social *": "Name / Company name *", "Selecione": "Select", "Alimentos e bebidas": "Food and beverages", "Limpeza e lavanderia": "Cleaning and laundry", "Manutenção": "Maintenance", "Hospedagem e amenities": "Accommodation and amenities", "Tecnologia": "Technology", "Serviços gerais": "General services", "Outros": "Other", "CNPJ / CPF": "Company ID / CPF", "Documento (opcional)": "Document (optional)", "Pessoa de contato": "Contact person", "Observações": "Notes", "Salvar fornecedor": "Save supplier", "Fornecedores cadastrados": "Registered suppliers", "Consulte e mantenha os contatos atualizados.": "View and update contact details.", "Pesquisar fornecedores": "Search suppliers", "Nome, categoria ou contato": "Name, category or contact", "Indicadores gerenciais calculados a partir dos dados deste navegador.": "Management indicators calculated from this browser's data.", "Resumo gerencial": "Management summary", "Filtre o período para analisar reservas e receita estimada.": "Filter the period to analyze bookings and estimated revenue.", "Exportar CSV": "Export CSV", "Data inicial": "Start date", "Data final": "End date", "Acomodação": "Room", "Reservas no período": "Reservations in period", "Noites reservadas": "Booked nights", "Ticket médio": "Average booking value", "Reservas por acomodação": "Reservations by room", "Os valores são estimativas calculadas com base na diária cadastrada e no número de noites. O projeto é demonstrativo e não substitui um sistema hoteleiro de produção.": "Values are estimates based on the registered nightly rate and number of nights. This is a demonstration project and does not replace a production hotel system."}, "es": {"MENU PRINCIPAL": "MENÚ PRINCIPAL", "Dashboard": "Panel", "Reservas": "Reservas", "Clientes": "Clientes", "Quartos": "Habitaciones", "Fornecedores": "Proveedores", "Relatórios": "Informes", "← Voltar ao site": "← Volver al sitio", "Visão geral da operação do LUME Hotel.": "Resumen de las operaciones de LUME Hotel.", "Administrador": "Administrador", "Total de reservas": "Total de reservas", "Reservas registradas": "Reservas registradas", "Receita estimada": "Ingresos estimados", "Valor bruto previsto": "Valor bruto previsto", "Quartos ocupados hoje": "Habitaciones ocupadas hoy", "Unidades em uso hoje": "Unidades en uso hoy", "Total de clientes": "Total de clientes", "Cadastros ativos": "Registros activos", "Reservas recentes": "Reservas recientes", "Últimas movimentações registradas.": "Últimos movimientos registrados.", "Ver reservas": "Ver reservas", "Consultar e atualizar hóspedes": "Consultar y actualizar huéspedes", "Gerenciar acomodações e tarifas": "Gestionar habitaciones y tarifas", "Manter contatos e serviços": "Mantener contactos y servicios", "Conferir indicadores e exportar dados": "Consultar indicadores y exportar datos", "Consulte as reservas feitas pelo formulário do site.": "Consulta las reservas realizadas mediante el formulario del sitio.", "Os dados são compartilhados com a página de reservas neste navegador.": "Los datos se comparten con la página de reservas en este navegador.", "Pesquisar reserva": "Buscar reserva", "Código, hóspede, e-mail ou quarto": "Código, huésped, correo o habitación", "Situação": "Estado", "Todas": "Todas", "Próximas": "Próximas", "Em hospedagem": "Alojados", "Finalizadas": "Finalizadas", "Nenhuma reserva cadastrada.": "No hay reservas registradas.", "Gerencie os hóspedes cadastrados no LUME Hotel.": "Gestiona los huéspedes registrados en LUME Hotel.", "Novo cliente": "Nuevo cliente", "Preencha os dados para cadastrar ou atualizar um hóspede.": "Completa los datos para registrar o actualizar un huésped.", "Nome completo *": "Nombre completo *", "E-mail *": "Correo electrónico *", "Telefone": "Teléfono", "Informe o DDD e o número do telefone.": "Introduce el prefijo y el número de teléfono.", "Endereço": "Dirección", "Salvar cliente": "Guardar cliente", "Limpar": "Limpiar", "Clientes cadastrados": "Clientes registrados", "Consulte, edite ou exclua os registros.": "Consulta, edita o elimina los registros.", "Pesquisar cliente": "Buscar cliente", "Nome, CPF ou e-mail": "Nombre, CPF o correo", "Nenhum cliente cadastrado.": "No hay clientes registrados.", "Gerencie acomodações, tarifas e disponibilidade para reservas.": "Gestiona habitaciones, tarifas y disponibilidad para reservas.", "Cadastrar acomodação": "Registrar habitación", "Quartos ativos aparecem na página pública de reservas.": "Las habitaciones activas aparecen en la página pública de reservas.", "Nome da acomodação *": "Nombre de la habitación *", "Categoria": "Categoría", "Diária (R$) *": "Tarifa diaria (R$) *", "Capacidade de hóspedes *": "Capacidad de huéspedes *", "Descrição": "Descripción", "Descreva os diferenciais da acomodação": "Describe las características de la habitación", "URL da imagem (opcional)": "URL de imagen (opcional)", "Ativo para reservas": "Disponible para reservas", "Inativo": "Inactivo", "Salvar acomodação": "Guardar habitación", "Acomodações cadastradas": "Habitaciones registradas", "Altere tarifas, capacidade ou situação.": "Modifica tarifas, capacidad o estado.", "Pesquisar acomodação": "Buscar habitación", "Organize os contatos e serviços que apoiam a operação do hotel.": "Organiza los contactos y servicios que apoyan las operaciones del hotel.", "Cadastrar fornecedor": "Registrar proveedor", "Registre os dados comerciais e de contato.": "Registra los datos comerciales y de contacto.", "Nome / Razão social *": "Nombre / Razón social *", "Selecione": "Selecciona", "Alimentos e bebidas": "Alimentos y bebidas", "Limpeza e lavanderia": "Limpieza y lavandería", "Manutenção": "Mantenimiento", "Hospedagem e amenities": "Alojamiento y amenities", "Tecnologia": "Tecnología", "Serviços gerais": "Servicios generales", "Outros": "Otros", "CNPJ / CPF": "CNPJ / CPF", "Documento (opcional)": "Documento (opcional)", "Pessoa de contato": "Persona de contacto", "Observações": "Observaciones", "Salvar fornecedor": "Guardar proveedor", "Fornecedores cadastrados": "Proveedores registrados", "Consulte e mantenha os contatos atualizados.": "Consulta y mantén actualizados los contactos.", "Pesquisar fornecedores": "Buscar proveedores", "Nome, categoria ou contato": "Nombre, categoría o contacto", "Indicadores gerenciais calculados a partir dos dados deste navegador.": "Indicadores de gestión calculados con los datos de este navegador.", "Resumo gerencial": "Resumen de gestión", "Filtre o período para analisar reservas e receita estimada.": "Filtra el período para analizar reservas e ingresos estimados.", "Exportar CSV": "Exportar CSV", "Data inicial": "Fecha inicial", "Data final": "Fecha final", "Acomodação": "Habitación", "Reservas no período": "Reservas del período", "Noites reservadas": "Noches reservadas", "Ticket médio": "Valor medio de reserva", "Reservas por acomodação": "Reservas por habitación", "Os valores são estimativas calculadas com base na diária cadastrada e no número de noites. O projeto é demonstrativo e não substitui um sistema hoteleiro de produção.": "Los valores son estimaciones basadas en la tarifa diaria registrada y el número de noches. Este proyecto es demostrativo y no sustituye un sistema hotelero de producción."}};
  const idiomaPainel = () => localStorage.getItem("lumeIdioma") || "pt";
  const textosOriginaisPainel = new WeakMap();
  function traduzirPainel() {
    const idioma = idiomaPainel();
    const mapa = traducoesPainel[idioma] || {};
    const raiz = document.querySelector(".painel-container") || document.body;
    const walker = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
    const nos = [];
    while (walker.nextNode()) nos.push(walker.currentNode);

    nos.forEach(no => {
      if (!no.parentElement || no.parentElement.closest("script, style, textarea, input, select, option")) return;
      if (!textosOriginaisPainel.has(no)) textosOriginaisPainel.set(no, no.nodeValue);
      const originalCompleto = textosOriginaisPainel.get(no);
      const original = originalCompleto.trim();
      if (!original) return;
      const traducao = idioma === "pt" ? original : (mapa[original] || original);
      const inicio = originalCompleto.indexOf(original);
      no.nodeValue = originalCompleto.slice(0, inicio) + traducao + originalCompleto.slice(inicio + original.length);
    });

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(campo => {
      if (campo.dataset.placeholderOriginal === undefined) campo.dataset.placeholderOriginal = campo.placeholder;
      const original = campo.dataset.placeholderOriginal;
      campo.placeholder = idioma === "pt" ? original : (mapa[original] || original);
    });
    document.querySelectorAll("[data-idioma-painel]").forEach(botao => {
      botao.setAttribute("aria-pressed", botao.dataset.idiomaPainel === idioma ? "true" : "false");
    });
    document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;
  }
  document.querySelectorAll("[data-idioma-painel]").forEach(botao => {
    botao.addEventListener("click", () => {
      localStorage.setItem("lumeIdioma", botao.dataset.idiomaPainel);
      traduzirPainel();
    });
  });

  const moeda = valor => Number(valor || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const hojeISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; };
  const ler = chave => { try { const v = JSON.parse(localStorage.getItem(chave) || "[]"); return Array.isArray(v) ? v : []; } catch { return []; } };
  const criarElemento = (tag, texto, classe) => { const el = document.createElement(tag); if (texto !== undefined) el.textContent = texto; if (classe) el.className = classe; return el; };
  function formatarTelefone(valor) {
    const numeros = String(valor || "").replace(/\D/g, "").slice(0, 11);
    if (!numeros) return "";
    if (numeros.length <= 2) return `(${numeros}`;
    if (numeros.length <= 6) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    if (numeros.length <= 10) return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  }
  function aplicarMascaraTelefone(campo) {
    if (!campo) return;
    campo.addEventListener("input", () => {
      campo.value = formatarTelefone(campo.value);
    });
    campo.value = formatarTelefone(campo.value);
  }

  class Repositorio {
    constructor(chave) { this.chave = chave; }
    listar() { return ler(this.chave); }
    salvar(lista) { localStorage.setItem(this.chave, JSON.stringify(lista)); }
    adicionar(item) { const lista = this.listar(); lista.push(item); this.salvar(lista); }
    atualizar(id, dados) { this.salvar(this.listar().map(item => item.id === id ? { ...item, ...dados } : item)); }
    excluir(id) { this.salvar(this.listar().filter(item => item.id !== id)); }
  }
  class Cliente { constructor(dados) { Object.assign(this, dados); } static normalizarCPF(v) { return String(v || "").replace(/\D/g, ""); } static validarCPF(v) { const cpf = this.normalizarCPF(v); if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; let s=0; for(let i=0;i<9;i++) s += Number(cpf[i])*(10-i); let r=(s*10)%11, d1=r===10?0:r; if(d1!==Number(cpf[9])) return false; s=0; for(let i=0;i<10;i++) s += Number(cpf[i])*(11-i); r=(s*10)%11; return (r===10?0:r)===Number(cpf[10]); } }
  class GerenciadorClientes extends Repositorio {
    adicionar(d) { super.adicionar(new Cliente(d)); }
    sincronizarReserva(reserva) {
      const cpf = Cliente.normalizarCPF(reserva.cpf);
      if (!cpf) return;
      const clientes = this.listar();
      const existente = clientes.find(c => Cliente.normalizarCPF(c.cpf) === cpf);
      const dados = {
        nome: reserva.nome,
        cpf: reserva.cpf,
        email: reserva.email || (existente && existente.email) || "",
        telefone: reserva.telefone || (existente && existente.telefone) || "",
        endereco: (existente && existente.endereco) || ""
      };
      if (existente) Object.assign(existente, dados);
      else clientes.push(new Cliente({ id: `cliente-reserva-${reserva.codigo || Date.now()}`, ...dados, origem: "reserva" }));
      this.salvar(clientes);
    }
  }
  class QuartoHotel { constructor(dados) { Object.assign(this, dados); } }
  class GerenciadorQuartos extends Repositorio {
    constructor(chave) { super(chave); if (localStorage.getItem(chave) === null) this.salvar([
      new QuartoHotel({ id:"lume", nome:"Quarto LUME", categoria:"Standard", preco:350, capacidade:2, descricao:"Conforto e tranquilidade para descansar bem.", fotos:["https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"], ativo:true }),
      new QuartoHotel({ id:"deluxe", nome:"Quarto Deluxe", categoria:"Deluxe", preco:480, capacidade:2, descricao:"Mais espaço, detalhes especiais e uma atmosfera acolhedora.", fotos:["https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85"], ativo:true }),
      new QuartoHotel({ id:"suite", nome:"Suíte LUME", categoria:"Suíte", preco:650, capacidade:4, descricao:"Uma estadia especial com amplitude e sofisticação.", fotos:["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85"], ativo:true })
    ]); }
  }
  class Fornecedor { constructor(dados) { Object.assign(this, dados); } }
  class GerenciadorFornecedores extends Repositorio { adicionar(d) { super.adicionar(new Fornecedor(d)); } }
  class GerenciadorReservas extends Repositorio {
    cancelar(codigo) { this.salvar(this.listar().filter(r => r.codigo !== codigo)); }
  }

  const clientesRepo = new GerenciadorClientes(CHAVES.clientes);
  const quartosRepo = new GerenciadorQuartos(CHAVES.quartos);
  const fornecedoresRepo = new GerenciadorFornecedores(CHAVES.fornecedores);
  const reservasRepo = new GerenciadorReservas(CHAVES.reservas);
  // Importa hóspedes de reservas já existentes para o cadastro de Clientes, sem duplicar CPFs.
  reservasRepo.listar().forEach(reserva => clientesRepo.sincronizarReserva(reserva));
  let clienteEditando = null, quartoEditando = null, fornecedorEditando = null;

  // Navegação acessível entre módulos
  const links = document.querySelectorAll("[data-modulo]");
  const modulos = document.querySelectorAll(".modulo-conteudo");
  function abrirModulo(nome) {
    modulos.forEach(m => { m.hidden = m.id !== `modulo-${nome}`; });
    traduzirPainel();
    links.forEach(a => { const ativo = a.dataset.modulo === nome; a.classList.toggle("ativo", ativo); if (ativo) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
    const titulo = $(`modulo-${nome}`)?.querySelector("h1"); if (titulo) { titulo.tabIndex=-1; titulo.focus(); }
    if (nome === "relatorios") renderizarRelatorios();
    if (nome === "reservas") renderizarReservas();
  }
  links.forEach(a => a.addEventListener("click", e => { e.preventDefault(); abrirModulo(a.dataset.modulo); }));
  document.querySelectorAll("[data-ir]").forEach(b => b.addEventListener("click", () => abrirModulo(b.dataset.ir)));

  function atualizarDashboard() {
    const reservas = reservasRepo.listar(), clientes = clientesRepo.listar(), quartos = quartosRepo.listar();
    $("totalReservas").textContent = reservas.length;
    const receita = reservas.reduce((s,r) => s + (Number(r.noites)||0) * (Number(quartos.find(q=>q.id===r.quarto)?.preco) || ({lume:350,deluxe:480,suite:650}[r.quarto]||0)),0);
    $("receitaTotal").textContent = moeda(receita);
    const hoje = hojeISO();
    const ocupados = new Set(reservas.filter(r => r.entrada <= hoje && r.saida > hoje).map(r=>r.quarto));
    $("quartosOcupados").textContent = ocupados.size;
    $("totalClientes").textContent = clientes.length;
    const lista = $("listaReservasPainel"); lista.replaceChildren();
    reservas.slice().sort((a,b)=>(b.criadaEm||b.entrada||"").localeCompare(a.criadaEm||a.entrada||"")).slice(0,5).forEach(r=>{
      const card=criarElemento("article",undefined,"registro-card");
      card.append(criarElemento("strong",`${r.nome} · ${r.codigo}`), criarElemento("span",`${r.entrada} até ${r.saida} · ${r.noites} noite(s)`), criarElemento("span",r.email||"Sem e-mail")); lista.append(card);
    });
    if(!reservas.length) lista.append(criarElemento("p","Nenhuma reserva encontrada.","estado-vazio"));
  }

  // CLIENTES: cadastro, consulta, edição e exclusão
  const formCliente=$("formCliente"), buscaCliente=$("buscarCliente");
  const campoCPF=$("clienteCpf");
  const campoTelefoneCliente=$("clienteTelefone");
  aplicarMascaraTelefone(campoTelefoneCliente);
  campoCPF.addEventListener("input",()=>{let v=Cliente.normalizarCPF(campoCPF.value).slice(0,11); v=v.replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2"); campoCPF.value=v;});
  function resetCliente(){clienteEditando=null; $("tituloFormCliente").textContent="Novo cliente"; $("salvarCliente").textContent="Salvar cliente";}
  function renderizarClientes(termo="") {
    const lista=$("listaClientes"), todos=clientesRepo.listar(), t=termo.toLowerCase().trim();
    const filtrados=todos.filter(c=>[c.nome,c.email,c.cpf].some(v=>String(v||"").toLowerCase().includes(t)) || Cliente.normalizarCPF(c.cpf).includes(Cliente.normalizarCPF(t)));
    lista.replaceChildren(); $("contadorClientes").textContent=`${todos.length} ${todos.length===1?"cliente":"clientes"}`;
    if(!filtrados.length){lista.append(criarElemento("p",todos.length?"Nenhum cliente encontrado.":"Nenhum cliente cadastrado.","estado-vazio"));return;}
    filtrados.forEach(c=>{const card=criarElemento("article",undefined,"registro-card");const info=criarElemento("div",undefined,"registro-info");info.append(criarElemento("strong",c.nome),criarElemento("span",`CPF: ${c.cpf} · ${c.email}`),criarElemento("span",`${c.telefone||"Sem telefone"} · ${c.endereco||"Sem endereço"}`));const a=criarElemento("div",undefined,"acoes-registro");const edit=criarElemento("button","Editar","botao-pequeno");edit.type="button";edit.addEventListener("click",()=>{clienteEditando=c.id; $("clienteNome").value=c.nome; campoCPF.value=c.cpf; $("clienteEmail").value=c.email; $("clienteTelefone").value=formatarTelefone(c.telefone||""); $("clienteEndereco").value=c.endereco||""; $("tituloFormCliente").textContent="Editar cliente"; $("salvarCliente").textContent="Atualizar cliente"; $("clienteNome").focus();});const del=criarElemento("button","Excluir","botao-pequeno perigo");del.type="button";del.addEventListener("click",()=>{if(confirm(`Excluir o cadastro de ${c.nome}?`)){clientesRepo.excluir(c.id);if(clienteEditando===c.id){formCliente.reset();resetCliente();}renderizarClientes(buscaCliente.value);atualizarDashboard();}});a.append(edit,del);card.append(info,a);lista.append(card);});
  }
  formCliente.addEventListener("submit",e=>{e.preventDefault();const dados={nome:$("clienteNome").value.trim(),cpf:campoCPF.value.trim(),email:$("clienteEmail").value.trim(),telefone:$("clienteTelefone").value.trim(),endereco:$("clienteEndereco").value.trim()};if(!Cliente.validarCPF(dados.cpf)){alert("CPF inválido. Confira os números informados.");campoCPF.focus();return;}const duplicado=clientesRepo.listar().some(c=>Cliente.normalizarCPF(c.cpf)===Cliente.normalizarCPF(dados.cpf)&&c.id!==clienteEditando);if(duplicado){alert("Este CPF já está cadastrado.");campoCPF.focus();return;}if(clienteEditando) clientesRepo.atualizar(clienteEditando,dados); else clientesRepo.adicionar({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),...dados});formCliente.reset();resetCliente();renderizarClientes(buscaCliente.value);atualizarDashboard();});
  formCliente.addEventListener("reset",()=>{resetCliente();}); buscaCliente.addEventListener("input",()=>renderizarClientes(buscaCliente.value));

  // QUARTOS: catálogo sincronizado com o formulário público de reservas
  const formQuarto=$("formQuarto"), buscaQuarto=$("buscarQuartoAdmin");
  function resetQuarto(){quartoEditando=null; $("tituloFormQuarto").textContent="Cadastrar acomodação";formQuarto.querySelector('[type="submit"]').textContent="Salvar acomodação";}
  function atualizarSelectsQuartos(){const select=$("relatorioQuarto"), atual=select.value;select.replaceChildren(new Option("Todas","todos"));quartosRepo.listar().forEach(q=>select.add(new Option(q.nome,q.id)));if([...select.options].some(o=>o.value===atual))select.value=atual;}
  function renderizarQuartos(termo="") {const lista=$("listaQuartosAdmin"), qs=quartosRepo.listar(), t=termo.toLowerCase();lista.replaceChildren();$("contadorQuartos").textContent=`${qs.length} ${qs.length===1?"quarto":"quartos"}`;const filtrados=qs.filter(q=>(q.nome+" "+q.categoria).toLowerCase().includes(t));if(!filtrados.length)lista.append(criarElemento("p","Nenhuma acomodação cadastrada.","estado-vazio"));filtrados.forEach(q=>{const card=criarElemento("article",undefined,"registro-card");const info=criarElemento("div",undefined,"registro-info");info.append(criarElemento("strong",q.nome),criarElemento("span",`${q.categoria} · ${q.capacidade} hóspede(s) · ${moeda(q.preco)}/diária`),criarElemento("span",q.descricao||"Sem descrição"),criarElemento("span",q.ativo?"Ativo para reservas":"Inativo"));const a=criarElemento("div",undefined,"acoes-registro");const edit=criarElemento("button","Editar","botao-pequeno");edit.type="button";edit.addEventListener("click",()=>{quartoEditando=q.id;$("quartoNome").value=q.nome;$("quartoTipo").value=q.categoria;$("quartoPreco").value=q.preco;$("quartoCapacidade").value=q.capacidade;$("quartoDescricao").value=q.descricao||"";$("quartoFoto").value=(q.fotos||[])[0]||"";$("quartoStatus").value=q.ativo?"ativo":"inativo";$("tituloFormQuarto").textContent="Editar acomodação";formQuarto.querySelector('[type="submit"]').textContent="Atualizar acomodação";$("quartoNome").focus();});const del=criarElemento("button","Excluir","botao-pequeno perigo");del.type="button";del.addEventListener("click",()=>{const emUso=reservasRepo.listar().some(r=>r.quarto===q.id);if(emUso){alert("Esta acomodação possui reservas vinculadas. Em vez de excluir, altere a situação para Inativo.");return;}if(confirm(`Excluir ${q.nome}?`)){quartosRepo.excluir(q.id);renderizarQuartos(buscaQuarto.value);atualizarSelectsQuartos();atualizarDashboard();}});a.append(edit,del);card.append(info,a);lista.append(card);});}
  formQuarto.addEventListener("submit",e=>{e.preventDefault();const nome=$("quartoNome").value.trim(), preco=Number($("quartoPreco").value), capacidade=Number($("quartoCapacidade").value);if(!nome||!(preco>0)||!(capacidade>0)){alert("Informe nome, diária e capacidade válidos.");return;}const dados={nome,categoria:$("quartoTipo").value,preco,capacidade,descricao:$("quartoDescricao").value.trim(),fotos:Array(3).fill($("quartoFoto").value.trim()||"https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85"),ativo:$("quartoStatus").value==="ativo"};if(quartoEditando) quartosRepo.atualizar(quartoEditando,dados);else quartosRepo.adicionar({id:`quarto-${Date.now()}`,...dados});formQuarto.reset();resetQuarto();renderizarQuartos(buscaQuarto.value);atualizarSelectsQuartos();atualizarDashboard();});formQuarto.addEventListener("reset",resetQuarto);buscaQuarto.addEventListener("input",()=>renderizarQuartos(buscaQuarto.value));

  // FORNECEDORES: cadastro, pesquisa, edição e exclusão
  const formFornecedor=$("formFornecedor"), buscaFornecedor=$("buscarFornecedor");
  const campoTelefoneFornecedor=$("fornecedorTelefone");
  aplicarMascaraTelefone(campoTelefoneFornecedor);
  function resetFornecedor(){fornecedorEditando=null;$("tituloFormFornecedor").textContent="Cadastrar fornecedor";formFornecedor.querySelector('[type="submit"]').textContent="Salvar fornecedor";}
  function renderizarFornecedores(termo=""){const lista=$("listaFornecedores"), fs=fornecedoresRepo.listar(), t=termo.toLowerCase();lista.replaceChildren();$("contadorFornecedores").textContent=`${fs.length} ${fs.length===1?"fornecedor":"fornecedores"}`;const filtrados=fs.filter(f=>[f.nome,f.categoria,f.contato,f.documento].join(" ").toLowerCase().includes(t));if(!filtrados.length)lista.append(criarElemento("p",fs.length?"Nenhum fornecedor encontrado.":"Nenhum fornecedor cadastrado.","estado-vazio"));filtrados.forEach(f=>{const card=criarElemento("article",undefined,"registro-card"),info=criarElemento("div",undefined,"registro-info");info.append(criarElemento("strong",f.nome),criarElemento("span",`${f.categoria} · ${f.status==="ativo"?"Ativo":"Inativo"}`),criarElemento("span",`${f.contato||"Sem contato"} · ${f.telefone||"Sem telefone"} · ${f.email||"Sem e-mail"}`),criarElemento("span",f.documento||"Sem documento"));const a=criarElemento("div",undefined,"acoes-registro"),edit=criarElemento("button","Editar","botao-pequeno");edit.type="button";edit.addEventListener("click",()=>{fornecedorEditando=f.id;$("fornecedorNome").value=f.nome;$("fornecedorCategoria").value=f.categoria;$("fornecedorDocumento").value=f.documento||"";$("fornecedorContato").value=f.contato||"";$("fornecedorTelefone").value=formatarTelefone(f.telefone||"");$("fornecedorEmail").value=f.email||"";$("fornecedorObservacao").value=f.observacao||"";$("fornecedorStatus").value=f.status||"ativo";$("tituloFormFornecedor").textContent="Editar fornecedor";formFornecedor.querySelector('[type="submit"]').textContent="Atualizar fornecedor";$("fornecedorNome").focus();});const del=criarElemento("button","Excluir","botao-pequeno perigo");del.type="button";del.addEventListener("click",()=>{if(confirm(`Excluir o fornecedor ${f.nome}?`)){fornecedoresRepo.excluir(f.id);renderizarFornecedores(buscaFornecedor.value);}});a.append(edit,del);card.append(info,a);lista.append(card);});}
  formFornecedor.addEventListener("submit",e=>{e.preventDefault();const dados={nome:$("fornecedorNome").value.trim(),categoria:$("fornecedorCategoria").value,documento:$("fornecedorDocumento").value.trim(),contato:$("fornecedorContato").value.trim(),telefone:$("fornecedorTelefone").value.trim(),email:$("fornecedorEmail").value.trim(),observacao:$("fornecedorObservacao").value.trim(),status:$("fornecedorStatus").value};if(fornecedorEditando)fornecedoresRepo.atualizar(fornecedorEditando,dados);else fornecedoresRepo.adicionar({id:`forn-${Date.now()}`,...dados});formFornecedor.reset();resetFornecedor();renderizarFornecedores(buscaFornecedor.value);});formFornecedor.addEventListener("reset",resetFornecedor);buscaFornecedor.addEventListener("input",()=>renderizarFornecedores(buscaFornecedor.value));

  // RESERVAS: consulta, pesquisa, filtros e cancelamento
  function renderizarReservas(){const lista=$("listaReservasAdmin"), termo=$("buscarReserva").value.toLowerCase().trim(), filtro=$("filtroReservaStatus").value, hoje=hojeISO(), quartos=quartosRepo.listar();let rs=reservasRepo.listar().slice().sort((a,b)=>(a.entrada||"").localeCompare(b.entrada||""));rs=rs.filter(r=>{const q=quartos.find(x=>x.id===r.quarto);const texto=[r.codigo,r.nome,r.email,q?.nome||r.quarto].join(" ").toLowerCase();const situacao=r.saida<=hoje?"finalizadas":r.entrada<=hoje&&r.saida>hoje?"hospedagem":"futuras";return texto.includes(termo)&&(filtro==="todas"||situacao===filtro);});lista.replaceChildren();if(!rs.length){lista.append(criarElemento("p","Nenhuma reserva encontrada para esse filtro.","estado-vazio"));return;}rs.forEach(r=>{const q=quartos.find(x=>x.id===r.quarto), total=(Number(r.noites)||0)*(Number(q?.preco)||({lume:350,deluxe:480,suite:650}[r.quarto]||0));const card=criarElemento("article",undefined,"registro-card"),info=criarElemento("div",undefined,"registro-info");const situacao=r.saida<=hoje?"Finalizada":r.entrada<=hoje?"Em hospedagem":"Próxima";info.append(criarElemento("strong",`${r.nome} · ${r.codigo}`),criarElemento("span",`${q?.nome||r.quarto} · ${r.entrada} até ${r.saida} · ${r.noites} noite(s)`),criarElemento("span",`${r.email||"Sem e-mail"} · ${r.telefone||"Sem telefone"} · ${r.hospedes||1} hóspede(s)`),criarElemento("span",`${moeda(total)} · ${situacao}`));const a=criarElemento("div",undefined,"acoes-registro");const cancelar=criarElemento("button","Cancelar reserva","botao-pequeno perigo");cancelar.type="button";cancelar.disabled=situacao==="Finalizada";cancelar.addEventListener("click",()=>{if(confirm(`Cancelar a reserva ${r.codigo}? A alteração também será refletida na página de reservas.`)){reservasRepo.cancelar(r.codigo);renderizarReservas();atualizarDashboard();}});a.append(cancelar);card.append(info,a);lista.append(card);});}
  $("buscarReserva").addEventListener("input",renderizarReservas);$("filtroReservaStatus").addEventListener("change",renderizarReservas);

  // RELATÓRIOS: filtros por data/quarto e exportação CSV
  function obterDadosRelatorio(){const inicio=$("relatorioInicio").value, fim=$("relatorioFim").value, quarto=$("relatorioQuarto").value;return reservasRepo.listar().filter(r=>(!inicio||r.entrada>=inicio)&&(!fim||r.entrada<=fim)&&(quarto==="todos"||r.quarto===quarto));}
  function renderizarRelatorios(){atualizarSelectsQuartos();const rs=obterDadosRelatorio(), qs=quartosRepo.listar(), receita=rs.reduce((s,r)=>s+(Number(r.noites)||0)*(Number(qs.find(q=>q.id===r.quarto)?.preco)||({lume:350,deluxe:480,suite:650}[r.quarto]||0)),0), noites=rs.reduce((s,r)=>s+(Number(r.noites)||0),0);$("relTotalReservas").textContent=rs.length;$("relReceita").textContent=moeda(receita);$("relNoites").textContent=noites;$("relTicket").textContent=moeda(rs.length?receita/rs.length:0);const contagem=qs.map(q=>({nome:q.nome,total:rs.filter(r=>r.quarto===q.id).length}));const lista=$("relatorioPorQuarto");lista.replaceChildren();contagem.forEach(x=>{const card=criarElemento("article",undefined,"registro-card");card.append(criarElemento("strong",x.nome),criarElemento("span",`${x.total} reserva(s) no período`));lista.append(card);});if(!contagem.length)lista.append(criarElemento("p","Cadastre acomodações para visualizar este resumo.","estado-vazio"));}
  ["relatorioInicio","relatorioFim","relatorioQuarto"].forEach(id=>$(id).addEventListener("change",renderizarRelatorios));$("limparFiltrosRelatorio").addEventListener("click",()=>{$("relatorioInicio").value="";$("relatorioFim").value="";$("relatorioQuarto").value="todos";renderizarRelatorios();});
  $("exportarRelatorio").addEventListener("click",()=>{const rs=obterDadosRelatorio(),qs=quartosRepo.listar();const linhas=[["Código","Hóspede","E-mail","Acomodação","Check-in","Check-out","Noites","Valor estimado"],...rs.map(r=>{const q=qs.find(x=>x.id===r.quarto);return [r.codigo,r.nome,r.email||"",q?.nome||r.quarto,r.entrada,r.saida,r.noites,(Number(r.noites)||0)*(Number(q?.preco)||({lume:350,deluxe:480,suite:650}[r.quarto]||0)).toFixed(2)];})];const csv="\uFEFF"+linhas.map(row=>row.map(v=>`"${String(v??"").replace(/"/g,'""')}"`).join(";")).join("\r\n");const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8;"}));const a=document.createElement("a");a.href=url;a.download="relatorio-lume-hotel.csv";a.click();URL.revokeObjectURL(url);});

  // Renderização inicial e sincronização dos módulos
  traduzirPainel();
  renderizarClientes();renderizarQuartos();renderizarFornecedores();renderizarReservas();atualizarSelectsQuartos();atualizarDashboard();renderizarRelatorios();
});